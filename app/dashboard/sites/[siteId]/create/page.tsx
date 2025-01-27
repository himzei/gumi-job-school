"use client";

import { CreatePostAction } from "@/app/actions";
import { TailwindEditorClient } from "@/app/components/dashboard/TailwindEditorClient";
import { UploadDropzone } from "@/app/utils/Uploadthingcomponents";
import { PostSchema } from "@/app/utils/zodSchemas";
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
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ArrowLeft, Atom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useActionState, useState } from "react";
import { toast } from "sonner";

export default function ArticleCreationRoute() {
  const params = useParams<{ siteId: string }>();
  const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
  const [lastResult, action] = useActionState(CreatePostAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: PostSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <>
      <div className="flex items-center">
        <Button size="icon" variant="outline" className="mr-3" asChild>
          <Link href={`/dashboard/sites/${params.siteId}`}>
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
          <form
            className="flex flex-col gap-6"
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
          >
            <div className="grid gap-2">
              <Label>Title</Label>
              <Input
                key={fields.title.key}
                name={fields.title.name}
                defaultValue={fields.title.initialValue}
                placeholder="Nextjs blogging application"
              />
              <p className="text-red-500 text-sm">{fields.title.errors}</p>
            </div>

            <div className="grid gap-2">
              <Label>slug</Label>
              <Input
                placeholder="article slug"
                key={fields.slug.key}
                name={fields.slug.name}
                defaultValue={fields.slug.initialValue}
              />
              <Button className="w-fit" variant="secondary" type="button">
                <Atom className="size-4 mr-2" />
                Generate Slug
              </Button>
              <p className="text-red-500 text-sm">{fields.slug.errors}</p>
            </div>

            <div className="grid gap-2">
              <Label>Small Description</Label>
              <Textarea
                key={fields.smallDescription.key}
                name={fields.smallDescription.name}
                defaultValue={fields.smallDescription.initialValue}
                placeholder="Small description for your blog article"
                className="h-32"
              />
              <p className="text-red-500 text-sm">
                {fields.smallDescription.errors}
              </p>
            </div>

            <div className="grid gap-2">
              <Label>Cover Image</Label>
              <input
                type="hidden"
                key={fields.coverImage.key}
                name={fields.coverImage.name}
                defaultValue={fields.coverImage.initialValue}
                value={imageUrl}
              />
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="uploaded image"
                  className="object-cover w-[200px] h-[200px] rounded-lg"
                  width={200}
                  height={200}
                />
              ) : (
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    setImageUrl(res[0].url);
                    toast.success("이미지가 성공적으로 업로드 되었습니다.");
                  }}
                  endpoint="imageUploader"
                  onUploadError={() => {
                    toast.error("something went wrong");
                  }}
                />
              )}
              <p className="text-red-500 text-sm">{fields.coverImage.errors}</p>
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
