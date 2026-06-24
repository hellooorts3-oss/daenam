"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CaseStudy {
  id: number;
  title: string;
  category: "commercial" | "residential";
  location: string;
  capacity: string;
  efficiency: string;
  monthlyRevenue: string;
  installDate: string;
  desc: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "경기 안산 반월공단 지붕형 태양광 시공",
    category: "commercial",
    location: "경기도 안산시 단원구",
    capacity: "500 kW",
    efficiency: "18.4%",
    monthlyRevenue: "약 850만 원",
    installDate: "2025.10",
    desc: "공장의 노후화된 지붕 보강공사와 함께 유휴 공간에 대용량 양면 수광형 모듈을 시공하여 RE100 달성과 안정적인 공장 부가 수익을 동시에 창출했습니다.",
  },
  {
    id: 2,
    title: "충남 당진 상업용 지상형 발전소",
    category: "commercial",
    location: "충청남도 당진시",
    capacity: "990 kW",
    efficiency: "19.1%",
    monthlyRevenue: "약 1,750만 원",
    installDate: "2025.04",
    desc: "음영이 없는 광활한 야지에 고효율 트래커 시스템형 태양광 패널을 배치하여 시간당 최고의 발전 효율을 보여주는 메가와트급 시공 사례입니다.",
  },
  {
    id: 3,
    title: "서울 은평구 친환경 단독주택 미니 발전소",
    category: "residential",
    location: "서울특별시 은평구",
    capacity: "3 kW",
    efficiency: "17.8%",
    monthlyRevenue: "월 평균 6.5만 원 절감",
    installDate: "2026.02",
    desc: "도심 단독주택 옥상에 슬림형 거치대로 패널을 설치하여, 한여름 에어컨 풀가동 시에도 전기요금 폭탄 걱정 없는 제로 에너지 하우스를 실현했습니다.",
  },
  {
    id: 4,
    title: "강원 원주 상가건물 옥상 태양광",
    category: "commercial",
    location: "강원도 원주시",
    capacity: "45 kW",
    efficiency: "18.0%",
    monthlyRevenue: "약 82만 원",
    installDate: "2025.08",
    desc: "다양한 상가가 입점한 상업용 건물 옥상의 콘크리트 바닥면을 활용, 구조물 높이를 높여 건물 하중 분산 기술을 적용해 안전하게 시공을 마무리했습니다.",
  },
  {
    id: 5,
    title: "경기 용인 전원주택 지붕 밀착형 시공",
    category: "residential",
    location: "경기도 용인시 기흥구",
    capacity: "6 kW",
    efficiency: "18.2%",
    monthlyRevenue: "월 평균 12만 원 절감",
    installDate: "2025.12",
    desc: "전원주택 외관 디자인을 해치지 않도록 검은색 지붕 기와와 조화를 이루는 고품격 올블랙 모듈을 사용하여 모던한 감성을 유지하며 친환경 에너지를 생산합니다.",
  }
];

export default function CasesPage() {
  const [caseFilter, setCaseFilter] = useState<"all" | "commercial" | "residential">("all");

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
  }, [caseFilter]);

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container-inner">
        {/* Title and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal>
          <div>
            <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">PORTFOLIO</span>
            <h1 className="text-3xl md:text-4xl font-bold text-grey-900 mt-2 mb-4 tracking-tight">선드림 에너지 시공 실적</h1>
            <p className="text-lg text-grey-700">
              수많은 기업과 주택이 선드림 에너지와 함께 안정적인 에너지를 누리고 있습니다.
            </p>
          </div>
          
          {/* Filter Chips */}
          <div className="flex gap-2 select-none shrink-0">
            <button 
              onClick={() => setCaseFilter("all")}
              className={`px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-200 ${
                caseFilter === "all" 
                  ? "bg-toss-blue text-white shadow-sm" 
                  : "bg-grey-100 text-grey-700 hover:bg-grey-200"
              }`}
            >
              전체
            </button>
            <button 
              onClick={() => setCaseFilter("commercial")}
              className={`px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-200 ${
                caseFilter === "commercial" 
                  ? "bg-toss-blue text-white shadow-sm" 
                  : "bg-grey-100 text-grey-700 hover:bg-grey-200"
              }`}
            >
              공장/상업용
            </button>
            <button 
              onClick={() => setCaseFilter("residential")}
              className={`px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-200 ${
                caseFilter === "residential" 
                  ? "bg-toss-blue text-white shadow-sm" 
                  : "bg-grey-100 text-grey-700 hover:bg-grey-200"
              }`}
            >
              주택용
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData
            .filter(item => caseFilter === "all" || item.category === caseFilter)
            .map((item) => (
              <div 
                key={item.id} 
                className="bg-grey-50 rounded-2xl overflow-hidden border border-grey-100 hover:border-grey-200 hover:shadow-sm transition-all duration-300 flex flex-col"
                data-reveal
              >
                {/* Decorative Header Area */}
                <div className="h-44 bg-slate-950 p-6 flex flex-col justify-between relative overflow-hidden">
                  <Image
                    src={item.category === "commercial" ? "/images/factory-solar.png" : "/images/residential-solar.png"}
                    alt={`${item.title} 시공 이미지`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-toss-blue/20 rounded-full filter blur-2xl"></div>
                  <div className="relative flex justify-between items-start">
                    <span className={`px-2.5 py-1 text-[12px] font-semibold rounded-full ${
                      item.category === "commercial" 
                        ? "bg-toss-blue-light text-toss-blue" 
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {item.category === "commercial" ? "상업/공장" : "가정/주택"}
                    </span>
                    <span className="text-[13px] text-slate-300 font-medium">{item.installDate} 완공</span>
                  </div>
                  <div className="relative">
                    <div className="text-[13px] text-blue-300 font-semibold mb-1">{item.location}</div>
                    <h3 className="text-lg font-bold text-white leading-tight drop-shadow">{item.title}</h3>
                  </div>
                </div>
                
                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-[14px] text-grey-700 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-grey-200/50 text-center mt-auto">
                    <div>
                      <div className="text-[11px] text-grey-500 font-medium">설치 용량</div>
                      <div className="text-[15px] font-bold text-grey-900 mt-1">{item.capacity}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-grey-500 font-medium">발전 효율</div>
                      <div className="text-[15px] font-bold text-emerald-600 mt-1">{item.efficiency}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-grey-500 font-medium">실제 성과</div>
                      <div className="text-[15px] font-bold text-toss-blue mt-1">{item.monthlyRevenue}</div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
