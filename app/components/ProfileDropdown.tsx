import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserPen } from "lucide-react";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface iAppProps {
  profileImage: string | undefined;
}

export function ProfileDropdown({ profileImage }: iAppProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="rounded-lg border px-1 py-1 lg:px-2 lg:py-1 flex items-center gap-x-3">
            <UserPen className="size-5 lg:size-6" />
            <img
              src={profileImage as string}
              alt="avatar of user"
              className="rounded-full h-8 w-8"
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
    </>
  );
}
