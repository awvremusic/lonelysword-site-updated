export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    label: string;
   leftComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
    indicatorClassName?: string;
    indicatorStyle?: React.CSSProperties;
}