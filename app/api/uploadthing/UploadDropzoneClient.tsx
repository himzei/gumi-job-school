"use client";

import { UploadDropzone } from "@/app/utils/Uploadthingcomponents";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export function UploadDropzoneClient() {
  const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
  return (
    <>
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
    </>
  );
}
