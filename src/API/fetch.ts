"use server"
import { cookies } from "next/headers"

const headers = async () => {
    const getAuth = (await cookies()).get("session")?.value
    let headers = {
        "Content-Type": "application/json",
    } as any

    if (!!getAuth) headers = {
        ...headers,
        "Authorization": `Bearer ${getAuth}`,
    }
    return headers
}

export const get = async (url: string) => {
    const res = await fetch(url, {
        method: "GET",
        headers: await headers()
    })

    return res.json()
}

export const post = async (url: string, body: any) => {
    const res = await fetch(url, {
        method: "POST",
        headers: await headers(),
        body: JSON.stringify(body)
    })

    return { status: res.status, body: await res.json() }
}