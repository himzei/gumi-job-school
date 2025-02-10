import prisma from "../utils/db";
import { notFound } from "next/navigation";
import { ItemContainer } from "../components/blogs/ItemContainer";

async function getData() {
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

  return posts;
}

export default async function BlogsPage() {
  const posts = await getData();
  return (
    <>
      <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-3">
        {posts.map((item) => (
          <ItemContainer
            key={item.id}
            id={item.id}
            articleContent={item.articleContent}
            title={item.title}
            smallDescription={item.smallDescription}
            image={item.image}
            createdAt={item.createdAt}
            slug={item.slug}
            subName={item.Site?.name as string}
          />
        ))}
      </div>
    </>
  );
}
