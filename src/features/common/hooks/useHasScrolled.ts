import React from "react";

export const useHasScrolled = () => {
    const [hasScrolled, setHasScrolled] = React.useState(false);

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

    return hasScrolled;
}