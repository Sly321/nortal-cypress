export type Route = { title: string; path: `/${string}` }

type RouteKeys = "list" | "view"

export const routes: Record<RouteKeys, Route> = {
    list: { title: "List", path: "/list" },
    view: { title: "View", path: "/view" },
}

function isRoute(route: Route, eq: Route) {
    return route.path === eq.path && route.title === eq.title
}

export function goTo(route: Route) {
    // list
    if (isRoute(route, routes.list)) {
        // do stuff here, create data etc.
        return cy.visit(route.path)
    }

    // view
    if (isRoute(route, routes.view)) {
        // do stuff here, create data etc.
        return cy.visit(route.path)
    }

    return cy.visit(route.path)
}

export function describeAllPages(fn: any) {
    context(`${routes.view.title}`, () => {
        before(() => {
            cy.goTo(routes.view)
        })

        fn()
    })

    context(`${routes.list.title}`, () => {
        before(() => {
            cy.goTo(routes.list)
        })

        fn()
    })
}
