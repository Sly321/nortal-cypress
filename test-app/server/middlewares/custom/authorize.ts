import { Application } from "express"

export default function (server: Application): void {
    server.post("/_authorize", function (req, res, _) {
        const { authorization } = req.body
        const { redirect } = req.query
        res.cookie("login", authorization, { maxAge: 24 * 60 * 60 * 1000, httpOnly: false })
        res.redirect(redirect as any)
    })
}
