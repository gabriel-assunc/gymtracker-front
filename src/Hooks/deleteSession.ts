"use server"

import { cookies } from "next/headers";

const deleteSession = async () => {
    (await (cookies())).delete("session");
}

export default deleteSession;