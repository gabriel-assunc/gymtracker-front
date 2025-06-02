import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login"]
const protectedRoutes = ["/projects"]

export async function middleware(req: NextRequest, res: NextResponse) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = (await cookies()).get("session")?.value;

    if (isProtectedRoute && !cookie) {
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }

    if (isPublicRoute && cookie) {
        return NextResponse.redirect(new URL("/projects", req.nextUrl))
    }

    return NextResponse.next()
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}