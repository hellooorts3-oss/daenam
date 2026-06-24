"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  Check
} from "lucide-react";

interface HistoryYear {
  year: string;
  events: string[];
}

const historyData: HistoryYear[] = [
  {
    year: "2026년",
    events: [
      "태양광 발전 시공 누적 용량 50MW 돌파",
      "RE100 전담 환경 에너지 솔루션 파트너 선정",
      "친환경 저탄소 고효율 시공 특허 출원"
    ]
  },
  {
    year: "2025년",
    events: [
      "수도권 및 충청권 시공 지사 망 확대",
      "소형 상업용 태양광 전력거래 스마트 모니터링 시스템 출시",
      "중기부 혁신 스타트업 및 기술평가 최우수 등급 획득"
    ]
  },
  {
    year: "2024년",
    events: [
      "한국에너지공단 주택지원사업 공식 협력 시공사 지정",
      "공장 지붕 특화형 무타공 고정 브라켓 구조 기술 개발",
      "대기업 모듈 파트너십 체결 (한화 Q셀 등 1등급 정품 사용 의무화)"
    ]
  },
  {
    year: "2023년",
    events: [
      "선드림 에너지 주식회사 설립 (신재생에너지 전문 전문 면허 취득)",
      "창립 핵심 가치 선포: '가장 투명한 견적, 신뢰할 수 있는 수명 보장'",
      "초기 엔젤 투자 유치 및 태양광 발전소 유지보수(O&M) 전담팀 창단"
    ]
  }
];

export default function AboutPage() {
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
    <div className="py-16 md:py-24 bg-white">
      <div className="container-inner">
        {/* Hero Banner */}
        <div className="relative w-full h-56 md:h-72 rounded-3xl overflow-hidden mb-16 shadow-sm" data-reveal>
          <Image
            src="/images/ground-solar.png"
            alt="광활한 부지에 펼쳐진 선드림 에너지 태양광 발전 단지"
            fill
            sizes="(max-width: 1040px) 100vw, 1040px"
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-10">
            <span className="inline-block text-[13px] bg-white/15 backdrop-blur text-white font-bold px-3 py-1 rounded-full tracking-wider uppercase mb-3">ABOUT US</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow">태양으로 그리는 지속 가능한 내일</h2>
          </div>
        </div>

        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">ABOUT US</span>
          <h1 className="text-3xl md:text-4xl font-bold text-grey-900 mt-2 mb-4 tracking-tight">선드림 에너지 이야기</h1>
          <p className="text-lg text-grey-700 leading-relaxed whitespace-pre-line">
            우리는 과장된 홍보와 복잡한 용어로 가득 찬 태양광 시공 시장에서 탈피하여,{"\n"}
            <strong>가장 투명하고 정직한 시공과 철저한 사후 관리</strong>로 보답합니다.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-grey-50 p-8 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-grey-200 transition-all duration-300 group" data-reveal>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-grey-900">철저한 투명 정밀 시공</h3>
            <p className="text-grey-700 leading-relaxed text-[15px]">
              한화 Q셀 등 대기업 1등급 정품 모듈만을 사용하여 수명 20년을 아낌없이 보장합니다. 저가 자재 사용과 허위 계약을 철저히 배제합니다.
            </p>
          </div>

          <div className="bg-grey-50 p-8 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-grey-200 transition-all duration-300 group delay-100" data-reveal>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-grey-900">정량적 시뮬레이션 기반</h3>
            <p className="text-grey-700 leading-relaxed text-[15px]">
              발전 부지의 일조량, 경사도, 인근 음영 등을 3D 시뮬레이션하여 가장 오차가 적고 보수적인 수익성 데이터를 사전에 제공합니다.
            </p>
          </div>

          <div className="bg-grey-50 p-8 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-grey-200 transition-all duration-300 group delay-200" data-reveal>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-grey-900">신속 전담 사후 유지관리</h3>
            <p className="text-grey-700 leading-relaxed text-[15px]">
              발전 고장 알림 수신 즉시 24시간 내 전문 엔지니어가 현장에 출동하여 인버터 점검, 패널 세척 등 발전 손실을 완벽히 최소화합니다.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-3xl mx-auto" data-reveal>
          <h3 className="text-2xl font-bold text-grey-900 mb-12 text-center">선드림 에너지의 발자취</h3>
          
          <div className="relative border-l-2 border-grey-100 ml-4 md:ml-32 py-2 flex flex-col gap-12">
            {historyData.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-toss-blue border-4 border-white shadow-sm"></div>
                
                {/* Year display on left (Desktop only) */}
                <div className="hidden md:block absolute -left-32 top-0 w-24 text-right">
                  <span className="text-2xl font-bold text-toss-blue">{item.year}</span>
                </div>

                {/* Year display (Mobile only) */}
                <div className="md:hidden block mb-2">
                  <span className="text-lg font-bold text-toss-blue">{item.year}</span>
                </div>

                {/* Events list */}
                <div className="bg-grey-50 p-6 rounded-xl border border-grey-100/50">
                  <ul className="flex flex-col gap-3">
                    {item.events.map((event, eventIdx) => (
                      <li key={eventIdx} className="flex items-start gap-2 text-grey-700 text-[15px]">
                        <Check className="w-4 h-4 text-toss-blue shrink-0 mt-0.5" />
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
