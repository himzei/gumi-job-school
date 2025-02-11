import { Hero } from "../components/frontend/Hero";
import { Footer } from "../components/frontend/Footer";
import { SubPageTitle } from "../components/SubPageTitle";
import SubImg6 from "@/public/sub/sub006.png";

export default function layoutIntroduce({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubPageTitle
        subTitle="blog"
        mainTitle="블로그"
        description="한국직업교육학원 유익한 교육 정보와 소식을 제공하는 공간입니다."
        backImg={SubImg6}
      />
      <div className="max-w-7xl w-full mx-auto my-8 flex">{children}</div>
      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
