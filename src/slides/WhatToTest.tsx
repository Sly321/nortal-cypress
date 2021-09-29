import { Box, FlexBox, Grid, Heading, Image, ListItem, Stepper, Text, UnorderedList } from "spectacle"
import testpyramid from "../assets/test-pyramid.png"
import { NortalSlide } from "../components/NortalSlide"

export function WhatToTest() {
    return (
        <>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">E2E Testing</Heading>
                </FlexBox>
                <Grid gridTemplateColumns="1fr 3fr" gridColumnGap={15}>
                    <Box>
                        <Box width={450} height={240}>
                            <Image src={testpyramid} width={450} />
                        </Box>
                        <Text
                            color="secondary"
                            fontSize={18}
                            textAlign="center"
                            style={{ width: 480, padding: 0, margin: "5px 0 0 0" }}
                        >
                            Testing pyramid
                        </Text>
                    </Box>
                    <Stepper values={[1, 2]}>
                        {(_, step) =>
                            step === 1 ? (
                                <Box color="secondary">
                                    <Heading fontSize={38}>Downsides</Heading>
                                    <UnorderedList>
                                        <ListItem color="secondary">High cost</ListItem>
                                        <ListItem color="secondary">High break rate</ListItem>
                                        <ListItem color="secondary">Can get complex</ListItem>
                                    </UnorderedList>
                                </Box>
                            ) : (
                                <Box color="secondary">
                                    <Heading fontSize={38}>Upsides</Heading>
                                    <UnorderedList>
                                        <ListItem color="secondary">Resilience</ListItem>
                                        <ListItem color="secondary">Communication test</ListItem>
                                        <ListItem color="secondary">Find bugs before QA pokes you</ListItem>
                                    </UnorderedList>
                                </Box>
                            )
                        }
                    </Stepper>
                </Grid>
            </NortalSlide>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">What to test?</Heading>
                </FlexBox>
                <Grid gridTemplateColumns="2fr 2fr" gridColumnGap={15}>
                    <Stepper values={[""]}>
                        {() => (
                            <Box color="secondary">
                                <Heading>Do's</Heading>
                                <Text color="secondary">✅ Processes</Text>
                                <Text color="secondary">✅ Accessibility</Text>
                            </Box>
                        )}
                    </Stepper>
                    <Stepper values={[""]}>
                        {() => (
                            <Box color="secondary">
                                <Heading>Don'ts</Heading>
                                <Text color="secondary">❌ Component behauviors</Text>
                                <Text color="secondary">❌ CSS Classes, Styles</Text>
                                <Text color="secondary">❌ To many concrete values</Text>
                            </Box>
                        )}
                    </Stepper>
                </Grid>
            </NortalSlide>
        </>
    )
}
