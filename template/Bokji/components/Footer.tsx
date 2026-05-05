import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 border-t border-gray-800">
      <div className="eg-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                 <span className="text-white font-bold text-xl">B</span>
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">에버복지포털</h2>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              소중한 이웃과 함께 동행하며 더 나은 사회를 만들어갑니다. 기관의 모든 소식과 정보를 전해드립니다.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">f</div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">y</div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">B</div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">기관안내</h3>
            <ul className="text-sm space-y-4">
              <li className="hover:text-white cursor-pointer transition-colors">기관 소개</li>
              <li className="hover:text-white cursor-pointer transition-colors">오시는 길</li>
              <li className="hover:text-white cursor-pointer transition-colors">공지사항</li>
              <li className="hover:text-white cursor-pointer transition-colors">연간 보고서</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">사업안내</h3>
            <ul className="text-sm space-y-4">
              <li className="hover:text-white cursor-pointer transition-colors">장애인 지원 사업</li>
              <li className="hover:text-white cursor-pointer transition-colors">아동/청소년 지원</li>
              <li className="hover:text-white cursor-pointer transition-colors">노인 맞춤 돌봄</li>
              <li className="hover:text-white cursor-pointer transition-colors">심리상담 서비스</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">고객센터</h3>
            <p className="text-2xl font-bold text-white mb-4">1588-0000</p>
            <p className="text-xs mb-2">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
            <p className="text-xs mb-6">점심시간 12:00 - 13:00</p>
            <button className="w-full py-3 rounded-lg border border-gray-700 hover:border-blue-600 hover:text-white transition-all text-xs font-bold">
              1:1 실시간 문의하기
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 에버복지포털. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">개인정보처리방침</span>
            <span className="hover:text-white cursor-pointer">이용약관</span>
            <span className="hover:text-white cursor-pointer">이메일무단수집거부</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
