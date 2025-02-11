import { RenderArticle } from "@/app/components/dashboard/RenderArticle";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JSONContent } from "novel";

interface iAppProps {
  params: Promise<{ slug: string; name?: string }>;
}

async function getData(slug: string) {
  const data = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
    select: {
      articleContent: true,
      title: true,
      smallDescription: true,
      image: true,
      createdAt: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function SlugRoute({ params }: iAppProps) {
  const { slug, name } = await params;
  const data = await getData(slug);
  return (
    <>
      <div className="w-full max-w-7xl flex flex-col">
        <div className="flex items-center gap-x-3 pb-5">
          <Button size="icon" variant="outline" asChild>
            <Link href={`/blog`}>
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-medium">블로그로 돌아가기</h1>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 max-w-5xl mx-auto">
          <div className="m-auto w-full text-center ">
            <p className="m-auto my-5 w-10/12 text-sm font-light text-muted-foreground md:text-base">
              {new Date(data?.createdAt as Date).toLocaleDateString("kr-ko", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
            </p>
            <h1 className="mb-5 text-3xl font-bold md:text-6xl tracking-tight">
              {data.title}
            </h1>
            <p className="m-auto w-10/12 text-muted-foreground line-clamp-3">
              {data.smallDescription}
            </p>
          </div>
        </div>

        <div className="relative m-auto mb-8 w-full max-w-5xl overflow-hidden md:mb-16  md:rounded-2xl ">
          <Image
            src={data.image}
            alt={data.title}
            width={1024}
            height={1440}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <RenderArticle json={data.articleContent as JSONContent} />
      </div>
    </>
  );
}
