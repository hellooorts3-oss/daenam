"use client";

import { useEffect } from "react";

/**
 * [data-reveal] 요소를 스크롤 진입 시 순차적으로 노출시키는 공통 훅.
 */
export function useReveal() {
  useEffect(() => {
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
}
