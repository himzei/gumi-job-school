import prisma from "@/app/utils/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import Logo from "@/public/logo_s.png";
import { ThemeToggle } from "@/app/components/dashboard/ThemeToggle";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DefaultImage from "@/public/default.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface iAppProps {
  params: Promise<{ name: string }>;
}

async function getData(subDir: string) {
  const data = await prisma.site.findUnique({
    where: {
      subdirectory: subDir,
    },
    select: {
      name: true,
      posts: {
        select: {
          smallDescription: true,
          title: true,
          image: true,
          createdAt: true,
          slug: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function BlogIndexPage({ params }: iAppProps) {
  const { name } = await params;
  const data = await getData(name);
  return (
    <>
      <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
        {data.posts.map((item) => (
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
              <CardDescription className="line-clamp-3">
                {item.smallDescription}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/blog/${name}/${item.slug}`}>자세히보기</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
