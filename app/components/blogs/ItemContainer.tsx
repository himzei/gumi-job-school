import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DefaultImage from "@/public/default.png";

interface iAppProps {
  id: string;
  articleContent?: any;
  title: string;
  smallDescription: string;
  image: string;
  createdAt?: any;
  slug: string;
  subName?: string;
  subdirectory?: string;
}

export function ItemContainer({
  id,
  title,
  smallDescription,
  image,
  slug,
  subdirectory,
}: iAppProps) {
  return (
    <Card key={id} className="w-[300px] h-[400px] m-2 shrink-0">
      <Image
        src={image ?? DefaultImage}
        alt={title}
        className="rounded-t-lg object-cover w-full h-[200px] "
        width={200}
        height={200}
      />

      <CardHeader className="px-3 ">
        <CardTitle className="truncate text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-3 min-h-[60px]">
          {smallDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter className="px-3 ">
        <Button asChild className="w-full">
          <Link href={`/blog/${subdirectory}/${slug}`}>자세히보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
