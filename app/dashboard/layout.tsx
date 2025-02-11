import Link from "next/link";
import { ReactNode } from "react";
import Logosymbol from "@/public/logo_s.png";
import Image from "next/image";
import { DashboardItems } from "../components/dashboard/DashboardItems";
import { CircleUser, DollarSign, Globe, Home } from "lucide-react";
import { ThemeToggle } from "../components/dashboard/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const navLinks = [
  {
    name: "대시보드",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "블로그사이트",
    href: "/dashboard/sites",
    icon: Globe,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid=-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={Logosymbol} alt="Logo" className="size-8 " />
              <h3 className="text-2xl">
                Blog<span className="text-primary">KJE</span>
              </h3>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-center px-2 font-medium lg:px-4">
              <DashboardItems />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <header
          className="flex h-14 items-center gap-4 border-b bg-muted/40 
        px-4 lg:h-[60px] lg:px-6"
        >
          <div className="ml-auto flex items-center">
            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <LogoutLink>로그아웃</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </section>
  );
}
