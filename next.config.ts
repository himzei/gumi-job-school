import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    // Turbopack 개발 모드에서 정적 import 이미지를 최적화할 때 빈 버퍼로 실패하는 경우가 있어
    // 개발 환경에서만 최적화를 끕니다. 프로덕션(next build)에서는 그대로 최적화됩니다.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
      },
    ],
  },
};

export default nextConfig;
