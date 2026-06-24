"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Leaf, ShieldCheck } from "lucide-react";

export default function CalculatorPage() {
  const [calcInputType, setCalcInputType] = useState<"area" | "capacity">("capacity");
  const [calcValue, setCalcInputVal] = useState<number>(30); // 기본값: 30kW (또는 30평)

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

  // 수익 계산 수식 정의
  const capacityKW = calcInputType === "capacity" 
    ? calcValue 
    : Math.round((calcValue * 0.2) * 10) / 10;

  const dailyGenTime = 3.6;
  const annualGenKWH = Math.round(capacityKW * dailyGenTime * 365);
  const energyPricePerKWH = 210;
  const annualRevenue = Math.round(annualGenKWH * energyPricePerKWH);
  const monthlyRevenue = Math.round(annualRevenue / 12);
  const carbonReductionKG = Math.round(annualGenKWH * 0.466);
  const pineTreesCount = Math.round(carbonReductionKG / 6.6);

  return (
    <div className="py-16 md:py-24 bg-grey-50">
      <div className="container-inner">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
          <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">CALCULATOR</span>
          <h1 className="text-3xl md:text-4xl font-bold text-grey-900 mt-2 mb-4 tracking-tight">태양광 발전 간편 수익 계산기</h1>
          <p className="text-lg text-grey-700 whitespace-pre-line">
            우리 공장 지붕, 우리 집 마당에 태양광을 깔면 얼마나 벌 수 있을까?{"\n"}
            보수적이고 정교한 발전량 데이터 산출을 통해 미리 예측해보세요.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-grey-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10" data-reveal>
          {/* Input Controls (Left 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[15px] font-bold text-grey-900">1. 계산 방식 선택</span>
              <div className="grid grid-cols-2 gap-2 bg-grey-100 p-1 rounded-xl select-none">
                <button
                  onClick={() => { setCalcInputType("capacity"); setCalcInputVal(30); }}
                  className={`py-3 text-[14px] font-semibold rounded-lg transition-all duration-200 ${
                    calcInputType === "capacity" 
                      ? "bg-white text-toss-blue shadow-sm" 
                      : "text-grey-700 hover:text-grey-900"
                  }`}
                >
                  목표 용량(kW) 기준
                </button>
                <button
                  onClick={() => { setCalcInputType("area"); setCalcInputVal(150); }}
                  className={`py-3 text-[14px] font-semibold rounded-lg transition-all duration-200 ${
                    calcInputType === "area" 
                      ? "bg-white text-toss-blue shadow-sm" 
                      : "text-grey-700 hover:text-grey-900"
                  }`}
                >
                  부지 면적(평) 기준
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <span className="text-[15px] font-bold text-grey-900">
                  {calcInputType === "capacity" ? "2. 목표 설비 용량 입력" : "2. 가용 면적(평) 입력"}
                </span>
                <div className="flex items-baseline gap-1">
                  <input 
                    type="number" 
                    value={calcValue} 
                    onChange={(e) => setCalcInputVal(Math.max(1, Number(e.target.value)))}
                    className="w-20 text-right font-bold text-2xl text-toss-blue border-b border-toss-blue focus:outline-none focus:border-toss-blue-dark pb-0.5"
                  />
                  <span className="font-semibold text-lg text-grey-900">
                    {calcInputType === "capacity" ? "kW" : "평"}
                  </span>
                </div>
              </div>

              {/* Range Slider */}
              <input 
                type="range" 
                min={calcInputType === "capacity" ? "3" : "15"}
                max={calcInputType === "capacity" ? "500" : "2500"}
                value={calcValue}
                onChange={(e) => setCalcInputVal(Number(e.target.value))}
                className="w-full h-1.5 bg-grey-200 rounded-lg appearance-none cursor-pointer accent-toss-blue"
              />
              
              <div className="flex justify-between text-[12px] text-grey-500 font-medium">
                <span>{calcInputType === "capacity" ? "3 kW" : "15 평"}</span>
                <span>{calcInputType === "capacity" ? "500 kW" : "2,500 평"}</span>
              </div>
            </div>

            {/* Advanced info panel */}
            <div className="bg-grey-50 p-5 rounded-2xl flex flex-col gap-2 border border-grey-100 text-[13px] text-grey-700 leading-relaxed">
              <div className="font-semibold text-grey-900 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-toss-blue" />
                계산 공식 기준 안내
              </div>
              <p>• 하루 평균 발전 시간: <strong>3.6시간</strong> (대한민국 연평균 기준)</p>
              <p>• 에너지 판매 가중 가격: <strong>1kWh당 210원</strong> (SMP + REC 통합 가중 평균 단가 적용)</p>
              <p>• 면적당 설치 용량: <strong>1평당 약 0.2 kW</strong> 설치 추정치 기준</p>
            </div>
          </div>

          {/* Results Display (Right 7 columns) */}
          <div className="lg:col-span-7 bg-toss-blue-light/30 border border-toss-blue/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative">
            <div className="absolute top-4 right-4 text-toss-blue">
              <Sun className="w-10 h-10 animate-spin-slow opacity-20" />
            </div>

            <div>
              <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">연간 예상 발전량 및 수익 리포트</span>
              <div className="text-2xl font-bold text-grey-900 mt-2">
                예상 설비 용량: <span className="text-toss-blue">{capacityKW} kW</span>
              </div>
            </div>

            {/* Grid of Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-grey-100/50 flex flex-col gap-1">
                <span className="text-[12px] text-grey-500 font-semibold">연간 총 발전량</span>
                <span className="text-xl font-bold text-grey-900">
                  {annualGenKWH.toLocaleString()} <span className="text-[14px] font-medium text-grey-500">kWh</span>
                </span>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-grey-100/50 flex flex-col gap-1">
                <span className="text-[12px] text-grey-500 font-semibold">월평균 예상 발전량</span>
                <span className="text-xl font-bold text-grey-900">
                  {Math.round(annualGenKWH / 12).toLocaleString()} <span className="text-[14px] font-medium text-grey-500">kWh</span>
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-grey-100/50 flex flex-col gap-1">
                <span className="text-[12px] text-grey-500 font-semibold">연간 예상 판매 수익</span>
                <span className="text-xl font-bold text-toss-blue">
                  {annualRevenue.toLocaleString()} <span className="text-[14px] font-medium text-toss-blue/75">원</span>
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-grey-100/50 flex flex-col gap-1">
                <span className="text-[12px] text-grey-500 font-semibold">월평균 예상 판매 수익</span>
                <span className="text-xl font-bold text-toss-blue">
                  {monthlyRevenue.toLocaleString()} <span className="text-[14px] font-medium text-toss-blue/75">원</span>
                </span>
              </div>
            </div>

            {/* Environmental Metric */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-grey-100/50 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-bold text-grey-900 flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
                  친환경 환경 기여 지표
                </span>
                <span className="text-[12px] text-grey-500 font-medium">연간 누적 감소 기준</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 fill-emerald-600/10" />
                  </div>
                  <div>
                    <div className="text-[11px] text-grey-500 font-medium leading-none">이산화탄소 절감</div>
                    <div className="text-base font-bold text-grey-900 mt-1">
                      {carbonReductionKG >= 1000 
                        ? `${(carbonReductionKG / 1000).toFixed(1)} 톤` 
                        : `${carbonReductionKG.toLocaleString()} kg`}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Sun className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-[11px] text-grey-500 font-medium leading-none">소나무 식목 효과</div>
                    <div className="text-base font-bold text-grey-900 mt-1">
                      {pineTreesCount.toLocaleString()} 그루
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro-chart */}
              <div className="mt-2">
                <div className="h-3 w-full bg-grey-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-500" 
                    style={{ width: `${Math.min(100, Math.max(15, capacityKW / 5))}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] text-grey-400 mt-1">
                  <span>이산화탄소 제로 도전</span>
                  <span>100% RE100 달성</span>
                </div>
              </div>
            </div>

            {/* Consultation CTA */}
            <Link 
              href="/contact"
              className="w-full py-4 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold rounded-xl text-center transition-all duration-200 shadow-sm text-[15px] flex items-center justify-center"
            >
              상세 견적 및 발전 타당성 정밀 보고서 신청하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
