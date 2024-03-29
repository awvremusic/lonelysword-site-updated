import { useSiteNavigation } from "../../hooks/useSiteNavigation";
import { NameLogo } from "../NameLogo";
import React from "react";
import DesktopNavigationProvider, { DesktopNavigationTab } from "../DesktopNavigation";
import { LONELYSWORD_BLUE } from "../../Constants";
import { useHasScrolled } from "../../hooks/useHasScrolled";

  export default function DesktopNavigationView() {
    const {
        navigateToHome,
        navigateToBio,
        navigateToMusic,
    } = useSiteNavigation();

    const hasScrolled = useHasScrolled();

    return (
      <nav className={`flex flex-col items-center ${!hasScrolled ? "" : "bg-white shadow-sm fixed top-0 left-0 right-0 z-10"} transition-al`}>
        <div className={`flex flex-row flex-start items-center gap-4 px-8 py-4 w-full`} style={{maxWidth: 1600}}>
          <NameLogo onClick={navigateToHome} className="mr-4 cursor-pointer"/>
            <DesktopNavigationProvider initialTab={0}>
              <DesktopNavigationTab label="Home" value={0} onClick={navigateToHome} indicatorStyle={{backgroundColor: LONELYSWORD_BLUE, height: 2}} className=" hover:text-blue-600"/>
              <DesktopNavigationTab label="Music" value={1} onClick={navigateToMusic} indicatorStyle={{backgroundColor: LONELYSWORD_BLUE, height: 2}} className=" hover:text-blue-600"/>
              <DesktopNavigationTab label="Bio" value={2} onClick={navigateToBio} indicatorStyle={{backgroundColor: LONELYSWORD_BLUE, height: 2}} className=" hover:text-blue-600"/>
              </DesktopNavigationProvider>
      </div>
      </nav>
    )
}