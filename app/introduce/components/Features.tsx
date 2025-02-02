import { AiOutlinePlus } from "react-icons/ai";
import CityImg from "@/public/introduce/city.jpg";
import FeatureImg3 from "@/public/introduce/application.jpg";
import FeatureImg4 from "@/public/introduce/accounting.jpg";
import FeatureImg5 from "@/public/introduce/bigdata.jpg";
import TitleSection from "./TitleSection";
import Image from "next/image";

const itemLists1 = [
  {
    number: "01",
    title: "350~900만원 지원",
    description:
      "참여 청년들에게 월 150만 원의 체재비와 최대 900만 원의 준비금 지원! 해외에서의 새로운 도전에 몰입할 수 있습니다",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    number: "02",
    title: "호주현지 일경험(2개월)",
    description:
      "호주에서 제공되는 다양한 직무 기회! 미용, 화장품 분야에서의 자신만의 글로벌 스토리를 만들어 보세요",
    imgUrl:
      "https://images.unsplash.com/photo-1546665291-dbef6ab58991?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
];

const itemLists2 = [
  {
    number: "03",
    title: "글로벌 경험의 첫걸음",
    description:
      "해외 기업 및 국제기구에서의 실무 경험을 통해 글로벌 직무 역량을 키울 수 있는 기회!",
    imgUrl: FeatureImg3,
    link: "#",
  },
  {
    number: "04",
    title: "휴학 없이 글로벌 경험",
    description:
      "대학생이라면 누구나 학업을 중단하지 않고 해외에서 직무 경험을 쌓을 수 있는 절호의 기회",
    imgUrl: FeatureImg4,
    link: "#",
  },
  {
    number: "05",
    title: "사전교육과 사후관리",
    description:
      "해외 생활에 필요한 언어 및 직무교육부터 귀국 후 진로 설계까지, 철저히 준비된 프로그램으로 성공적인 해외 경험을 보장",
    imgUrl: FeatureImg5,
    link: "#",
  },
];

export default function Features() {
  return (
    <div className="w-full py-16 relative">
      <div className="w-full h-[650px] absolute bottom-0 -z-10 bg-red-100">
        <div className="w-full h-full bg-slate-100 opacity-80" />
        {/* <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full absolute inset-0"
          alt="background"
        /> */}
      </div>
      <section>
        <div className="w-full flex items-center flex-col space-y-16 px-2">
          {/* 본문1 */}
          <div className="max-w-7xl w-full flex mobile:flex-col tablet:flex-row gap-8 relative">
            {itemLists1.map((item, i) => (
              <div
                key={i}
                className="bg-white w-[340px] aspect-square py-10 border border-gray-200 shadow-xl flex flex-col justify-between space-y-8 rounded-lg"
              >
                {/* title */}
                <div className="flex px-8 justify-between items-center text-xl">
                  <h3 className="text-bold text-green-600">{item.number}</h3>
                  <AiOutlinePlus />
                </div>
                {/* contents */}
                <div className="flex flex-col px-8 space-y-3">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                {/* image */}
                <div className="w-full h-20 relative pl-4">
                  <div className="w-full h-20 bg-lime-700 translate-x-4 overflow-hidden">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={item.imgUrl}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute  top-0 right-0   ">
              <TitleSection
                section="feature"
                mainTitle="해외 일경험 지원사업(WELL)"
                subTitle="학업과 경력을 동시에 잡으세요!"
              />
            </div>
          </div>

          {/* 본문2 */}
          <div className="max-w-7xl w-full flex mobile:flex-col tablet:flex-row justify-end gap-8">
            {itemLists2.map((item, i) => (
              <div
                key={i}
                className="w-[320px] aspect-square py-10 border border-gray-200 shadow-xl flex flex-col justify-between space-y-8 rounded-lg bg-white"
              >
                {/* title */}
                <div className="flex px-8 justify-between items-center text-xl">
                  <h3 className="text-bold text-green-600">{item.number}</h3>
                  <AiOutlinePlus />
                </div>
                {/* contents */}
                <div className="flex flex-col px-8 space-y-3">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                {/* image */}
                <div className="w-full h-20 relative pl-4">
                  <div className="w-full h-20 bg-lime-700 translate-x-4 overflow-hidden">
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
