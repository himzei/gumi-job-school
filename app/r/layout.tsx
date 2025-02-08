import { Hero } from "../components/frontend/Hero";
import { Footer } from "../components/frontend/Footer";
import { SubPageTitle } from "../components/SubPageTitle";
import SubImg05 from "@/public/sub/sub005.png";

export default function layoutIntroduce({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Hero />
      </div>
      <SubPageTitle
        subTitle="community"
        mainTitle="커뮤니티"
        description="정부 지원으로 취업 역량 강화를 위한 맞춤 교육 과정"
        backImg={SubImg05}
      />
      {children}
      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
