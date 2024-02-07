import { PageProps } from "./PageProps";
import { motion } from "framer-motion"

export const Page = ({
    children,
    easing = "ease-in-out",
    transitionDuration = 500,
    className = "",
    style = {}
}: PageProps) => {
    return (
        <motion.div
            className={`page-wrapper ${className}`} style={{...style, opacity: 0, transition: `opacity ${transitionDuration}ms ${easing}}`,}}
            animate={{opacity: 1}}
        >
            {children}
        </motion.div>
    )
}