"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import { MenuOpenContext } from "./MenuOpenContext";
import NavLink from "./NavLink";
import { Menu } from "lucide-react";

const MobileMenuLink = ({ menu, setMobileOpen }: any) => {
  return (
    <Link href={menu.href}>
      <div
        className="relative w-full flex justify-between items-center group"
        onClick={() => setMobileOpen(false)}
      >
        <div className=" text-neutral-300 duration-300 group-hover:text-white uppercase text-lg py-2.5">
          {menu.text}
        </div>
        <div className="text-white text-xl font-semibold">
          <MdArrowForwardIos />
        </div>

        {/* 밑줄 */}
        <span className="absolute left-0 right-8 bottom-0 origin-left transition-transform h-[1px] bg-primary duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
      </div>
    </Link>
  );
};

export const MobileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-0 bottom-0 flex h-screen flex-col justify-between z-10 bg-muted-foreground w-4/5"
          >
            {/* 1 위쪽 */}
            <div className="flex flex-col h-screen justify-between">
              <div>
                {/* 1 */}
                <div className="flex h-24 items-center justify-between p-4 border-b border-neutral-300 ">
                  <h1 className="text-white font-semibold text-2xl">
                    한국<span className="text-primary">직업</span>교육학원
                  </h1>
                  <button onClick={() => setMobileOpen(false)}>
                    <FiX className="text-3xl text-white " />
                  </button>
                </div>
                {/* 위쪽 */}
                <div className="p-4">
                  {MENUS.map((menu: any, index: any) => (
                    <MobileMenuLink
                      key={index}
                      menu={menu}
                      setMobileOpen={setMobileOpen}
                    />
                  ))}
                </div>
              </div>

              <div className="px-4 border-t border-muted py-5 flex flex-col space-y-1 items-end text-muted">
                <p>
                  한국직업교육학원 경북 구미시 구미중앙로27길 15, 2~3층(원평동)
                </p>

                <p> 전화:054-471-5677</p>
              </div>
            </div>

            {/* 아래쪽 */}
          </motion.nav>
        )}
      </AnimatePresence>
      <button
        className="rounded-lg border px-2 py-2.5 flex items-center space-x-1"
        onClick={() => setMobileOpen(true)}
      >
        <Menu className="size-5" />
        <span className="text-md">MENU</span>
      </button>
    </div>
  );
};

const MENUS = [
  {
    text: "HOME",
    href: "/",
    // component: NewsComponent,
  },
  {
    text: "기관소개",
    href: "/introduce",
    // component: NewsComponent,
  },
  {
    text: "국비지원과정",
    href: "/courses",
    // component: ComicsComponent,
  },
  {
    text: "커뮤니티",
    href: "/r",
  },
  {
    text: "블로그",
    href: "/blog",
  },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuContent, setMenuContent] = useState();
  const showFlyout = menuContent && menuOpen;

  return (
    <section className="mx-auto sticky top-0 transition-all duration-700 z-20 shadow-lg">
      <MenuOpenContext.Provider
        value={{ menuOpen, setMenuOpen, setMenuContent }}
      >
        <div>
          <div className="w-full bg-muted h-10 border-t -z-10 border-slate-300 hidden md:flex justify-center uppercase items-center space-x-8">
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
                className="absolute w-full flex justify-center bg-white shadow-md"
              >
                <div className="absolute -top-2 left-0 right-0 h-6 bg-tranparent" />

                {menuContent}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MenuOpenContext.Provider>
    </section>
  );
}
