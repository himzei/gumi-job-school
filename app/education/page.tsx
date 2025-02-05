import { SubPageTitle } from "../components/SubPageTitle";
import SubImg03 from "@/public/sub/sub003.png";

export default function EducationPage() {
  return (
    <>
      <SubPageTitle
        subTitle="introduce"
        mainTitle="기관소개"
        description="회계 기초부터 실무까지, 컴퓨터 기초 활용과 전문 IT 기술까지 체계적으로 교육하는 맞춤 과정 제공"
        backImg={SubImg03}
      />
      <div className="min-h-screen"></div>
    </>
  );
}
