import { DeletePostAction } from "@/app/actions";
import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function DeleteForm({
  params,
}: {
  params: { siteId: string; articleId: string };
}) {
  const { siteId, articleId } = await params;
  return (
    <div className="flex flex-1 items-center justify-center ">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutely sure? </CardTitle>
          <CardDescription>
            This action cannot be undone, thiw will delete article and remove
            all data from our server
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant="secondary" asChild>
            <Link href={`/dashboard/sites/${siteId}`}>cancel</Link>
          </Button>
          <form action={DeletePostAction}>
            <input type="hidden" name="articleId" value={articleId} />
            <input type="hidden" name="siteId" value={siteId} />
            <SubmitButton variant="destructive" text="Delete Article" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
