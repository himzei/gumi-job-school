import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto py-8">
      <div className="flex justify-between">
        <div className="flex text-sm font-light space-x-2 border-b border-gray-300 pb-4">
          <p>HOME</p>
          <span className="-translate-y-[1px]">|</span>
          <p className="font-bold">개인정보취급방침</p>
          <span className="-translate-y-[1px]">|</span>
          <p>온라인 입학상담</p>
          <span className="-translate-y-[1px]">|</span>
          <p>오시는 길</p>
        </div>
        <div className="flex space-x-2 items-center">
          <RiKakaoTalkFill className="size-7" />
          <FaFacebook className="size-6" />
          <FaInstagramSquare className="size-6" />
          <FaGoogle className="size-6" />
        </div>
      </div>
      <div className="flex text-xs py-4 flex-col gap-2">
        <p>
          한국직업교육학원 경북 구미시 구미중앙로27길 15, 2~3층(원평동) /
          대표자:조현국 / 사업자번호:310-94-05594 / 전화:054-471-3455
        </p>
        <p>
          대표 E-mail:untilsee@naver.com / 개인정보보호책임자:조현국
          (untilsee@naver.com)
        </p>
      </div>
      <div>
        <span className="text-xs">
          Copyright © 2025 한국직업교육학원 All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
