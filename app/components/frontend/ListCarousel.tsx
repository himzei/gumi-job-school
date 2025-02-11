"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import ListItem, { iAppProps } from "./ListItem";

export default function ListCarousel() {
  const [lists, setLists] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/blog");
      const data = await response.json();
      setLists(data);
    }

    getData();
  }, []);

  const CARD_WIDTH = 195;
  const CARD_HEIGHT = 340;
  const MARGIN = 8;
  const CARD_SIZE = CARD_WIDTH + MARGIN + 8;

  const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
  };
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (lists?.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <>
      <div className="w-full flex justify-center my-8 ">
        {/* 컨테이너 */}
        <div
          ref={ref}
          className="relative max-w-7xl w-full h-[380px] p-2  bg-white overflow-hidden "
        >
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {lists?.map((item) => (
              <ListItem
                key={item.id}
                imgCard={item.image}
                title={item.title}
                description={item.smallDescription}
                slug={item.slug}
                subName={item.Site?.name as string}
                CARD_WIDTH={CARD_WIDTH}
                CARD_HEIGHT={CARD_HEIGHT}
                MARGIN={MARGIN}
              />
            ))}
          </motion.div>

          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[35%] z-30 rounded-r-xl bg-slate-500/50 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[35%] z-30 rounded-l-xl bg-slate-500/50 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </div>
      </div>
    </>
  );
}
