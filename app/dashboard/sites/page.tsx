import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FileIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import DefaultImage from "@/public/default.png";

async function getData(userId: string) {
  const data = await prisma.site.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function SitesRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id);
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href="/dashboard/sites/new">
            <PlusCircle className="size-4" />
            사이트 만들기
          </Link>
        </Button>
      </div>

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
        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {data.map((item) => (
            <Card key={item.id}>
              <Image
                src={item.imageUrl ?? DefaultImage}
                alt={item.name}
                className="rounded-t-lg object-cover w-full h-[200px] "
                width={400}
                height={200}
              />
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${item.id}`}>자세히보기</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
