import { Hero } from "./components/frontend/Hero";
import MainSlide from "./components/frontend/MainSlide";
import { PricingTable } from "./components/dashboard/shared/Pricing";
import { Footer } from "./components/frontend/Footer";
import { SubPageTitle } from "./components/SubPageTitle";
import SubImg01 from "@/public/sub/sub001.png";

export default async function Home() {
  return (
    <>
      <section className=" mx-auto ">
        <Hero />
      </section>
      <section className="w-full mx-auto">
        <MainSlide />
      </section>
      <section className="w-full mx-auto  py-16">
        <div className="max-w-7xl w-full mx-auto">
          <PricingTable />
        </div>
      </section>

      <section>
        <SubPageTitle
          subTitle="기관소개"
          mainTitle="기관소개"
          description="회계 기초부터 실무까지, 컴퓨터 기초 활용과 전문 IT 기술까지 체계적으로 교육하는 맞춤 과정 제공"
          backImg={SubImg01}
        />
      </section>

      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
