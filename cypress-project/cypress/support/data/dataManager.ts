export class DataManager {
    static deleteAll() {
        cy.request<Array<{ id: string }>>({
            url: `${Cypress.config("baseUrl")}/todos`,
        }).then((response) => {
            if (response.isOkStatusCode) {
                response.body.forEach((item) => {
                    cy.request({
                        url: `${Cypress.config("baseUrl")}/todos/${item.id}`,
                        method: "DELETE",
                    })
                })
            }
        })
    }
}
