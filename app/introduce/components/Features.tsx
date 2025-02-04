import { AiOutlinePlus } from "react-icons/ai";
import FeatureImg3 from "@/public/introduce/application.jpg";
import FeatureImg4 from "@/public/computer.png";
import FeatureImg5 from "@/public/introduce/bigdata.jpg";
import TitleSection from "./TitleSection";
import Image from "next/image";

const itemLists1 = [
  {
    number: "01",
    title: "전문 강사진 구성",
    description: "실무 경험이 풍부한 전문 강사진이 체계적인 교육을 제공합니다.",
    imgUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    number: "02",
    title: "다양한 교육 과정",
    description:
      "회계와 컴퓨터 분야의 기초부터 실무까지 맞춤형 교육을 운영합니다.",
    imgUrl:
      "https://images.unsplash.com/photo-1546665291-dbef6ab58991?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
];

const itemLists2 = [
  {
    number: "03",
    title: "국비지원 과정 제공",
    description: "정부 지원으로 수강 부담 없이 취업 역량을 강화할 수 있습니다.",
    imgUrl: FeatureImg3,
    link: "#",
  },
  {
    number: "04",
    title: "최신 교육 시설 완비",
    description:
      "최신 컴퓨터와 실습 환경을 통해 실무에 바로 적용 가능한 기술을 익힙니다.",
    imgUrl: FeatureImg4,
    link: "#",
  },
  {
    number: "05",
    title: "맞춤형 취업 지원",
    description:
      "개인 맞춤형 취업 컨설팅과 연계로 수료 후 취업 성공을 지원합니다.",
    imgUrl: FeatureImg5,
    link: "#",
  },
];

export default function Features() {
  return (
    <div className="w-full py-8 relative ">
      <div className="w-full h-[500px] absolute bottom-0 -z-10 ">
        <div className="w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-indigo-500/0 from-10% via-sky-500/20 via-30% to-emerald-500/0 to-90%" />
        </div>
      </div>
      <section>
        {/* 본문1 */}
        <div className="w-full max-w-7xl flex items-center flex-col space-y-8 p-16 border-4 border-[#c6a972]/30 border-dashed rounded-xl mx-auto">
          <div className=" w-full flex mobile:flex-col tablet:flex-row gap-8 relative">
            {itemLists1.map((item, i) => (
              <div
                key={i}
                className="bg-white w-[340px] aspect-square py-10 border border-gray-200 shadow-xl flex flex-col justify-between space-y-8 rounded-lg group hover:shadow-none hover:-translate-x-1 hover:-translate-y-1 duration-500"
              >
                {/* title */}
                <div className="flex px-8 justify-between items-center text-xl">
                  <h3 className="text-bold text-primary">{item.number}</h3>
                  <AiOutlinePlus />
                </div>
                {/* contents */}
                <div className="flex flex-col px-8 space-y-3">
                  <h2 className="text-2xl tracking-tight font-bold group-hover:text-primary transition duration-500">
                    {item.title}
                  </h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                {/* image */}
                <div className="w-full h-20 relative pl-4">
                  <div className="w-full h-20  translate-x-4 overflow-hidden transition duration-500 group-hover:-translate-x-1.5">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={item.imgUrl}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute  top-0 right-0">
              <TitleSection
                section="feature"
                mainTitle="훈련생을 위한 한국직업교육학원!"
                subTitle="교육과 취업을 동시에 잡으세요!!"
              />
            </div>
          </div>

          {/* 본문2 */}
          <div className="w-full flex mobile:flex-col tablet:flex-row justify-end gap-8">
            {itemLists2.map((item, i) => (
              <div
                key={i}
                className="w-[320px] aspect-square py-8 border border-gray-200 shadow-xl flex flex-col justify-between space-y-4 rounded-lg bg-white group hover:shadow-none hover:-translate-x-1 hover:-translate-y-1 duration-500"
              >
                {/* title */}
                <div className="flex px-8 justify-between items-center text-xl">
                  <h3 className="text-bold text-primary">{item.number}</h3>
                  <AiOutlinePlus />
                </div>
                {/* contents */}
                <div className="flex flex-col px-8 space-y-2">
                  <h2 className="text-2xl tracking-tight font-bold group-hover:text-primary transition duration-500">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {/* image */}
                <div className="w-full h-20 relative pl-4">
                  <div className="w-full h-20 translate-x-4 overflow-hidden transition duration-500 group-hover:-translate-x-1.5">
                    <Image
                      className="object-cover object-center w-full h-full"
                      src={item.imgUrl}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
