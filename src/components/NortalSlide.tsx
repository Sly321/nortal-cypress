import { ReactNode } from "react"
import { Slide } from "spectacle"

import backgroundImage from "../assets/nortal-bg-main.png"
import contentBackgroundImage from "../assets/nortal-bg-content.png"

export type NortalSlideProps = {
	children: ReactNode
	background?: "main" | "content"
}

export function NortalSlide({ children, background = "content" }: NortalSlideProps) {
	return <Slide backgroundColor="background" backgroundImage={`url(${background === "main" ? backgroundImage : contentBackgroundImage})`}>
		{children}
	</Slide>
}