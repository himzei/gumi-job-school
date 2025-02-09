import { Card } from "@/components/ui/card";
import Image from "next/image";
import Banner from "@/public/community/banner.png";
import HelloImage from "@/public/community/hero-image.png";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreatePostCard } from "../components/community/CreatePostCard";
import prisma from "../utils/db";
import { PostCard } from "../components/community/PostCard";
import { Suspense } from "react";
import { SuspenseCard } from "../components/community/SuspenseCard";
import Pagination from "../components/community/Pagination";

async function getData(searchParams: string) {
  const [count, data] = await prisma.$transaction([
    prisma.postreddit.count(),
    prisma.postreddit.findMany({
      take: 10,
      skip: searchParams ? (Number(searchParams) - 1) * 10 : 0, // take:10
      select: {
        title: true,
        createdAt: true,
        textContent: true,
        id: true,
        imageString: true,
        User: {
          select: {
            username: true,
          },
        },
        subName: true,
        Vote: {
          select: {
            userId: true,
            voteType: true,
            postredditId: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  return { data, count };
}

export default async function RedditHome({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  return (
    <div className="max-w-7xl mx-auto flex gap-x-10 my-16">
      {/* Left Side */}
      <div className="w-[65%] flex flex-col gap-y-5">
        <CreatePostCard />
        <Suspense fallback={<SuspenseCard key={page} />}>
          <ShowItems searchParams={searchParams} />
        </Suspense>
      </div>
      {/* Right Side */}
      <div className="w-[35%]">
        <Card>
          <Image src={Banner} alt="Banner" />
          <div className="p-2">
            <div className="flex items-center">
              <Image
                src={HelloImage}
                alt="Hello image"
                className="w-10 h-16 -mt-5"
              />
              <h1 className="font-medium pl-3">Home</h1>
            </div>
            <p className="text-sm text-muted-foreground px-2 py-2 ">
              다양한 주제와 의견이 활발히 공유되는 소통 커뮤니티입니다.
            </p>
            <Separator className="my-3" />
            <div className="flex flex-col gap-y-2">
              <Button asChild variant="secondary">
                <Link href={`/r/himzei/create`}>커뮤니티 생성</Link>
              </Button>
              <Button asChild>
                <Link href="/r/create">글 작성하기</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

async function ShowItems({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const { count, data } = await getData(page);
  return (
    <>
      {data.map((post) => (
        <PostCard
          id={post.id}
          imageString={post.imageString}
          jsonContent={post.textContent}
          subName={post.subName as string}
          title={post.title}
          userName={post.User?.username as string}
          key={post.id}
          voteCount={post.Vote.reduce((acc, vote) => {
            if (vote.voteType === "UP") return acc + 1;
            if (vote.voteType === "DOWN") return acc - 1;

            return acc;
          }, 0)}
        />
      ))}
      {/* take 10 */}
      <Pagination totalPages={Math.ceil(count / 10)} />
    </>
  );
}
