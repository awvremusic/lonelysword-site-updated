import React from "react";
import { useSiteNavigation } from "../../hooks/useSiteNavigation";
import { NameLogo } from "../NameLogo";
import { Divider, Drawer, Menu, Typography } from "@mui/material";
import { BioLabel } from "../BioLabel";
import { ExternalLink } from "../ExternalLink";
import { HomeLabel } from "../HomeLabel";
import { MusicLabel } from "../MusicLabel";
import { MenuOutlined } from "@mui/icons-material";

const MobileNavigation = () => {
    const {
        navigateToHome,
        navigateToBio,
        navigateToMusic,
    } = useSiteNavigation();
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
            <MenuOutlined
                onClick={() => setIsOpen(true)}
            />
        </div>
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            anchor="right"
            sx={{
                bgcolor: "#0000005",
            }}
            PaperProps={{
                sx: {
                    padding: "2em",
                    borderTopLeftRadius: "1em",
                    borderBottomLeftRadius: "1em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",

                }
            }}
        >
            <NameLogo height={"1.5em"} className="mx-16 mb-2 mt-8"/>
            <Typography className="text-center my-3">Previous project of <ExternalLink href="https://quick.awvremusic.com" className=" underline">AWVRE</ExternalLink></Typography>
            <div>
            <Divider/>
            <div
                className="flex flex-col justify-start pl-8 mt-8"
            >
                <span
                    className="cursor-pointer text-xl mb-8 flex flex-row items-center"
                    onClick={() => onDrawerItemPress("home")}
                ><HomeLabel /></span>
                <span
                    className="cursor-pointer text-xl mb-8 flex flex-row items-center"
                    onClick={() => onDrawerItemPress("music")}
                ><MusicLabel /></span>
                <span
                    className="cursor-pointer text-xl mb-8 flex flex-row items-center"
                    onClick={() => onDrawerItemPress("bio")}
                ><BioLabel /></span>
            </div>
                </div>
        </Drawer>
        </nav>
    )
}

export default MobileNavigation;