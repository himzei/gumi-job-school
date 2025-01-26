import { UploadDropzoneClient } from "@/app/api/uploadthing/UploadDropzoneClient";
import TailwindEditor from "@/app/components/dashboard/EditorWrapper";
import { TailwindEditorClient } from "@/app/components/dashboard/TailwindEditorClient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Atom } from "lucide-react";
import Link from "next/link";

export default async function ArticleCreationRoute({
  params,
}: {
  params: { siteId: string };
}) {
  const { siteId } = await params;

  return (
    <>
      <div className="flex items-center">
        <Button size="icon" variant="outline" className="mr-3" asChild>
          <Link href={`/dashboard/sites/${siteId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">블로그 글쓰기</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Article Detail</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            excepturi distinctio animi nulla hic aliquam saepe itaque. Et itaque
            vero cupiditate sint suscipit iure corrupti nulla expedita,
            exercitationem voluptatibus harum.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label>Title</Label>
              <Input placeholder="Nextjs blogging application" />
            </div>

            <div className="grid gap-2">
              <Label>slug</Label>
              <Input placeholder="article slug" />
              <Button className="w-fit" variant="secondary" type="button">
                <Atom className="size-4 mr-2" />
                Generate Slug
              </Button>
            </div>

            <div className="grid gap-2">
              <Label>Small Description</Label>
              <Textarea
                placeholder="Small description for your blog article"
                className="h-32"
              />
            </div>

            <div className="grid gap-2">
              <Label>Cover Image</Label>
              <UploadDropzoneClient />
            </div>

            <div className="grid gap-2">
              <Label>Article Content</Label>
              <TailwindEditorClient />
            </div>

            <Button className="w-fit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
