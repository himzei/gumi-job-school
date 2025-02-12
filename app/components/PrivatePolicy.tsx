"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function PrivatePolicy({ vType }: any) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={vType}>개인정보취급방침</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>개인정보취급방침</DialogTitle>
          <DialogDescription>
            한국직업교육학원 개인정보취급방침
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col text-sm space-y-5 h-[600px] overflow-scroll text-muted-foreground p-2 ">
          <h2 className="text-black dark:text-muted">
            한국직업교육학원(이하 ‘본원’이라 한다)는 개인정보 보호법 제30조에
            따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
            원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
            처리지침을 수립, 공개합니다.
          </h2>

          <div className="flex flex-col space-y-2">
            <p className="text-black dark:text-muted">
              제1조 개인정보의 처리목적
            </p>
            <div>
              <p>
                본원은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의
                목적 이외의 용도로는 이용하지 않습니다.{" "}
              </p>
              <p>
                - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인
                식별․인증, 회원자격 유지․관리, 물품 또는 서비스 공급에 따른 금액
                결제, 물품 또는 서비스의 공급․배송 등{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-black dark:text-muted">
              제2조 개인정보의 처리 및 보유기간{" "}
            </p>
            <div>
              <p>
                ① 본원은 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보
                보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서
                개인정보를 처리․보유합니다.{" "}
              </p>
              <p>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다. </p>
              <p>
                - 고객 가입 및 관리 : 서비스 이용계약 또는 회원가입 해지시까지,
                다만 채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지{" "}
              </p>
              <p>
                - 전자상거래에서의 계약․청약철회, 대금결제, 재화 등 공급기록 :
                5년{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-black dark:text-muted">
              제3조 개인정보의 제3자 제공{" "}
            </p>
            <div>
              <p>
                본원은 정보주체의 별도 동의, 법률의 특별한 규정 등 개인정보
                보호법 제17조에 해당하는 경우 외에는 개인정보를 제3자에게
                제공하지 않습니다.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-black dark:text-muted">
              제4조 정보주체와 법정대리인의 권리․의무 및 행사방법{" "}
            </p>

            <div>
              <p>
                정보주체는 마선생 마약국밥에 대해 언제든지 다음 각 호의 개인정보
                보호 관련 권리를 행사할 수 있습니다.{" "}
              </p>

              <p>1. 개인정보 열람요구 </p>
              <p>2. 개인정보에 오류 등이 있을 경우 정정 요구 </p>
              <p>3. 삭제요구 </p>
              <p>
                4. 처리정지 요구 제5조 처리하는 개인정보 항목 본원은 다음의
                개인정보 항목을 처리하고 있습니다.{" "}
              </p>
              <p>- 성명, 연락처, 이메일</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
