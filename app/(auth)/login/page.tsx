"use client";

import { LoginForm } from "@/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "authenticated") {
    redirect("/");
  }

  return (
    <div className="flex min-h-svh w-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
