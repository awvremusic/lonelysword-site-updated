'use client'
import { Footer, useIsMobile } from "@awvremusic/awvre-ui-web";
import { LONELYSWORD_BLUE } from "../../Constants";
import { useRouter } from 'next/navigation';
import React from "react";
import DesktopNavigation from "../DesktopNavigation";
import MobileNavigation from "../MobileNavigation";

export default function PageContainer({ children }: { children: React.ReactNode }) {
    const Router = useRouter();
    const isMobile = useIsMobile();
    const currentYear = new Date().getFullYear();

    if (isMobile) return (
        <div className="page-wrapper">
            <MobileNavigation />
                <main className="flex min-h-screen flex-col items-center justify-between p-4">
                {children}
    </main>
            <Footer
                text={`.lonelysword/AWVRE❤️ © ${currentYear}`}
                imageUrl="/images/lonelysword_text.svg"
                backgroundColor={LONELYSWORD_BLUE}
                animationDuration={250}
                className="text-white"
            />
        </div>
    );

    return (
        <div className="page-wrapper">
            
            <DesktopNavigation />
            <main className="flex min-h-screen flex-col items-center justify-between p-4">
            {children}
            </main>

        <Footer
            text={`.lonelysword/AWVRE❤️ © ${currentYear}`}
            imageUrl="/images/lonelysword_text.svg"
            backgroundColor={LONELYSWORD_BLUE}
            animationDuration={250}
            className="text-white"
        />
        </div>
    );
}