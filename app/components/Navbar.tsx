import Image from "next/image";
import Logo from "@/public/logo_s.png";
import Link from "next/link";
import { ThemeToggle } from "./dashboard/ThemeToggle";
import { ProfileDropdown } from "./ProfileDropdown";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../utils/db";
import { Hero } from "./frontend/Hero";
import { Award } from "lucide-react";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser().catch(() => null);

  let userData;

  userData = await prisma.user
    .findUnique({
      where: {
        id: user?.id,
      },
      select: {
        profileImage: true,
        username: true,
        email: true,
      },
    })
    .catch(() => null);

  return (
    <>
      <div className="max-w-7xl mx-auto w-full h-24 flex justify-center z-10 ">
        <div className="relative w-full h-full flex justify-end md:justify-between items-center text-xs">
          {/* 1. 로그인 회원가입 */}
          <div className=" space-x-2 hidden md:flex">
            <div className="flex items-center w-8 bg-primary rounded-lg p-0">
              <Award className="size-8 text-white" />
            </div>

            <div className="flex flex-col space-y-0">
              <h1 className="flex text-md items-center font-light tracking-tight translate-y-0.5">
                구미 회계 컴퓨터 전문학원
              </h1>
              <p className="flex text-lg font-bold tracking-tight translate-y-0.5">
                2025년 취업교육! 최고의 선택!!
              </p>
            </div>
          </div>

          {/* 2. 로고 */}
          <div className="absolute top-1/2 left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="logo"
                width={60}
                height={60}
                className="size-10 md:size-16"
              />
              <h1 className="text-xl md:text-4xl font-bold tracking-tighter">
                한국<span className="text-primary">직업</span>교육학원
              </h1>
            </Link>
          </div>
          {/* <MobileMenu /> */}

          {/* 3. 테마토글 */}
          <div className="px-4 h-full flex md:space-x-2 items-center z-10">
            <ThemeToggle />
            {!user ? (
              <div className="hidden md:flex uppercase h-full px-2 items-center space-x-2">
                <LoginLink>
                  <span>login</span>
                </LoginLink>
                <span className="-translate-y-[1px]">|</span>
                <RegisterLink>
                  <span>Join</span>
                </RegisterLink>
              </div>
            ) : (
              <ProfileDropdown profileImage={userData?.profileImage} />
            )}
          </div>
        </div>
      </div>

      <Hero />
    </>
  );
}
