import Image, { StaticImageData } from "next/image";
import { TitleRotate } from "./frontend/TitleRotate";

interface iAppProps {
  subTitle: string;
  mainTitle: string;
  description: string;
  backImg: StaticImageData;
}

export function SubPageTitle({
  subTitle,
  mainTitle,
  description,
  backImg,
}: iAppProps) {
  return (
    <>
      <div className="relative w-full h-[500px] flex justify-end border-t border-b border-gray-700">
        <div
          className="w-[55%] h-full"
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
        <div className="absolute left-[50%] -translate-x-[50%] px-4 max-w-7xl w-full h-full flex flex-col justify-center space-y-8">
          <div>
            <TitleRotate text={subTitle} color="dark" />
            <h2 className="text-4xl font-bold uppercase py-2">{mainTitle}</h2>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center">
        <div className="max-w-7xl w-full mx-auto bg-white shadow-lg"></div>
      </div>
    </>
  );
}
