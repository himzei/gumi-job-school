import Consulting from "./components/Consulting";
import Features from "./components/Features";
import { Poster } from "./components/Poster";
import SubImg01 from "@/public/sub/sub001.png";
import { SubPageTitle } from "../components/SubPageTitle";

export default function IntroducePage() {
  return (
    <>
      <SubPageTitle
        subTitle="introduce"
        mainTitle="기관소개"
        description="회계 기초부터 실무까지, 컴퓨터 기초 활용과 전문 IT 기술까지 체계적으로 교육하는 맞춤 과정 제공"
        backImg={SubImg01}
      />
      <div>
        <Features />
      </div>
      <div>
        <Poster />
      </div>
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
