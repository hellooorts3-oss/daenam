"use client";

import React from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useReveal } from "@/components/useReveal";

interface Team {
  name: string;
  role: string;
  desc: string;
  image: string;
}

const teams: Team[] = [
  {
    name: "영업팀",
    role: "Sales",
    desc: "사업 발굴부터 고객 상담,\n사업타당성 검토까지 담당합니다.",
    image: "/17.jpg",
  },
  {
    name: "설계팀",
    role: "Engineering",
    desc: "발전량 시뮬레이션 기반의\n설비용량·구조 설계를 책임집니다.",
    image: "/16.jpg",
  },
  {
    name: "시공팀",
    role: "Construction",
    desc: "안전한 무타공 시공과 준공,\n계통연계를 직접 수행합니다.",
    image: "/images/factory-solar.png",
  },
  {
    name: "유지보수팀",
    role: "O&M",
    desc: "가동·모니터링과 정기 점검으로\n발전 손실을 최소화합니다.",
    image: "/images/om-monitoring.png",
  },
];

export default function OrgPage() {
  useReveal();

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="ORGANIZATION"
        title="조직도"
        description={
          <>
            영업·설계·시공·유지보수 4개 전담팀이 사업의{" "}
            <br className="md:hidden" />
            전 과정을 직접 책임집니다.
          </>
        }
        image="/10.jpg"
        imageAlt="대남에너지 태양광 시공 현장"
      />

      <div className="container-inner py-[90px]">
        {/* 상단 본사 허브 */}
        <div className="flex flex-col items-center" data-reveal>
          <div className="inline-flex flex-col items-center text-center rounded-2xl bg-gradient-to-br from-toss-blue to-toss-blue-dark text-white px-12 py-7">
            <span className="text-[12px] font-semibold text-white/70 tracking-[0.2em]">DN ENERGY</span>
            <span className="text-2xl font-bold mt-1.5">대남에너지 본사</span>
            <span className="text-[13px] text-white/75 mt-1.5">4개 전담팀 · 완결형 시공 체계</span>
          </div>

          {/* 트리 커넥터 (데스크톱) */}
          <div className="hidden lg:block w-0.5 h-10 bg-grey-300"></div>
          <div className="hidden lg:block relative w-full h-10">
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-grey-300"></div>
            <div className="absolute top-0 left-[12.5%] w-0.5 h-10 bg-grey-300 -translate-x-1/2"></div>
            <div className="absolute top-0 left-[37.5%] w-0.5 h-10 bg-grey-300 -translate-x-1/2"></div>
            <div className="absolute top-0 left-[62.5%] w-0.5 h-10 bg-grey-300 -translate-x-1/2"></div>
            <div className="absolute top-0 left-[87.5%] w-0.5 h-10 bg-grey-300 -translate-x-1/2"></div>
          </div>

          {/* 커넥터 (모바일) */}
          <div className="lg:hidden w-0.5 h-8 bg-grey-300"></div>
        </div>

        {/* 팀 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 lg:mt-0">
          {teams.map((team, index) => (
            <div
              key={team.name}
              data-reveal
              className="reveal-up group relative bg-white rounded-2xl border border-grey-100 flex flex-col overflow-hidden hover:border-toss-blue/30 hover:shadow-lg hover:shadow-toss-blue/10 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* 이미지 헤더 */}
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={team.image}
                  alt={`${team.name} 관련 이미지`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 내용 */}
              <div className="p-6 flex flex-col">
                <span className="text-[11px] font-bold tracking-wider text-[#aab2bd] uppercase">{team.role}</span>
                <h3 className="text-xl font-bold text-grey-900 mt-3">{team.name}</h3>
                <p className="text-[14px] text-[#75787b] leading-relaxed mt-2.5 whitespace-pre-line break-keep">
                  {team.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
