import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-ns-secondary text-white py-20 px-8">
      <div className="ns-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="ns-heading text-3xl font-black mb-6">GRAND TASTE<span className="text-ns-primary">.</span></div>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              셰프의 레시피를 당신의 식탁으로<br/>프리미엄 밀키트 그랜드 테이스트
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase">Policies</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-ns-primary cursor-pointer transition-colors">품질경영</li>
              <li className="hover:text-ns-primary cursor-pointer transition-colors">환경경영</li>
              <li className="hover:text-ns-primary cursor-pointer transition-colors">ESG 경영</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-ns-primary cursor-pointer transition-colors">고객센터</li>
              <li className="hover:text-ns-primary cursor-pointer transition-colors">대리점 개설문의</li>
              <li className="hover:text-ns-primary cursor-pointer transition-colors">IR 센터</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase">Newsletter</h4>
            <div className="flex border-b border-gray-700 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent border-none text-sm w-full outline-none" />
              <button className="text-ns-primary font-bold">→</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800 text-[11px] font-bold text-gray-500 tracking-widest uppercase">
          <p>© 2026 GRAND TASTE CO., LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
