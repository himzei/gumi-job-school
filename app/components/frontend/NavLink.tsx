"use client";

import { useContext } from "react";
import { MenuOpenContext } from "./MenuOpenContext";
import Link from "next/link";

export default function NavLink({ children, href, FlyoutContent }: any) {
  const { setMenuOpen, setMenuContent } = useContext<any>(MenuOpenContext);

  return (
    <div
      onMouseEnter={() => {
        setMenuOpen(true);
        setMenuContent(FlyoutContent);
      }}
      onMouseLeave={() => {
        setMenuOpen(false);
      }}
      className="relative group"
    >
      <Link href={href} className="relative py-2 px-1 ">
        {children}
        <span className="absolute -bottom-1 -left-2 -right-2 h-1 origin-left  scale-x-0 group-hover:scale-x-100 rounded-full bg-red-500 transition-transform duration-300 ease-out" />
      </Link>
    </div>
  );
}
