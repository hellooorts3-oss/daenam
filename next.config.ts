import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16부터 quality 값은 allowlist에 등록해야 사용 가능
    qualities: [75, 90],
    // AVIF 우선 인코딩으로 동일 용량 대비 화질 향상
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
