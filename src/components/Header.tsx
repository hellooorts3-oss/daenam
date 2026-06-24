"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Safety reveal trigger
    document.documentElement.classList.add("js-ready");
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "회사소개", href: "/about" },
    { label: "사업영역", href: "/business" },
    { label: "시공사례", href: "/cases" },
    { label: "수익 계산기", href: "/calculator" },
    { label: "고객센터", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/85 backdrop-blur-xl border-b border-grey-100 shadow-sm" 
          : "bg-white/0 border-b border-transparent"
      }`}>
        <div className="container-inner h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="logo cursor-pointer flex items-center text-decoration-none select-none">
            <span className="logo-wordmark font-bold text-xl tracking-tight text-grey-900 flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-toss-blue flex items-center justify-center text-white">
                <Sun className="w-4.5 h-4.5 text-white" fill="white" />
              </span>
              선드림 에너지
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors select-none ${
                    isActive ? "text-toss-blue font-semibold" : "text-grey-700 hover:text-grey-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/contact"
              className="px-4 py-2 bg-toss-blue hover:bg-toss-blue-dark text-white text-[14px] font-medium rounded-full transition-all duration-200 shadow-sm"
            >
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-grey-700 hover:text-grey-900 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-20 flex flex-col px-6 animate-scale-in">
          <div className="flex flex-col gap-6 py-6">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`text-left py-2 text-xl font-semibold border-b border-grey-100 ${
                  pathname === item.href ? "text-toss-blue" : "text-grey-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link 
            href="/contact"
            className="mt-4 w-full py-4 bg-toss-blue text-white rounded-xl text-center font-semibold text-lg"
          >
            무료 상담 신청
          </Link>
        </div>
      )}
    </>
  );
}
