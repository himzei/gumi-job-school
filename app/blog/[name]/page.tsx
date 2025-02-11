import prisma from "@/app/utils/db";
import { notFound } from "next/navigation";
import { ItemContainer } from "@/app/components/blogs/ItemContainer";

interface iAppProps {
  params: Promise<{ name: string }>;
}

async function getData(subDir: string) {
  const data = await prisma.site.findUnique({
    where: {
      subdirectory: subDir,
    },
    select: {
      name: true,
      posts: {
        select: {
          smallDescription: true,
          title: true,
          image: true,
          createdAt: true,
          slug: true,
          id: true,
          articleContent: true,
          Site: {
            select: {
              subdirectory: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function BlogIndexPage({ params }: iAppProps) {
  const { name } = await params;
  const data = await getData(name);
  console.log(name);
  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-2">
        {data.posts.map((item) => (
          <ItemContainer
            key={item.id}
            id={item.id}
            articleContent={item.articleContent}
            title={item.title}
            smallDescription={item.smallDescription}
            image={item.image}
            createdAt={item.createdAt}
            slug={item.slug}
            subName={name}
            subdirectory={item.Site?.subdirectory}
          />
        ))}
      </div>
    </>
  );
}
