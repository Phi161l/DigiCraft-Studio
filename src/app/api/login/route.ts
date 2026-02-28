import connect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY!;

export async function POST(req: Request) {
  await connect();

  try {
    const { email, password } = await req.json();

    // 1️⃣ Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    // 3️⃣ Create JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" },
    );

    // 4️⃣ Set token as HttpOnly cookie
    const response = NextResponse.json({ redirect: "/dashboard" });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 3600, // 1 hour
      path: "/",
      sameSite: "lax",
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
