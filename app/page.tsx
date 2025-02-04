import { Hero } from "./components/frontend/Hero";
import MainSlide from "./components/frontend/MainSlide";
import { PricingTable } from "./components/dashboard/shared/Pricing";
import { Footer } from "./components/frontend/Footer";
import { SubPageTitle } from "./components/SubPageTitle";
import SubImg01 from "@/public/sub/sub001.png";
import ListCarousel from "./components/frontend/ListCarousel";

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
          subTitle="blog"
          mainTitle="블로그"
          description="한국직업교육학원 유익한 교육 정보와 소식을 제공하는 공간입니다."
          backImg={SubImg01}
        />
        <ListCarousel />
      </section>

      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
