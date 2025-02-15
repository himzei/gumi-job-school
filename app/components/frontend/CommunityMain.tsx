import prisma from "@/app/utils/db";
import { PostCard } from "../community/PostCard";
import Link from "next/link";

async function getData() {
  const data = await prisma.postreddit.findMany({
    take: 6,
    select: {
      title: true,
      createdAt: true,
      textContent: true,
      id: true,
      imageString: true,
      Comment: {
        select: {
          id: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
      subName: true,
      Vote: {
        select: {
          userId: true,
          voteType: true,
          postredditId: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

async function getTags() {
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

export async function CommunityMain() {
  const data = await getData();
  const tags = await getTags();
  return (
    <div className="max-w-7xl w-full flex flex-col mx-auto">
      <div className="pb-16 flex flex-col justify-center">
        <h2 className="text-3xl font-bold uppercase py-2 text-white text-center">
          커뮤니티
        </h2>
        <div className="flex flex-wrap justify-center max-w-xl gap-2 mx-auto my-2 px-4">
          {tags.map((item) => (
            <Link key={item.id} href={`/r/${item.name}`}>
              <p className="bg-muted px-2 py-1 rounded-xl text-sm transition duration-300 hover:bg-muted-foreground/80 hover:text-white">
                r/{item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {data.map((post) => (
          <div key={post.id} className="w-full">
            <PostCard
              id={post.id}
              imageString={post.imageString}
              jsonContent={post.textContent}
              subName={post.subName as string}
              title={post.title}
              userName={post.User?.username as string}
              commentAmount={post.Comment.length}
              voteCount={post.Vote.reduce((acc, vote) => {
                if (vote.voteType === "UP") return acc + 1;
                if (vote.voteType === "DOWN") return acc - 1;

                return acc;
              }, 0)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
