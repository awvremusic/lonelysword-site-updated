import { PersonOutlined } from "@mui/icons-material";
import { LinkLabel } from "../LinkLabel";

export const BioLabel = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <LinkLabel
        label="Bio"
        icon={<PersonOutlined />}
        {...props}
    />
)