import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CopyLink } from "./CopyLink";
import { handleVote } from "@/app/actions";
import { DownVote, UpVote } from "../dashboard/SubmitButton";
import { RenderToJson } from "./RenderToJson";

interface iAppProps {
  title: string;
  jsonContent: any;
  id: string;
  subName: string | undefined;
  userName: string;
  imageString: string | null;
  voteCount: number;
}

export function PostCard({
  title,
  jsonContent,
  id,
  subName,
  userName,
  imageString,
  voteCount,
}: iAppProps) {
  return (
    <Card className="flex relative overflow-hidden">
      <div className="flex flex-col items-center gap-y-2 bg-muted p-2">
        <form action={handleVote}>
          <input type="hidden" name="voteDirection" value="UP" />
          <input type="hidden" name="postId" value={id} />
          <UpVote />
        </form>
        {voteCount}
        <form action={handleVote}>
          <input type="hidden" name="voteDirection" value="DOWN" />
          <input type="hidden" name="postId" value={id} />
          <DownVote />
        </form>
      </div>

      <div>
        <div className="flex items-center gap-x-2 p-2">
          <Link href={`/r/${subName}`} className="font-semibold text-xs">
            r/{subName}
          </Link>
          <p className="text-xs text-muted-foreground">
            작성자: <span className="text-primary">u/himzei</span>
          </p>
        </div>

        <div className="px-2">
          <Link href="/">
            <h1 className="font-medium mt-1 text-lg">{title}</h1>
          </Link>
        </div>
        <div className="max-h-[400px] overflow-hidden">
          {imageString ? (
            <Image
              src={imageString}
              alt="Post Image"
              width={600}
              height={400}
              className="w-full h-full mt-2"
            />
          ) : (
            <>
              {/* // <div>aa</div> */}
              <RenderToJson data={jsonContent} />
            </>
          )}
        </div>

        <div className="m-3 flex items-center gap-x-5">
          <div className="flex items-center gap-x-1">
            <MessageCircle className="size-4 text-muted-foreground" />
            <p className="text-muted-foreground text-xs font-medium">
              31 comments
            </p>
          </div>
          <CopyLink id={id} />
        </div>
      </div>
    </Card>
  );
}
