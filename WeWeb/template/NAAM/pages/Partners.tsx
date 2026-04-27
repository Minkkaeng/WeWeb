import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Building2, Store, Truck } from 'lucide-react';

export default function Partners() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="bg-[#5E2D91] pt-48 pb-32 px-6 md:px-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10">
           <div className="grid grid-cols-6 gap-4 transform rotate-12 scale-150">
             {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="aspect-square bg-white rounded-3xl" />
             ))}
           </div>
        </div>
        
        <div className="relative z-10">
           <h1 className="naam-heading text-6xl md:text-8xl text-white mb-8">Partnership.</h1>
           <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             NAAM의 파트너가 되는 것은 최상의 베이커리 솔루션을 소유하는 것과 같습니다. <br/>
             당신의 성공적인 비즈니스를 지원하는 든든한 조력자가 되겠습니다.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Partnership Benefits */}
          <div className="space-y-12 py-12">
            <div>
              <h2 className="naam-heading text-4xl mb-8">Why NAAM?</h2>
              <p className="text-gray-500 font-light mb-12">
                우리는 단순한 납품 업체를 넘어, 파트너사의 성장을 위한 다각도의 인프라를 지원합니다.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Building2 className="text-[#5E2D91]" />, title: 'Stable Infrastructure', desc: '최신 자동화 설비를 갖춘 스마트 팩토리에서 균일한 품질의 제품을 대량 공급합니다.' },
                { icon: <Store className="text-[#5E2D91]" />, title: 'Menu Development', desc: '파트너사의 상권과 컨셉에 최적화된 시그니처 메뉴 개발을 셰프팀이 직접 지원합니다.' },
                { icon: <Truck className="text-[#5E2D91]" />, title: 'Direct Logistics', desc: '수도권 전 지역 콜드체인 시스템을 통한 익일 오전 직접 배송을 원칙으로 합니다.' }
              ].map((benefit, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-gray-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="naam-heading text-3xl mb-8">Inquiry Form</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#9A8C98] ml-2">성함</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#5E2D91] transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#9A8C98] ml-2">업체명</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#5E2D91] transition-all"
                      placeholder="NAAM Bakery Korea"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#9A8C98] ml-2">이메일 주소</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#5E2D91] transition-all"
                    placeholder="partner@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#9A8C98] ml-2">문의 내용</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#5E2D91] transition-all resize-none"
                    placeholder="B2B 납품 상담 및 샘플 요청에 대해 궁금한 점을 남겨주세요."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-[#FFC526] text-[#2D232E] font-bold rounded-2xl text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
                >
                  <Send size={20} /> 문의 전송하기
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
                   <CheckCircle2 size={48} />
                </div>
                <h3 className="naam-heading text-4xl mb-4">문의 완료!</h3>
                <p className="text-gray-400 font-light mb-8">
                  성공적으로 전송되었습니다. <br/>
                  담당자가 영업일 기준 24시간 이내에 연락드리겠습니다.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#5E2D91] font-bold border-b border-[#5E2D91]"
                >
                  새 문의 작성하기
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
