import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About EDU Toulouse",
};

export default function About() {
  return (
    <main>
      <h1 className="title">About</h1>
      <p>EDU is a platform for esport and digital universe related events.</p>
    </main>
  );
}
