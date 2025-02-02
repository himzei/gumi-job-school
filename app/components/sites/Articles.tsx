import prisma from "@/app/utils/db";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import DefaultImage from "@/public/default.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData(userId: string) {
  const data = await prisma.site.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export async function Articles() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id);
  return (
    <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
      {data.map((item) => (
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
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/dashboard/sites/${item.id}`}>자세히보기</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
