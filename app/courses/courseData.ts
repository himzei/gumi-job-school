import Poster01 from "@/public/courses/001.jpg";
import Poster02 from "@/public/courses/002.jpg";

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
    cardTitle: "빅데이터기반의 멀티사무관리원 양성과정",
    cardDescription: "ADsP + 전산세무회계(FAT1급, TAT2급)",
    benefits: [
      "교육훈련비 100% 국비지원",
      "6개월간 500,000원 구직촉진수당 지원",
      "3개월간 300,000원 훈련수당 지원 ",
      "교재비 무료",
    ],
    priceTitle: "본인부담금 없음",
    href: "/courses/course01",
    recruit: "2024.12.30. ~ 2025.1.10",
    release: "2024.1.10. ~ 2025.3.28",
    posterImg: Poster01,
  },
  {
    id: 1,
    cardTitle: "빅데이터기반의 멀티사무관리원 양성과정",
    cardDescription: "ADsP + 전산세무회계(FAT1급, TAT2급)",
    benefits: [
      "unlimited sites",
      "up to 1000 visitors",
      "up to 1000 visitors",
      "up to 1000 visitors",
    ],
    priceTitle: "200,000원",
    href: "/courses/course02",
    recruit: "2024.12.30. ~ 2025.1.10",
    release: "2024.1.10. ~ 2025.3.28",
    posterImg: Poster02,
  },
  {
    id: 2,
    cardTitle: "빅데이터기반의 멀티사무관리원 양성과정",
    cardDescription: "ADsP + 전산세무회계(FAT1급, TAT2급)",
    benefits: [
      "unlimited sites",
      "up to 1000 visitors",
      "up to 1000 visitors",
      "up to 1000 visitors",
    ],
    priceTitle: "200,000원",
    href: "/courses/course03",
    recruit: "2024.12.30. ~ 2025.1.10",
    release: "2024.1.10. ~ 2025.3.28",
    posterImg: Poster01,
  },
];
