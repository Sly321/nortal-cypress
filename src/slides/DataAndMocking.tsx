import { Appear, CodePane, FlexBox, Heading, Notes, Text } from "spectacle"
import { Anchor } from "../components/Anchor"
import { NortalSlide } from "../components/NortalSlide"
import { Step } from "../components/Step"

const fakerExampleCode = `const data = {
	id: faker.datatype.uuid(),
	name: faker.random.words(2),
	status: faker.helpers.randomize([
		"OPEN",
		"DONE",
		"SCHEDULED",
	]),
	bankAccount: faker.finance.iban()
}`

export function DataAndMocking() {
    return (
        <>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">Data</Heading>
                </FlexBox>
                <Step>
                    <FlexBox>
                        <Text color="secondary" style={{ marginBottom: 60 }}>
                            🧪 Choose your Poison
                        </Text>
                    </FlexBox>
                </Step>
                <Step>
                    <Text color="secondary">🥠 Create data in the GUI with cypress</Text>
                    <Text color="secondary">🔧 Reuse the existing Rest/GQL/SOAP API</Text>
                    <Text color="secondary">👨‍💻 Using SQL to directly write data into the database</Text>
                    <Text color="secondary">☕ Use 3rd Party libraries</Text>
                    <Text color="granite" fontSize={20} style={{ marginLeft: 80 }}>
                        <Anchor href="https://www.prisma.io/">prisma</Anchor>
                        {", "}
                        <Anchor href="https://postgrest.org/en/v8.0/">postgrest</Anchor>
                        {", ..."}
                    </Text>
                </Step>
                <Notes>
                    The application that you test, contains probably a backend service, some persistence layer
                    and obviously a graphical user interface. Normally it would be a very good practice to
                    create data from the GUI and reuse this data in another test. This brings up another layer
                    of problems, ofcourse. When the creation of data fails, everyhing fails. Other possible
                    options are depending on personal preference and tech stack. Every approach has it's up's
                    and down's.
                </Notes>
            </NortalSlide>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">Data Creation</Heading>
                </FlexBox>
                <Step>
                    <FlexBox>
                        <Text color="secondary" style={{ marginBottom: 60 }}>
                            🧪 Choose <span style={{ textDecoration: "line-through" }}>your Poison</span>{" "}
                            <Anchor href="https://github.com/marak/Faker.js/">faker.js</Anchor>
                        </Text>
                    </FlexBox>
                </Step>
                <Step>
                    <Text color="secondary">Huge library with reliable fake data.</Text>
                    <CodePane language="javascript" showLineNumbers={false}>
                        {fakerExampleCode}
                    </CodePane>
                </Step>
            </NortalSlide>
            <NortalSlide>
                <FlexBox>
                    <Heading color="primary">Mocking</Heading>
                </FlexBox>
                <FlexBox>
                    <Text color="secondary" fontSize={24} style={{ textDecoration: "underline" }}>
                        You can only mock requests that are send from the client side.
                    </Text>
                </FlexBox>
                <Appear>
                    <Text color="secondary">✅ External services</Text>
                    <Text color="secondary">✅ Creating an error</Text>
                    <Text color="granite" fontSize={20} style={{ marginLeft: 80 }}>
                        that would never happen in the real application because our code is rock solid
                    </Text>
                </Appear>
                <Appear>
                    <Text color="secondary">🆗 Too complex situations</Text>
                </Appear>
                <Appear>
                    <Text color="secondary">❌ Requests that the backend should handle</Text>
                </Appear>
            </NortalSlide>
        </>
    )
}
