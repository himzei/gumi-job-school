import { Hero } from "../components/frontend/Hero";
import { Footer } from "../components/frontend/Footer";
import { SubPageTitle } from "../components/SubPageTitle";
import SubImg02 from "@/public/sub/sub002.png";

export default function layoutIntroduce({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubPageTitle
        subTitle="course"
        mainTitle="국비지원과정"
        description="정부 지원으로 취업 역량 강화를 위한 맞춤 교육 과정"
        backImg={SubImg02}
      />
      {children}
      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
