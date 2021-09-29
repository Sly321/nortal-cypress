import { Box, Deck, FlexBox, FullScreen, Heading, Image, Progress } from "spectacle"
import { NortalSlide } from "./components/NortalSlide"
import { AboutMe } from "./slides/AboutMe"
import { DataAndMocking } from "./slides/DataAndMocking"
import { Examples } from "./slides/Examples"
import { WhatToTest } from "./slides/WhatToTest"
import { WritingTests } from "./slides/WritingTests"

import nortalLogo from "./assets/nortal_logo.png"

const theme = {
    colors: {
        color: "#53565A",
        primary: "#009639",
        secondary: "#2D2C30",
        granite: "#53565A",
        ash: "#AFB9BF",
        secondary_burgundy: "#741349",
        secondary_imperial: "#523370",
        background: "white",
    },
    fontSizes: {
        header: "64px",
        paragraph: "28px",
    },
    space: [4, 24, 32],
}

const template = () => (
    <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
        <Box padding="0 1em">
            <Image src={nortalLogo} height={40} />
            <FullScreen color={""} size={0} />
        </Box>
        <Box padding="1em">
            <Progress color={"#523370"} size={10} />
        </Box>
    </FlexBox>
)

function App() {
    return (
        <Deck theme={theme} template={template}>
            <NortalSlide background="main">
                <FlexBox>
                    <Heading color="primary">Introducing Cypress</Heading>
                </FlexBox>
            </NortalSlide>
            <AboutMe />
            <WhatToTest />
            <DataAndMocking />
            <WritingTests />
            <Examples />
        </Deck>
    )
}

export default App
