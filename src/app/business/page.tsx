"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  Building2,
  Home as HomeIcon,
  ShieldCheck
} from "lucide-react";

export default function BusinessPage() {
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
    <div className="py-16 md:py-24 bg-grey-50">
      <div className="container-inner">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">OUR BUSINESS</span>
          <h1 className="text-3xl md:text-4xl font-bold text-grey-900 mt-2 mb-4 tracking-tight">전문 시공 분야</h1>
          <p className="text-lg text-grey-700 leading-relaxed">
            선드림 에너지는 고객의 부지 형태와 상황에 맞춘 최적화된 하이엔드 솔루션을 제안합니다.
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Commercial Area */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-grey-100 flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 group" data-reveal>
            <div className="relative h-48 w-full overflow-hidden">
              <Image src="/images/factory-solar.png" alt="공장 지붕형 태양광 시공 현장" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 flex-1 flex flex-col gap-6">
              <div className="w-12 h-12 bg-blue-50 text-toss-blue rounded-xl flex items-center justify-center -mt-14 relative z-10 shadow-sm ring-4 ring-white">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-grey-900 mb-2">공장 및 상업용 태양광</h3>
                <p className="text-grey-700 text-[15px] leading-relaxed">
                  기업의 RE100 대응 및 세제 혜택 극대화에 필수적입니다. 공장 유휴 지붕이나 지상 주차장에 무타공 고효율 시공 공법을 적용하여 장기적으로 막대한 가치를 창출합니다.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto pt-6 border-t border-grey-100 text-[14px] text-grey-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                  지붕 파손 없는 무타공 클립공법
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                  RE100 인증용 행정 대행
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                  SMP/REC 고수익 장기 계약 체결 지원
                </li>
              </ul>
            </div>
          </div>

          {/* Residential Area */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-grey-100 flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 delay-100 group" data-reveal>
            <div className="relative h-48 w-full overflow-hidden">
              <Image src="/images/residential-solar.png" alt="단독주택 지붕형 태양광 시공 현장" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 flex-1 flex flex-col gap-6">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center -mt-14 relative z-10 shadow-sm ring-4 ring-white">
                <HomeIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-grey-900 mb-2">단독주택 및 전원주택</h3>
                <p className="text-grey-700 text-[15px] leading-relaxed">
                  매달 발생하는 누진세와 전기 요금 부담을 단 한 번의 깔끔한 지붕 밀착형 또는 옥상 슬림 거치형 시공으로 평생의 행복으로 전환해 드립니다.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto pt-6 border-t border-grey-100 text-[14px] text-grey-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  주택 맞춤형 저소음 구조설계
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  전기 요금 최대 80~90% 절감 보장
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  지자체 친환경 시공 보조금 선점 신청 대행
                </li>
              </ul>
            </div>
          </div>

          {/* Maintenance Area */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-grey-100 flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 delay-200 group" data-reveal>
            <div className="relative h-48 w-full overflow-hidden">
              <Image src="/images/om-monitoring.png" alt="태양광 발전 설비를 점검하는 전문 엔지니어" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 flex-1 flex flex-col gap-6">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center -mt-14 relative z-10 shadow-sm ring-4 ring-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-grey-900 mb-2">스마트 O&M (사후 관리)</h3>
                <p className="text-grey-700 text-[15px] leading-relaxed">
                  태양광은 시공하는 것보다 유지하는 것이 수익에 더 중요합니다. 실시간 원격 발전량 감시 및 모듈 고장 자가 진단 센서를 통해 연간 발전 손실률을 0%에 수렴하도록 통제합니다.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto pt-6 border-t border-grey-100 text-[14px] text-grey-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  24시간 가동 모니터링 경보 솔루션
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  전문 드론 열화상 모듈 정밀 촬영
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  매년 정기 정밀 무상 안전 진단 리포트 제공
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
