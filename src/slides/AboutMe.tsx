import { Box, FlexBox, Grid, Heading, Image, Text } from "spectacle"
import me from "../assets/me.jpg"
import { NortalSlide } from "../components/NortalSlide"

export function AboutMe() {
    return (
        <>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">About me</Heading>
                </FlexBox>
                <Grid gridTemplateColumns="1fr 3fr" gridColumnGap={15}>
                    <Box>
                        <Box
                            backgroundColor="primary"
                            style={{ borderRadius: "100%", overflow: "hidden" }}
                            width={250}
                            height={250}
                        >
                            <Image src={me} width={335} />
                        </Box>
                        <Text
                            color="secondary"
                            fontSize={18}
                            textAlign="center"
                            style={{ width: 250, padding: 0, margin: "5px 0 0 0" }}
                        >
                            Software Developer
                            <br />
                            (or something like this)
                        </Text>
                    </Box>
                    <Box color="seconday">
                        <Text color="secondary">📍 Berlin</Text>
                        <Text color="secondary">💼 at Nortal since 2016</Text>
                        <Text color="secondary">💻 Frontend, and whatever is needed</Text>
                        {/* <Text color="secondary">🍺 Survived 2 "Aarne nights"</Text> */}
                    </Box>
                </Grid>
            </NortalSlide>
        </>
    )
}
