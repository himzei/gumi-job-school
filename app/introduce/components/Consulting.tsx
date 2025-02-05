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
import { useActionState } from "react";
import { SendMailAction } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { EmailSchema } from "@/app/utils/zodSchemas";

export default function Consulting() {
  const [lastResult, action] = useActionState(SendMailAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: EmailSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <>
      {/* 다이얼로그 */}
      {/* <Dialog open={open} handler={handleOpen}>
        <DialogHeader>개인정보처리방침</DialogHeader>
        <DialogBody
          divider
          className="mobile:h-[30rem] tablet:h-[40rem] overflow-scroll"
        >
          <Typography className="font-normal">
            한국직업개발교육원(이하 교육원)은 고객님의 개인정보를 중요시하며,
            정보통신망 이용촉진 및 정보보호 에 관한 법률을 준수하고 있습니다.
            <br />
            <br />
            교육원은 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가
            어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
            조치가 취해지고 있는지 <br />
            알려드립니다.
            <br />
            교육원은 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는
            개별공지)을 통하여 공지할 것입니다.
            <br />
            <br />ο 본 방침은 : 2025년 1월 1일 부터 시행됩니다.
            <br />
            <br />
            1. 수집하는 개인정보 항목
            <br />
            교육원은 교육 관련상담, 서비스 신청 등을 위해 아래와 같은 개인정보를
            수집하고 있습니다.
            <br />- 수집항목 : 이름, 휴대폰번호, 이메일
            <br />- 개인정보 수집방법 : 홈페이지(상담신청)
            <br />
            <br />
            2. 개인정보의 수집 및 이용목적
            <br />
            교육원는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
            <br />- 교육 서비스 제공에 관한 상담 신청
            <br />- 마케팅 및 광고에 활용 및 이벤트 등 광고성 정보 전달
            <br />
            <br />
            3. 개인정보의 보유 및 이용기간
            <br />
            개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이
            파기합니다.
            <br />
            <br />
            4. 개인정보의 파기절차 및 방법
            <br />
            교육원은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
            정보를 지체없이 파기합니다.
            <br />
            파기절차 및 방법은 다음과 같습니다.
            <br />- 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
            기술적 방법을 사용하여 삭제
            <br />
            <br />
            5. 개인정보 제공
            <br />
            교육원은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다.
            <br />- 이용자들이 사전에 동의한 경우
            <br />- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
            방법에 따라 수사기관의 요구가 있는 경우
            <br />
            <br />
            6. 수집한 개인정보의 위탁
            <br />
            교육원은 교육의 원활한 개인정보 업무처리를 위하여 아래 현황과 같이
            개인정보 처리업무를 위탁하고 있습니다.
            <br />① 수탁업체
            <br />
            <br />
            <br />
            7. 이용자 및 법정대리인의 권리와 그 행사방법
            <br />
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할
            수 있으며 가입해지를 요청할 수도 있습니다.
            <br />
            이용자들의 개인정보 조회,수정을 위해서는 개인정보변경 (또는
            회원정보수정 회원탈퇴 를 클릭하여 본인 확인 절차를 거치신
            <br />후 직접 열람, 정정 또는 탈퇴가 가능합니다.
            <br />
            혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면
            지체없이 조치하겠습니다.
            <br />
            귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
            완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
            <br />
            또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
            처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록
            하겠습니다.
            <br />
            교육원는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 교육원가
            수집하는 개인정보의 보유 및 이용기간 에 명시된 바에 따라 처리하고
            <br />그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
            <br />
            <br />
            8. 개인정보에 관한 민원서비스
            <br />
            교육원는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
            처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를
            지정하고 있습니다.
            <br />
            <br />
            개인정보관리책임자 성명 : 조현일
            <br />
            전화번호 : 010-7186-0119
            <br />
            <br />
            귀하께서는 교육원의 서비스를 이용하시며 발생하는 모든 개인정보보호
            관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.
            <br />
            교육원는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴
            것입니다.
            <br />
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
            문의하시기 바랍니다.
            <br />
            <br />
            1.개인분쟁조정위원회 (www.1336.or.kr/1336)
            <br />
            2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
            <br />
            3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)
            <br />
            4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button color="green" onClick={handleOpen}>
            <span>확인</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
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

                <Textarea placeholder="궁금한 사항을 입력해주세요" />

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
