import { handleVote } from "@/app/actions";
import { CommentForm } from "@/app/components/community/CommentForm";
import { CopyLink } from "@/app/components/community/CopyLink";
import { RenderToJson } from "@/app/components/community/RenderToJson";
import { SubDescriptionForm } from "@/app/components/community/SubDescriptionForm";
import { DownVote, UpVote } from "@/app/components/dashboard/SubmitButton";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageCircle } from "lucide-react";
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
      Comment: {
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          text: true,
          User: {
            select: {
              profileImage: true,
              username: true,
            },
          },
        },
      },
      Subreddit: {
        select: {
          name: true,
          createdAt: true,
          description: true,
        },
      },
      Vote: {
        select: {
          voteType: true,
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
        <Card className="p-2 flex">
          <div className="flex flex-col items-center gap-y-2 p-2">
            <form action={handleVote}>
              <input type="hidden" name="voteDirection" value="UP" />
              <input type="hidden" name="postId" value={data.id} />

              <UpVote />
            </form>
            {data.Vote.reduce((acc, vote) => {
              if (vote.voteType === "UP") return acc + 1;
              if (vote.voteType === "DOWN") return acc - 1;

              return acc;
            }, 0)}
            <form action={handleVote}>
              <input type="hidden" name="voteDirection" value="DOWN" />
              <input type="hidden" name="postId" value={data.id} />

              <DownVote />
            </form>
          </div>

          {/* Right Side */}
          <div className="p-2 w-full">
            <p className="text-xs text-muted-foreground">
              Posted by u/{data.User?.username}
            </p>

            <h1 className="font-medium mt-1 text-lg">{data.title}</h1>

            {data.imageString && (
              <Image
                src={data.imageString}
                alt="user image"
                width={600}
                height={400}
                className="w-full h-auto object-contain mt-2"
              />
            )}

            {data.textContent && <RenderToJson data={data.textContent} />}

            <div className="flex gap-x-5 items-center mt-3">
              <div className="flex items-center gap-x-1">
                <MessageCircle className="size-4 text-muted-foreground" />
                <p className="text-muted-foreground font-medium text-xs">
                  {data.Comment.length} Comments
                </p>
              </div>

              <CopyLink id={id} />
            </div>

            <CommentForm postId={id} />

            <Separator className="my-5" />

            <div className="flex flex-col gap-y-7">
              {data.Comment.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex items-center gap-x-3">
                    <img
                      src={
                        item.User?.profileImage
                          ? item.User.profileImage
                          : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                      }
                      className="w-7 h-7 rounded-full"
                      alt="Avatar of user"
                    />
                    <h3 className="text-sm font-medium">
                      {item.User?.username}
                    </h3>
                  </div>
                  <p className="ml-10 text-secondary-foreground text-sm tracking-wide">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
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
