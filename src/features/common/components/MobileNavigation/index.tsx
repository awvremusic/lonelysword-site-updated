import React from "react";
import { useSiteNavigation } from "../../hooks/useSiteNavigation";
import { NameLogo } from "../NameLogo";
import { ExternalLink } from "../ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "../Drawer";
import { Divider } from "../Divider";
import { Typography } from "../Typography";
import { useHasScrolled } from "../../hooks/useHasScrolled";

const MobileNavigation = () => {
    const {
        navigateToHome,
        navigateToBio,
        navigateToMusic,
    } = useSiteNavigation();
    const [isOpen, setIsOpen] = React.useState(false);

    const hasScrolled = useHasScrolled();

    const onDrawerItemPress = (value: "home" | "music" | "bio") => {
        switch (value) {
            case "home":
                navigateToHome();
                break;
            case "music":
                navigateToMusic();
                break;
            case "bio":
                navigateToBio();
                break;
            default:
                navigateToHome();
                break;
        }
        setIsOpen(false);
    }
    
    return (
        <nav className={`w-full ${!hasScrolled ? "" : "bg-white shadow-sm fixed top-0 left-0 right-0 z-10 transition-all" }`}>
        <div className="flex flex-row justify-between items-center p-8">
            <NameLogo
                
            />
            <FontAwesomeIcon
                icon={fas.faBars}
                className="fa-solid fa-xl"
                onClick={() => setIsOpen(true)}
            />
        </div>
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            anchor="right"
            style={{
                padding: "2em",
                borderTopLeftRadius: "1em",
                borderBottomLeftRadius: "1em",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
            }}
        >
            <NameLogo height={"1.5em"} className="mx-16 mb-2 mt-8 mr-auto ml-auto"/>
            <Typography className="text-center my-3" variant="subtitle1">Previous project of <ExternalLink href="https://quick.awvremusic.com" className=" underline">AWVRE</ExternalLink></Typography>
            <div>
            <Divider />
            <div
                className="flex flex-col justify-start pl-8 mt-8"
            >
                <span
                    className="cursor-pointer text-xl mb-8 flex flex-row items-center"
                    onClick={() => onDrawerItemPress("home")}
                >Home</span>
                <span
                    className="cursor-pointer text-xl mb-8 flex flex-row items-center"
                    onClick={() => onDrawerItemPress("music")}
                >Music</span>
                <span
                    className="cursor-pointer text-xl mb-8 flex flex-row items-center"
                    onClick={() => onDrawerItemPress("bio")}
                >Bio</span>
            </div>
                </div>
        </Drawer>
        </nav>
    )
}

export default MobileNavigation;