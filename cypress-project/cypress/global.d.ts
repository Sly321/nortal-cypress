/// <reference types="cypress" />

import { Route } from "./support/routing"

declare global {
    namespace Cypress {
        interface Chainable {
            deleteAll: () => void

            /**
             * Go to a specfic route
             */
            goTo(route: Route): Chainable
        }
    }
}
