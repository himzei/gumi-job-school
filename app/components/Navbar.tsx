import Image from "next/image";
import Logo from "@/public/logo_s.png";
import Link from "next/link";
import { ThemeToggle } from "./dashboard/ThemeToggle";
import { ProfileDropdown } from "./ProfileDropdown";

export function Navbar() {
  return (
    <div className="relative w-full h-full flex justify-between items-center text-xs">
      {/* 1. 로그인 회원가입 */}
      <div className="hidden md:flex uppercase h-full px-4 items-center space-x-2">
        <Image
          src={Logo}
          alt="logo small"
          width={20}
          height={20}
          className="translate-x-1 grayscale"
        />
      </div>
      {/* 2. 로고 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="logo" width={60} height={60} />
          <h1 className="text-4xl font-bold tracking-tighter">
            한국<span className="text-primary">직업</span>교육학원
          </h1>
        </Link>
      </div>
      {/* <MobileMenu /> */}

      {/* 3. 테마토글 */}
      <div className="px-4 h-full flex md:space-x-2 items-center z-10">
        <ThemeToggle />
        <ProfileDropdown />
      </div>
    </div>
  );
}
