import jwt from "jsonwebtoken"
import { Request } from "express"

function createObjectFromArray(array: Array<string>, name?: string) {
    if (array.length === 2) {
        const key = array[0].trim()
        if (name) {
            return key === name ? { [key]: array[1].trim() } : {}
        } else {
            return { [key]: array[1].trim() }
        }
    } else {
        return {}
    }
}

function parseCookie(cookie: string, name?: string): { [key: string]: string } | string | null {
    if (!cookie || name === "") {
        return null
    }

    let result: { [key: string]: string } = {}

    cookie.split(";").forEach((value: string) => {
        result = { ...result, ...createObjectFromArray(value.split("="), name) }
    })

    const keys = Object.getOwnPropertyNames(result)
    const length = keys.length

    if (length === 0) {
        return null
    } else if (length === 1 && name) {
        return result[keys[0]]
    }

    return result
}

export function getAuthPayload(req: Request): { sub: string } | null {
    const authHeader = req.cookies.login

    if (authHeader) {
        return jwt.decode(authHeader.replace("Bearer ", "")) as any
    }

    console.log("[WARNING] - Authorization Header is missing")

    const authCookie = parseCookie(req.cookies, "authorization")

    if (authCookie) {
        return jwt.decode(authCookie as string) as any
    }

    const authHeaderCookie = parseCookie(req.headers.cookie, "authorization")

    if (authHeaderCookie) {
        return jwt.decode(authHeaderCookie as string) as any
    }

    return null
}
