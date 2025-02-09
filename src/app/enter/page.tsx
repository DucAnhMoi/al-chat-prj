'use client'
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ElementType } from "react";
import GoogleIcon from "~/app/_components/Icon/AuthIcon/Google";
import Button from "~/app/_components/Button";
import Head from "next/head";
import AppleIcon from "~/app/_components/Icon/AuthIcon/Apple";
import FacebookIcon from "~/app/_components/Icon/AuthIcon/Facebook";
import ForemIcon from "~/app/_components/Icon/AuthIcon/Forem";
import GithubIcon from "~/app/_components/Icon/AuthIcon/Github";
import TwitterIcon from "~/app/_components/Icon/AuthIcon/Twitter";
import EmailIcon from "~/app/_components/Icon/AuthIcon/Email";
import Logo from "../_components/Logo";

type AuthButtonType = {
  id: number;
  title: string;
  icon: ElementType;
};

export default function EnterPage() {
  const searchParams = useSearchParams();
  const state = searchParams.get("state");
  const router = useRouter();

  const { data: session, status } = useSession();

  const handleSignIn = async (title: string) => {
    try {
      await signIn(title.toLowerCase());
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrivacyPolicy = () => {
    router.push("/privacy");
  };

  const handleTerms = () => {
    router.push("/terms");
  };

  const handleCodeOfConduct = () => {
    router.push("/code-of-conduct");
  };

  if (session) {
    router.push("/?signin=true");
    return null;
  }

  const authButton: AuthButtonType[] = [
    {
      id: 1,
      title: "with Apple",
      icon: AppleIcon,
    },
    {
      id: 2,
      title: "with Facebook",
      icon: FacebookIcon,
    },
    {
      id: 3,
      title: "with Forem",
      icon: ForemIcon,
    },
    {
      id: 4,
      title: "with GitHub",
      icon: GithubIcon,
    },
    {
      id: 5,
      title: "with Google",
      icon: GoogleIcon,
    },
    {
      id: 6,
      title: "with Twitter (X)",
      icon: TwitterIcon,
    },
    {
      id: 7,
      title: "with Email",
      icon: EmailIcon,
    },
  ];

  const hanldeRouteEnter = () => {
    router.push("/enter");
  };
  
  const hanldeRouteEnter1 = () => {
    router.push("/enter?state=new-user");
  };

  return (
    <div>
      <Head>
        <title>Welcome!</title>
      </Head>
      <div className="flex flex-col items-center p-12 pt-6">
        <div className="">
          <Logo/>
        </div>
        <h1 className="my-[18px] text-[30px] font-bold text-[#171717]">
          Join ProSights with us
        </h1>
        <div className="pb-4">
          {authButton.map((item) => (
            <Button
              key={item.id}
              type="secondary"
              className=""
              classNameProp="w-[544px] h-[50px] !p-3 mb-3 !text-[14px] !font-medium !text-[#171717] !border-[rgb(212, 212, 212)] !border hover:no-underline hover:!bg-[rgb(245,245,245)]"
              onClick={() => handleSignIn(item.title)}
            >
              <item.icon />
              <p className="flex w-[495px] justify-center">
                {state === "new-user" ? "Sign up" : "Continue"} {item.title}
              </p>
            </Button>
          ))}
        </div>
        <div className="w-[544px] px-[64px] text-center text-[14px] italic text-text2">
          By signing up, you are agreeing to our
          <a
            onClick={handlePrivacyPolicy}
            className="inline cursor-pointer text-[#3b49df]"
          >
            {" "}
            privacy policy
          </a>
          ,{" "}
          <a
            onClick={handleTerms}
            className="inline cursor-pointer text-[#3b49df]"
          >
            terms of use
          </a>{" "}
          and{" "}
          <a
            onClick={handleCodeOfConduct}
            className="inline cursor-pointer text-[#3b49df]"
          >
            code of conduct
          </a>
          .
        </div>
        {state === "new-user" ? (
          <div className="mt-12 text-center">
            Already have an account?{" "}
            <a
              onClick={hanldeRouteEnter}
              className="cursor-pointer text-[#3b49df]"
            >
              Log in
            </a>
            .
          </div>
        ) : (
          <div className="mt-12 text-center">
            New to DEV Community?{" "}
            <a
              onClick={hanldeRouteEnter1}
              className="cursor-pointer text-[#3b49df]"
            >
              Create account
            </a>
            .
          </div>
        )}
      </div>
    </div>
  );
}