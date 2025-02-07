"use client";

import TitleSection from "./TitleSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import { useActionState, useEffect } from "react";
import { SendMailAction } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { EmailSchema } from "@/app/utils/zodSchemas";
import { toast } from "sonner";

const initialState = {
  message: "",
  status: "",
};

export default function Consulting() {
  const [lastResult, action] = useActionState(SendMailAction, initialState);

  const [form, fields] = useForm({
    lastResult: lastResult as any,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: EmailSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  console.log(lastResult, "asasasas");
  useEffect(() => {
    if (lastResult.status === "success") {
      toast.success("메세지가 성공적으로 전송되었습니다.");
    }
  }, [lastResult.status]);
  return (
    <>
      <div className="flex justify-center max-w-xl w-full mx-auto gap-8">
        {/* 본문 */}
        <div className="w-full mx-auto py-16 bg-white px-8 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-12">
            <div className="space-y-4">
              <TitleSection
                section="consulting"
                mainTitle="한국직업교육학원 상담신청"
                subTitle="맞춤형 교육상담을 신청하세요!"
                // subTitle2="문의주세요"
              />
              <div className="flex flex-col">
                <h2 className="font-semibold text-gray-500">교육문의전화</h2>
                <p className="text-3xl">054)471-3455</p>
              </div>
            </div>
            <form id={form.id} onSubmit={form.onSubmit} action={action}>
              <div className="flex flex-col w-full space-y-4">
                <div className="grid gap-2">
                  <Input
                    placeholder="성명"
                    name={fields.name.name}
                    key={fields.name.key}
                    defaultValue={fields.name.initialValue}
                  />
                  <p className="text-red-500 text-sm">{fields.name.errors}</p>
                </div>
                <div className="grid gap-2">
                  <Input
                    placeholder="휴대폰"
                    name={fields.phone.name}
                    key={fields.phone.key}
                    defaultValue={fields.phone.initialValue}
                  />
                  <p className="text-red-500 text-sm">{fields.phone.errors}</p>
                </div>
                <div className="grid gap-2">
                  <Input
                    placeholder="이메일"
                    name={fields.email.name}
                    key={fields.email.key}
                    defaultValue={fields.email.initialValue}
                  />
                  <p className="text-red-500 text-sm">{fields.phone.errors}</p>
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="희망하는 과정을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="과정1">
                      컴퓨터활용능력을 기반으로 한 사무관리원 양성과정
                    </SelectItem>
                    <SelectItem value="과정2">과정2</SelectItem>
                    <SelectItem value="과정3">과정3</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid gap-2">
                  <Textarea
                    placeholder="궁금한 사항을 입력해주세요"
                    name={fields.message.name}
                    key={fields.message.key}
                    defaultValue={fields.message.initialValue}
                  />
                  <p className="text-red-500 text-sm">
                    {fields.message.errors}
                  </p>
                </div>
                <div className="flex w-full h-full items-center justify-between border border-gray-200 px-2 py-2">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <div className="w-5 h-5 border border-gray-400"></div>
                    <p className="text-sm text-gray-700">
                      개인정보처리방침 동의합니다
                    </p>
                  </div>
                  <div className="flex h-full items-center">
                    <Button>내용보기</Button>
                  </div>
                </div>
                <SubmitButton
                  className="w-full"
                  variant="default"
                  text="전송하기"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
