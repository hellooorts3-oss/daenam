"use client";

import React, { useEffect, useState } from "react";

/** TODO: 카카오톡 채널/오픈채팅 링크로 교체하세요 */
const KAKAO_URL = "#";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* KakaoTalk */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 상담"
        className="group relative w-14 h-14 rounded-full bg-[#FEE500] shadow-lg shadow-black/10 flex items-center justify-center hover:-translate-y-1 transition-transform duration-200"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#3C1E1E" aria-hidden="true">
          <path d="M12 3.5c-4.97 0-9 3.13-9 6.99 0 2.49 1.67 4.66 4.18 5.89-.18.62-.66 2.28-.76 2.63-.12.43.16.43.33.31.14-.09 2.2-1.5 3.09-2.1.69.1 1.41.16 2.16.16 4.97 0 9-3.13 9-6.99S16.97 3.5 12 3.5z" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-grey-900 text-white text-[12px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          카카오톡 상담
        </span>
      </a>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
        className="group relative w-14 h-14 rounded-full bg-white border border-grey-200 shadow-lg shadow-black/5 flex items-center justify-center text-toss-blue hover:-translate-y-1 hover:bg-grey-50 transition-all duration-200"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-grey-900 text-white text-[12px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          맨 위로
        </span>
      </button>
    </div>
  );
}
