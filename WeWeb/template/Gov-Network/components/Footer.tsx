import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1a120d] text-white pt-24 pb-12">
      <div className="eg-container">
        <div className="flex flex-col lg:flex-row justify-between border-b border-orange-500/20 pb-16 mb-12">
          <div className="mb-12 lg:mb-0">
             <div className="w-14 h-14 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white font-black text-2xl italic mb-6">
                GN
             </div>
             <p className="text-gray-400 font-bold text-[15px] leading-relaxed max-w-sm mb-6">
                국가와 국민을 잇는 가장 확고한 다리,<br/>
                Gov-Network가 안전한 미래 행정을 약속합니다.
             </p>
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                <span className="w-2 h-2 rounded-full bg-[#FF6600]"></span>
                <span className="text-[12px] font-bold text-[#FF6600]">고객지원센터 1588-0000</span>
             </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
             <div>
                <h4 className="font-extrabold mb-6 text-[16px] text-white">주요 서비스</h4>
                <ul className="space-y-4 text-[14px] text-gray-400 font-bold cursor-pointer">
                   <li className="hover:text-[#FF6600] transition-colors">행정 시스템</li>
                   <li className="hover:text-[#FF6600] transition-colors">디지털 혁신</li>
                   <li className="hover:text-[#FF6600] transition-colors">R&D 센터</li>
                </ul>
             </div>
             <div>
                <h4 className="font-extrabold mb-6 text-[16px] text-white">정책/알림</h4>
                <ul className="space-y-4 text-[14px] text-gray-400 font-bold cursor-pointer">
                   <li className="hover:text-[#FF6600] transition-colors">새 소식</li>
                   <li className="hover:text-[#FF6600] transition-colors">보도자료</li>
                   <li className="hover:text-[#FF6600] transition-colors">공지사항</li>
                </ul>
             </div>
             <div>
                <h4 className="font-extrabold mb-6 text-[16px] text-white">제휴안내</h4>
                <ul className="space-y-4 text-[14px] text-gray-400 font-bold cursor-pointer">
                   <li className="hover:text-[#FF6600] transition-colors">입주기업 안내</li>
                   <li className="hover:text-[#FF6600] transition-colors">파트너십 문의</li>
                </ul>
             </div>
             <div>
                <h4 className="font-extrabold mb-6 text-[16px] text-white">공식 채널</h4>
                <ul className="space-y-4 text-[14px] text-gray-400 font-bold cursor-pointer">
                   <li className="hover:text-[#FF6600] transition-colors">유튜브</li>
                   <li className="hover:text-[#FF6600] transition-colors">인스타그램</li>
                </ul>
             </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-gray-500 font-bold">
           <p>© 2026 Gov-Network Corporation. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="text-white hover:text-[#FF6600] transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
