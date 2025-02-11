import prisma from "@/app/utils/db";
import { notFound } from "next/navigation";

export async function GET() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      articleContent: true,
      title: true,
      smallDescription: true,
      image: true,
      createdAt: true,
      slug: true,
      Site: {
        select: {
          name: true,
          subdirectory: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!posts) {
    return notFound();
  }

  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}
