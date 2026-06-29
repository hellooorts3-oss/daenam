"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  Building2,
  Home as HomeIcon,
  ShieldCheck,
  Zap,
  Check
} from "lucide-react";

interface BusinessModel {
  key: string;
  icon: React.ReactNode;
  accent: string;
  iconBg: string;
  image: string;
  imageAlt: string;
  title: string;
  summary: string;
  concept: string[];
  benefits: string[];
}

const businessModels: BusinessModel[] = [
  {
    key: "rps",
    icon: <Zap className="w-6 h-6" />,
    accent: "text-toss-blue",
    iconBg: "bg-toss-blue-light text-toss-blue",
    image: "/images/factory-solar.png",
    imageAlt: "공장 지붕에 설치된 RPS 대규모 태양광 발전 설비",
    title: "RPS 발전사업",
    summary:
      "발전사업자의 신재생에너지 의무 공급을 통해 시장 확대와 기술 발전을 촉진하는 제도입니다. 대규모 발전 설비로 안정적인 장기 수익을 만들어드립니다.",
    concept: [
      "2012년 도입, 의무 공급량 지속 확대",
      "대규모 발전사업자 대상",
      "연간 총 발전량 중 일정 비율을 신재생에너지로 공급 의무화",
      "2024년 의무비율 12.5%",
    ],
    benefits: [
      "REC 발급 및 거래 참여",
      "장기 고정가격 계약 가능",
      "안정적 수익 창출 기회",
      "친환경 기업 이미지 제고",
    ],
  },
  {
    key: "ppa",
    icon: <Building2 className="w-6 h-6" />,
    accent: "text-toss-blue",
    iconBg: "bg-toss-blue-light text-toss-blue",
    image: "/images/residential-solar.png",
    imageAlt: "기업 건물 지붕에 설치된 자가용 PPA 태양광 모듈",
    title: "자가용 PPA",
    summary:
      "기업이 직접 생산한 태양광 전기를 사용하여 전기요금을 절감하고 친환경 경영을 실현하는 방안입니다. 초기 투자 부담 없이 RE100에 다가가세요.",
    concept: [
      "자체 태양광 설비 설치",
      "생산 전력 자가 소비",
      "잉여 전력 한전 판매",
      "20년 장기계약 · 초기 투자 부담 없음",
    ],
    benefits: [
      "전기요금 절감 · 안정적 전력공급",
      "탄소배출 감소 · 에너지 독립성",
      "RE100 달성 기여 · 그린 마케팅 효과",
      "유휴 공간 활용",
    ],
  },
  {
    key: "roof",
    icon: <HomeIcon className="w-6 h-6" />,
    accent: "text-toss-blue",
    iconBg: "bg-toss-blue-light text-toss-blue",
    image: "/images/ground-solar.png",
    imageAlt: "유휴 지붕을 활용한 지붕임대 태양광 발전 단지",
    title: "지붕임대사업",
    summary:
      "공장·창고의 유휴 지붕을 임대하여 초기 투자 비용 없이 안정적인 임대료를 받는 사업 모델입니다. 임대인과 사업자 모두에게 이익이 됩니다.",
    concept: [
      "유휴 공간 활용으로 추가 수익 창출",
      "초기 투자 비용 없이 안정적 임대료",
      "건물 가치 상승 및 에너지 효율 개선",
      "친환경 이미지 제고",
    ],
    benefits: [
      "임대인: 안정적 임대 수익 확보",
      "사업자: 부지 확보 용이, 비용 절감",
      "양측 모두 정부 지원 혜택 가능",
      "장기 계약으로 안정적 사업 운영",
    ],
  },
];

const installSteps: { title: string; desc: string }[] = [
  { title: "사업타당성 검토", desc: "현장 여건과 일조량, 예상 수익을 분석해 사업성을 검토합니다." },
  { title: "설치 장소 선정", desc: "지붕·부지 조건을 확인하고 최적의 설치 위치를 선정합니다." },
  { title: "설비용량 결정", desc: "목표 발전량에 맞춰 모듈·인버터 설비 용량을 산정합니다." },
  { title: "인허가 및 계약", desc: "발전사업 허가와 계약, 복잡한 행정 절차를 대행합니다." },
  { title: "시공 및 준공", desc: "지붕 손상 없는 무타공 공법으로 안전하게 시공·준공합니다." },
  { title: "계통연계", desc: "한전 계통에 연계하여 전력 송전 준비를 완료합니다." },
  { title: "사용 전 검사", desc: "안전 점검과 사용 전 검사를 거쳐 가동 승인을 받습니다." },
  { title: "가동 및 모니터링", desc: "발전을 시작하고 실시간 모니터링으로 발전량을 관리합니다." },
];

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
    <div className="bg-grey-50">
      {/* Common Category Hero — 풀폭 배경, 콘텐츠는 1400px 정렬 */}
      <PageHero
        eyebrow="OUR BUSINESS"
        title="사업 영역"
        description={"대남에너지는 RPS 발전사업, 자가용 PPA, 지붕임대사업을 중심으로\n고객의 부지와 목적에 꼭 맞는 태양광 솔루션을 제안합니다."}
        image="/04.jpg"
        imageAlt="대남에너지 태양광 발전 설비"
      />

      <div className="container-inner py-[90px]">

        {/* Business Models */}
        <div className="flex flex-col gap-8 mb-20">
          {businessModels.map((model, index) => (
            <div
              key={model.key}
              id={model.key}
              className="scroll-mt-24 bg-white rounded-3xl overflow-hidden shadow-sm border border-grey-100 grid grid-cols-1 lg:grid-cols-12 hover:shadow-md transition-all duration-300"
              data-reveal
            >
              {/* Image */}
              <div className={`relative h-56 lg:h-auto lg:col-span-4 overflow-hidden ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                <Image
                  src={model.image}
                  alt={model.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-8 p-8 md:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3" data-reveal style={{ transitionDelay: "0.12s" }}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${model.iconBg}`}>
                    {model.icon}
                  </div>
                  <div>
                    <span className="text-[12px] font-bold text-grey-500">BUSINESS {String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-grey-900 leading-tight">{model.title}</h3>
                  </div>
                </div>

                <p className="text-grey-700 text-[15px] leading-relaxed" data-reveal style={{ transitionDelay: "0.24s" }}>{model.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2" data-reveal style={{ transitionDelay: "0.36s" }}>
                  <div className="flex flex-col gap-3">
                    <span className="text-[13px] font-bold text-grey-900">개념</span>
                    <ul className="flex flex-col gap-2">
                      {model.concept.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-grey-700 leading-relaxed">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${model.accent}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[13px] font-bold text-grey-900">장점 및 특징</span>
                    <ul className="flex flex-col gap-2">
                      {model.benefits.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-grey-700 leading-relaxed">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${model.accent}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Install Procedure — 세로 스텝퍼 */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
            <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">PROCESS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mt-2 mb-3 tracking-tight">태양광 설치 절차 8단계</h2>
            <p className="text-grey-700 leading-relaxed">
              사업타당성 검토부터 가동·모니터링까지, 대남에너지가 전 과정을 책임지고 진행합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col">
            {installSteps.map((step, index) => {
              const isLast = index === installSteps.length - 1;
              return (
                <div
                  key={index}
                  className="relative flex gap-5 md:gap-8"
                  data-reveal
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {/* Left rail: STEP 배지 + 연결선 */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-toss-blue text-white flex flex-col items-center justify-center shadow-md shadow-toss-blue/30 shrink-0 z-10">
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-white/70 leading-none">STEP</span>
                      <span className="text-lg font-bold leading-none mt-0.5">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    {!isLast && <span className="w-0.5 flex-1 bg-grey-200 my-2 rounded-full"></span>}
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${isLast ? "" : "mb-5"} bg-white rounded-2xl border border-grey-100 p-6 md:p-7 hover:border-toss-blue/40 hover:shadow-md transition-all duration-300`}>
                    <h3 className="text-lg font-bold text-grey-900">{step.title}</h3>
                    <p className="text-grey-700 text-[15px] leading-relaxed mt-1.5">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* O&M Support Band */}
        <div id="om" className="scroll-mt-24 bg-white rounded-3xl overflow-hidden shadow-sm border border-grey-100 grid grid-cols-1 lg:grid-cols-12" data-reveal>
          <div className="relative h-56 lg:h-auto lg:col-span-4 overflow-hidden">
            <Image
              src="/images/om-monitoring.png"
              alt="태양광 발전 설비를 점검하는 전문 유지보수팀 엔지니어"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-8 p-8 md:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-toss-blue-light text-toss-blue">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[12px] font-bold text-grey-500">AFTER-SERVICE</span>
                <h3 className="text-xl md:text-2xl font-bold text-grey-900 leading-tight">스마트 O&M (사후 유지관리)</h3>
              </div>
            </div>
            <p className="text-grey-700 text-[15px] leading-relaxed">
              태양광은 시공만큼이나 유지가 수익을 좌우합니다. 대남에너지 전담 유지보수팀이 실시간 발전량 모니터링과
              정기 점검으로 20년 발전 수명 동안 발전 손실을 최소화합니다.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[14px] text-grey-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                24시간 가동 모니터링 경보
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                인버터 점검 및 모듈 세척
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                정기 정밀 안전 진단 리포트
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                고장 감지 즉시 현장 대응
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
