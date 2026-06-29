"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import { useReveal } from "@/components/useReveal";
import { ShieldCheck, Leaf, Zap } from "lucide-react";

interface Vision {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const visions: Vision[] = [
  {
    title: "종합 에너지 솔루션 기업으로 성장",
    desc: "RPS 발전사업부터 자가용 PPA, 지붕임대까지 태양광 전 분야를 아우르는 종합 솔루션을 제공합니다.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "ESG 경영 선도",
    desc: "투명한 사업 운영과 책임 있는 시공으로 고객과 사회가 함께 신뢰할 수 있는 ESG 경영을 실천합니다.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "탄소중립 실현에 기여",
    desc: "신재생에너지 보급 확대를 통해 RE100과 국가 탄소중립 목표 달성에 앞장섭니다.",
    icon: <Leaf className="w-6 h-6" />,
  },
];

export default function VisionPage() {
  useReveal();

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="VISION"
        title="대남에너지의 비전"
        description="태양광 전 분야를 아우르는 종합 에너지 솔루션 기업으로서, ESG 경영과 탄소중립 실현에 앞장섭니다."
        image="/03.jpg"
        imageAlt="대남에너지 태양광 발전 단지"
      />

      <div className="container-inner py-[90px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visions.map((vision, index) => (
            <div
              key={index}
              className="bg-grey-50 p-8 rounded-2xl flex flex-col gap-4 border border-grey-100 hover:border-toss-blue/30 hover:shadow-md transition-all duration-300 group"
              data-reveal
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-300">
                {vision.icon}
              </div>
              <h3 className="text-lg font-bold text-grey-900 leading-snug">{vision.title}</h3>
              <p className="text-grey-700 leading-relaxed text-[15px]">{vision.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
