"use client";

import { updateUsername } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export function SettingsForm({
  firstName,
}: {
  firstName: string | null | undefined;
}) {
  const [state, formAction] = useActionState(updateUsername, initialState);
  return (
    <form action={formAction}>
      <h1 className="text-3xl font-extrabold tracking-tight">설정</h1>
      <Separator className="my-4" />
      <Label className="text-lg">Username</Label>
      <p className="text-muted-foreground">
        커뮤니티에서 활동할 사용자이름을 설정해 주세요
      </p>
      <Input
        defaultValue={firstName ?? undefined}
        name="firstName"
        required
        className="mt-2"
        min={2}
        maxLength={21}
      />

      <div className="w-full flex mt-5 gap-x-5 justify-end">
        <Button variant="secondary" asChild type="button">
          <Link href="/">취소</Link>
        </Button>
        <Button type="submit">업데이트</Button>
      </div>
    </form>
  );
}
