import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import { PrivatePolicy } from "../PrivatePolicy";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto py-8">
      <div className="flex md:justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center text-sm font-light gap-2 border-b border-gray-300 ">
          <Link href="/">
            <Button variant="ghost">HOME</Button>
          </Link>
          {/* <span className="-translate-y-[1px] sr-only md:block">|</span> */}
          <p className="font-bold">
            <PrivatePolicy vType="ghost" />
          </p>
          {/* <span className="-translate-y-[1px] sr-only md:block">|</span> */}
          <Link href="courses">
            <Button variant="ghost">온라인 입학상담</Button>
          </Link>
          {/* <span className="-translate-y-[1px] sr-only md:block">|</span> */}
          <Link href="/introduce">
            <Button variant="ghost">오시는 길</Button>
          </Link>
        </div>
        <div className="hidden md:flex space-x-2 space-y-0 items-center">
          <RiKakaoTalkFill className="size-7" />
          <FaFacebook className="size-6" />
          <FaInstagramSquare className="size-6" />
          <FaGoogle className="size-6" />
        </div>
      </div>
      <div className="flex text-xs py-4 flex-col gap-2 text-muted-foreground px-4">
        <p>
          한국직업교육학원 경북 구미시 구미중앙로27길 15, 2~3층(원평동) /
          대표자:조현국 / 사업자번호:310-94-05594 / 전화:054-471-3455
        </p>
        <p>
          대표 E-mail:untilsee@naver.com / 개인정보보호책임자:조현국
          (untilsee@naver.com)
        </p>
      </div>
      <div className="px-4">
        <span className="text-xs text-muted-foreground">
          Copyright © 2025 한국직업교육학원 All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
