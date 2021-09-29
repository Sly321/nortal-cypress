import { Appear, Box, CodePane, FlexBox, Heading, Link, Notes, Stepper, Text } from "spectacle"
import { Anchor } from "../components/Anchor"
import { NortalSlide } from "../components/NortalSlide"

const htmlExample = `<html>
    <div class="container">
	    <label for="name">Name</label>
		<input id="name" type="text"/>
	    <label for="job">Jobtitle</label>
		<input id="job" type="text"/>
	</div>
</html>`

const codeExampleBasicStructure = `describe("Creation of ToDo's", () => {
    before(() => { /* one time run before tests in this block are executed */ })

    beforeEach(() => { // every time, before a single test
        // delete data, create a clean test ground
    })

    it("should contain one open todo in the list of todo's", () => {
        // test
    })

    afterEach(() => { /* every time, after a single test */ })

    after(() => { /* one time run after all tests in this block */ })
})`

const codeExamplePromise = `it("testcase", () => {
    cy.visit("/").get("input").then(input => {
        expect(input.val()).to.be("1")
    })
})`

const codeExamplePromiseNot = `it("testcase", async () => {
    const input = await cy.visit("/").get("input")
    expect(input.val()).to.be("1")
})`

const folderStructure = `src/
├─ fixtures/     (static files, test data, jwt secrets, ...)
├─ integration/  (tests go here)
├─ plugins/      (subscribe into the process of cypress and do something)
└─ support/      (everything that helps writing test code, extending the cypress api)`

const codeSteps = [
    {
        title: "I have seen things...",
        code: `cy.get("#root > div.sc-bdVaJa.dgkzCi > div:nth-child(3) > pre > code > span:nth-child(5) > span:nth-child(9)")`,
    },
    {
        title: "Install",
        code: `npm install --save-dev @testing-library/cypress`,
        children: (
            <Link
                href="https://testing-library.com/docs/cypress-testing-library/intro/"
                color="granite"
                fontSize={20}
            >
                @testing-library/cypress documentation
            </Link>
        ),
    },
    {
        title: "Cleaner syntax and more user oriented",
        code: `cy.findByLabelText("Jobtitle").type("Software Developer")`,
    },
]

export function WritingTests() {
    return (
        <>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">Writing Tests</Heading>
                </FlexBox>
                <FlexBox>
                    <Text color="secondary">
                        Standard .js/.ts test structure (
                        <Anchor href="https://mochajs.org/">☕ mocha.js</Anchor>)
                    </Text>
                </FlexBox>
                <CodePane
                    language="javascript"
                    showLineNumbers={false}
                    highlightRanges={
                        [
                            [2, 6],
                            [12, 14],
                            [8, 10],
                        ] as any
                    }
                >
                    {codeExampleBasicStructure}
                </CodePane>
                <Notes>
                    I believe, Cypress uses mocha under the hood. So the test structure is inherited from
                    there.
                </Notes>
            </NortalSlide>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">Writing Tests</Heading>
                </FlexBox>
                <FlexBox>
                    <Text color="secondary">Promise like, but not promise</Text>
                </FlexBox>{" "}
                <Appear>
                    <Text>✅</Text>
                    <CodePane language="javascript" showLineNumbers={false}>
                        {codeExamplePromise}
                    </CodePane>
                </Appear>
                <Appear>
                    <Text>❌</Text>
                    <CodePane language="javascript" showLineNumbers={false}>
                        {codeExamplePromiseNot}
                    </CodePane>
                </Appear>
                <Notes>
                    The Web works mostly async, that's why cypress is working async by default. In alot of
                    cases, E2E testing is a wait and check if something is present game. But Cypress waits by
                    default. This also creates some trouble. Cypress has a syntax that contains known keywords
                    like then. But you will have a hard time when you try go arround that syntax and reuse
                    some cypress returns as variable.
                </Notes>
            </NortalSlide>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">Writing Tests</Heading>
                </FlexBox>
                <CodePane language="html" showLineNumbers={false} highlightRanges={[3, 6] as any}>
                    {htmlExample}
                </CodePane>
                <Box height={5} />
                <Stepper values={codeSteps}>
                    {(value: any = {}) => (
                        <>
                            <Text color="secondary">{value.title}</Text>
                            <CodePane language="javascript" showLineNumbers={false}>
                                {value.code}
                            </CodePane>
                            {value.children}
                        </>
                    )}
                </Stepper>
                <Notes>Assume we have this block of html...</Notes>
            </NortalSlide>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">Cypress Folder Structure</Heading>
                </FlexBox>
                <CodePane language="" showLineNumbers={false} highlightRanges={[2, 3, 4, 5] as any}>
                    {folderStructure}
                </CodePane>
                <Notes>Assume we have this block of html...</Notes>
            </NortalSlide>
        </>
    )
}
