import Poster01 from "@/public/courses/001.jpg";
import Poster02 from "@/public/courses/002.jpg";
import Poster03 from "@/public/courses/003.jpg";

interface iAppProps {
  id: number;
  cardTitle: string;
  cardDescription: string;
  priceTitle: string;
  benefits: string[];
  href: string;
  recruit?: string;
  release?: string;
  status?: string;
  posterImg?: any;
}

export const PricingPlans: iAppProps[] = [
  {
    id: 0,
    cardTitle: "국비지원 교육생 모집",
    cardDescription: "국비지원 교육생 모집",
    benefits: [
      "교육훈련비 100% 국비지원",
      "6개월간 500,000원 구직촉진수당 지원",
      "3개월간 300,000원 훈련수당 지원 ",
      "교재비 무료",
    ],
    priceTitle: "본인부담금 없음",
    href: "/courses/course01",
    recruit: "2024.12.30. ~ 2025.1.10.",
    release: "2025.1.10. ~ 2025.3.28.",
    posterImg: Poster01,
  },
  {
    id: 1,
    cardTitle: "컴퓨터활용능력",
    cardDescription: "(한글, 엑셀, 파워포인트)",
    benefits: [
      "내일배움카드 소지자 신청가능",
      "근로자 구직자 모두 신청가능",
      "(신청방법)고용24 > 한국직업교육학원 검색",
      "국비지원",
    ],
    priceTitle: "국비지원",
    href: "/courses/course02",
    recruit: "2024.02.01. ~ 2025.03.07.",
    release: "2025.03.04. ~ 2025.03.31.",
    posterImg: Poster02,
  },
  {
    id: 2,
    cardTitle: "결과로 증명하는 실력",
    cardDescription: "구미 회계 컴퓨터 한국직업교육학원",
    benefits: [
      "한국직업교육학원24년 회계직종 취업률 우수훈련기관",
      "FAT1급, TAT2급, 전국 최우수 훈련생 배출",
      "석박사 강사진",
      "한국전산회계학회 최우수 논문상",
      // "취업연계 맞춤형 지도",
    ],
    priceTitle: "국비지원",
    href: "/courses/course03",
    // recruit: "2025.1.10. ~ 2025.3.28.",
    // release: "2026.1.10. ~ 2026.3.28.",
    posterImg: Poster03,
  },
];
