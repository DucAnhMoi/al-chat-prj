"use client";
import Logo from "../Logo";
import ChatIcon from "../Icon/SideBarLeft/ChatIcon";
import EmailIcon from "../Icon/SideBarLeft/EmailIcon";
import ExtensionIcon from "../Icon/SideBarLeft/ExtensionIcon";
import QuestionMaskIcon from "../Icon/SideBarLeft/QuestionMaskIcon";
import LightIcon from "../Icon/SideBarLeft/LightIcon";
import DarkIcon from "../Icon/SideBarLeft/DarkIcon";
import { FC } from "react";
import { Session } from "next-auth";
import ArrowIcon from "../Icon/SideBarLeft/ArrowIcon";
import { useRouter } from "next/navigation";

const SideBarLeft: FC<{ session: Session | null }> = ({ session }) => {
  const router = useRouter()
  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 hidden w-20 md:flex">
      <div className="z-20 flex h-full w-full flex-col gap-16 bg-accent px-2 py-5">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex flex-1 flex-col gap-5 text-sm tracking-tight">
          <a
            className="ring-none inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-foreground/50 outline-none transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            data-state="closed"
            onClick={() => router.push("/dashboard/chat")}
          >
            <div style={{ opacity: 1 }}>
              <ChatIcon />
              <span className="sr-only">Chat</span>
            </div>
          </a>
          {/* <a
            className="ring-none text-foreground/50 hover:bg-accent hover:text-foreground inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium outline-none transition-colors disabled:pointer-events-none disabled:opacity-50"
            data-state="closed"
            href="/dashboard/search"
          >
            <div style={{ opacity: 1 }}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="remixicon h-6 w-6"
              >
                <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13.529 14.4464L15.7395 16.6569L17.1537 15.2426L14.9432 13.0322C15.8492 11.4983 15.6432 9.48951 14.3252 8.17157C12.7631 6.60948 10.2305 6.60948 8.66839 8.17157C7.1063 9.73367 7.1063 12.2663 8.66839 13.8284C9.98633 15.1464 11.9951 15.3524 13.529 14.4464ZM12.911 12.4142C12.13 13.1953 10.8637 13.1953 10.0826 12.4142C9.30156 11.6332 9.30156 10.3668 10.0826 9.58579C10.8637 8.80474 12.13 8.80474 12.911 9.58579C13.6921 10.3668 13.6921 11.6332 12.911 12.4142Z"></path>
              </svg>
              <span className="sr-only">Internal Search</span>
            </div>
          </a> */}
          {/* <a
            className="ring-none text-foreground/50 hover:bg-accent hover:text-foreground inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium outline-none transition-colors disabled:pointer-events-none disabled:opacity-50"
            data-state="closed"
            href="/dashboard/files"
          >
            <div style={{ opacity: 1 }}>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="remixicon h-6 w-6"
              >
                <path d="M3 9H9C9.55228 9 10 8.55228 10 8V2H20.0017C20.5531 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5511 3 20.9925V9ZM3 7L8 2.00318V7H3Z"></path>
              </svg>
              <span className="sr-only">Your Files</span>
            </div>
          </a> */}
          <a
            className="ring-none inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-foreground/50 outline-none transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            data-state="closed"
            onClick={() => router.push("/dashboard/email")}
          >
            <div style={{ opacity: 1 }}>
              <EmailIcon />
              <span className="sr-only">Your Emails</span>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-between gap-5">
          <button
            className="ring-none inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-foreground/50 outline-none transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            data-state="closed"
          >
            <kbd className="pointer-events-none flex select-none items-center gap-1 rounded border bg-muted px-1.5 py-0.5 opacity-100">
              ⌘+K
            </kbd>
          </button>
          <button
            className="ring-none inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-foreground/50 outline-none transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R5l6vaba:"
            data-state="closed"
          >
            <ExtensionIcon />
          </button>
          <button
            className="ring-none inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-foreground/50 outline-none transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R7l6vaba:"
            data-state="closed"
          >
            <QuestionMaskIcon />
          </button>
          <button
            className="ring-none inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-foreground/50 outline-none transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
            type="button"
            id="radix-:R9l6vaba:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <LightIcon />
            <DarkIcon />
            <span className="sr-only">Toggle theme</span>
          </button>
          <div>
            <img
              alt="user-avatar"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rbl6vaba:"
              data-state="closed"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="size-10 min-h-10 min-w-10 rounded-full p-0.5 ring-2 ring-blue-400 transition-all delay-500"
              style={{ color: "transparent" }}
              src={session?.user.image ?? ""}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute -right-4 top-20 z-50 rounded-full bg-transparent backdrop-blur-xl transition-all"
          style={{ transform: "none" }}
        >
          <ArrowIcon/>
        </div>
      </div>
    </div>
  );
}

export default SideBarLeft;