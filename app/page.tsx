import { Hero } from "./components/frontend/Hero";
import MainSlide from "./components/frontend/MainSlide";
import { PricingTable } from "./components/dashboard/shared/Pricing";
import { Footer } from "./components/frontend/Footer";
import { SubPageTitle } from "./components/SubPageTitle";
import SubImg01 from "@/public/sub/sub001.png";
import ListCarousel from "./components/frontend/ListCarousel";
import { TitleRotate } from "./components/frontend/TitleRotate";
import Features from "./introduce/components/Features";
import { CommunityMain } from "./components/frontend/CommunityMain";

export default async function Home() {
  return (
    <>
      <section className=" mx-auto ">
        <Hero />
      </section>
      <section className="w-full mx-auto">
        <MainSlide />
      </section>

      <section className="w-full mx-auto pt-4 pb-16 border-t border-muted">
        <Features />
      </section>
      <section className="w-full mx-auto py-16 bg-gray-100">
        <div className="max-w-7xl w-full mx-auto">
          <div>
            <TitleRotate
              text="sponsored"
              mainTitle="국비지원과정"
              description="미래를 준비하는 맞춤 교육! 현재 모집 중인 다양한 과정과 커리큘럼을
                  확인하고 새로운 가능성에 도전하세요"
            />
          </div>
          <PricingTable />
        </div>
      </section>

      <section>
        <SubPageTitle
          subTitle="blogs"
          mainTitle="블로그"
          description="한국직업교육학원 유익한 교육 정보와 소식을 제공하는 공간입니다."
          backImg={SubImg01}
          className="h-[300px]"
        />
        <ListCarousel />
      </section>

      <section
        className="py-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
        }}
      >
        <CommunityMain />
      </section>

      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
