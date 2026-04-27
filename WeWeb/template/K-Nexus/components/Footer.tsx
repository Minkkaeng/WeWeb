import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#002D5A] text-white py-24">
      <div className="kn-container">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center">
                 <span className="text-white font-bold text-xl">K</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">K-NEXUS</h2>
            </div>
            <p className="text-blue-100 opacity-60 leading-relaxed mb-10">
              K-Nexus는 연구개발 및 전문가 생태계의 지속 가능한 성장을 위해 경력 데이터 기반의 통합 솔루션을 제공합니다. 글로벌 네트워크의 연결, 그 이상의 가치를 만듭니다.
            </p>
            <div className="flex gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-8 text-blue-300">Hub Services</h4>
              <ul className="space-y-4 text-sm opacity-60">
                <li>Career Pathway</li>
                <li>Research Networking</li>
                <li>Global Insight</li>
                <li>Insight Report</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-blue-300">Governance</h4>
              <ul className="space-y-4 text-sm opacity-60">
                <li>Notice Center</li>
                <li>Project Archive</li>
                <li>Support Policy</li>
                <li>Security Center</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-blue-300">Connect</h4>
              <ul className="space-y-4 text-sm opacity-60">
                <li>About K-Nexus</li>
                <li>Contact Support</li>
                <li>FAQ Center</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] opacity-40">
           <p>© 2026 K-NEXUS GLOBAL. ALL RIGHTS RESERVED.</p>
           <p>SYSTEM ARCHITECTURE BY WEWEB STUDIO</p>
        </div>
      </div>
    </footer>
  );
}
