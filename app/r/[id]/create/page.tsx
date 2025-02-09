"use client";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import pfp from "@/public/community/pfp.png";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TipTapEditor } from "@/app/components/community/TipTapEditor";
import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import { useState } from "react";
import { JSONContent } from "@tiptap/react";
import { useParams } from "next/navigation";
import { UploadDropzone } from "@/app/utils/Uploadthingcomponents";
import { toast } from "sonner";
import { createCommunityPost } from "@/app/actions";
import { SubredditTags } from "@/app/components/community/SubredditTas";

const rules = [
  {
    id: 1,
    title: "존중과 배려",
    text: "모든 사용자는 서로를 존중하고 배려하는 언어를 사용해야 합니다. 인신공격, 혐오 발언, 차별적 표현은 금지됩니다.",
  },
  {
    id: 2,
    title: "관련성 있는 주제:",
    text: "게시글은 커뮤니티 주제와 관련성이 있어야 합니다. 주제와 맞지 않는 게시글은 관리자에 의해 삭제될 수 있습니다.",
  },
  {
    id: 3,
    title: "불법 및 저작권 위반 금지",
    text: "불법적인 콘텐츠 또는 타인의 저작물을 무단으로 게시하는 행위는 금지됩니다.",
  },
  {
    id: 4,
    title: "개인정보 보호",
    text: "본인이나 타인의 개인정보(전화번호, 주소, 이메일 등)를 게시하지 마세요.",
  },
  {
    id: 5,
    title: "스팸 및 광고 금지",
    text: "사전 허가 없이 상업적 광고나 반복적인 스팸성 게시글 작성을 금합니다.",
  },
];

export default function CreatePostRoute() {
  const { id } = useParams<{ id: string }>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [json, setJson] = useState<JSONContent>({});
  const [title, setTitle] = useState<string>("");

  const createPostReddit = createCommunityPost.bind(null, {
    jsonContent: json,
  });
  return (
    <div className="max-w-7xl w-full my-16 mx-auto flex gap-x-10">
      {/* Left Side */}
      <div className="w-[65%] flex flex-col gap-y-5">
        <h1 className="font-semibold ">
          카테고리:{" "}
          <Link href={`/r/${id}`} className="text-primary">
            {id}
          </Link>
        </h1>
        <Tabs defaultValue="post" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="post">
              <Text className="size-4 mr-2" />
              Post
            </TabsTrigger>
            <TabsTrigger value="image">
              <Video className="size-4 mr-2" />
              Video & Image
            </TabsTrigger>
          </TabsList>
          <TabsContent value="post">
            <Card>
              <form action={createPostReddit}>
                <input
                  type="hidden"
                  name="imageUrl"
                  value={imageUrl ?? undefined}
                />
                <input type="hidden" name="subName" value={id} />
                <CardHeader>
                  <Label>제목</Label>
                  <Input
                    required
                    name="title"
                    placeholder="제목을 작성해주세요"
                    value={title ?? ""}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <TipTapEditor setJson={setJson} json={json} />
                </CardHeader>
                <CardFooter>
                  <SubmitButton text="글 작성하기" />
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="image">
            <Card>
              <CardHeader>
                {imageUrl === "" ? (
                  <UploadDropzone
                    className="ut-button:bg-primary ut-button:ut-readying:bg-primary/50 ut-label:text-primary ut-button:ut-uploading:bg-primary/50 ut-button:ut-uploading:after:bg-primary"
                    onClientUploadComplete={(res) => {
                      toast.success("파일을 정상적으로 업로드 하였습니다.");
                      setImageUrl(res[0].url);
                    }}
                    endpoint="imageUploader"
                    onUploadError={(error: Error) => {
                      toast.error("업로드중 문제가 발생했습니다. ");
                    }}
                  />
                ) : (
                  <Image
                    src={imageUrl}
                    alt="uploaded Image"
                    width={600}
                    height={400}
                    className="object-contain h-80 rounded-lg w-full "
                  />
                )}
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* Right Side */}
      <div className="w-[35%] flex flex-col gap-y-5">
        <Card className="flex flex-col p-4">
          <div className="flex items-center gap-x-2">
            <Image src={pfp} alt="pfp" className="size-10" />
            <h1 className="font-medium">포스팅</h1>
          </div>
          <Separator className="my-2" />

          <div className="flex flex-col gap-y-5 mt-5">
            {rules.map((item) => (
              <div key={item.id}>
                <p className="text-sm font-light text-muted-foreground">
                  {item.id}. {item.text}
                </p>
                <Separator className="mt-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
