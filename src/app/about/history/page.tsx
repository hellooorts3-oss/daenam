"use client";

import React from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useReveal } from "@/components/useReveal";

interface HistoryYear {
  year: string;
  label: string;
  events: string[];
  image: string;
}

const historyData: HistoryYear[] = [
  {
    year: "2026년",
    label: "현재",
    events: [
      "누적 설치용량 80MW 달성",
      "2014년부터 이어온 태양광 발전 전문성 확보",
      "종합 에너지 솔루션 기업으로 도약",
    ],
    image: "/12.jpg",
  },
  {
    year: "2024년",
    label: "법인 설립",
    events: [
      "대남에너지(DN energy) 법인 설립",
      "영업·설계·시공·유지보수 4개 전담팀 체계 확립",
      "RPS·자가소비·지붕임대사업 포트폴리오 본격 확대",
    ],
    image: "/11.jpg",
  },
  {
    year: "2014년",
    label: "창업",
    events: [
      "현수에너지 설립",
      "태양광 발전 시공 전문 사업 시작",
      "공장·산업용 지붕형 태양광 시공 역량 축적",
    ],
    image: "/13.jpg",
  },
];

export default function HistoryPage() {
  useReveal();

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="HISTORY"
        title="대남에너지의 발자취"
        description={
          <>
            2014년 현수에너지 설립부터{" "}
            <br className="md:hidden" />
            2024년 대남에너지 법인 설립까지,
            <br />
            한 길을 이어온 태양광 발전 전문 여정입니다.
          </>
        }
        image="/05.jpg"
        imageAlt="대남에너지 태양광 발전 현장"
      />

      <div className="container-inner py-[90px]">
        <div className="relative overflow-x-clip">
          {/* center spine (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-gradient-to-b from-toss-blue/0 via-grey-200 to-toss-blue/0"></div>

          <div className="flex flex-col gap-16 md:gap-24">
            {historyData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative md:grid md:grid-cols-2 md:gap-16 md:items-center"
                >
                  {/* spine node — pop */}
                  <div
                    className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 w-5 h-5 rounded-full bg-toss-blue ring-4 ring-white shadow-sm z-10 reveal-scale"
                    data-reveal
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  ></div>

                  {/* Text card — 좌/우에서 슬라이드 인 */}
                  <div
                    className={isLeft ? "md:order-1 reveal-left" : "md:order-2 reveal-right"}
                    data-reveal
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <span className="absolute -top-4 right-2 text-[42px] md:text-7xl font-bold text-toss-blue/12 leading-none select-none">
                        {item.year.replace("년", "")}
                      </span>
                      <div className="relative">
                        <span className="inline-block text-[13px] font-bold text-white bg-toss-blue px-3 py-1 rounded-full">
                          {item.label}
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

                  {/* Image — 반대편에서 슬라이드 인 */}
                  <div
                    className={`mt-6 md:mt-0 ${isLeft ? "md:order-2 reveal-right" : "md:order-1 reveal-left"}`}
                    data-reveal
                    style={{ transitionDelay: `${index * 0.1 + 0.15}s` }}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl border border-grey-200 overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={`${item.year} 대남에너지 태양광 시공 현장`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        className="object-cover"
                      />
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
