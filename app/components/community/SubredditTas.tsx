import prisma from "@/app/utils/db";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

async function getData() {
  const data = await prisma.subreddit.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
    },
  });

  return data;
}

export async function SubredditTags() {
  const data = await getData();
  return (
    <div className="w-full  p-4 rounded-lg border border-muted-foreground/50 border-dashed">
      <h3 className="font-semibold">카테고리</h3>
      <Separator className="my-2" />
      <div className="gap-2 flex py-2">
        {data.map((item) => (
          <Link key={item.id} href={`/r/${item.name}`}>
            <p className="bg-muted-foreground/20 px-2 py-1 rounded-xl text-sm transition duration-300 hover:bg-muted-foreground/80 hover:text-white">
              r/{item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
