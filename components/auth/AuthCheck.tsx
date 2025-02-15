"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "authenticated") {
    return <>{children}</>;
  } else if (status === "loading") {
    return <div>Loading...</div>;
  } else {
    redirect("/login");
  }
}
