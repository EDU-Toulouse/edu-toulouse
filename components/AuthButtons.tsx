"use client";

import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href="/profile">
        <Image
          src={
            session.user?.image ??
            "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          }
          width={32}
          height={32}
          alt="Your Name"
        />
      </Link>
    );
  }

  return (
    <button className="text-white" onClick={() => signIn()}>
      Sign in
    </button>
  );
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
