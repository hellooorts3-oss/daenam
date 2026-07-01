import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  title: "대남에너지 (DN energy) - 태양광 발전·RPS·PPA·지붕임대 전문 기업",
  description: "2014년 설립, 12년의 태양광 전문 경력과 누적 설치용량 80MW. RPS 발전사업, 자가용 PPA, 지붕임대사업까지 책임지는 종합 에너지 솔루션 기업 대남에너지입니다.",
  keywords: ["대남에너지", "DN energy", "태양광", "태양광발전", "태양광시공", "신재생에너지", "RPS", "자가용PPA", "지붕임대사업", "RE100"],
  authors: [{ name: "대남에너지" }],
  openGraph: {
    title: "대남에너지 (DN energy) - 태양광 발전 전문 기업",
    description: "12년 태양광 전문 경력, 누적 설치용량 80MW. RPS·자가용 PPA·지붕임대사업 전문 종합 에너지 솔루션 기업.",
    url: "https://daenam-energy.vercel.app",
    siteName: "대남에너지",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "대남에너지 (DN energy) - 태양광 발전 전문 기업",
    description: "12년 태양광 전문 경력, 누적 설치용량 80MW의 종합 에너지 솔루션 기업.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#15499a",
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
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
