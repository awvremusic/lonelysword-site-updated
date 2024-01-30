import { MusicNoteOutlined } from "@mui/icons-material";
import { LinkLabel } from "../LinkLabel";

export const MusicLabel = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <LinkLabel
        label="Music"
        icon={<MusicNoteOutlined />}
        {...props}
    />
)