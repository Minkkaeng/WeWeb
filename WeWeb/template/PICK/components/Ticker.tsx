import React from 'react';
import config from '../theme-config.json';

export default function Ticker() {
  const tickerItems = Array(15).fill(config.ticker.text);

  return (
    <div className="fixed top-0 left-0 w-full h-12 bg-[#be3127] text-white flex items-center overflow-hidden z-[200] pick-border-b">
      <div className="animate-ticker">
        {tickerItems.map((item, i) => (
          <React.Fragment key={i}>
            <span 
              className="pick-text-header text-xl tracking-tighter px-12"
            >
              {item}
            </span>
            <span className="text-xl font-black opacity-30">•</span>
          </React.Fragment>
        ))}
        {/* Repeat for seamless loop */}
        {tickerItems.map((item, i) => (
          <React.Fragment key={`repeat-${i}`}>
            <span 
              className="pick-text-header text-xl tracking-tighter px-12"
            >
              {item}
            </span>
            <span className="text-xl font-black opacity-30">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
