import { EmptyState } from "@/app/components/dashboard/EmptyState";
import prisma from "@/app/utils/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Book,
  FileIcon,
  MoreHorizontal,
  PlusCircle,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(userId: string, siteId: string) {
  const data = await prisma.post.findMany({
    where: {
      userId: userId,
      siteId: siteId,
    },
    select: {
      image: true,
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function SiteIdRoute({
  params,
}: {
  params: { siteId: string };
}) {
  const { siteId } = await params;
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }
  const data = await getData(user.id, siteId);

  return (
    <>
      <div className="flex w-full justify-end gap-x-4 ">
        <Button asChild variant="secondary">
          <Link href="#">
            <Book className="size-4" />
            블로그 보기
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={`/dashboard/sites/${siteId}/settings`}>
            <Settings className="size-4" />
            세팅
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/dashboard/sites/${siteId}/create`}>
            <PlusCircle className="size-4" />
            글쓰기
          </Link>
        </Button>
      </div>
      {data === undefined || data.length === 0 ? (
        <EmptyState
          title="사이트 만들기"
          description="현재 생성된 사이트가 없습니다. 새로운 사이트를 만들어 주세요!"
          href={`/dashboard/sites/${siteId}/create`}
          buttonText="사이트 만들기"
        />
      ) : (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
              <CardDescription>
                manage article in a simple and instructive interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Imate</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Image
                          src={item.image}
                          width={60}
                          height={60}
                          alt="Article cover image"
                          className=" size-16 rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.title}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-500"
                        >
                          Published
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat("ko-KR", {
                          dateStyle: "medium",
                        }).format(item.createdAt)}
                      </TableCell>
                      <TableCell className="text-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoreHorizontal className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/sites/${siteId}/${item.id}`}
                              >
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/sites/${siteId}/${item.id}/delete`}
                              >
                                Delete
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
