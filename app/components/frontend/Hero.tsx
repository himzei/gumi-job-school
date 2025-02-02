"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo_s.png";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import { MenuOpenContext } from "./MenuOpenContext";
import NavLink from "./NavLink";

const MobileMenuLink = ({ menu }: any) => {
  return (
    <Link href={menu.href}>
      <div className="relative w-full flex justify-between items-center group">
        <div className="text-neutral-300 duration-300 group-hover:text-white uppercase text-lg py-2.5">
          {menu.text}
        </div>
        <div className="text-red-600 text-xl font-semibold">
          <MdArrowForwardIos />
        </div>

        {/* 밑줄 */}
        <span className="absolute left-0 right-8 bottom-0 origin-left transition-transform h-[1px] bg-neutral-600 duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
      </div>
    </Link>
  );
};

const MobileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="block md:hidden z-30">
      <button
        className="block text-2xl px-2"
        onClick={() => setMobileOpen(true)}
      >
        <FiMenu />
      </button>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 bottom-0 flex h-screen w-full flex-col justify-between bg-main-dark"
          >
            {/* 1 위쪽 */}
            <div>
              {/* 1 */}
              <div className="flex items-center justify-between p-3 border-b border-neutral-300">
                <button onClick={() => setMobileOpen(false)}>
                  <FiX className="text-2xl text-white" />
                </button>
                <div className="text-white text-lg">
                  <FaSearch />
                </div>
              </div>
              {/* 위쪽 */}
              <div className="bg-main-dark p-4">
                {MENUS.map((menu: any, index: any) => (
                  <MobileMenuLink
                    key={index}
                    menu={menu}
                    setMobileOpen={setMobileOpen}
                  />
                ))}
              </div>
            </div>

            {/* 아래쪽 */}
            <div className="text-white px-4 py-4 flex flex-col">
              {/* 1 */}
              <div className="py-8 px-2 text-yellow-600 border-t border-neutral-500">
                <h4>MARVEL INSIDER</h4>
                <div className="w-full flex justify-between py-4">
                  <h3 className="text-white text-lg">KEN</h3>

                  <div className="text-red-600 text-xl font-semibold">
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex justify-around border-t border-neutral-500 py-8 "></div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const MENUS = [
  {
    text: "기관소개",
    href: "/characters",
    // component: NewsComponent,
  },
  {
    text: "국비지원과정",
    href: "/comics",
    // component: ComicsComponent,
  },
  {
    text: "교육신청",
    href: "#",
  },
  {
    text: "고객센터",
    href: "#",
  },
  {
    text: "커뮤니티",
    href: "#",
  },
];

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(false);

  const [menuContent, setMenuContent] = useState();
  const showFlyout = menuContent && menuOpen;
  return (
    <>
      <MenuOpenContext.Provider
        value={{ menuOpen, setMenuOpen, setMenuContent }}
      >
        <div
          className="sticky top-0 z-[99] transition-all duration-700"
          style={{
            transform: `${scrolled ? "translateY(-80px)" : "translateY(0)"}`,
          }}
        >
          <div className="max-w-7xl mx-auto w-full h-16 flex justify-center ">
            <div className="relative w-full h-full flex justify-between items-center  text-xs">
              {/* login */}
              <div className="hidden md:flex uppercase h-full px-4  items-center space-x-2">
                <Image src={Logo} alt="logo small" width={30} height={30} />
                <LoginLink>
                  <span>login</span>
                </LoginLink>
                <span className="-translate-y-[1px]">|</span>
                <RegisterLink>
                  <span>Join</span>
                </RegisterLink>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter">
                  한국<span className="text-primary">직업</span>교육학원
                </h1>
              </div>
              {/* mobile 메뉴 */}
              <MobileMenu />
              {/* 메뉴 아이콘 */}
              <div className="block md:hidden px-4 cursor-pointer text-2xl">
                <IoMenuSharp />
              </div>
              {/* search */}
              <div className="px-4 h-full flex md:space-x-4 items-center ">
                <ThemeToggle />
                {/* search */}
                <div className="text-lg">
                  <FaSearch />
                </div>
              </div>
              {/* 로고 : absolute */}
              <div className="absolute top-0 left-[50%] -translate-x-[50%] h-12 ">
                {logoSize ? (
                  <Link href="/">
                    <div className="h-full"></div>
                  </Link>
                ) : (
                  <Link href="/">
                    <div className="h-full"></div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full bg-muted h-10 border-t border-slate-300 hidden md:flex justify-center uppercase items-center space-x-8">
            {MENUS.map((menu) => (
              <NavLink
                key={menu.text}
                href={menu.href}
                // FlyoutContent={menu.component}
              >
                {menu.text}
              </NavLink>
            ))}
          </div>

          <AnimatePresence>
            {showFlyout && (
              <motion.div
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute w-full flex justify-center bg-white  shadow-md"
              >
                <div className="absolute -top-2 left-0 right-0 h-6 bg-tranparent" />

                {menuContent}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MenuOpenContext.Provider>
    </>
  );
}
