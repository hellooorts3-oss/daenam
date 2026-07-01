"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  Building2,
  Home as HomeIcon,
  ShieldCheck,
  Zap,
  Check,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
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
      "발전사업자의 신재생에너지 의무 공급을 통해 시장 확대와 기술 발전을 촉진하는 제도입니다.\n대규모 발전 설비로 안정적인 장기 수익을 만들어드립니다.",
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
      "기업이 직접 생산한 태양광 전기를 사용하여 전기요금을 절감하고 친환경 경영을 실현하는 방안입니다.\n초기 투자 부담 없이 RE100에 다가가세요.",
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
      "공장·창고의 유휴 지붕을 임대하여 초기 투자 비용 없이 안정적인 임대료를 받는 사업 모델입니다.\n임대인과 사업자 모두에게 이익이 됩니다.",
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

  // ===== 설치 절차 캐러셀 (중앙 강조) =====
  const trackRef = useRef<HTMLDivElement>(null);
  const [procActive, setProcActive] = useState(0);
  const [procPaused, setProcPaused] = useState(false);

  const scrollToStep = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    const left = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  };

  const handleProcScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setProcActive(closest);
  };

  // 자동 슬라이드 (호버/포커스 시 일시정지)
  useEffect(() => {
    if (procPaused) return;
    const id = setInterval(() => {
      setProcActive((prev) => {
        const next = (prev + 1) % installSteps.length;
        scrollToStep(next);
        return next;
      });
    }, 2500);
    return () => clearInterval(id);
  }, [procPaused]);

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
              className="scroll-mt-24 bg-white rounded-3xl overflow-hidden shadow-sm border border-grey-100 grid grid-cols-1 lg:grid-cols-12 lg:min-h-[440px] hover:shadow-md transition-all duration-300"
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
              <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-3" data-reveal style={{ transitionDelay: "0.12s" }}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${model.iconBg}`}>
                    {model.icon}
                  </div>
                  <div>
                    <span className="text-[12px] font-bold text-grey-500">BUSINESS {String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-grey-900 leading-tight">{model.title}</h3>
                  </div>
                </div>

                <p className="text-[#75787b] text-[15px] leading-relaxed whitespace-pre-line break-keep" data-reveal style={{ transitionDelay: "0.24s" }}>{model.summary}</p>

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

        {/* O&M Support Band */}
        <div id="om" className="scroll-mt-24 bg-white rounded-3xl overflow-hidden shadow-sm border border-grey-100 grid grid-cols-1 lg:grid-cols-12 lg:min-h-[440px]" data-reveal>
          <div className="relative h-56 lg:h-auto lg:col-span-4 overflow-hidden lg:order-last">
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
            <p className="text-[#75787b] text-[15px] leading-relaxed whitespace-pre-line break-keep">
              {"태양광은 시공만큼이나 유지가 수익을 좌우합니다.\n대남에너지 전담 유지보수팀이 실시간 발전량 모니터링과 정기 점검으로\n20년 발전 수명 동안 발전 손실을 최소화합니다."}
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

      {/* Install Procedure — 풀블리드 이미지 + 걸친 텍스트 박스 + 중앙 강조 캐러셀 */}
      <section className="bg-white border-y border-grey-100 overflow-hidden">
        {/* 풀블리드 이미지 (화면 끝까지) */}
        <div className="relative w-full h-[300px] md:h-[440px]">
          <Image
            src="/19b.jpg"
            alt="대남에너지 태양광 발전 설치 현장"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/20"></div>
        </div>

        {/* 이미지에 걸친 화이트 텍스트 박스 */}
        <div className="container-inner">
          <div className="relative z-10 mx-auto -mt-24 md:-mt-32 max-w-2xl bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-grey-100 px-8 py-10 md:px-16 md:py-14 text-center" data-reveal>
            <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">PROCESS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mt-2 mb-4 tracking-tight">태양광 설치 절차 8단계</h2>
            <p className="text-[#75787b] leading-relaxed whitespace-pre-line break-keep">
              사업타당성 검토부터 가동·모니터링까지,{"\n"}대남에너지가 전 과정을 책임지고 진행합니다.
            </p>
          </div>
        </div>

        {/* 풀블리드 절차 캐러셀 (중앙 카드 강조) */}
        <div className="mt-14 md:mt-16 pb-[90px]">
          <div
            ref={trackRef}
            onScroll={handleProcScroll}
            className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth px-[calc(50vw_-_150px)] md:px-[calc(50vw_-_170px)] py-8"
          >
            {installSteps.map((step, i) => {
              const isActive = procActive === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setProcActive(i);
                    scrollToStep(i);
                  }}
                  onMouseEnter={() => setProcPaused(true)}
                  onMouseLeave={() => setProcPaused(false)}
                  className={`snap-center shrink-0 w-[300px] md:w-[340px] text-left rounded-2xl border p-8 md:p-9 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isActive
                        ? "scale-100 md:scale-[1.06] border-toss-blue bg-white shadow-xl shadow-toss-blue/15 opacity-100 z-10"
                        : "scale-[0.92] border-grey-200 bg-white opacity-60 hover:opacity-90"
                    }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-extrabold text-[18px] transition-colors duration-300
                      ${isActive ? "bg-toss-blue text-white" : "bg-toss-blue-light text-toss-blue"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[20px] font-bold text-grey-900 mt-5 break-keep">{step.title}</h3>
                  <p className="text-[14px] text-[#75787b] leading-relaxed mt-2.5 break-keep">{step.desc}</p>
                </button>
              );
            })}
          </div>

          {/* 진행 바 + 컨트롤 */}
          <div className="container-inner mt-4 flex items-center gap-5">
            <div className="relative flex-1 h-1 rounded-full bg-grey-200 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-toss-blue transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: `${((procActive + 1) / installSteps.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                aria-label="이전 단계"
                onClick={() => {
                  const idx = (procActive - 1 + installSteps.length) % installSteps.length;
                  setProcActive(idx);
                  scrollToStep(idx);
                }}
                className="w-9 h-9 rounded-full border border-grey-200 text-grey-700 flex items-center justify-center hover:border-toss-blue hover:text-toss-blue transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="다음 단계"
                onClick={() => {
                  const idx = (procActive + 1) % installSteps.length;
                  setProcActive(idx);
                  scrollToStep(idx);
                }}
                className="w-9 h-9 rounded-full border border-grey-200 text-grey-700 flex items-center justify-center hover:border-toss-blue hover:text-toss-blue transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label={procPaused ? "자동 재생" : "일시정지"}
                onClick={() => setProcPaused((p) => !p)}
                className="w-9 h-9 rounded-full border border-grey-200 text-grey-700 flex items-center justify-center hover:border-toss-blue hover:text-toss-blue transition-colors"
              >
                {procPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
