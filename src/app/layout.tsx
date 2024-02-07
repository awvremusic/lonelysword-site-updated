import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import PageContainer from "@/features/common/components/PageContainer";
import AppProviders from "@/features/common/components/AppProviders";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metaData: Metadata = {
  title: ".lonelysword - Home",
  description: "Official site for .lonelysword, a previous project of AWVRE.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProviders>
      <html lang="en">
        <body className={notoSansJP.className}>
          <PageContainer>{children}</PageContainer>
        </body>
      </html>
    </AppProviders>
  );
}
