import React from 'react';

export default function Ticker() {
  const tickerItems = Array(15).fill("NOCTURNE & CO. — A SYMPHONY OF SHADOWS");

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-black text-[#c5a059] flex items-center overflow-hidden z-[200] border-b border-[#c5a059]/20">
      <div className="flex animate-ticker-brun whitespace-nowrap">
        {tickerItems.map((item, i) => (
          <React.Fragment key={i}>
            <span className="brun-text-header text-sm tracking-widest px-12">
              {item}
            </span>
            <span className="text-sm font-black opacity-50">✦</span>
          </React.Fragment>
        ))}
        {tickerItems.map((item, i) => (
          <React.Fragment key={`repeat-${i}`}>
            <span className="brun-text-header text-sm tracking-widest px-12">
              {item}
            </span>
            <span className="text-sm font-black opacity-50">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
