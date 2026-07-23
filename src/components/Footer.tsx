"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-grey-900 py-16 text-[14px] text-white/70 mt-auto">
      <div className="container-inner flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-4">
            <Image
              src="/logo-white.png"
              alt="대남에너지 DN energy 로고"
              width={394}
              height={167}
              className="h-8 w-auto self-start select-none"
            />
            <p className="leading-relaxed text-white/55 max-w-sm text-[13px]">
              대남에너지(DN energy)는 2014년 설립 이후 축적해 온 태양광 발전 전문성과 누적 설치용량 80MW를 달성한 종합 에너지 솔루션 기업입니다. RPS 발전사업, 자가소비, 지붕임대사업으로 고객의 에너지 자립과 ESG 경영을 함께 만들어갑니다.
            </p>
            <div className="flex flex-col gap-1.5 text-[13px] text-white/55 mt-1">
              <span><span className="text-white/40 mr-2">대표</span>진현용</span>
              <span className="flex gap-2"><span className="text-white/40 shrink-0">주소</span>(34368) 대전광역시 서구 만년동 170번지 102호</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-white text-[13px]">주요 사업</span>
              <Link href="/business#rps" className="text-left text-white/65 hover:text-white text-[13px] transition-colors">RPS 발전사업</Link>
              <Link href="/business#ppa" className="text-left text-white/65 hover:text-white text-[13px] transition-colors">자가소비</Link>
              <Link href="/business#roof" className="text-left text-white/65 hover:text-white text-[13px] transition-colors">지붕임대사업</Link>
              <Link href="/business#om" className="text-left text-white/65 hover:text-white text-[13px] transition-colors">스마트 유지보수 O&M</Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-bold text-white text-[13px]">회사 정보</span>
              <Link href="/cases" className="text-left text-white/65 hover:text-white text-[13px] transition-colors">시공 실적 갤러리</Link>
              <Link href="/about" className="text-left text-white/65 hover:text-white text-[13px] transition-colors">회사 연혁·조직도</Link>
              <Link href="/business" className="text-left text-white/65 hover:text-white text-[13px] transition-colors">사업 영역 안내</Link>
            </div>

            <div className="flex flex-col gap-2.5 col-span-2 sm:col-span-1">
              <span className="font-bold text-white text-[13px]">고객 센터</span>
              <a href="tel:0426241670" className="text-[13px] text-white/65 hover:text-white transition-colors">전화: 042-624-1670</a>
              <span className="text-[13px] text-white/65">팩스: 042-367-1670</span>
              <a href="mailto:dnc7500@naver.com" className="text-[13px] text-white/65 hover:text-white transition-colors">이메일: dnc7500@naver.com</a>
              <span className="text-[12px] text-white/40 mt-0.5">주중 09:00 - 18:00 대기</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-white/40">
          <span>© 2026 대남에너지(DN energy). All rights reserved.</span>
          <div className="flex gap-6">
            <a className="hover:text-white/70 cursor-pointer transition-colors">이용약관</a>
            <a className="hover:text-white font-semibold text-white/60 cursor-pointer transition-colors">개인정보처리방침</a>
            <a className="hover:text-white/70 cursor-pointer transition-colors">시공 규정</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
