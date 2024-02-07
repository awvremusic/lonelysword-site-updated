import { Typography } from "../Typography";
import { useDesktopNavigation } from "./DesktopNavigationContext";
import { TabProps as DesktopNavigationTabProps } from "./TabProps";

export const DesktopNavigationTab = (props: DesktopNavigationTabProps) => {
    const { label, value, onClick, className, leftComponent, rightComponent, indicatorClassName, indicatorStyle, ...other} = props;
    const { onTabPress, activeTab } = useDesktopNavigation();

    const handleClick = (event: any) => {
        if (onClick) {
            onClick(event);
        }

        onTabPress(value);
    }

    return (
        <div
        {...other}
            className={`desktop-navigation-tab cursor-pointer flex flex-row gap-2 flex-nowrap justify-start items-center relative p-2 ${className ?? ""}`}
            onClick={handleClick}
            >
                {leftComponent}
            <Typography variant="body2" className="text-small">{label}</Typography>
            {rightComponent}
            <span className={`desktop-navigation-tab-indicator absolute bottom-0 left-0 ${activeTab === value ? "w-full" : "w-0"} ${indicatorClassName ? indicatorClassName : `h-1 rounded-sm bg-blue-400 `} transition-all`} style={indicatorStyle}/>
        </div>
    );
}