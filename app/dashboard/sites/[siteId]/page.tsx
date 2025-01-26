import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, FileIcon, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(userId: string, siteId: string) {
  const data = await prisma.post.findMany({
    where: {
      userId: userId,
      siteId: siteId,
    },
    select: {
      image: true,
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function SiteIdRoute({
  params,
}: {
  params: { siteId: string };
}) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.siteId);

  return (
    <>
      {data === undefined || data.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in 
    fade-in-50 "
        >
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
            <FileIcon className="size-10 text-primary" />
          </div>
          <h2 className="mt-6 text-xl font-semibold">사이트가 없어요!</h2>
          <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-md mx-auto">
            현재 생성된 사이트가 없습니다. 새로운 사이트를 만들어 주세요!
          </p>
          <Button asChild>
            <Link href="/dashboard/sites/new">
              <PlusCircle className="size-4" />
              사이트 만들기
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex w-full justify-end gap-x-4 ">
          <Button asChild variant="secondary">
            <Link href="#">
              <Book className="size-4" />
              블로그 보기
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="#">
              <Settings className="size-4" />
              세팅
            </Link>
          </Button>
          <Button asChild>
            <Link href="#">
              <PlusCircle className="size-4" />
              글쓰기
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}
