'use client'
import { NameLogo } from "@/features/common/components/NameLogo";

export default function Home() {
  return (
    <article className="flex flex-col items-center">
      <NameLogo className="mb-8" height={"6vh"} />
    </article>
  );
}
