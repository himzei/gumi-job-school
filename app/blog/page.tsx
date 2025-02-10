import { SubPageTitle } from "../components/SubPageTitle";
import SubImg6 from "@/public/sub/sub006.png";
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
      <SubPageTitle
        subTitle="blog"
        mainTitle="블로그"
        description="한국직업교육학원 유익한 교육 정보와 소식을 제공하는 공간입니다."
        backImg={SubImg6}
      />
      <div className="max-w-7xl w-full  mx-auto my-16 flex">
        <div className="w-[70%] grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-3">
          {posts.map((item) => (
            <ItemContainer
              key={item.id}
              id={item.id}
              articleContent={item.articleContent}
              title={item.title}
              smallDescription={item.smallDescription}
              image={item.image}
              createdAt={item.createdAt}
            />
          ))}
        </div>
        <div className="w-[30%]">
          <h2 className="text-lg font-semibold">카테고리</h2>
        </div>
      </div>
    </>
  );
}
