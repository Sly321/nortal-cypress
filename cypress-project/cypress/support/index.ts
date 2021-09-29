// @ts-check
///<reference path="../global.d.ts" />

import "@testing-library/cypress/add-commands"
import { DataManager } from "./data/dataManager"
import { goTo } from "./routing"

Cypress.Commands.add("deleteAll", DataManager.deleteAll as never)
Cypress.Commands.add("goTo", goTo as never)
