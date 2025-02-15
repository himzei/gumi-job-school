import prisma from "../utils/db";
import { notFound } from "next/navigation";
import { ItemContainer } from "../components/blogs/ItemContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getPostData() {
  const data = await prisma.site.findMany({
    select: {
      name: true,
      subdirectory: true,
      posts: {
        select: {
          id: true,
          articleContent: true,
          title: true,
          smallDescription: true,
          image: true,
          createdAt: true,
          slug: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function BlogsPage() {
  const data = await getPostData();
  const allPosts = data.flatMap((category) =>
    category.posts.map((post) => ({
      ...post,
      subdirectory: category.subdirectory,
      siteName: category.name,
    }))
  );

  return (
    <div className="flex flex-col">
      <Tabs defaultValue="전체" className="w-full">
        <TabsList>
          <TabsTrigger value="전체" className="px-4 font-semibold ">
            전체
          </TabsTrigger>
          {data.map((item) => (
            <TabsTrigger
              key={item.name}
              value={item.name}
              className="px-4 font-semibold "
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="전체" className="border-t ">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-2 px-2 py-2">
            {allPosts.map((item) => (
              <ItemContainer
                key={item.id}
                id={item.id}
                articleContent={item.articleContent}
                title={item.title}
                smallDescription={item.smallDescription}
                image={item.image}
                createdAt={item.createdAt}
                slug={item.slug}
                subName={item.siteName}
                subdirectory={item.subdirectory}
              />
            ))}
          </div>
        </TabsContent>

        {data.map((category) => (
          <TabsContent
            value={category.name}
            key={category.name}
            className="border-t "
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-2">
              {category.posts.map((item) => (
                <ItemContainer
                  key={item.id}
                  id={item.id}
                  articleContent={item.articleContent}
                  title={item.title}
                  smallDescription={item.smallDescription}
                  image={item.image}
                  createdAt={item.createdAt}
                  slug={item.slug}
                  subName={category.name}
                  subdirectory={category.subdirectory}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
