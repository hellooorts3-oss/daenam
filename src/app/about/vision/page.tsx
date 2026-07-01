"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useReveal } from "@/components/useReveal";

interface Vision {
  icon: string;
  iconClass: string;
  title: string;
  desc: string;
  image: string;
}

const visions: Vision[] = [
  {
    icon: "/아이콘1.png",
    iconClass: "w-[82px] h-[82px]",
    title: "종합 에너지 솔루션 기업으로 성장",
    desc: "RPS 발전사업부터 자가용 PPA, 지붕임대까지\n태양광 전 분야를 아우르는 종합 솔루션을 제공합니다.",
    image: "/07.jpg",
  },
  {
    icon: "/아이콘2.png",
    iconClass: "w-[82px] h-[82px]",
    title: "ESG 경영 선도",
    desc: "투명한 사업 운영과 책임 있는 시공으로 고객과 사회가\n함께 신뢰할 수 있는 ESG 경영을 실천합니다.",
    image: "/14.jpg",
  },
  {
    icon: "/아이콘3.png",
    iconClass: "w-16 h-16",
    title: "탄소중립 실현에 기여",
    desc: "신재생에너지 보급 확대를 통해 RE100과\n국가 탄소중립 목표 달성에 앞장섭니다.",
    image: "/15.jpg",
  },
];

export default function VisionPage() {
  useReveal();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // 평소엔 자동 슬라이드 (호버 시 일시정지)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % visions.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="VISION"
        title="대남에너지의 비전"
        description={"태양광 전 분야를 아우르는 종합 에너지 솔루션 기업으로서,\nESG 경영과 탄소중립 실현에 앞장섭니다."}
        image="/03.jpg"
        imageAlt="대남에너지 태양광 발전 단지"
      />

      {/* 좌우 2분할 — 오른쪽 이미지는 화면 끝까지 와이드, 위아래는 카드박스에 맞춤 */}
      <section className="bg-white overflow-hidden py-[90px]">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {/* Left: 텍스트 카드 (콘텐츠는 1400 컨테이너 좌측 라인에 정렬) */}
          <div className="lg:w-1/2 flex items-center px-6 lg:pr-16 lg:pl-[max(1.5rem,calc((100vw_-_1400px)/2_+_1.5rem))]">
            <div className="w-full flex flex-col gap-4">
              {visions.map((vision, index) => {
                const isActive = active === index;
                return (
                  <div
                    key={index}
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    onMouseEnter={() => {
                      setActive(index);
                      setPaused(true);
                    }}
                    onMouseLeave={() => setPaused(false)}
                    className={`animate-fade group relative flex items-center gap-6 rounded-2xl px-6 py-8 border cursor-default transition-all duration-300 ease-out
                      hover:z-20 hover:scale-[1.04] lg:hover:translate-x-6 hover:bg-[#f1f6fc] hover:border-transparent
                      ${isActive ? "z-20 scale-[1.04] lg:translate-x-6 bg-[#f1f6fc] border-transparent" : "bg-white border-grey-200"}`}
                  >
                    {/* 큰 아이콘 */}
                    <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                      <Image src={vision.icon} alt="" width={96} height={96} className={`${vision.iconClass} object-contain`} />
                    </div>
                    {/* 타이틀 + 서브텍스트 */}
                    <div>
                      <h3 className="text-[20px] font-bold text-grey-900 break-keep">
                        {vision.title}
                      </h3>
                      <p className="text-[16px] text-[#75787b] leading-relaxed mt-2.5 whitespace-pre-line break-keep">
                        {vision.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: 이미지 — 오른쪽 화면 끝까지, 라운딩 없음, 카드 높이에 맞춰 stretch */}
          <div className="relative lg:w-1/2 min-h-[300px] mt-10 lg:mt-0 bg-grey-100">
            {visions.map((vision, i) => (
              <Image
                key={i}
                src={vision.image}
                alt={`${vision.title} 관련 이미지`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                className={`object-cover transition-opacity duration-700 ease-out ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* 슬라이드 인디케이터 */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {visions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
