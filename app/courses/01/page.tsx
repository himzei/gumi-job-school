import Poster01 from "@/public/courses/001.jpg";
import Image from "next/image";

export default function Courses01() {
  return (
    <>
      <div className="max-w-3xl w-full mx-auto my-8">
        <h1 className="text-3xl font-light tracking-tight text-center">
          빅데이터기반의 멀티사무관리원 양성과정
        </h1>
        <p className="text-muted-foreground text-center">
          구미 회계 컴퓨터 학원 ADsP + 전산세무회계(FAT1급, TAT2급)
        </p>
      </div>
      <div className="w-full h-full">
        <div className="max-w-5xl w-full mx-auto">
          <Image
            src={Poster01}
            alt="poster01"
            width={1024}
            height={1443}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
}
