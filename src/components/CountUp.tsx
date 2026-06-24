"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** 최종 도달 값 */
  end: number;
  /** 소수점 자리수 */
  decimals?: number;
  /** 애니메이션 지속 시간(ms) */
  duration?: number;
}

/**
 * 화면에 들어올 때 0부터 end까지 숫자가 올라가는 카운터.
 */
export default function CountUp({ end, decimals = 0, duration = 1600 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
              setValue(end * eased);
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                setValue(end);
              }
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("ko-KR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}
