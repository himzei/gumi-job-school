"use client";

import { UploadDropzone } from "@/app/utils/Uploadthingcomponents";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { SubmitButton } from "../SubmitButton";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { UpdateImageAction } from "@/app/actions";

// interface iAppProps {
//   siteId: string;
// }

export function UploadImageForm() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const params = useParams<{ siteId: string }>();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Image</CardTitle>
        <CardDescription>
          This is the image of your site. you can change it here
        </CardDescription>
      </CardHeader>
      <CardContent>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Uploaded Image"
            width={200}
            height={200}
            className="size-[200px] object-cover rounded-lg "
          />
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);
              toast.success("Image has bee uploaded");
            }}
            onUploadError={() => {
              toast.error("Something went wrong");
            }}
          />
        )}
      </CardContent>
      <CardFooter>
        <form action={UpdateImageAction}>
          <input type="hidden" name="siteId" value={params.siteId} />
          <input type="hidden" name="imageUrl" value={imageUrl} />
          <SubmitButton text="Change Image" />
        </form>
      </CardFooter>
    </Card>
  );
}
