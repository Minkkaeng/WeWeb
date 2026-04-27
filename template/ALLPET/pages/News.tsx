import { motion } from 'framer-motion';
import { Rss, Clock } from 'lucide-react';

export default function News() {
  const newsItems = [
    { id: 1, title: '봄철 진드기 예방, 선택이 아닌 필수입니다', source: '데일리펫', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400', time: '2시간 전' },
    { id: 2, title: '강아지도 우울증에 걸린다? 주요 증상과 대처법', source: '펫매거진', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400', time: '5시간 전' },
    { id: 3, title: '올바른 고양이 화장실 모래 선택 가이드', source: '냥냥일보', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400', time: '1일 전' },
    { id: 4, title: '노령견을 위한 맞춤형 영양제 고르는 법', source: '펫트렌드', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400', time: '1일 전' },
    { id: 5, title: '반려동물과 함께 떠나는 제주도 렌터카 여행 코스', source: '트래블펫', img: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&q=80&w=400', time: '2일 전' },
    { id: 6, title: '2026년 새롭게 바뀌는 동물보호법 요약', source: '동물권행동', img: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400', time: '3일 전' },
  ];

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto font-sans">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-2xl mb-4 text-[#FF4D4D]">
          <Rss size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">뉴스 / 매거진</h1>
        <p className="text-gray-500 text-lg">매일 업데이트되는 반려동물 관련 최신 소식과 알찬 매거진을 만나보세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            key={news.id} 
            className="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100 hover:shadow-lg transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={news.img} alt="뉴스 썸네일" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#FF4D4D]">
                {news.source}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 leading-snug group-hover:text-[#FF4D4D] transition-colors">{news.title}</h3>
              <div className="flex items-center text-sm text-gray-400 font-medium">
                <Clock className="w-4 h-4 mr-1.5" />
                {news.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
