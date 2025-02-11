"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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

export const MobileMenu = () => {
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
                <h4>구미회계·컴퓨터</h4>
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
                className="absolute w-full flex justify-center bg-white  shadow-md"
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
