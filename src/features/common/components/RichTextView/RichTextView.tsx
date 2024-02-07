import styled from "styled-components"
import { RichTextViewProps } from "./RichTextViewProps"

const RichTextDiv = styled.div`
    & * {
        margin: 0;
        margin-bottom: 1.2rem;
    }

    & h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-top: 5rem;
    }

    & h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-top: 4rem;
    }

    & h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 3.5rem;
    }

    & a {
        color: #0070f3;
        text-decoration: underline;
    }
    `

export const RichTextView = (props: RichTextViewProps) => {
    const {
        innerHtml,
        className,
        ...other
    } = props

    return (
        <RichTextDiv {...other} className={`my-4 ${className ?? ""}`} dangerouslySetInnerHTML={{__html: innerHtml}} />
    )
}