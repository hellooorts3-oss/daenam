"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Zap, 
  Award, 
  CheckCircle2, 
  Building2, 
  Home as HomeIcon, 
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

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-toss-blue-light/30 via-white to-white">
        <div className="container-inner">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy + CTA */}
            <div className="md:col-span-7 flex flex-col gap-6 text-left" data-reveal>
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-toss-blue-light text-toss-blue rounded-full text-[13px] font-medium">
                <Leaf className="w-3.5 h-3.5" />
                지속 가능한 태양광 파트너
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-bold text-grey-900 leading-[1.25] tracking-tight whitespace-pre-line">
                태양으로 꿈꾸는 내일,{"\n"}
                <span className="text-toss-blue">선드림 에너지</span>
              </h1>
              
              <p className="text-lg md:text-[18px] text-grey-700 leading-relaxed max-w-xl">
                지속 가능한 내일을 위한 가장 투명하고 효율적인 솔루션.{"\n"}
                공장 지붕부터 주택 옥상까지 친환경 에너지를 통해 지출을 줄이고 안정적인 고정 수익을 창출하세요.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Link 
                  href="/calculator"
                  className="px-6 py-4 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold rounded-xl text-[16px] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  실시간 수익 계산기
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-4 bg-grey-100 hover:bg-grey-200 text-grey-900 font-semibold rounded-xl text-[16px] transition-all duration-200 text-center"
                >
                  간편 견적 문의하기
                </Link>
              </div>

              {/* Trust badging */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-grey-100">
                <div className="flex items-center gap-1.5 text-[14px] text-grey-700">
                  <ShieldCheck className="w-4 h-4 text-toss-blue" />
                  100% 정품 모듈 사용
                </div>
                <div className="flex items-center gap-1.5 text-[14px] text-grey-700">
                  <Award className="w-4 h-4 text-toss-blue" />
                  전문 면허 시공팀
                </div>
                <div className="flex items-center gap-1.5 text-[14px] text-grey-700">
                  <CheckCircle2 className="w-4 h-4 text-toss-blue" />
                  안심 20년 사후 관리
                </div>
              </div>
            </div>

            {/* Right Column: Illustration with floating cards */}
            <div className="md:col-span-5 relative flex items-center justify-center min-h-[360px] delay-150" data-reveal>
              <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-grey-100">
                <Image
                  src="/images/hero-solar.png"
                  alt="공장 지붕 위에 설치된 선드림 에너지 태양광 발전 설비"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                  preload
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
              </div>

              {/* Floating Data Card 1 */}
              <div className="absolute -top-4 -left-6 md:-left-10 bg-white/95 backdrop-blur border border-grey-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float-slow select-none">
                <div className="w-10 h-10 rounded-full bg-toss-blue-light flex items-center justify-center text-toss-blue">
                  <Zap className="w-5 h-5 fill-toss-blue" />
                </div>
                <div>
                  <div className="text-[12px] text-grey-500 font-medium leading-none">실시간 발전 효율</div>
                  <div className="text-[16px] font-bold text-grey-900 mt-1">98.4% 최적 발전 중</div>
                </div>
              </div>

              {/* Floating Data Card 2 */}
              <div className="absolute -bottom-6 -right-2 bg-white/95 backdrop-blur border border-grey-100 p-4 rounded-2xl shadow-xl flex flex-col gap-1.5 animate-float-slower select-none">
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[13px]">
                  <Leaf className="w-4 h-4 fill-emerald-600/10" />
                  탄소 배출 저감 효과
                </div>
                <div className="text-[15px] font-bold text-grey-900">
                  누적 소나무 3,420그루 식재
                </div>
                <div className="text-[12px] text-grey-500">
                  선드림 에너지 시공처 누적 합산 기준
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-20 bg-white border-t border-grey-100">
        <div className="container-inner">
          <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
            <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase font-semibold">CORE VALUES</span>
            <h2 className="text-3xl font-bold text-grey-900 mt-2 mb-4 tracking-tight">선드림 에너지의 약속</h2>
            <p className="text-lg text-grey-700">
              우리는 정직함과 정밀함을 철칙으로 가장 높은 투명함을 유지합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about" className="bg-grey-50 p-8 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-grey-200 hover:-translate-y-1 transition-all duration-300 group" data-reveal>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-grey-900">철저한 투명 정밀 시공</h3>
              <p className="text-grey-700 leading-relaxed text-[15px]">
                한화 Q셀 등 대기업 1등급 정품 모듈만을 사용하여 수명 20년을 보장합니다. 저가 자재를 배제하여 안전합니다.
              </p>
              <span className="text-toss-blue font-semibold text-[14px] mt-2 flex items-center gap-1">
                자세히 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/about" className="bg-grey-50 p-8 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-grey-200 hover:-translate-y-1 transition-all duration-300 group delay-100" data-reveal>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-grey-900">정량적 시뮬레이션 기반</h3>
              <p className="text-grey-700 leading-relaxed text-[15px]">
                일조량, 경사도, 음영 등을 철저히 3D 정밀 시뮬레이션하여 보수적이고 정확한 수익성 데이터를 사전에 제공합니다.
              </p>
              <span className="text-toss-blue font-semibold text-[14px] mt-2 flex items-center gap-1">
                자세히 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/business" className="bg-grey-50 p-8 rounded-2xl flex flex-col gap-4 border border-transparent hover:border-grey-200 hover:-translate-y-1 transition-all duration-300 group delay-200" data-reveal>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-grey-900">신속 전담 사후 유지관리</h3>
              <p className="text-grey-700 leading-relaxed text-[15px]">
                고장 발생 감지 즉시 24시간 내 전문 전담 엔지니어가 현장에 긴급 출동하여 발전 손실을 확실하게 최소화합니다.
              </p>
              <span className="text-toss-blue font-semibold text-[14px] mt-2 flex items-center gap-1">
                자세히 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Focus Segment */}
      <section className="py-20 bg-grey-50 border-t border-grey-100">
        <div className="container-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6" data-reveal>
              <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">SERVICE FIELDS</span>
              <h2 className="text-3xl font-bold text-grey-900 tracking-tight leading-tight whitespace-pre-line">
                어디서나 간편하게{"\n"}발전 설비를 올려보세요
              </h2>
              <p className="text-grey-700 leading-relaxed text-base">
                선드림 에너지는 공장 옥상 유휴 지붕, 넓은 상업용 지상 야지부터 개별 단독 전원주택까지 모든 공간에 가장 고품격 디자인과 완벽한 시공 공법을 제시합니다.
              </p>
              <div>
                <Link 
                  href="/business"
                  className="px-5 py-3.5 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold rounded-xl text-[15px] transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm"
                >
                  시공 사업영역 확인하기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/business" className="bg-white rounded-3xl shadow-sm border border-grey-100 hover:border-grey-200 hover:shadow-md transition-all duration-300 flex flex-col group overflow-hidden" data-reveal>
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src="/images/factory-solar.png"
                    alt="공장 지붕에 설치된 대규모 태양광 패널"
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-11 h-11 bg-blue-50 text-toss-blue rounded-xl flex items-center justify-center -mt-14 relative z-10 shadow-sm ring-4 ring-white">
                    <Building2 className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-grey-900">공장 및 상업용</h3>
                  <p className="text-grey-500 text-[14px] leading-relaxed">
                    RE100 대응 및 세제 혜택 극대화. 지붕 파손이 전혀 없는 안전한 무타공 시공으로 장기적인 부가 수익을 확보하세요.
                  </p>
                </div>
              </Link>

              <Link href="/business" className="bg-white rounded-3xl shadow-sm border border-grey-100 hover:border-grey-200 hover:shadow-md transition-all duration-300 flex flex-col group overflow-hidden" data-reveal>
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src="/images/residential-solar.png"
                    alt="단독주택 지붕에 설치된 올블랙 태양광 모듈"
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-11 h-11 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center -mt-14 relative z-10 shadow-sm ring-4 ring-white">
                    <HomeIcon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-grey-900">주택 및 가정용</h3>
                  <p className="text-grey-500 text-[14px] leading-relaxed">
                    한여름 에어컨 풀가동 누진세 대책. 주택 고유의 옥상 구조를 살려 최적화된 각도 설계로 전기료를 최대 90% 아껴드립니다.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Conversion Banner */}
      <section className="py-24 text-white overflow-hidden relative bg-toss-blue">
        {/* Background image with overlay */}
        <Image
          src="/images/cta-field.png"
          alt="석양이 비치는 대규모 태양광 발전 단지"
          fill
          sizes="100vw"
          className="object-cover z-0"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-toss-blue/95 via-toss-blue/85 to-toss-blue-dark/75"></div>
        {/* Soft background glow circles */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/5 rounded-full filter blur-2xl"></div>
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="container-inner relative z-10 text-center max-w-3xl mx-auto flex flex-col gap-6 items-center" data-reveal>
          <span className="text-[13px] bg-white/10 text-white/90 font-bold px-3 py-1 rounded-full uppercase tracking-wider select-none">CONSULTATION</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            지금 우리 부지의 발전 가치를{"\n"}무료로 실시간 시뮬레이션해보세요
          </h2>
          <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
            선드림 에너지는 과장과 허위 없이, 가장 보수적이고 객관적인 데이터로 상세 분석하여 최적의 제안을 약속드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link 
              href="/calculator"
              className="px-6 py-4 bg-white hover:bg-grey-50 text-toss-blue font-bold rounded-xl text-[16px] transition-all duration-200 text-center shadow-md shadow-blue-900/10"
            >
              간편 수익 계산해보기
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-4 bg-toss-blue-dark hover:bg-opacity-90 border border-white/20 text-white font-bold rounded-xl text-[16px] transition-all duration-200 text-center"
            >
              1:1 맞춤 무료 상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Global Style shim for standard animations inside App Router */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 8s ease-in-out infinite;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.3, 0, 0.1, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Reveal states */
        [data-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition: transform 0.8s cubic-bezier(0.3, 0, 0.1, 1), opacity 0.8s cubic-bezier(0.3, 0, 0.1, 1);
        }
        [data-reveal].is-revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
