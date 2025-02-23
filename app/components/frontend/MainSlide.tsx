"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MainImg1 from "@/public/logo_s.png";
import { NoticeContact } from "./NoticeContact";
import Image from "next/image";
import MainSlide1 from "@/public/introduce/001.png";
import MainSlide2 from "@/public/introduce/002.png";
import MainSlide3 from "@/public/introduce/003.png";
import MainSlide4 from "@/public/introduce/004.png";
import MainSlide5 from "@/public/introduce/005.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    image: MainImg1,
    back: MainSlide1,
    description: "빅데이터 분석 기반의 멀티 전문인력 양성과정(컴활+FAT+TAT)",
    name: "산업구조변화 대응 특화훈련",
    title: "한국직업교육학원을\n 소개합니다",
    link: "/introduce",
    // link2: "https://msn.com",
  },
  {
    image: MainImg1,
    back: MainSlide2,
    description: "몸값배팅! 희망연봉, 얼마까지 상도의?",
    name: "폼나게 이직하자",
    title: "수강생들의 생생한 인터뷰와 성장이야기",
    link: "https://www.google.com",
  },
  {
    image: MainImg1,
    back: MainSlide3,
    description: "몸값배팅! 희망연봉, 얼마까지 상도의?",
    name: "폼나게 이직하자",
    title: "예비수강생들을 위한 특별한 맞춤상담",
    link: "https://www.krcea.com/introduce",
  },
  {
    image: MainImg1,
    back: MainSlide4,
    // description: "전화상담, 카카오상담, 메일상담 OKOKOK",
    // name: "상담신청하기",
    title: "수강생 합격후기 & 성과",
    link: "https://www.krcea.com/blog/news/1740236673668",
  },
  {
    image: MainImg1,
    back: MainSlide5,
    // description:
    //   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendusda.",
    // name: "생생합격후기",
    title: "SNS 해시테그 이벤트",
    link: "https://www.krcea.com/blog/promotion/hee",
  },
];

const SelectBtns = ({ numTracks, setSelected, selected }: any) => {
  return (
    <div className="flex gap-2">
      {numTracks.map((item: any, index: any, array: any) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className="h-2 w-full bg-slate-300 relative"
        >
          {selected === index ? (
            <motion.span
              className="absolute top-0 left-0 bottom-0 bg-red-600"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 5,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                setSelected(selected === array.length - 1 ? 0 : selected + 1);
              }}
            />
          ) : (
            <span
              className="absolute top-0 left-0 bottom-0 "
              style={{ width: selected > index ? "100%" : "0%" }}
            />
          )}
          <p
            className={`text-gray-500 leading-5 ${
              selected === index && "text-red-600"
            } w-full h-16 text-left items-start pt-4 px-1 hidden md:flex `}
          >
            {item.title}
          </p>
        </button>
      ))}
    </div>
  );
};

const Card = ({
  back,
  description,
  name,
  image,
  link,
  link2,
  position,
  selected,
  setSelected,
}: any) => {
  const offset = position <= selected ? 0 : 100;

  return (
    <div className=" w-full h-full flex justify-center">
      <motion.div
        initial={false}
        style={{
          zIndex: position,
        }}
        animate={{
          x: `${offset}%`,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        onClick={() => setSelected(position)}
        className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 flex flex-col items-center justify-center"
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center ">
          {/* <div className="absolute inset-0 bg-red-500 h-full w-full z-50" /> */}
          <Link href={link}>
            <Image
              fill
              src={back}
              alt="lima"
              className="w-full h-auto object-center object-cover"
            />
          </Link>
        </div>

        {/* <div className="absolute left-0 right-0 top-0 w-full h-full" /> */}
      </motion.div>
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }: any) => (
  <div className="relative w-full h-[600px] md:h-[550px] ">
    {testimonials.map((item: any, index: any) => (
      <Card
        {...item}
        key={index}
        position={index}
        selected={selected}
        setSelected={setSelected}
      />
    ))}
  </div>
);

export default function MainSlide() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="w-full flex flex-col overflow-hidden">
      <NoticeContact />
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[3fr_1fr]">
          <div className=" bg-white dark:bg-black md:pl-4 h-16">
            <SelectBtns
              numTracks={testimonials}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          {/* 아이콘 */}
        </div>
      </div>
    </section>
  );
}
