'use client'
import { NameLogo } from "@/features/common/components/NameLogo";
import { Page } from "@/features/common/components/Page";

export default function Home() {
  return (
    <Page transitionDuration={1000}>
    <article className="flex flex-col items-center">
      <NameLogo className="mb-8" height={"6vh"} />
    </article>
    </Page>
  );
}
