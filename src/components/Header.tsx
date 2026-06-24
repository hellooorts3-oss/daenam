"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; match?: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "회사소개",
    href: "/about/vision",
    match: "/about",
    children: [
      { label: "비전", href: "/about/vision" },
      { label: "조직도", href: "/about/org" },
      { label: "연혁", href: "/about/history" },
    ],
  },
  { label: "사업영역", href: "/business" },
  { label: "시공사례", href: "/cases" },
  { label: "고객센터", href: "/contact" },
];

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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-grey-100 shadow-sm"
          : "bg-white/0 border-b border-transparent"
      }`}>
        <div className="container-inner h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="logo cursor-pointer flex items-center select-none" aria-label="대남에너지 DN energy 홈">
            <Image
              src="/logo.png"
              alt="대남에너지 DN energy 로고"
              width={394}
              height={167}
              className="h-9 w-auto md:h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.match
                ? pathname.startsWith(item.match)
                : pathname === item.href || pathname.startsWith(item.href + "/");

              if (item.children) {
                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-[16px] md:text-[17px] font-medium transition-colors select-none ${
                        isActive ? "text-toss-blue font-semibold" : "text-grey-700 hover:text-grey-900"
                      }`}
                    >
                      {item.label}
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </Link>

                    {/* Dropdown */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-grey-100 py-2 min-w-[150px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-[14px] text-grey-700 hover:text-toss-blue hover:bg-grey-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[16px] md:text-[17px] font-medium transition-colors select-none ${
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
              className="px-4 py-2 bg-toss-blue hover:bg-toss-blue-dark text-white text-[14px] font-medium rounded-full transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
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
        <div className="fixed inset-0 z-30 bg-white pt-20 flex flex-col px-6 animate-scale-in overflow-y-auto">
          <div className="flex flex-col py-6">
            {navItems.map((item) => (
              <div key={item.href} className="border-b border-grey-100">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-left py-3 text-xl font-semibold ${
                    pathname === item.href ? "text-toss-blue" : "text-grey-900"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col pb-3 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-left py-2 text-[15px] text-grey-600 hover:text-toss-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full py-4 bg-toss-blue text-white rounded-xl text-center font-semibold text-lg"
          >
            무료 상담 신청
          </Link>
        </div>
      )}
    </>
  );
}
