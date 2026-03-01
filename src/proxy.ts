import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY!;

// Paths to protect
const protectedPaths = ["/dashboard"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect certain routes
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      // Redirect to login if no token'
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    try {
      jwt.verify(token, SECRET_KEY);
      // Token valid → allow request
      return NextResponse.next();
    } catch (err) {
      // Invalid token → redirect to login
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // Public paths → allow
  return NextResponse.next();
}

// Apply middleware only to these paths
export const config = {
  matcher: ["/dashboard/:path*"], // protect all dashboard routes
};