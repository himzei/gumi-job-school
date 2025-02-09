"use client";

import { createCommunity } from "@/app/actions";
import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState = {
  message: "",
  status: "",
};

export default function SubredditPage() {
  const [state, formAction] = useActionState(createCommunity, initialState);
  useEffect(() => {
    if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <div className="max-w-7xl mx-auto flex flex-col my-16">
      <form action={formAction}>
        <h1 className="text-3xl font-extrabold tracking-tight">
          커뮤니티 이름 만들기
        </h1>
        <Separator className="my-4" />
        <Label className="text-lg">Name</Label>
        <p className="text-muted-foreground">
          커뮤니티 이름을 영문으로 생성해 주세요
        </p>
        <div className="relative mt-3">
          <p className="absolute left-0 w-8 flex items-center justify-center h-full text-muted-foreground">
            r/
          </p>
          <Input
            name="name"
            required
            className="pl-6"
            minLength={2}
            maxLength={21}
          />
        </div>
        <p className="mt-1 text-destructive text-sm">{state.message}</p>
        <div className="w-full flex mt-5 gap-x-5">
          <Button asChild variant="secondary" type="submit">
            <Link href="/">취소</Link>
          </Button>
          <SubmitButton text="생성하기" />
        </div>
      </form>
    </div>
  );
}
