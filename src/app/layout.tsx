import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "선드림 에너지 - 신재생에너지 및 태양광 시공 전문 기업",
  description: "지속 가능한 내일을 위한 태양광 발전 솔루션, 선드림 에너지입니다. 회사소개, 시공사례, 실시간 태양광 수익 계산기 및 1:1 친절 상담을 만나보세요.",
  keywords: ["선드림에너지", "태양광", "태양광발전", "태양광시공", "신재생에너지", "태양광계산기", "태양광수익", "친환경에너지"],
  authors: [{ name: "선드림 에너지" }],
  openGraph: {
    title: "선드림 에너지 - 신재생에너지 및 태양광 시공 전문",
    description: "지속 가능한 내일을 위한 태양광 발전 솔루션, 선드림 에너지입니다.",
    url: "https://sundream.vercel.app",
    siteName: "선드림 에너지",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "선드림 에너지 - 신재생에너지 및 태양광 시공 전문",
    description: "지속 가능한 내일을 위한 태양광 발전 솔루션, 선드림 에너지입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3182f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth h-full">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
      </head>
      <body className="bg-white text-grey-900 font-sans antialiased selection:bg-toss-blue-light selection:text-toss-blue flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
