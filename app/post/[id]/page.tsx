import { SubDescriptionForm } from "@/app/components/community/SubDescriptionForm";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.postreddit.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      createdAt: true,
      title: true,
      imageString: true,
      textContent: true,
      subName: true,
      Subreddit: {
        select: {
          name: true,
          createdAt: true,
          description: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div className="max-w-7xl mx-auto flex gap-x-10 my-16">
      <div className="w-[70%] flex flex-col gap-y-5">
        <h1>left side</h1>
      </div>

      <div className="w-[30%]">
        <Card>
          <div className="bg-muted p-4 font-semibold">about community</div>
          <div className="p-4">
            <div className="flex items-center gap-x-3">
              <Image
                src={`https://avatar.vercel.sh/himzei`}
                alt="Image of Subreddit"
                width={60}
                height={60}
                className="rounded-full size-16"
              />
              <Link href={`/r/${data?.subName}`} className="font-medium">
                r/{data?.subName}
              </Link>
            </div>

            <p className="text-sm font-normal text-secondary-foreground mt-2">
              {data?.Subreddit?.description}
            </p>

            <div className="flex items-center gap-x-2 mt-2 ">
              {/* <Cake className="size-5 text-muted-foreground" /> */}
              <p className="text-muted-foreground font-light text-xs">
                생성날짜:
                {new Date(data?.createdAt as Date).toLocaleDateString("kr-ko", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
              </p>
            </div>

            <Separator className="my-5" />
            <Button asChild className="w-full rounded-full">
              <Link href={`/r/${data?.subName}/create`}>글 작성하기</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
