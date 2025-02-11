import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect, useState } from "react";

export function ProfileDropdown() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    async function handleUserProfile() {
      const response = await fetch("/api/auth");
      const data = await response.json();
      setUser(data);
    }

    handleUserProfile();
  }, []);

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
              <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
              <img
                src={user.profileImage as string}
                alt="avatar of user"
                className="rounded-full h-8 w-8 hidden lg:block"
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>
              <Link className="w-full" href="/r/create">
                내 커뮤니티 생성
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/create">
                커뮤니티 글 작성
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/settings">
                설정
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="w-full">로그아웃</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="hidden md:flex uppercase h-full px-2 items-center space-x-2">
          <LoginLink>
            <span>login</span>
          </LoginLink>
          <span className="-translate-y-[1px]">|</span>
          <RegisterLink>
            <span>Join</span>
          </RegisterLink>
        </div>
      )}
    </>
  );
}
