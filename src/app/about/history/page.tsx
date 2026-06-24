"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import { useReveal } from "@/components/useReveal";

interface HistoryYear {
  year: string;
  events: string[];
}

const historyData: HistoryYear[] = [
  {
    year: "2026년",
    events: [
      "누적 설치용량 80MW 달성",
      "12년의 태양광 전문 경력 확보",
      "종합 에너지 솔루션 기업으로 도약",
    ],
  },
  {
    year: "2024년",
    events: [
      "대남에너지(DN energy) 법인 설립",
      "영업·설계·시공·유지보수 4개 전담팀 체계 확립",
      "RPS·자가용 PPA·지붕임대사업 포트폴리오 본격 확대",
    ],
  },
  {
    year: "2014년",
    events: [
      "현수에너지 설립",
      "태양광 발전 시공 전문 사업 시작",
      "공장·산업용 지붕형 태양광 시공 역량 축적",
    ],
  },
];

export default function HistoryPage() {
  useReveal();

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="HISTORY"
        title="대남에너지의 발자취"
        description="2014년 현수에너지 설립부터 2024년 대남에너지 법인 설립까지, 12년의 태양광 전문 여정입니다."
      />
      {/* 이미지 준비 시: image="/images/history-hero.png" 추가 */}

      <div className="container-inner py-[90px]">
        <div className="relative">
          {/* center spine (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-gradient-to-b from-toss-blue/0 via-grey-200 to-toss-blue/0"></div>

          <div className="flex flex-col gap-16 md:gap-24">
            {historyData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative md:grid md:grid-cols-2 md:gap-16 md:items-center"
                  data-reveal
                  style={{ transitionDelay: `${index * 0.14}s` }}
                >
                  {/* spine node */}
                  <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 w-5 h-5 rounded-full bg-toss-blue ring-4 ring-white shadow-sm z-10"></div>

                  {/* Text card */}
                  <div className={isLeft ? "md:order-1" : "md:order-2"}>
                    <div className="relative bg-grey-50 rounded-2xl border border-grey-100 p-8 overflow-hidden">
                      <span className="absolute -top-4 right-5 text-6xl md:text-7xl font-bold text-toss-blue/10 leading-none select-none">
                        {item.year.replace("년", "")}
                      </span>
                      <div className="relative">
                        <span className="inline-block text-[13px] font-bold text-white bg-toss-blue px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                        <ul className="flex flex-col gap-3 mt-5">
                          {item.events.map((event, eventIdx) => (
                            <li key={eventIdx} className="flex items-start gap-2.5 text-grey-700 text-[15px] leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-toss-blue shrink-0"></span>
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Image placeholder */}
                  <div className={`mt-6 md:mt-0 ${isLeft ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative aspect-[4/3] rounded-2xl border border-grey-200 bg-gradient-to-br from-grey-50 to-grey-100 flex items-center justify-center overflow-hidden">
                      <span className="text-[13px] font-medium text-grey-400 tracking-wide">이미지 준비중</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
