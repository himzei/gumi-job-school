import Poster01 from "@/public/courses/001.jpg";
import Image from "next/image";

export function Courses01() {
  return (
    <>
      <div className="max-w-3xl w-full mx-auto my-8"></div>
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
