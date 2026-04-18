import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001D3D] text-white py-16 md:py-20 border-t border-white/5">
      <div className="km-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <Shield size={28} className="text-[#E63946]" />
                <span className="text-2xl font-black tracking-tighter">국민25시</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed max-w-md font-light mb-8">
               국민25시는 모든 국민이 정부의 정책과 행정 서비스를 빈틈없이 누릴 수 있도록 24시간을 넘어선 1시간의 진심을 더합니다. 신뢰받는 행정 파트너로서 더 나은 내일을 위해 함께하겠습니다.
             </p>
             <div className="flex gap-4">
                {['Facebook', 'X', 'YouTube', 'Blog'].map(s => (
                  <div key={s} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-xs font-bold text-gray-400">
                    {s[0]}
                  </div>
                ))}
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 col-span-1 md:col-span-2 gap-8 md:gap-12">
            <div>
              <h4 className="font-bold mb-6 text-gray-200 text-sm md:text-base">주요 정책 서비스</h4>
              <ul className="space-y-4 text-xs md:text-sm text-gray-500">
                 <li><a href="#" className="hover:text-white transition-colors">복지 서비스 안내</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">주거 안정 지원</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">일자리 아카이브</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">교육 및 장학금</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-gray-200 text-sm md:text-base">고객 지원</h4>
              <ul className="space-y-4 text-xs md:text-sm text-gray-500">
                 <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">1:1 상담 문의</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">민원 신청 가이드</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">보도자료 신청</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-[11px] text-gray-600 font-medium uppercase tracking-widest text-center md:text-left">
          <p>© {new Date().getFullYear()} KOOKMIN 25 POLICY PLATFORM. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
