"use server"
import { cookies } from "next/headers";

const createSession = async (jwt: string) => {
    (await cookies()).set("session", jwt, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });
}
export default createSession