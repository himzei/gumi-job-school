import { CreatePostCard } from "@/app/components/community/CreatePostCard";
import Pagination from "@/app/components/community/Pagination";
import { PostCard } from "@/app/components/community/PostCard";
import { SubDescriptionForm } from "@/app/components/community/SubDescriptionForm";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

async function getData(name: string, searchParams: string) {
  const [count, data] = await prisma.$transaction([
    prisma.postreddit.count({
      where: {
        subName: name,
      },
    }),
    prisma.subreddit.findUnique({
      where: {
        name: name,
      },
      select: {
        name: true,
        createdAt: true,
        description: true,
        userId: true,
        postreddits: {
          take: 10,
          skip: searchParams ? (Number(searchParams) - 1) * 10 : 0,
          select: {
            title: true,
            imageString: true,
            id: true,
            textContent: true,
            Vote: {
              select: {
                voteType: true,
                userId: true,
              },
            },
            User: {
              select: {
                username: true,
              },
            },
          },
        },
      },
    }),
  ]);

  return { data, count };
}

export default async function SubRedditRoute({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { page: string };
}) {
  const { id } = await params;
  const { page } = await searchParams;
  const { data, count } = await getData(id, page);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="max-w-7xl mx-auto flex gap-x-10 my-16">
      {/* post section */}
      <div className="w-[65%] flex flex-col gap-y-5">
        <CreatePostCard />

        {data?.postreddits.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            imageString={post.imageString}
            subName={data.name}
            title={post.title}
            userName={post.User?.username as string}
            jsonContent={post.textContent}
            voteCount={post.Vote.reduce((acc, vote) => {
              if (vote.voteType === "UP") return acc + 1;
              if (vote.voteType === "DOWN") return acc - 1;

              return acc;
            }, 0)}
          />
        ))}

        <Pagination totalPages={Math.ceil(count / 10)} />
      </div>
      {/* Card Section  */}
      <div className="w-[35%]">
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
              <Link href={`/r/${data?.name}`} className="font-medium">
                r/{data?.name}
              </Link>
            </div>
            {user?.id === data?.userId ? (
              <SubDescriptionForm
                description={data?.description}
                subName={id}
              />
            ) : (
              <p className="text-sm font-normal text-secondary-foreground mt-2">
                {data?.description}
              </p>
            )}
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
              <Link
                href={user?.id ? `/r/${data?.name}/create` : "/api/auth/login"}
              >
                글 작성하기
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
