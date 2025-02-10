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
import { JSONContent } from "@tiptap/react";

interface iAppProps {
  id: string;
  articleContent: any;
  title: string;
  smallDescription: string;
  image: string;
  createdAt: any;
}

export function ItemContainer({
  id,
  articleContent,
  title,
  smallDescription,
  image,
  createdAt,
}: iAppProps) {
  return (
    <Card key={id}>
      <Image
        src={image ?? DefaultImage}
        alt={title}
        className="rounded-t-lg object-cover w-full h-[200px] "
        width={200}
        height={200}
      />
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {smallDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/">자세히보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
