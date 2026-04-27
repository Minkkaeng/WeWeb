import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, TrendingUp, Rss, ArrowRight, Heart } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsFeed, setNewsFeed] = useState([
    { id: 1, title: '봄철 강아지 산책, 진드기 주의보 발령!', source: '데일리펫', time: '10분 전' },
    { id: 2, title: '고양이 양치질, 실패 없이 성공하는 법', source: '냥냥매거진', time: '1시간 전' },
    { id: 3, title: '새로 나온 프리미엄 사료 라인업 분석', source: '펫트렌드', time: '2시간 전' }
  ]);

  // Realtime 업데이트 효과 (가상)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNews = [
        { id: Date.now(), title: '반려견 동반 가능한 전국 핫플 카페 10선', source: '주말나들이', time: '방금 전' },
        { id: Date.now() + 1, title: '노령묘를 위한 건강 관리 수칙', source: '냥냥매거진', time: '방금 전' },
        { id: Date.now() + 2, title: '수제 간식 레시피: 닭가슴살 져키', source: '펫트렌드', time: '방금 전' }
      ];
      setNewsFeed(prev => [randomNews[Math.floor(Math.random() * randomNews.length)], ...prev].slice(0, 3));
    }, 10000); // 10초마다 새 뉴스 갱신
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* 상단 검색 영역 (Algolia 연동 가상 UI) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            반려동물의 모든 것, <span className="text-[#FF4D4D]">ALLPET</span>에서 검색하세요
          </h2>
          <div className="w-full max-w-2xl relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400 group-focus-within:text-[#FF4D4D] transition-colors" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 text-gray-900 rounded-full py-5 pl-16 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/20 focus:bg-white transition-all shadow-inner"
              placeholder="궁금한 정보나 커뮤니티 글을 찾아보세요..."
            />
            <button className="absolute right-3 top-3 bottom-3 bg-[#FF4D4D] text-white px-6 rounded-full font-bold hover:bg-[#ff3333] transition-colors">
              검색
            </button>
          </div>
        </motion.div>

        {/* Bento Grid 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          
          {/* 산책 지수 (1x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col justify-between col-span-1"
          >
            <div className="flex items-center justify-between">
              <div className="bg-blue-50 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-sm font-semibold text-gray-500">서울 강남구</span>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium mb-1">오늘의 산책 지수</h3>
              <div className="text-4xl font-black text-gray-900 mb-2">85<span className="text-xl text-gray-400 font-bold">/100</span></div>
              <p className="text-[#FF4D4D] font-bold text-sm">맑고 미세먼지 없음! ☀️</p>
            </div>
          </motion.div>

          {/* 인기글 (2x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111827] rounded-[32px] p-8 shadow-sm col-span-1 md:col-span-2 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-[#FF4D4D]" />
              <span className="text-white font-bold tracking-wide">실시간 인기글</span>
            </div>
            <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-end">
              <div className="group cursor-pointer">
                <h4 className="text-xl font-bold text-white group-hover:text-[#FF4D4D] transition-colors truncate">
                  1. 울집 갱얼쥐 미용 다녀왔는데 너무 귀엽죠? ㅠㅠ
                </h4>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-[#FF4D4D]" /> 245</span>
                  <span>조회 1.2k</span>
                </div>
              </div>
              <div className="group cursor-pointer">
                <h4 className="text-lg text-gray-300 group-hover:text-white transition-colors truncate">
                  2. 펫페어 다녀온 후기 및 득템 리스트 공유합니다.
                </h4>
              </div>
            </div>
          </motion.div>

          {/* 프로필 요약 (1x2) - 데스크탑에선 2줄 차지 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#FF4D4D] rounded-[32px] p-8 shadow-sm col-span-1 lg:row-span-2 text-white flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 bg-white/20 rounded-full mb-6 mt-4 backdrop-blur-md flex items-center justify-center p-1">
              <div className="w-full h-full bg-white rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=200" alt="Pet Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">Minkkaeng</h3>
            <p className="text-white/80 font-medium mb-8">반려견 '토리'와 함께 🐶</p>
            
            <div className="w-full bg-white/10 rounded-2xl p-4 mb-auto text-left space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">작성글</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">스크랩</span>
                <span className="font-bold">48</span>
              </div>
            </div>
            
            <button className="w-full bg-white text-[#FF4D4D] font-bold py-4 rounded-full mt-6 hover:bg-gray-50 transition-colors shadow-lg">
              마이페이지
            </button>
          </motion.div>

          {/* 맞춤 뉴스 위젯 (2x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[32px] p-8 shadow-sm col-span-1 md:col-span-2 lg:col-span-3 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Rss className="h-5 w-5 text-[#FF4D4D]" />
                <h3 className="text-lg font-bold text-gray-900">맞춤 뉴스 & 매거진</h3>
              </div>
              <button className="text-sm font-semibold text-gray-400 hover:text-[#FF4D4D] flex items-center gap-1 transition-colors">
                더보기 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-between gap-4">
              {newsFeed.map((news) => (
                <div key={news.id} className="flex items-center justify-between group cursor-pointer border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                  <div className="flex-1 pr-4">
                    <h4 className="font-semibold text-gray-800 group-hover:text-[#FF4D4D] transition-colors line-clamp-1">{news.title}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium text-gray-400 whitespace-nowrap">
                    <span className="bg-gray-100 px-2 py-1 rounded-md">{news.source}</span>
                    <span>{news.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
