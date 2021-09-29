// @see https://docs.cypress.io/api/commands/intercept

describe("intercept", () => {
    beforeEach(() => {
        cy.deleteAll()
    })

    it("waiting for important requests", () => {
        // create alias the request you want to wait for
        cy.intercept("/todos?status=open").as("getOpenTodos")
        // you can also use glob patterns
        cy.intercept("/todos**").as("getAnyTodos")

        // alias definitions need to be done before visiting something
        cy.visit("/")

        // wait for the alias
        cy.wait("@getOpenTodos")

        // test
        cy.findByLabelText("Todo's").type("Software Developer{enter}")
        cy.findByText("Open", { selector: "h2" }).siblings("ul").contains("li", "Software Developer")
    })

    it("returning your own data for a request", () => {
        // returning data for a specific endpoint
        cy.intercept("/todos?status=open", [{ id: 1, name: "hello world", status: "open" }])

        cy.visit("/")

        cy.findByText("Open", { selector: "h2" }).siblings("ul").contains("li", "hello world")
    })

    it("returning your own data dalayed for a request", () => {
        // returning data for a specific endpoint, delayed
        cy.intercept("/todos?status=open", {
            body: [{ id: 1, name: "hello world", status: "open" }],
            delay: 2500,
        }).as("getTodos")

        cy.visit("/")
        cy.wait("@getTodos")

        cy.findByText("Open", { selector: "h2" }).siblings("ul").contains("li", "hello world")
    })

    it("mock complex requests", () => {
        // returning data for a specific endpoint
        cy.intercept("/todos**", (req) => {
            req.reply([{ id: 1, name: `hello world (${req.query.status})`, status: req.query.status }])
        })

        cy.visit("/")

        cy.findByText("Open", { selector: "h2" }).siblings("ul").contains("li", "hello world")
    })
})
