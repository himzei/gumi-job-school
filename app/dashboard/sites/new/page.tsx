"use client";

import { CreateSiteAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { siteSchema } from "@/app/utils/zodSchemas";
import { SubmitButton } from "@/app/components/dashboard/SubmitButton";

export default function NewSiteRoute() {
  const [lastResult, action] = useActionState(CreateSiteAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: siteSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="max-w-[450px]">
        <CardHeader>
          <CardTitle>사이트 만들기</CardTitle>
          <CardDescription>
            아래 버튼을 클릭하여 사이트를 만들어 주세요!
          </CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <div className="grid gap-2">
                <Label>사이트 이름</Label>
                <Input
                  name={fields.name.name}
                  key={fields.name.key}
                  defaultValue={fields.name.initialValue}
                  placeholder="사이트 이름"
                />
                <p className="text-red-500 text-sm">{fields.name.errors}</p>
              </div>

              <div className="grid gap-2">
                <Label>Subdirectory</Label>
                <Input
                  name={fields.subdirectory.name}
                  key={fields.subdirectory.key}
                  defaultValue={fields.subdirectory.initialValue}
                  placeholder="Subdirectory"
                />
                <p className="text-red-500 text-sm">
                  {fields.subdirectory.errors}
                </p>
              </div>

              <div className="grid gap-2">
                <Label>설명</Label>
                <Textarea
                  name={fields.description.name}
                  key={fields.description.key}
                  defaultValue={fields.description.initialValue}
                  placeholder="Small description for your site"
                />
                <p className="text-red-500 text-sm">
                  {fields.description.errors}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="사이트 생성하기" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
