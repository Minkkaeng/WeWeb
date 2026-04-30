import React from 'react';

export default function QuickBar() {
  return (
    <div className="fixed right-6 bottom-12 z-[100] flex flex-col gap-3">
      <div className="group relative">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          카카오톡 문의
        </div>
        <button className="w-14 h-14 rounded-2xl bg-[#FAE100] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
           <span className="text-xl">💬</span>
        </button>
      </div>

      <div className="group relative">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          유튜브 채널
        </div>
        <button className="w-14 h-14 rounded-2xl bg-[#FF0000] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
           <span className="text-xl text-white">▶</span>
        </button>
      </div>

      <div className="group relative">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          시설 예약
        </div>
        <button className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
           <span className="text-xl text-white">📅</span>
        </button>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
      >
         <span className="text-xs font-bold text-gray-400">TOP</span>
      </button>
    </div>
  );
}
