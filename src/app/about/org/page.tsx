"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import { useReveal } from "@/components/useReveal";

interface Team {
  name: string;
  desc: string;
}

const teams: Team[] = [
  { name: "영업팀", desc: "사업 발굴부터 고객 상담,\n사업타당성 검토까지 담당합니다." },
  { name: "설계팀", desc: "발전량 시뮬레이션 기반의\n설비용량·구조 설계를 책임집니다." },
  { name: "시공팀", desc: "안전한 무타공 시공과 준공,\n계통연계를 직접 수행합니다." },
  { name: "유지보수팀", desc: "가동·모니터링과 정기 점검으로\n발전 손실을 최소화합니다." },
];

export default function OrgPage() {
  useReveal();

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="ORGANIZATION"
        title="조직도"
        description="영업·설계·시공·유지보수 4개 전담팀이 사업의 전 과정을 직접 책임집니다."
        image="/10.jpg"
        imageAlt="대남에너지 태양광 시공 현장"
      />

      <div className="container-inner py-[90px]">
        {/* Desktop mind map */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left branches */}
          <div className="flex flex-col gap-12">
            {teams.slice(0, 2).map((team, i) => (
              <div
                key={team.name}
                className="flex items-center justify-end"
                data-reveal
                style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              >
                <div className="w-full max-w-xs rounded-2xl bg-grey-50 border border-grey-100 p-6 text-right hover:border-toss-blue/40 hover:shadow-md transition-all duration-300">
                  <span className="text-[13px] font-extrabold text-toss-blue/40 tracking-wider">{`0${i + 1}`}</span>
                  <h3 className="text-lg font-bold text-grey-900 mt-1">{team.name}</h3>
                  <p className="text-[13px] text-grey-700 leading-relaxed mt-2 whitespace-pre-line break-keep">{team.desc}</p>
                </div>
                <span className="w-12 h-px bg-grey-300 shrink-0"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-toss-blue/50 shrink-0 -ml-1"></span>
              </div>
            ))}
          </div>

          {/* Center hub */}
          <div className="flex justify-center px-8" data-reveal style={{ transitionDelay: "0.05s" }}>
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-toss-blue to-toss-blue-dark text-white flex flex-col items-center justify-center text-center shadow-xl shadow-toss-blue/30">
              <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"></span>
              <span className="text-[12px] font-semibold text-white/70 tracking-[0.2em]">DN ENERGY</span>
              <span className="text-2xl font-bold mt-1.5">대남에너지</span>
              <span className="text-[12px] text-white/70 mt-1.5">본사 · 4개 전담팀</span>
            </div>
          </div>

          {/* Right branches */}
          <div className="flex flex-col gap-12">
            {teams.slice(2, 4).map((team, i) => (
              <div
                key={team.name}
                className="flex items-center"
                data-reveal
                style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-toss-blue/50 shrink-0 -mr-1"></span>
                <span className="w-12 h-px bg-grey-300 shrink-0"></span>
                <div className="w-full max-w-xs rounded-2xl bg-grey-50 border border-grey-100 p-6 hover:border-toss-blue/40 hover:shadow-md transition-all duration-300">
                  <span className="text-[13px] font-extrabold text-toss-blue/40 tracking-wider">{`0${i + 3}`}</span>
                  <h3 className="text-lg font-bold text-grey-900 mt-1">{team.name}</h3>
                  <p className="text-[13px] text-grey-700 leading-relaxed mt-2 whitespace-pre-line break-keep">{team.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stack */}
        <div className="lg:hidden flex flex-col items-center gap-5">
          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-toss-blue to-toss-blue-dark text-white flex flex-col items-center justify-center text-center shadow-xl shadow-toss-blue/30" data-reveal>
            <span className="text-[11px] font-semibold text-white/70 tracking-[0.2em]">DN ENERGY</span>
            <span className="text-xl font-bold mt-1">대남에너지</span>
            <span className="text-[11px] text-white/70 mt-1">본사 · 4개 전담팀</span>
          </div>
          <span className="w-px h-6 bg-grey-300"></span>
          <div className="grid grid-cols-2 gap-3 w-full">
            {teams.map((team, i) => (
              <div
                key={team.name}
                className="rounded-2xl bg-grey-50 border border-grey-100 p-5"
                data-reveal
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="text-[12px] font-extrabold text-toss-blue/40 tracking-wider">{`0${i + 1}`}</span>
                <h3 className="text-[15px] font-bold text-grey-900 mt-1">{team.name}</h3>
                <p className="text-[12px] text-grey-700 leading-relaxed mt-1 whitespace-pre-line break-keep">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
