import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

import { env } from "~/env";
import { db } from "~/server/db";
import { users, accounts, sessions, verificationTokens } from "~/server/db/schema";
import { and, eq } from "drizzle-orm";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn && account) {
        try {
          if (!user.email) {
            throw new Error('User email is missing');
          }

          const existingUser = await db
            .select()
            .from(users)
            .where(eq(users.email, user.email))
            .execute();

          if (existingUser.length > 0) {
            await db
              .update(users)
              .set({
                name: user.name,
                image: user.image,
              })
              .where(eq(users.email, user.email))
              .execute();
            return true;
          } else {
            const newUser = await db.insert(users).values({
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
            }).returning().execute();
            if (newUser[0]) {
              await db.insert(accounts).values({
                userId: newUser[0].id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: account.type === "credentials" ? "oauth" : account.type, // Adjust type if necessary
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
              }).execute();
            }
            return true;
          }
        } catch (error) {
          console.error('Error during signIn callback:', error);
          return false;
        }
      } else {
        return false;
      }
    },
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          image: user.image,
        },
      };
    },
  }
};

export const getServerAuthSession = () => getServerSession(authOptions);
