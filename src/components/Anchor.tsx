import { ReactNode } from "react"

export type AnchorProps = {
    href: string
    children: ReactNode
}

export function Anchor({ children, href }: AnchorProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}
