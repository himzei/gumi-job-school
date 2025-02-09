import TitleSection from "@/app/introduce/components/TitleSection";
import Poster01 from "@/public/courses/001.jpg";
import Image from "next/image";

export function Courses01() {
  return (
    <>
      <div className="max-w-3xl w-full mx-auto my-8">
        <TitleSection
          // section="contact"
          mainTitle="구미시 구미중앙로27길 15"
          subTitle="한국직업교육학원"
          // subTitle2="문의주세요"
        />
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
