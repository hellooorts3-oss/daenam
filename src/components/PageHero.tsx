import React from "react";
import Image from "next/image";
import { Sun } from "lucide-react";

interface PageHeroProps {
  /** 영문 카테고리 라벨 (예: "ABOUT US") */
  eyebrow: string;
  /** 카테고리 제목 (페이지의 h1) */
  title: string;
  /** 카테고리 소개 문구 (문자열 또는 JSX — 모바일 전용 줄바꿈 등에 활용) */
  description: React.ReactNode;
  /** 배경 이미지 경로. 미지정 시 브랜드 그라데이션 플레이스홀더가 표시됩니다. */
  image?: string;
  /** 배경 이미지 대체 텍스트 */
  imageAlt?: string;
  /** 배경 이미지의 보이는 위치(object-position). 예: "object-[center_75%]" (기본: 중앙) */
  objectPosition?: string;
}

/**
 * 서브 카테고리 페이지 공통 소개 헤더.
 * 배경은 화면 가로 전체로 확장되고, 콘텐츠만 1400px 컨테이너에 정렬됩니다.
 * 이미지가 준비되면 `image` prop만 채우면 됩니다.
 */
export default function PageHero({ eyebrow, title, description, image, imageAlt, objectPosition }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 배경: 이미지 또는 브랜드 플레이스홀더 (가로 전체) */}
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="100vw"
            quality={90}
            className={`object-cover ${objectPosition ?? ""}`}
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-900/40"></div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-toss-blue via-toss-blue-dark to-slate-900">
          <Sun className="absolute right-[8%] top-1/2 -translate-y-1/2 w-56 h-56 text-white/10" />
          <div className="absolute -left-10 bottom-0 w-72 h-72 bg-brand-green/15 rounded-full blur-3xl"></div>
          <div className="absolute right-1/3 top-1/4 w-44 h-44 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      )}

      {/* 콘텐츠 (1400px 컨테이너 정렬) */}
      <div className="container-inner relative z-10 pt-36 md:pt-48 pb-28 md:pb-40">
        <div className="max-w-2xl flex flex-col gap-4">
          <span
            className="animate-rise inline-flex self-start items-center text-[13px] bg-white/15 backdrop-blur text-white font-bold px-3 py-1 rounded-full tracking-wider uppercase"
            style={{ animationDelay: "0.05s" }}
          >
            {eyebrow}
          </span>
          <h1
            className="animate-rise text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight whitespace-pre-line break-keep drop-shadow-sm"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>
          <p
            className="animate-rise text-white/85 text-base md:text-lg leading-relaxed whitespace-pre-line break-keep"
            style={{ animationDelay: "0.28s" }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
