describe("Creation of ToDo's", () => {
    before(() => {
        // one time run before tests in this block are executed
    })

    beforeEach(() => {
        // every time, before a single test
        cy.deleteAll()
    })

    it("should contain one open todo in the list of todo's", () => {
        cy.visit("/")
        cy.findByLabelText("Todo's").type("Software Developer{enter}")
        cy.findByText("Open", { selector: "h2" }).siblings("ul").contains("li", "Software Developer")
    })

    afterEach(() => {
        // every time, after a single test
    })

    after(() => {
        // one time run after all tests in this block
    })
})
