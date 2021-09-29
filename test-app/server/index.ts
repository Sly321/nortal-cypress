import cookieParser from "cookie-parser"
import { readFileSync } from "fs"
import * as glob from "glob"
import * as jsonServer from "json-server"
import { LowdbSync } from "lowdb"
import { join, resolve } from "path"

const server = jsonServer.create()
server.use(cookieParser())

const db = jsonServer.router("db.json")

export const database = (db as any).db as LowdbSync<any>

const routes = readFileSync(resolve(__dirname, "routes.json"), "utf-8")

console.log("\n[USING ROUTES]")
console.log(routes)
console.log("[USING ROUTES]\n")

server.use(jsonServer.rewriter(JSON.parse(routes)))

const middlewares = jsonServer.defaults({
    static: join(__dirname, "..", "todo-app", "build"),
})

// Enable json-server default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Handle requests that contain a request body (i.e. POST, PUT, PATCH)
server.use(jsonServer.bodyParser)

// Enable health checks
server.get("/health/*", (_, res) => {
    res.status(200).end()
})

console.log("\n[USING MIDDLEWARES]")
glob.sync(resolve(__dirname, "middlewares", "**", "*.ts")).forEach((n) => {
    console.log(`[MIDDLEWARE] Adding handler from ${n}`)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require(n)["default"](server)
})
console.log("[USING MIDDLEWARES]\n")

// Enable the json-server router component
// server.use(router)

// Enable the json-server db component
server.use(db)

// Start the server
server.listen(8080, () => {
    console.log("json dev server is running on localhost:8080")
})
