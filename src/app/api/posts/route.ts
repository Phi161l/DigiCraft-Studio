import connect from "@/lib/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.SECRET_KEY!;

export async function POST(req: Request) {
  await connect();

  try {
    const body = await req.json();
    const newPost = body;

    await Post.create(newPost );

    return NextResponse.json({ sucess: "post added" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
