import { createContext, useContext, useState } from "react";
import { TabProps } from "./TabProps";

type DesktopNavigationProps = {
    children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;
    initialTab?: number | string;
}

type DesktopNavigationContextType = {
    onTabPress: (value: number | string) => void;
    activeTab: number | string;
}

const desktopNavigationContext = createContext<DesktopNavigationContextType | undefined>(undefined);

export const DesktopNavigationProvider = ({ children, initialTab }: DesktopNavigationProps) => {
    const [activeTab, setActiveTab] = useState<string | number>(initialTab ?? 0);

    const onTabPress = (value: number | string) => {
        setActiveTab(value);
    }

    return (
        <desktopNavigationContext.Provider value={{ onTabPress, activeTab }}>
                {children}
        </desktopNavigationContext.Provider>
    );
};

export const useDesktopNavigation = () => {
    const context = useContext(desktopNavigationContext);
    if (!context) {
        throw new Error("useDesktopNavigation must be used within a DesktopNavigationProvider");
    }
    return context;
}