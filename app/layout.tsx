import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/dashboard/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한국직업교육학원",
  description:
    "경북 구미 훈련생을 위한 한국직업교육학원! 교육과 취업을 동시에 잡으세요!!",
  openGraph: {
    title: "한국직업교육학원",
    description:
      "경북 구미 훈련생을 위한 최고의 교육 기회! 교육과 취업을 동시에 잡으세요!",
    url: "https://gumi-job-school.vercel.app", // 실제 URL로 변경
    siteName: "한국직업교육학원",
    images: [
      {
        url: "@/public/logo_s.png", // 이미지 경로
        width: 1200,
        height: 630,
        alt: "한국직업교육학원",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "한국직업교육학원",
    description: "교육과 취업을 동시에 잡으세요!",
    images: ["@/public/logo_s.png"],
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
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
