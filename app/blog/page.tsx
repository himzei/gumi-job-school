import prisma from "../utils/db";
import { notFound } from "next/navigation";
import { ItemContainer } from "../components/blogs/ItemContainer";

async function getPostData() {
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
  const posts = await getPostData();
  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-2">
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
