"use client";

import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "../dashboard/SubmitButton";
import { updateSubDescription } from "@/app/actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

interface iAppProps {
  subName: string;
  description: string | null | undefined;
}

const initialState = {
  message: "",
  status: "",
};

export function SubDescriptionForm({ description, subName }: iAppProps) {
  const [state, formAction] = useActionState(
    updateSubDescription,
    initialState
  );
  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form className="mt-3" action={formAction}>
      <input type="hidden" name="subName" value={subName} />
      <Textarea
        placeholder="커뮤니티에 대한 간단한 설명글을 작성해 주세요"
        maxLength={100}
        name="description"
        defaultValue={description ?? undefined}
      />
      <SubmitButton text="저장" className="w-full mt-2" />
    </form>
  );
}
