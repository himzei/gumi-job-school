import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "../components/dashboard/EmptyState";
import prisma from "../utils/db";
import { requireUser } from "../utils/requireUser";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DefaultImage from "@/public/default.png";

async function getData(userId: string) {
  const [sites, articles] = await Promise.all([
    prisma.site.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 6,
    }),
    prisma.post.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  return { sites, articles };
}

export default async function DashboardIndexPage() {
  const user = await requireUser();
  const { articles, sites } = await getData(user.id);
  return (
    <div>
      {/*  */}
      <h1 className="text-2xl font-semibold mb-5">블로그 사이트(카테고리)</h1>
      {sites.length > 0 ? (
        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {sites.map((item) => (
            <Card key={item.id}>
              <Image
                src={item.imageUrl ?? DefaultImage}
                alt={item.name}
                className="rounded-t-lg object-cover w-full h-[200px] "
                width={400}
                height={200}
              />
              <CardHeader>
                <CardTitle className="truncate">{item.name}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-4">
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${item.id}`}>자세히보기</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="You don't have any sites created"
          description="you currentyl dont have any sites, please create some so that you can see them righth here"
          href="/dashboard/sites/new"
          buttonText="create site"
        />
      )}
      {/*  */}
      <h1 className="text-2xl mt-10 mb-5 font-semibold">블로그 게시글</h1>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {articles.map((item) => (
            <Card key={item.id}>
              <Image
                src={item.image ?? DefaultImage}
                alt={item.title}
                className="rounded-t-lg object-cover w-full h-[200px] "
                width={400}
                height={200}
              />
              <CardHeader>
                <CardTitle className="truncate">{item.title}</CardTitle>
                <CardDescription className="line-clamp-3 min-h-[60px]">
                  {item.smallDescription}
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-4">
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${item.siteId}/${item.id}`}>
                    게시글 수정
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="You don't have any articles created"
          description="you currentyl dont have any articles, please create some so that you can see them righth here"
          href="/dashboard/sites"
          buttonText="create article"
        />
      )}
    </div>
  );
}
