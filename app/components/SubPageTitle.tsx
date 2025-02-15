import Image, { StaticImageData } from "next/image";
import { TitleRotate } from "./frontend/TitleRotate";
import { cn } from "@/lib/utils";

interface iAppProps {
  subTitle: string;
  mainTitle: string;
  description: string;
  backImg: StaticImageData;
  className?: string;
}

export function SubPageTitle({
  subTitle,
  mainTitle,
  description,
  backImg,
  className,
}: iAppProps) {
  return (
    <>
      <div
        className={cn(
          "relative w-full h-[300px] flex justify-end border-t border-b border-gray-700 ",
          className
        )}
      >
        <div
          className="w-[55%] h-full hidden md:flex"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
          }}
        >
          <Image
            fill
            src={backImg}
            className="w-full h-full object-cover"
            alt="title-img"
          />
        </div>
        <div className="absolute w-full h-full max-w-7xl left-[50%] transform -translate-x-[50%]">
          <div className="w-full h-full">
            <TitleRotate
              text={subTitle}
              mainTitle={mainTitle}
              description={description}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center">
        <div className="max-w-7xl w-full mx-auto bg-white shadow-lg"></div>
      </div>
    </>
  );
}
