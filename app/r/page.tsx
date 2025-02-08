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

async function getData() {
  const data = await prisma.postreddit.findMany({
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
    },
  });

  return data;
}

export default async function RedditHome() {
  const data = await getData();
  return (
    <div className="max-w-7xl mx-auto flex gap-x-10 my-16">
      {/* Left Side */}
      <div className="w-[65%] flex flex-col gap-6-5">
        <CreatePostCard />
        {data.map((post) => (
          <PostCard key={post.id} />
        ))}
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
