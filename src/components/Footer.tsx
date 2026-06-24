"use client";

import React from "react";
import Link from "next/link";
import { Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-grey-50 py-16 border-t border-grey-100 text-[14px] text-grey-700 mt-auto">
      <div className="container-inner flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-bold text-lg text-grey-900 flex items-center gap-1.5 select-none">
              <span className="w-5.5 h-5.5 rounded-full bg-toss-blue flex items-center justify-center text-white text-[12px]">
                <Sun className="w-3.5 h-3.5 text-white" fill="white" />
              </span>
              선드림 에너지
            </span>
            <p className="leading-relaxed text-grey-500 max-w-sm text-[13px]">
              선드림 에너지는 지속 가능한 태양광 발전 솔루션을 공급하는 친환경 기술 혁신 리더입니다. 안전성과 신뢰를 바탕으로 투명한 에너지 자립을 인도합니다.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-grey-900 text-[13px]">주요 서비스</span>
              <Link href="/business" className="text-left text-grey-700 hover:text-grey-900 text-[13px]">공장/상업용 태양광</Link>
              <Link href="/business" className="text-left text-grey-700 hover:text-grey-900 text-[13px]">가정/주택형 미니발전소</Link>
              <Link href="/business" className="text-left text-grey-700 hover:text-grey-900 text-[13px]">스마트 유지보수 O&M</Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-bold text-grey-900 text-[13px]">유용한 도구</span>
              <Link href="/calculator" className="text-left text-grey-700 hover:text-grey-900 text-[13px]">실시간 수익 계산기</Link>
              <Link href="/cases" className="text-left text-grey-700 hover:text-grey-900 text-[13px]">시공 실적 갤러리</Link>
              <Link href="/about" className="text-left text-grey-700 hover:text-grey-900 text-[13px]">선드림 타임라인 연혁</Link>
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="font-bold text-grey-900 text-[13px]">고객 센터</span>
              <span className="text-[13px] text-grey-700">전화: 010-5674-9811</span>
              <span className="text-[13px] text-grey-700">메일: jhy7608@naver.com</span>
              <span className="text-[12px] text-grey-500">주중 09:00 - 18:00 대기</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-grey-200/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-grey-500">
          <span>© 2026 선드림 에너지 주식회사. All rights reserved.</span>
          <div className="flex gap-6">
            <a className="hover:underline cursor-pointer">이용약관</a>
            <a className="hover:underline font-semibold text-grey-700 cursor-pointer">개인정보처리방침</a>
            <a className="hover:underline cursor-pointer">공장시공 규정</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
