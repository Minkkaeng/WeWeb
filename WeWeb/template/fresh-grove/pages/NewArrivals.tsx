import config from '../theme-config.json';
import '@packages/ui/ProductCard';

const arrivals = [
  { name: "Artisan Wood Chair", price: 320000, category: "Furniture", image: "https://picsum.photos/id/50/800/1000", desc: "수제 목재 라운지 체어" },
  { name: "Modern Glass Vase", price: 85000, category: "Decoration", image: "https://picsum.photos/id/51/800/1000", desc: "모던한 형태의 데코레이션 유리 화병" },
  { name: "Cotton Throw Blanket", price: 110000, category: "Fabric", image: "https://picsum.photos/id/52/800/1000", desc: "순면 블랭킷, 사계절용" },
  { name: "Brass Desk Lamp", price: 155000, category: "Lighting", image: "https://picsum.photos/id/53/800/1000", desc: "클래식 황동 스탠드 조명" },
  { name: "Woven Storage Basket", price: 45000, category: "Living", image: "https://picsum.photos/id/54/800/1000", desc: "라탄 위빙 수납용품" }
];

import { useRef } from 'react';

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    <div className="w-full py-24 bg-gray-50 overflow-hidden border-t-2 border-white group/section">
      <div className="pl-6 md:pl-12 max-w-[1400px] mx-auto relative">
        <div className="flex justify-between items-end mb-12 pr-6 md:pr-12">
          <h2 className="text-4xl uppercase tracking-widest font-black" style={{ fontFamily: config.fonts.heading, color: config.colors.primary }}>
            New Arrivals
          </h2>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 mr-4 opacity-0 group-hover/section:opacity-100 transition-opacity">
              <button onClick={() => scroll('left')} aria-label="이전 슬라이드" className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition-all active:scale-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button onClick={() => scroll('right')} aria-label="다음 슬라이드" className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition-all active:scale-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest underline underline-offset-4 hover:text-black text-gray-500">View All</button>
          </div>
        </div>
        
        <div className="relative">
          <button onClick={() => scroll('left')} aria-label="이전 슬라이드" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/90 shadow-xl opacity-0 group-hover/section:opacity-100 transition-all hover:bg-white md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div ref={scrollRef} className="flex flex-nowrap overflow-x-auto gap-8 pb-12 pr-6 md:pr-12 scrollbar-hide snap-x relative">
            {arrivals.map((p, i) => (
              <div key={i} className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start">
                {/* @ts-ignore -- Custom element */}
                <fw-product-card
                  class="block h-full"
                  name={p.name}
                  price={p.price.toString()}
                  image={p.image}
                  category={p.category}
                  description={p.desc}
                  show-badge="true"
                  show-description="true"
                  is-elevated="false"
                  has-quick-add="true"
                  has-quick-view="true"
                ></fw-product-card>
              </div>
            ))}
          </div>
          <button onClick={() => scroll('right')} aria-label="다음 슬라이드" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/90 shadow-xl opacity-0 group-hover/section:opacity-100 transition-all hover:bg-white md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
