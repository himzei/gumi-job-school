"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "../dashboard/SubmitButton";
import { createComment } from "@/app/actions";
import { useRef } from "react";

interface iAppProps {
  postId: string;
}

export function CommentForm({ postId }: iAppProps) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className="mt-5"
      action={async (formData) => {
        await createComment(formData);
        ref.current?.reset();
      }}
      ref={ref}
    >
      <input type="hidden" name="postId" value={postId} />
      <Label>댓글작성</Label>
      <Textarea
        placeholder="당신의 소중한 의견을 말씀해 주세요"
        className="w-full mt-1 mb-2"
        name="comment"
      />
      <SubmitButton text="댓글전송" />
    </form>
  );
}
