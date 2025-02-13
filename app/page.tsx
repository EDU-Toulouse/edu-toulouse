import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>Home</p>
      <Link href={"/admin"}>
        <Button>Admin Dashboard</Button>
      </Link>
    </main>
  );
}
