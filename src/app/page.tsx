"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import { 
  ArrowRight,
  Leaf,
  ShieldCheck,
  Award,
  TrendingUp
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Reveal Observer for scroll-reveal animations
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

  const coreValues = [
    {
      href: "/about",
      icon: "/아이콘4.png",
      title: "12년 검증된 시공력",
      desc: "2014년 현수에너지로 시작해 누적 설치용량 80MW를 달성했습니다. 영업·설계·시공·유지보수 전 과정을 자체 인력으로 책임집니다.",
      image: "/images/factory-solar.png",
    },
    {
      href: "/business",
      icon: "/아이콘5.png",
      title: "정량적 사업타당성 분석",
      desc: "일조량·경사도·음영을 반영한 발전량 시뮬레이션으로 RPS·자가소비·지붕임대 사업의 예상 수익과 회수 기간을 사전에 투명하게 제시합니다.",
      image: "/images/ground-solar.png",
    },
    {
      href: "/business#om",
      icon: "/아이콘6.png",
      title: "전담 유지보수팀 O&M",
      desc: "전담 유지보수팀이 가동·모니터링을 책임집니다. 고장 감지 즉시 현장에 대응하여 20년 발전 수명 동안 발전 손실을 최소화합니다.",
      image: "/images/om-monitoring.png",
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section — Full background image */}
      <section className="relative overflow-hidden pt-40 pb-36 md:pt-56 md:pb-52">
        {/* Background image */}
        <Image
          src="/01.jpg"
          alt="공장 지붕 위에 설치된 대남에너지 태양광 발전 설비"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover animate-ken-burns"
          preload
        />
        {/* Readability overlay — 좌측 텍스트 영역만 어둡게, 우측은 이미지가 드러나도록 */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent"></div>

        <div className="container-inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy + CTA — 스태거 등장 애니메이션 */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="animate-rise self-start inline-flex items-center gap-2 px-3 py-1 bg-toss-blue/25 backdrop-blur text-blue-100 ring-1 ring-blue-300/40 rounded-full text-[14px] font-semibold" style={{ animationDelay: "0.1s" }}>
                <Leaf className="w-3.5 h-3.5" />
                12년 경력의 태양광 발전 전문 기업
              </div>

              <h1 className="animate-rise text-4xl md:text-5xl lg:text-[46px] font-bold text-white leading-[1.25] tracking-tight whitespace-pre-line drop-shadow-sm" style={{ animationDelay: "0.22s" }}>
                태양광으로 만드는 내일,{"\n"}
                <span className="text-white">대남에너지</span>
              </h1>

              <p className="animate-rise text-lg md:text-[18px] text-white/85 leading-relaxed max-w-2xl whitespace-pre-line" style={{ animationDelay: "0.34s" }}>
                2014년 설립 이후 누적 설치용량 80MW를 달성한 종합 에너지 솔루션 기업.{"\n"}
                RPS 발전사업부터 자가소비, 지붕임대사업까지 안정적인 수익과 RE100 달성을{"\n"}
                함께 만들어갑니다.
              </p>

              <div className="animate-rise flex flex-col sm:flex-row gap-3 mt-4" style={{ animationDelay: "0.46s" }}>
                <Link
                  href="/contact"
                  className="btn-sheen px-6 py-4 bg-white hover:bg-grey-50 text-toss-blue font-bold rounded-xl text-[16px] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-slate-950/20 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                >
                  무료 상담·견적 문의
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/business"
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold rounded-xl text-[16px] transition-all duration-200 text-center hover:-translate-y-0.5 active:translate-y-0"
                >
                  사업 영역 살펴보기
                </Link>
              </div>

              {/* Trust badging */}
              <div className="animate-rise flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 pt-6 border-t border-white/15" style={{ animationDelay: "0.58s" }}>
                <div className="flex items-center gap-1.5 text-[14px] text-white/90">
                  <Award className="w-4 h-4 text-blue-300" />
                  12년 태양광 전문 경력
                </div>
                <div className="flex items-center gap-1.5 text-[14px] text-white/90">
                  <TrendingUp className="w-4 h-4 text-blue-300" />
                  누적 설치용량 80MW
                </div>
                <div className="flex items-center gap-1.5 text-[14px] text-white/90">
                  <ShieldCheck className="w-4 h-4 text-blue-300" />
                  전담 유지보수팀 운영
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 md:py-20 bg-white border-b border-grey-100">
        <div className="container-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            <div className="relative flex flex-col items-center text-center gap-2 reveal-up" data-reveal>
              <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-px h-10 bg-grey-200" aria-hidden="true"></span>
              <div className="text-4xl md:text-5xl font-bold text-toss-blue tracking-tight">
                <CountUp end={12} />
                <span className="text-2xl md:text-3xl align-top ml-0.5">년</span>
              </div>
              <div className="text-[14px] md:text-[15px] text-grey-700 font-medium">태양광 전문 경력</div>
            </div>

            <div className="relative flex flex-col items-center text-center gap-2 reveal-up" data-reveal style={{ transitionDelay: "0.1s" }}>
              <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-px h-10 bg-grey-200" aria-hidden="true"></span>
              <div className="text-4xl md:text-5xl font-bold text-toss-blue tracking-tight">
                <CountUp end={80} />
                <span className="text-2xl md:text-3xl align-top ml-0.5">MW</span>
              </div>
              <div className="text-[14px] md:text-[15px] text-grey-700 font-medium">누적 설치용량</div>
            </div>

            <div className="relative flex flex-col items-center text-center gap-2 reveal-up" data-reveal style={{ transitionDelay: "0.2s" }}>
              <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-px h-10 bg-grey-200" aria-hidden="true"></span>
              <div className="text-4xl md:text-5xl font-bold text-toss-blue tracking-tight">
                <CountUp end={98.4} decimals={1} />
                <span className="text-2xl md:text-3xl align-top ml-0.5">%</span>
              </div>
              <div className="text-[14px] md:text-[15px] text-grey-700 font-medium">평균 발전 효율</div>
            </div>

            <div className="flex flex-col items-center text-center gap-2 reveal-up" data-reveal style={{ transitionDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold text-brand-green tracking-tight">
                <CountUp end={3420} />
                <span className="text-2xl md:text-3xl align-top ml-0.5">그루</span>
              </div>
              <div className="text-[14px] md:text-[15px] text-grey-700 font-medium">누적 소나무 식재 효과</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-20 md:py-24 bg-[#f1f6fc] border-y border-grey-100">
        <div className="container-inner">
          <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
            <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase font-semibold">CORE VALUES</span>
            <h2 className="text-3xl font-bold text-grey-900 mt-2 mb-4 tracking-tight">대남에너지의 약속</h2>
            <p className="text-lg text-[#75787b]">
              12년의 현장 경험과 정량적 데이터로 가장 신뢰할 수 있는 태양광 사업을 설계합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((cv, i) => (
              <Link
                key={i}
                href={cv.href}
                className="card-lift group relative overflow-hidden rounded-2xl border border-grey-100 bg-white flex min-h-[320px]"
                data-reveal
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Hover image reveal */}
                <Image
                  src={cv.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  className="object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[600ms] ease-out"
                />
                {/* 호버 시 일정한 블랙 반투명 오버레이 (가독성) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col gap-4 flex-1">
                  <Image src={cv.icon} alt="" width={96} height={96} className="w-20 h-20 object-contain" />
                  <h3 className="text-xl font-bold text-toss-blue group-hover:text-white transition-colors duration-300">{cv.title}</h3>
                  <p className="text-[#75787b] group-hover:text-white/85 leading-relaxed text-[16px] transition-colors duration-300">
                    {cv.desc}
                  </p>
                  <span className="text-[#7b9ce1] group-hover:text-white font-semibold text-[14px] mt-auto pt-2 flex items-center gap-1 transition-colors duration-300">
                    자세히 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Focus Segment — 풀블리드 대형 이미지 */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* Image side — 좌측 화면 끝까지 풀블리드 */}
          <div className="relative min-h-[340px] lg:min-h-[620px] overflow-hidden group" data-reveal>
            <Image
              src="/16b.jpg"
              alt="유휴 부지를 활용한 대규모 태양광 발전 단지"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
          </div>

          {/* Text side — 1400 컨테이너 우측 정렬 */}
          <div className="flex items-center bg-white">
            <div className="w-full px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-[max(1.5rem,calc((100vw_-_1400px)/2_+_1.5rem))] py-16 lg:py-28">
              <div className="max-w-xl flex flex-col gap-6" data-reveal>
                <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">BUSINESS MODELS</span>
                <h2 className="text-3xl md:text-[40px] font-bold text-grey-900 tracking-tight leading-[1.25] whitespace-pre-line">
                  유휴 공간을{"\n"}안정적인 수익으로
                </h2>
                <p className="text-[#75787b] leading-relaxed text-base md:text-lg whitespace-pre-line break-keep">
                  {"대남에너지는 RPS 발전사업, 자가소비, 지붕임대사업\n세 가지 모델로 공장 지붕과 유휴 부지를 활용합니다.\n초기 투자 부담은 줄이고, 전기요금 절감과\n장기 임대·발전 수익을 동시에 만들어드립니다."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-toss-blue-light text-toss-blue text-[13px] font-semibold">RPS 발전사업</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-toss-blue-light text-toss-blue text-[13px] font-semibold">자가소비</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-brand-green-light text-brand-green text-[13px] font-semibold">지붕임대사업</span>
                </div>
                <div className="mt-2">
                  <Link
                    href="/business"
                    className="btn-sheen px-6 py-4 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold rounded-xl text-[15px] transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                  >
                    시공 사업영역 확인하기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Conversion Banner — 고정 배경(parallax) */}
      <section className="py-24 text-white overflow-hidden relative bg-toss-blue bg-[url('/images/cta-field.png')] bg-cover bg-center bg-fixed">
        {/* 가독성 오버레이 */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-toss-blue/95 via-toss-blue/85 to-toss-blue-dark/75"></div>
        {/* Soft background glow circles */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/5 rounded-full filter blur-2xl"></div>
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="container-inner relative z-10 text-center max-w-3xl mx-auto flex flex-col gap-6 items-center" data-reveal>
          <span className="text-[13px] bg-white/10 text-white/90 font-bold px-3 py-1 rounded-full uppercase tracking-wider select-none">CONSULTATION</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            지금 우리 부지의 발전 가치를{"\n"}무료로 진단받아보세요
          </h2>
          <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl whitespace-pre-line break-keep">
            {"대남에너지는 과장 없이 가장 보수적이고 객관적인 데이터로\n사업타당성을 분석하여 최적의 제안을 약속드립니다."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-sheen px-6 py-4 bg-white hover:bg-grey-50 text-toss-blue font-bold rounded-xl text-[16px] transition-all duration-200 text-center shadow-md shadow-blue-900/10 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              1:1 맞춤 무료 상담 신청
            </Link>
            <Link
              href="/business"
              className="px-6 py-4 bg-toss-blue-dark hover:bg-toss-blue border border-white/20 text-white font-bold rounded-xl text-[16px] transition-all duration-200 text-center hover:-translate-y-0.5 active:translate-y-0"
            >
              사업 영역 자세히 보기
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
