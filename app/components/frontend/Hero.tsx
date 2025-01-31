import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo_s.png";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="logo" className="size-10" />
            <h4 className="text-3xl font-semibold">
              한국
              <span className="text-primary">직업</span>교육학교
            </h4>
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <nav className="hidden md:flex md:justify-end md:space-x-4 ">
          <ThemeToggle />
          <LoginLink>
            <Button variant="secondary">로그인</Button>
          </LoginLink>
          <RegisterLink>
            <Button>회원가입</Button>
          </RegisterLink>
        </nav>
      </div>

      <section className="relative flex items-center justify-center">
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 rounded-full">
              start
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Setup your blog
            </h1>

            <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground ">
              setting up your blog is Lorem, ipsum dolor. Lorem ipsum dolor sit.
            </p>

            <div className="flex items-center gap-x-5 w-full justify-center">
              <LoginLink>
                <Button variant="secondary">sign in</Button>
              </LoginLink>
              <RegisterLink>
                <Button>회원가입</Button>
              </RegisterLink>
            </div>
          </div>

          <div className="relative items-center w-full py-12 mx-auto"></div>
        </div>
      </section>
    </>
  );
}
