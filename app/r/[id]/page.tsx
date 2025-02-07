import { SubDescriptionForm } from "@/app/components/community/SubDescriptionForm";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Cake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface iAppProps {
  params: Promise<{ id: string }>;
}

async function getData(name: string) {
  const data = await prisma.subreddit.findUnique({
    where: {
      name: name,
    },
    select: {
      name: true,
      createdAt: true,
      description: true,
      userId: true,
    },
  });

  return data;
}

export default async function SubRedditRoute({ params }: iAppProps) {
  const { id } = await params;
  const data = await getData(id);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="max-w-7xl mx-auto flex gap-x-10 my-16">
      {/* post section */}
      <div className="w-[65%] flex flex-col gap-y-5">
        <h1>post section </h1>
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
