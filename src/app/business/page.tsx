"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  Activity,
  Wrench,
  ClipboardCheck,
  Siren,
  Calendar,
  Building2,
  FileText,
  BarChart3,
  ScrollText,
  Handshake,
  TrendingUp,
  Leaf,
  Sun,
  Zap,
  ArrowRightLeft,
  CalendarClock,
  Wallet,
  BadgeCheck,
  LayoutGrid,
  Home,
  MapPin,
  Landmark,
  FileCheck
} from "lucide-react";

interface IconItem {
  icon: React.ElementType;
  text: string;
}

interface BusinessModel {
  key: string;
  image: string;
  imageAlt: string;
  title: string;
  summary: string;
  concept: IconItem[];
  benefits: IconItem[];
}

const businessModels: BusinessModel[] = [
  {
    key: "rps",
    image: "/images/factory-solar.png",
    imageAlt: "공장 지붕에 설치된 RPS 대규모 태양광 발전 설비",
    title: "RPS 발전사업",
    summary:
      "발전사업자의 신재생에너지 의무 공급을 통해 시장 확대와 기술 발전을 촉진하는 제도입니다.\n대규모 발전 설비로 안정적인 장기 수익을 만들어드립니다.",
    concept: [
      { icon: Calendar, text: "2012년 도입, 의무 공급량 지속 확대" },
      { icon: Building2, text: "대규모 발전사업자 대상" },
      { icon: FileText, text: "신재생에너지 공급 의무화" },
      { icon: BarChart3, text: "2024년 의무비율 12.5%" },
    ],
    benefits: [
      { icon: ScrollText, text: "REC 발급 및 거래 참여" },
      { icon: Handshake, text: "장기 고정가격 계약 가능" },
      { icon: TrendingUp, text: "안정적 수익 창출 기회" },
      { icon: Leaf, text: "친환경 기업 이미지 제고" },
    ],
  },
  {
    key: "ppa",
    image: "/images/residential-solar.png",
    imageAlt: "기업 건물 지붕에 설치된 자가소비 태양광 모듈",
    title: "자가소비",
    summary:
      "기업이 직접 생산한 태양광 전기를 사용하여 전기요금을 절감하고 친환경 경영을 실현하는 방안입니다.\n초기 투자 부담 없이 RE100에 다가가세요.",
    concept: [
      { icon: Sun, text: "자체 태양광 설비 설치" },
      { icon: Zap, text: "생산 전력 자가 소비" },
      { icon: ArrowRightLeft, text: "잉여 전력 한전 판매" },
      { icon: CalendarClock, text: "20년 장기계약 · 초기 투자 부담 없음" },
    ],
    benefits: [
      { icon: Wallet, text: "전기요금 절감 · 안정적 전력공급" },
      { icon: Leaf, text: "탄소배출 감소 · 에너지 독립성" },
      { icon: BadgeCheck, text: "RE100 달성 기여 · 그린 마케팅 효과" },
      { icon: LayoutGrid, text: "유휴 공간 활용" },
    ],
  },
  {
    key: "roof",
    image: "/images/ground-solar.png",
    imageAlt: "유휴 지붕을 활용한 지붕임대 태양광 발전 단지",
    title: "지붕임대사업",
    summary:
      "공장·창고의 유휴 지붕을 임대하여 초기 투자 비용 없이 안정적인 임대료를 받는 사업 모델입니다.\n임대인과 사업자 모두에게 이익이 됩니다.",
    concept: [
      { icon: LayoutGrid, text: "유휴 공간 활용 추가 수익" },
      { icon: Wallet, text: "초기 투자 없이 임대료" },
      { icon: Building2, text: "건물 가치·효율 개선" },
      { icon: Leaf, text: "친환경 이미지 제고" },
    ],
    benefits: [
      { icon: Home, text: "임대인: 안정적 임대 수익 확보" },
      { icon: MapPin, text: "사업자: 부지 확보 용이, 비용 절감" },
      { icon: Landmark, text: "양측 모두 정부 지원 혜택 가능" },
      { icon: FileCheck, text: "장기 계약으로 안정적 사업 운영" },
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

  // ===== 마우스 드래그로 좌우 이동 (drag-to-scroll) =====
  const dragRef = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return; // 터치는 네이티브 스크롤 사용
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    // 드래그 중엔 강제 스냅·부드러운 스크롤을 꺼서 끊김 없이 따라오게 함
    el.style.scrollSnapType = "none";
    el.style.scrollBehavior = "auto";
    setProcPaused(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    const d = dragRef.current;
    if (!el || !d.down) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4) d.moved = true;
    el.scrollLeft = d.startScroll - dx;
  };

  const handlePointerUp = () => {
    const el = trackRef.current;
    const d = dragRef.current;
    if (!d.down || !el) return;
    d.down = false;
    // 스냅·부드러운 스크롤 복구 후 가장 가까운 카드로 정렬
    el.style.scrollSnapType = "";
    el.style.scrollBehavior = "";
    // 가장 가까운 카드로 스냅
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setProcActive(closest);
    scrollToStep(closest);
    setProcPaused(false);
  };

  // 자동 슬라이드 (호버/포커스/드래그 시 일시정지)
  useEffect(() => {
    if (procPaused) return;
    const id = setInterval(() => {
      if (dragRef.current.down) return;
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
        description={"대남에너지는 RPS 발전사업, 자가소비, 지붕임대사업을 중심으로\n고객의 부지와 목적에 꼭 맞는 태양광 솔루션을 제안합니다."}
        image="/06.jpg"
        imageAlt="대남에너지 태양광 발전 설비"
        objectPosition="object-[center_78%]"
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
                  quality={90}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-center gap-6">
                {/* 라벨 + 제목 (좌측 아이콘 제거) */}
                <div data-reveal style={{ transitionDelay: "0.12s" }}>
                  <span className="text-[13px] font-bold text-toss-blue tracking-wider">BUSINESS {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl md:text-[32px] font-bold text-grey-900 leading-tight mt-1.5">{model.title}</h3>
                </div>

                <p className="text-[#75787b] text-[15px] leading-relaxed whitespace-pre-line break-keep" data-reveal style={{ transitionDelay: "0.24s" }}>{model.summary}</p>

                {/* 개념 — 아이콘 알약(pill) 가로 나열 */}
                <div className="flex flex-wrap gap-2.5" data-reveal style={{ transitionDelay: "0.36s" }}>
                  {model.concept.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 pl-3.5 pr-4 py-2 rounded-full bg-[#f1f6fc] text-[13px] font-semibold text-grey-700 break-keep"
                      >
                        <Icon className="w-4 h-4 text-toss-blue shrink-0" />
                        {c.text}
                      </span>
                    );
                  })}
                </div>

                {/* 장점 및 특징 — 큰 아이콘 + 연한 그레이 세로 구분선 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-grey-100 pt-6" data-reveal style={{ transitionDelay: "0.48s" }}>
                  {model.benefits.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={i}
                        className={`flex flex-col items-center text-center gap-3 px-2 py-2 ${i > 0 ? "sm:border-l sm:border-grey-100" : ""}`}
                      >
                        <Icon className="w-8 h-8 text-toss-blue" strokeWidth={1.5} />
                        <span className="text-[13px] font-semibold text-grey-800 leading-snug break-keep max-w-[6.5rem]">{b.text}</span>
                      </div>
                    );
                  })}
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
              quality={90}
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-center gap-6">
            {/* 라벨 + 제목 (좌측 아이콘 제거) */}
            <div>
              <span className="text-[13px] font-bold text-toss-blue tracking-wider">AFTER-SERVICE</span>
              <h3 className="text-2xl md:text-[32px] font-bold text-grey-900 leading-tight mt-1.5">스마트 O&M (사후 유지관리)</h3>
            </div>
            <p className="text-[#75787b] text-[15px] leading-relaxed whitespace-pre-line break-keep">
              {"태양광은 시공만큼이나 유지가 수익을 좌우합니다.\n대남에너지 전담 유지보수팀이 실시간 발전량 모니터링과 정기 점검으로\n20년 발전 수명 동안 발전 손실을 최소화합니다."}
            </p>
            {/* 주요 서비스 — 큰 아이콘 + 연한 그레이 세로 구분선 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-grey-100 pt-6">
              {[
                { icon: Activity, text: "24시간 가동 모니터링 경보" },
                { icon: Wrench, text: "인버터 점검 및 모듈 세척" },
                { icon: ClipboardCheck, text: "정기 정밀 안전 진단 리포트" },
                { icon: Siren, text: "고장 감지 즉시 현장 대응" },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center gap-3 px-2 py-2 ${i > 0 ? "sm:border-l sm:border-grey-100" : ""}`}
                  >
                    <Icon className="w-8 h-8 text-toss-blue" strokeWidth={1.5} />
                    <span className="text-[13px] font-semibold text-grey-800 leading-snug break-keep max-w-[6.5rem]">{f.text}</span>
                  </div>
                );
              })}
            </div>
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
            quality={90}
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
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onDragStart={(e) => e.preventDefault()}
            className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth px-[calc(50vw_-_150px)] md:px-[calc(50vw_-_170px)] py-8 cursor-grab active:cursor-grabbing select-none"
          >
            {installSteps.map((step, i) => {
              const isActive = procActive === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (dragRef.current.moved) return; // 드래그였으면 클릭 무시
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

          {/* 진행 바 */}
          <div className="container-inner mt-4">
            <div className="relative h-1 rounded-full bg-grey-200 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-toss-blue transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: `${((procActive + 1) / installSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
