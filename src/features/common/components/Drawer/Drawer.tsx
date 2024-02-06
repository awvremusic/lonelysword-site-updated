import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DrawerProps } from "./DrawerProps";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Drawer = (props: DrawerProps) => {
    const {
        children,
        anchor = "right",
        open,
        onClose,
        className,
        style,
        overlayStyle,
        ...other
    } = props;

    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (containerRef.current) {
            if (open) {
                containerRef.current.style.width = "80%";
            } else {
                containerRef.current.style.width = "0%";
            }
        }
    }, [open]);

    return (
        <div
            className={`drawer-container fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex flex-row-reverse transition-all`}
            style={{...overlayStyle, visibility : open ? "visible" : "hidden"}}
            {...other}
        >
            <div ref={containerRef} className={`drawer-content bg-white h-full ml-12 ${className ?? ""} transition-all`} style={style}>
                <div className="flex flex-row-reverse">
                    <FontAwesomeIcon
                        icon={fas.faClose}
                        className="fa-solid fa-xl"
                        onClick={onClose}
                    />
                </div>
                {children}
            </div>
        </div>
    );
}