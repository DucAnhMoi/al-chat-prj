'use client'
import { useSession } from "next-auth/react";
import SideBarLeft from "../_components/Section/SideBarLeftSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../_components/Loading";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "authenticated") {
        return;
      }
      if (status === "unauthenticated") {
        router.push("/enter");
      }
    }, [status, router]);

    if (status === "loading") {
      return <Loading />;
    }

    return (
        <div className="relative mx-auto flex h-full flex-col bg-background md:h-screen">
            <div className="flex h-full w-full flex-1">
                <SideBarLeft session={session}/>
                {children}
            </div>
        </div>
    );
  }
