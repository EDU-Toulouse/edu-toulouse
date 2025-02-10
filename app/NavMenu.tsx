import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { SignInButton, SignOutButton } from "@/components/AuthButtons";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          className="color-white"
          src="/globe.svg"
          alt="EDU logo"
          width={50}
          height={50}
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/events"}>Events</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <ul className={styles.links}>
        <SignInButton />
        <SignOutButton />
      </ul>
    </nav>
  );
}
