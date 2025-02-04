"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";

import MainImg1 from "@/public/logo_s.png";

import ButtonCustom from "./ButtonCustom";
import { NoticeContact } from "./NoticeContact";
import Image from "next/image";
import MainSlide1 from "@/public/introduce/001.png";
import MainSlide2 from "@/public/introduce/002.png";
import MainSlide3 from "@/public/introduce/003.png";
import MainSlide4 from "@/public/introduce/004.png";
import MainSlide5 from "@/public/introduce/005.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    image: MainImg1,
    back: MainSlide1,
    description: "빅데이터 분석 기반의 멀티 전문인력 양성과정(컴활+FAT+TAT)",
    name: "산업구조변화 대응 특화훈련",
    title: "컴활+FAT+TAT과정",
    link: "https://www.daum.net",
    // link2: "https://msn.com",
  },
  {
    image: MainImg1,
    back: MainSlide2,
    description: "몸값배팅! 희망연봉, 얼마까지 상도의?",
    name: "폼나게 이직하자",
    title: "폼나게 이직하자",
    link: "https://www.google.com",
  },
  {
    image: MainImg1,
    back: MainSlide3,
    description: "몸값배팅! 희망연봉, 얼마까지 상도의?",
    name: "폼나게 이직하자",
    title: "폼나게 이직하자",
    link: "https://www.naver.com",
  },
  {
    image: MainImg1,
    back: MainSlide4,
    // description: "전화상담, 카카오상담, 메일상담 OKOKOK",
    // name: "상담신청하기",
    title: "상담신청하기",
    link: "https://www.kakao.com",
  },
  {
    image: MainImg1,
    back: MainSlide5,
    // description:
    //   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendusda.",
    // name: "생생합격후기",
    title: "생생합격후기",
    link: "https://www.marvel.com",
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
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <Image
            src={back}
            width={1920}
            height={500}
            alt="lima"
            className="w-full h-full object-cover object-center "
          />
          <div className="absolute px-4 left-[50%] -translate-x-[50%] max-w-7xl w-full h-full flex flex-col justify-center space-y-4">
            <div className="h-28">
              {/* <img
                src={image}
                alt="main_logo"
                className="h-full object-cover"
              /> */}
            </div>
            <h1 className="text-white text-4xl font-bold uppercase ">{name}</h1>
            <p className="text-xl w-2/3 md:w-1/2 text-white">{description}</p>
            <div className="py-4 flex space-x-4">
              {link && (
                <Link href={link}>
                  <Button variant="outline">자세히보기</Button>
                </Link>
              )}
              {link2 && <ButtonCustom type="unlock now" link={link2} />}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }: any) => (
  <div className="relative h-[450px] lg:h-[500px] ">
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
      <div className="w-full flex justify-center  ">
        <div className="max-w-7xl w-full py-8 grid grid-cols-1 md:grid-cols-[3fr_1fr]">
          <div className="-translate-y-8 md:-translate-y-14 z-10 bg-white md:pl-4 h-full">
            <SelectBtns
              numTracks={testimonials}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          {/* 아이콘 */}
          <div className="flex w-full h-10 items-center justify-end space-x-4 text-2xl text-gray-500">
            {/* <FaFacebookSquare /> */}
            {/* <FaInstagramSquare /> */}
            {/* <FaPinterest /> */}{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
