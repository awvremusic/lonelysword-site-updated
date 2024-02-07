'use client'

import { NameLogo } from "@/features/common/components/NameLogo";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "AWVRE Music - Home",
  description: "AWVRE Music - Home",
}

export default function Home() {
  return (
    <article className="flex flex-col items-center">
      <NameLogo className="mb-8" />
    </article>
  );
}
