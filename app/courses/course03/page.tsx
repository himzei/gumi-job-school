import Consulting from "@/app/introduce/components/Consulting";
import Poster01 from "@/public/courses/001.jpg";
import Image from "next/image";

export default function Courses03() {
  return (
    <>
      <div className="max-w-3xl w-full mx-auto mt-16">
        <h1 className="text-3xl font-light tracking-tight text-center">
          빅데이터기반의 멀티사무관리원 양성과정
        </h1>
        <p className="text-muted-foreground text-center">
          구미 회계 컴퓨터 학원 ADsP + 전산세무회계(FAT1급, TAT2급)
        </p>
      </div>

      <div className="w-full h-full">
        <div className="max-w-5xl w-full mx-auto my-16">
          <Image
            src={Poster01}
            alt="poster01"
            width={1024}
            height={1443}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* 상담신청 */}
      <div className="relative">
        <img
          className="w-full h-[1000px] object-cover"
          src="https://images.unsplash.com/photo-1579546929556-bf8352f5889c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
        />
        <div className="absolute inset-0 w-full h-full flex items-center">
          <Consulting />
        </div>
      </div>
    </>
  );
}
