"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function EmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    if (pathname.includes("gmail")) {
      setActiveTab("gmail");
    } else if (pathname.includes("outlook")) {
      setActiveTab("outlook");
    } else {
      setActiveTab("all");
    }
  }, [pathname]);

  return (
    <div className="flex w-full flex-col md:ml-20">
      <div>
        <div role="presentation" tabIndex={0}>
          <input
            accept="application/pdf,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,.doc,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx,.ppt,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,.xls"
            type="file"
            style={{ display: "none" }}
            tabIndex={-1}
          />
          <div className="mx-auto mt-16 w-full md:mt-0">
            <div className="max-h-screen md:overflow-y-auto">
              <div className="mx-auto max-w-5xl space-y-6 px-5 py-10">
                <div className="mx-auto w-full">
                  <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Your emails
                    </h2>
                    <p className="tracking-tight text-muted-foreground">
                      All your emails accessible in one place.
                    </p>
                  </div>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="h-[1px] w-full shrink-0 bg-border"
                ></div>
                <div
                  dir="ltr"
                  data-orientation="horizontal"
                  className="hidden w-fit items-center justify-start sm:flex"
                >
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground cursor-pointer"
                    tabIndex={0}
                    data-orientation="horizontal"
                    style={{ outline: "none" }}
                  >
                    <a
                      className={`flex inline-flex items-center justify-center space-x-2 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        activeTab === "all"
                          ? "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                          : "data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground"
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "all"}
                      aria-controls="radix-:R3fmq6vaba:-content-/dashboard/emails"
                      data-state={activeTab === "all" ? "active" : "inactive"}
                      id="radix-:R3fmq6vaba:-trigger-/dashboard/emails"
                      tabIndex={0}
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      onClick={() => router.push("/dashboard/email")}
                    >
                      <span>All inbox</span>
                    </a>
                    <a
                      className={`flex inline-flex items-center justify-center space-x-2 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        activeTab === "gmail"
                          ? "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                          : "data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground"
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "gmail"}
                      aria-controls="radix-:R3fmq6vaba:-content-/dashboard/emails/gmail"
                      data-state={activeTab === "gmail" ? "active" : "inactive"}
                      id="radix-:R3fmq6vaba:-trigger-/dashboard/emails/gmail"
                      tabIndex={-1}
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      onClick={() => router.push("/dashboard/email/gmail")}
                    >
                      <span>Gmail</span>
                    </a>
                    <a
                      className={`flex inline-flex items-center justify-center space-x-2 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        activeTab === "outlook"
                          ? "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                          : "data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground"
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === "outlook"}
                      aria-controls="radix-:R3fmq6vaba:-content-/dashboard/emails/outlook"
                      data-state={activeTab === "outlook" ? "active" : "inactive"}
                      id="radix-:R3fmq6vaba:-trigger-/dashboard/emails/outlook"
                      tabIndex={-1}
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                      onClick={() => router.push("/dashboard/email/outlook")}
                    >
                      <span>Outlook</span>
                    </a>
                  </div>
                </div>
                <button
                  className="ring-none inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 sm:hidden"
                  type="button"
                  id="radix-:R4fmq6vaba:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  All inbox
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="remixicon ml-2 h-4 w-4"
                  >
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </button>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
