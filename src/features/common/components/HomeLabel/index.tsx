import { HomeOutlined } from "@mui/icons-material";
import { LinkLabel } from "../LinkLabel";

export const HomeLabel = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <LinkLabel
        label="Home"
        icon={<HomeOutlined />}
        {...props}
    />
)