"use client";

import React from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useReveal } from "@/components/useReveal";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "2014", label: "현수에너지 설립" },
  { value: "2024", label: "대남에너지 법인 설립" },
  { value: "12년", label: "태양광 사업 운영" },
  { value: "80MW", label: "누적 설치용량" },
];

const sections = [
  {
    href: "/about/vision",
    eyebrow: "VISION",
    title: "비전",
    desc: "종합 에너지 솔루션 기업으로의 성장, ESG 경영, 탄소중립 실현을 향한 대남에너지의 방향성.",
  },
  {
    href: "/about/org",
    eyebrow: "ORGANIZATION",
    title: "조직도",
    desc: "영업·설계·시공·유지보수 4개 전담팀이 사업의 전 과정을 직접 책임지는 조직 구조.",
  },
  {
    href: "/about/history",
    eyebrow: "HISTORY",
    title: "연혁",
    desc: "2014년 현수에너지 설립부터 2024년 대남에너지 법인 설립까지 걸어온 발자취.",
  },
];

export default function AboutPage() {
  useReveal();

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="ABOUT US"
        title="대남에너지 (DN energy) 이야기"
        description={"당사는 2014년 설립 이후 지속적인 성장을 거듭하며 태양광 산업의 선두주자로 자리매김하였습니다.\n고객 만족과 기술 혁신을 통해 신뢰받는 기업이 되겠습니다."}
        image="/02.jpg"
        imageAlt="대남에너지 태양광 발전 현장"
      />

      <div className="container-inner py-[90px]">
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24" data-reveal>
          {stats.map((stat, i) => (
            <div key={i} className="bg-grey-50 rounded-2xl p-6 text-center border border-grey-100">
              <div className="text-3xl font-bold text-toss-blue">{stat.value}</div>
              <div className="text-[13px] text-grey-700 mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section navigation */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
          <span className="text-[13px] text-toss-blue font-bold tracking-wider uppercase">COMPANY</span>
          <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mt-2 tracking-tight">회사소개 더 알아보기</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((sec, i) => (
            <Link
              key={sec.href}
              href={sec.href}
              className="card-lift group bg-grey-50 rounded-2xl border border-grey-100 hover:border-toss-blue/30 p-8 flex flex-col gap-3"
              data-reveal
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-[12px] font-bold text-toss-blue tracking-wider uppercase">{sec.eyebrow}</span>
              <h3 className="text-xl font-bold text-grey-900">{sec.title}</h3>
              <p className="text-[#75787b] text-[15px] leading-relaxed">{sec.desc}</p>
              <span className="text-toss-blue font-semibold text-[14px] mt-auto pt-2 flex items-center gap-1">
                바로가기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
