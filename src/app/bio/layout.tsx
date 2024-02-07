import { Metadata } from "next"

export const metaData: Metadata = {
    title: "AWVRE Music - Bio",
    description: "AWVRE Music - Bio",
}    

export default function BioLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bio-wrapper">
            {children}
        </div>
    )
}