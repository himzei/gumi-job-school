import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/dashboard/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한국직업교육학원 - 구미 회계,세무,컴퓨터 학원",
  description:
    "경북 구미 훈련생을 위한 한국직업교육학원! 교육과 취업을 동시에 잡으세요!!",
  openGraph: {
    title: "한국직업교육학원",
    description:
      "경북 구미 훈련생을 위한 최고의 교육 기회! 교육과 취업을 동시에 잡으세요!",
    url: "https://www.krcea.com", // 실제 URL로 변경
    siteName: "한국직업교육학원",
    images: [
      {
        url: "https://h38vngwx8h.ufs.sh/f/YGU4yJ0f4XMTDz4YKStRhfbTHLNI86lJCtG5W2309EsXxVir", // 이미지 경로
        width: 650,
        height: 320,
        alt: "한국직업교육학원",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "한국직업교육학원",
    description: "교육과 취업을 동시에 잡으세요!",
    // images: ["@/public/logo_s.png"],
  },
  // <meta name="naver-site-verification" content="값" />으로 변환된다.
  other: {
    "naver-site-verification": "622c649a4d3e1fc72bce2e6d0babebc600482557",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // hydration error suppressHydrationWarning 추가
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <Toaster richColors closeButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
