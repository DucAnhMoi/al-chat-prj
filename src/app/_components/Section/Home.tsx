"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Icon1 from "../Icon/IconHome/Icon1";
import Icon2 from "../Icon/IconHome/Icon2";
import Icon3 from "../Icon/IconHome/Icon3";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/enter");
    }
  }, [session, status, router]);

  return (
    <div className="flex w-full flex-col md:ml-20">
      <div className="bg-background fixed left-0 right-0 top-0 z-50 flex h-16 justify-between border-b p-5 opacity-100 shadow md:hidden md:opacity-0">
        <Icon1 />
        <a
          className="flex w-fit items-center justify-end"
          onClick={() => router.push("/")}
        >
          <img
            alt="logo"
            loading="lazy"
            width="1252"
            height="300"
            decoding="async"
            data-nimg="1"
            className="hidden h-full w-fit dark:block"
            style={{ color: "transparent", objectFit: "contain" }}
            srcSet="/_next/image?url=%2FfullLogoWhite.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2FfullLogoWhite.png&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2FfullLogoWhite.png&amp;w=3840&amp;q=75"
          />
          <img
            alt="logo"
            loading="lazy"
            width="1252"
            height="300"
            decoding="async"
            data-nimg="1"
            className="h-full w-fit dark:hidden"
            style={{ color: "transparent", objectFit: "contain" }}
            srcSet="/_next/image?url=%2FfullLogoBlack.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2FfullLogoBlack.png&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2FfullLogoBlack.png&amp;w=3840&amp;q=75"
          />
        </a>
      </div>
      <div>
        <div role="presentation" tabIndex={0}>
          <input
            accept="application/pdf,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,.doc,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,.ppt,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,.xls"
            type="file"
            style={{ display: "none" }}
            tabIndex={-1}
          />
          <div className="mx-auto mt-16 w-full md:mt-0" />
          <div className="relative -mt-16 h-screen tracking-tight md:mt-0">
            <div
              className="inset-0 -top-2 transition-all delay-500 md:absolute"
              style={{ opacity: 1 }}
            >
              <img
                src="https://dev.prosights.co/backgroundPattern.svg"
                className="fixed inset-0 h-full w-full object-cover"
              />
            </div>
            <div
              className="fixed left-0 right-0 top-[30%] mx-auto w-full max-w-md p-2 sm:absolute sm:pb-5 md:max-w-3xl"
              style={{ opacity: 1 }}
            >
              <div
                className="inset-0 flex flex-col items-center justify-center gap-2"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-gradient-to-r from-[#009AFF] to-[#B84CEB] bg-clip-text text-center text-2xl font-bold text-transparent">
                  Good morning
                </div>
                <div className="text-lg font-light tracking-tight">
                  What can I answer for you today?
                </div>
              </div>
              <div className="relative mx-auto mt-6 max-w-3xl">
                <div className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring relative z-30 flex w-full items-center gap-3 rounded-[27px] border px-3 py-2 text-base tracking-tight shadow-sm transition-all focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50">
                  <button className="ring-none text-foreground/50 hover:bg-accent hover:text-foreground absolute right-3 z-40 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-2 py-2 text-sm font-medium outline-none transition-colors disabled:pointer-events-none disabled:opacity-50">
                    <Icon2/>
                  </button>
                  <button className="ring-none text-foreground/50 hover:bg-accent hover:text-foreground inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-2 py-2 text-sm font-medium outline-none transition-colors disabled:pointer-events-none disabled:opacity-50">
                    <Icon3/>
                  </button>
                  <input
                    placeholder="Type a message..."
                    className="relative w-full self-center border-none bg-transparent tracking-tight outline-none ring-0"
                    value=""
                  />
                </div>
              </div>
              <div
                className="mt-10 flex flex-wrap justify-center gap-8"
                style={{ opacity: 1 }}
              >
                <div className="flex flex-col items-center gap-3">
                <a className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs text-[20px] px-4 py-3 cursor-pointer" onClick={() => router.push("/dashboard/chat")}>Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
