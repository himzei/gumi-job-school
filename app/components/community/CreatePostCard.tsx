import { Card } from "@/components/ui/card";
import Image from "next/image";
import pfp from "@/public/community/pfp.png";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageDown, Link2 } from "lucide-react";

export function CreatePostCard() {
  return (
    <Card className="px-4 py-2 flex items-center gap-x-4">
      <Image src={pfp} alt="pfp" className="h-12 w-fit" />
      <Link href="/r/himzei/create" className="w-full">
        <Input placeholder="당신의 소중한 의견을 작성해 주세요" />
      </Link>

      <div className="flex items-center gap-x-2">
        <Button className="icon" variant="outline">
          <Link href="/r/himzei/create">
            <ImageDown className="size-4" />
          </Link>
        </Button>
        <Button className="icon" variant="outline">
          <Link href="/r/himzei/create">
            <Link2 className="size-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
