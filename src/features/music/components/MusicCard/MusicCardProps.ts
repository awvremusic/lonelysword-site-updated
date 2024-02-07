import React from "react";
import { DiscographyItem } from "../../businessObjects/DiscographyItem";

export interface MusicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    discography: DiscographyItem;
}