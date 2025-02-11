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
      <SubPageTitle
        subTitle="community"
        mainTitle="커뮤니티"
        description="다양한 주제와 의견이 활발히 공유되는 공간! 당신의 소중한 이야기를 들려주세요"
        backImg={SubImg05}
      />
      {children}
      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
