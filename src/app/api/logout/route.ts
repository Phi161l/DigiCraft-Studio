import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });

  // Clear the token cookie
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    path: "/",
    maxAge: 0, // expires immediately
    sameSite: "lax",
  });

  return response;
}