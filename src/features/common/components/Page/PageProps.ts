export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    transitionDuration?: number;
    easing?: "ease-in" | "ease-out" | "ease-in-out" | "linear";
}