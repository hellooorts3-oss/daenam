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
    title: "경기도 시흥시 180kW",
    image: "/경기도시흥시180kW.jpg",
    desc: "경기도 시흥시에 180kW급 태양광 발전 설비를 시공한 현장입니다. 유휴 지붕을 활용해 안정적인 발전 기반을 마련했습니다.",
  },
  {
    id: 2,
    title: "경기도 시흥시 240kW",
    image: "/경기도시흥시240kW.jpg",
    desc: "경기도 시흥시에 240kW급 태양광 발전 설비를 시공했습니다. 정밀 발전량 분석을 바탕으로 효율적인 설비 배치를 완료했습니다.",
  },
  {
    id: 3,
    title: "경기도 시흥시 300kW",
    image: "/경기도시흥시300kW(2).jpg",
    desc: "경기도 시흥시에 300kW급 태양광 발전 설비를 시공했습니다. 대면적 지붕을 활용해 발전량을 극대화한 사례입니다.",
  },
  {
    id: 4,
    title: "경기도 안성시 150kW",
    image: "/경기도안성시150kW.jpg",
    desc: "경기도 안성시에 150kW급 태양광 발전 설비를 시공했습니다. 무타공 공법으로 건물 손상 없이 안전하게 준공했습니다.",
  },
  {
    id: 5,
    title: "경기도 안성시 300kW",
    image: "/경기도안성시300kW.jpg",
    desc: "경기도 안성시에 300kW급 태양광 발전 설비를 시공했습니다. 넓은 부지를 활용한 고용량 발전 현장입니다.",
  },
  {
    id: 6,
    title: "경기도 평택시 120kW",
    image: "/경기도평택시120kW.jpg",
    desc: "경기도 평택시에 120kW급 태양광 발전 설비를 시공했습니다. 소규모 부지에도 최적화된 설계로 발전 효율을 높였습니다.",
  },
  {
    id: 7,
    title: "전북 부안군 450kW",
    image: "/전북부안군450kW.jpg",
    desc: "전북 부안군에 450kW급 태양광 발전 설비를 시공했습니다. 대규모 지붕을 활용한 고용량 발전 사례입니다.",
  },
  {
    id: 8,
    title: "충남 청양군 350kW",
    image: "/충남청양군350kW.jpg",
    desc: "충남 청양군에 350kW급 태양광 발전 설비를 시공했습니다. 일조 조건을 고려한 배치로 안정적인 발전량을 확보했습니다.",
  },
  {
    id: 9,
    title: "충남 아산시 150kW",
    image: "/충남아산시150kW.jpg",
    desc: "충남 아산시에 150kW급 태양광 발전 설비를 시공했습니다. 유휴 공간을 활용해 안정적인 수익 기반을 마련했습니다.",
  },
  {
    id: 10,
    title: "충북 옥천군 150kW",
    image: "/충북옥천군150kW.jpg",
    desc: "충북 옥천군에 150kW급 태양광 발전 설비를 시공했습니다. 실시간 모니터링 체계로 장기 발전 효율을 관리합니다.",
  },
  {
    id: 11,
    title: "대전광역시 150kW",
    image: "/충남대전시150kW.jpg",
    desc: "대전광역시에 150kW급 태양광 발전 설비를 시공했습니다. 도심 건물 지붕을 활용한 발전 현장입니다.",
  },
  {
    id: 12,
    title: "대전광역시 200kW",
    image: "/충남대전시200kW.jpg",
    desc: "대전광역시에 200kW급 태양광 발전 설비를 시공했습니다. 안정적인 계통연계로 발전을 시작한 사례입니다.",
  },
  {
    id: 13,
    title: "대전광역시 250kW",
    image: "/충남대전시250kW.jpg",
    desc: "대전광역시에 250kW급 태양광 발전 설비를 시공했습니다. 정량적 사업타당성 분석을 바탕으로 설계·시공했습니다.",
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
        {/* Case Studies Grid — 카드 박스·라운딩 없이 이미지 갤러리 형태 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {caseStudiesData.map((item) => (
            <div key={item.id} className="group flex flex-col" data-reveal>
              {/* Image — 4:3 비율, object-cover로 화질 손상 없이 정렬 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} 태양광 시공 현장`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body Content */}
              <div className="pt-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-grey-900 leading-snug break-keep">{item.title}</h3>
                <p className="text-[14px] text-[#75787b] leading-relaxed">
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
