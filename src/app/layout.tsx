import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import ClientSessionProvider from "./_components/ClientSessionProvider";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ClientSessionProvider session={null}>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
