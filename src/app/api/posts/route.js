import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET all posts
export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE a post
export const POST = async (req) => {
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
