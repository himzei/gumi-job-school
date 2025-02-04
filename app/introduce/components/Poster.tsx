import Image from "next/image";
import { outlineContents } from "./outlineContents";
import TitleSection from "./TitleSection";
import HistoryImg from "@/public/introduce/history.png";

export function Poster() {
  return (
    <div className="w-full flex flex-col space-y-16 py-16 max-w-7xl mx-auto px-4">
      {/* title */}
      <TitleSection
        section="history"
        mainTitle="한국직업교육학원 연혁"
        subTitle="성장과 발전의 발자취를 담다"
      />
      {/* 본문 */}
      <div className="grid sm:grid-cols-1 space-y-8 md:grid-cols-2">
        {/* 1 */}
        <div className="flex flex-col space-y-8">
          {outlineContents.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex flex-col space-y-2">
                {/* number */}
                <div className="flex items-center">
                  <p className="text-red-500 font-semibold mr-2">{item.no}</p>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                </div>
                <div className="pl-2 text-gray-700">
                  {/* 내용 */}
                  <p className="">{item.content1}</p>
                  {item.content2 && <p className=" ">{item.content2}</p>}
                  {item.content3 && <p className=" ">{item.content3}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 2 */}
        <div>
          <Image
            width={500}
            height={700}
            src={HistoryImg}
            alt="poster-img"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
