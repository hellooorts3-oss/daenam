"use client";

import React, { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Check, 
  ShieldCheck 
} from "lucide-react";

export default function ContactPage() {
  // 문의하기 폼 상태 - 기본값으로 넣어둔 진현용님의 개인정보들을 전부 비웠습니다 (공란 설정)
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",       
    scope: "30~50만원",         
    startDate: "",     
    message: ""
  });
  
  // 제출 모달 상태
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  useEffect(() => {
    // Reveal Observer
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

  // 폼 필드 입력 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSubmitModalOpen(false);
    // 폼 완전히 비우기
    setFormData({
      name: "",
      email: "",
      phone: "",
      scope: "30~50만원",
      startDate: "",
      message: ""
    });
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Area: Company Details & Direct contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-reveal>
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[13px] font-semibold">
              <Clock className="w-3.5 h-3.5" />
              실시간 무료 상담 대기 중
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-grey-900 tracking-tight leading-tight whitespace-pre-line">
              지금 선드림 에너지와{"\n"}상담해보세요
            </h1>
            
            <p className="text-grey-700 text-base leading-relaxed">
              복잡한 인허가 절차부터 대출 지원 연계, 완벽한 사후 관리까지.{"\n"}
              에너지 전문가가 친절하게 모든 의문점을 풀어드립니다.
            </p>

            {/* Contact direct link cards */}
            <div className="flex flex-col gap-4 mt-4">
              <a href="tel:01056749811" className="bg-grey-50 p-5 rounded-2xl flex items-center gap-4 border border-transparent hover:border-grey-200 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-200">
                  <Phone className="w-5 h-5 fill-toss-blue/10" />
                </div>
                <div>
                  <div className="text-[12px] text-grey-500 font-semibold">대표 번호 (상담/전화)</div>
                  <div className="text-lg font-bold text-grey-900 mt-0.5">010-5674-9811</div>
                </div>
              </a>

              <a href="mailto:jhy7608@naver.com" className="bg-grey-50 p-5 rounded-2xl flex items-center gap-4 border border-transparent hover:border-grey-200 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-toss-blue group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] text-grey-500 font-semibold">공식 이메일</div>
                  <div className="text-lg font-bold text-grey-900 mt-0.5">jhy7608@naver.com</div>
                </div>
              </a>

              <div className="bg-grey-50 p-5 rounded-2xl flex items-center gap-4 border border-transparent transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-toss-blue">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] text-grey-500 font-semibold">작업 시작 희망일</div>
                  <div className="text-lg font-bold text-grey-900 mt-0.5">협의 및 맞춤 일정 가능</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area: Interactive Submission Form */}
          <div className="lg:col-span-7" data-reveal>
            <div className="bg-grey-50 border border-grey-100 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-grey-900 mb-6 pb-4 border-b border-grey-200/50">간편 무료 견적 신청</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-grey-700">성함 또는 기업명</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="예시: 홍길동"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl text-[14px] text-grey-900 focus:outline-none focus:border-toss-blue"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-grey-700">전화번호</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="예시: 010-1234-5678"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl text-[14px] text-grey-900 focus:outline-none focus:border-toss-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-grey-700">이메일 주소</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="예시: example@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl text-[14px] text-grey-900 focus:outline-none focus:border-toss-blue"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-grey-700">작업 시작 희망일</label>
                    <input 
                      type="date" 
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl text-[14px] text-grey-900 focus:outline-none focus:border-toss-blue"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-grey-700">견적 범위</label>
                  <select
                    name="scope"
                    value={formData.scope}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl text-[14px] text-grey-900 focus:outline-none focus:border-toss-blue appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234e5968' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="30~50만원">30~50만원 (기본 컨설팅 및 소형 진단)</option>
                    <option value="50~200만원">50~200만원 (가정용 설계 및 지원 신청)</option>
                    <option value="200~1000만원">200~1000만원 (가정용 풀 시공)</option>
                    <option value="1000만원 이상">1000만원 이상 (공장 및 상업용 발전 사업)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-grey-700">의뢰 목적 및 추가 요청 사항</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    placeholder="상담을 위한 구체적인 의뢰 목적이나 부지 조건 등을 자유롭게 작성해주세요."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-grey-200 rounded-xl text-[14px] text-grey-900 focus:outline-none focus:border-toss-blue resize-none leading-relaxed"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input 
                    type="checkbox" 
                    id="privacy-chk" 
                    required 
                    defaultChecked
                    className="w-4 h-4 rounded border-grey-300 text-toss-blue focus:ring-toss-blue mt-0.5 accent-toss-blue cursor-pointer"
                  />
                  <label htmlFor="privacy-chk" className="text-[12px] text-grey-500 leading-relaxed cursor-pointer select-none">
                    개인정보 수집 및 이용 동의 (필수) — 상담 서비스 제공 및 연락을 위해 신청인 정보가 활용됩니다.
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 mt-2 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold rounded-xl text-center transition-all duration-200 shadow-sm text-[15px]"
                >
                  무료 견적 신청서 제출하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Submit Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleCloseModal}></div>
          
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-grey-100 shadow-2xl relative z-10 text-center flex flex-col items-center gap-5 animate-scale-in">
            <div className="w-14 h-14 rounded-full bg-toss-blue-light text-toss-blue flex items-center justify-center">
              <Check className="w-8 h-8 text-toss-blue stroke-[3px]" />
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-bold text-grey-900">상담 신청 완료</h4>
              <p className="text-grey-700 text-[15px] leading-relaxed whitespace-pre-line">
                성공적으로 접수되었습니다.{"\n"}
                에너지 전문가가 남겨주신 연락처로 <strong>24시간 내에</strong> 정밀 발전 진단서와 친절한 안내 전화를 드리겠습니다.
              </p>
            </div>

            <div className="bg-grey-50 p-4 rounded-xl w-full text-left text-[13px] text-grey-700 border border-grey-100 flex flex-col gap-1.5">
              <div>• <strong>신청인/기업</strong>: {formData.name}</div>
              <div>• <strong>연락처</strong>: {formData.phone}</div>
              <div>• <strong>이메일</strong>: {formData.email}</div>
              <div>• <strong>견적 범위</strong>: {formData.scope}</div>
            </div>

            <button 
              onClick={handleCloseModal}
              className="w-full py-3 bg-toss-blue hover:bg-toss-blue-dark text-white font-semibold rounded-xl text-center transition-all duration-200 text-[14px]"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
