"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";

interface CaseStudy {
  id: number;
  /** 파일명과 동일한 제목 */
  title: string;
  /** 이미지 경로 (public 루트) */
  image: string;
  /** 설명 문구 */
  desc: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "경기도시흥시180kW",
    image: "/경기도시흥시180kW.png",
    desc: "경기도 시흥시 공장 지붕에 180kW급 태양광 설비를 시공한 현장입니다. 유휴 지붕을 활용해 안정적인 발전 기반을 마련했습니다.",
  },
  {
    id: 2,
    title: "경기도시흥시300kW",
    image: "/경기도시흥시300kW.png",
    desc: "경기도 시흥시 산업단지 공장 지붕에 300kW급 설비를 시공했습니다. 대면적 지붕을 효율적으로 배치해 발전량을 극대화했습니다.",
  },
  {
    id: 3,
    title: "경기도시흥시300kW",
    image: "/경기도시흥시300kW(2).png",
    desc: "경기도 시흥시 두 번째 300kW급 지붕형 발전소입니다. 인접 건물 지붕까지 연계해 설비 규모를 확장했습니다.",
  },
  {
    id: 4,
    title: "대전광역시대화동100kW",
    image: "/대전광역시대화동100kW.png",
    desc: "대전광역시 대화동 공장 지붕에 100kW급 태양광을 시공했습니다. 무타공 공법으로 건물 손상 없이 안전하게 설치했습니다.",
  },
  {
    id: 5,
    title: "전북부안군450kW",
    image: "/전북부안군450kW.png",
    desc: "전북 부안군에 450kW급 대규모 지붕형 발전소를 시공했습니다. 넓은 창고·축사 지붕을 활용한 고용량 발전 사례입니다.",
  },
  {
    id: 6,
    title: "충남예산군300kW",
    image: "/충남예산군300kW.jpg",
    desc: "충남 예산군 부지에 300kW급 태양광 설비를 시공했습니다. 일조 조건을 고려한 배치로 안정적인 발전량을 확보했습니다.",
  },
  {
    id: 7,
    title: "충북옥천군90kW",
    image: "/충북옥천군90kW.png",
    desc: "충북 옥천군 건물 지붕에 90kW급 태양광을 시공했습니다. 소규모 부지에도 최적화된 설계로 발전 효율을 높였습니다.",
  },
  {
    id: 8,
    title: "충북증평군250kW",
    image: "/충북증평군250kW.png",
    desc: "충북 증평군 공장 지붕에 250kW급 설비를 시공했습니다. 경사 지붕에 맞춘 구조 설계로 발전 효율을 확보했습니다.",
  },
  {
    id: 9,
    title: "충북청주시100kW",
    image: "/충북청주시100kW.png",
    desc: "충북 청주시 공장 지붕에 100kW급 태양광을 시공했습니다. 주변 음영을 고려한 패널 배치로 손실을 최소화했습니다.",
  },
];

export default function CasesPage() {
  useEffect(() => {
    // Reveal Observer
    const reveals = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* Common Category Hero — 풀폭 배경, 콘텐츠는 1400px 정렬 */}
      <PageHero
        eyebrow="PORTFOLIO"
        title="대남에너지 시공 실적"
        description={"누적 설치용량 80MW. 수많은 기업과 시설이\n대남에너지와 함께 안정적인 에너지 수익을 누리고 있습니다."}
        image="/08.jpg"
        imageAlt="대남에너지 지붕형 태양광 시공 현장"
      />

      <div className="container-inner py-[90px]">
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((item) => (
            <div
              key={item.id}
              className="card-lift group bg-grey-50 rounded-2xl overflow-hidden border border-grey-100 hover:border-grey-200 flex flex-col"
              data-reveal
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} 태양광 시공 현장`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col gap-2.5">
                <h3 className="text-lg font-bold text-grey-900 leading-snug break-keep">{item.title}</h3>
                <p className="text-[14px] text-grey-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
