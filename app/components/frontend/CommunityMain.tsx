import { PostCard } from "../community/PostCard";
import Link from "next/link";

/** DB 없이 홈 커뮤니티 섹션 표시 — 필요 시 아래 배열에 정적 데이터만 추가 */
const STATIC_COMMUNITY_POSTS: Array<{
  id: string;
  title: string;
  createdAt: Date;
  textContent: unknown;
  imageString: string | null;
  Comment: { id: string }[];
  User: { username: string } | null;
  subName: string | null;
  Vote: { userId: string; voteType: string; postredditId: string }[];
}> = [];

const STATIC_SUBREDDIT_TAGS: Array<{ id: string; name: string }> = [];

export function CommunityMain() {
  const data = STATIC_COMMUNITY_POSTS;
  const tags = STATIC_SUBREDDIT_TAGS;

  const hasNoContent = data.length === 0 && tags.length === 0;

  return (
    <div className="max-w-7xl w-full flex flex-col mx-auto">
      <div className="pb-16 flex flex-col justify-center">
        <h2 className="text-3xl font-bold uppercase py-2 text-white text-center">
          커뮤니티
        </h2>
        {tags.length > 0 ? (
          <div className="flex flex-wrap justify-center max-w-xl gap-2 mx-auto my-2 px-4">
            {tags.map((item) => (
              <Link key={item.id} href={`/r/${item.name}`}>
                <p className="bg-muted px-2 py-1 rounded-xl text-sm transition duration-300 hover:bg-muted-foreground/80 hover:text-white">
                  r/{item.name}
                </p>
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      {hasNoContent ? (
        <p className="text-center text-white/90 px-4 pb-8">
          커뮤니티 게시글은 별도 DB 연동 없이 운영 중입니다. 콘텐츠는 추후 공지됩니다.
        </p>
      ) : (
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
      )}
    </div>
  );
}
