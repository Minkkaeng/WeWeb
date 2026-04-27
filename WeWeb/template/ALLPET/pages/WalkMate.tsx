import { motion } from 'framer-motion';
import { MapPin, UserPlus, Clock } from 'lucide-react';

export default function WalkMate() {
  const mates = [
    { id: 1, location: '서울 강남구 역삼동', title: '오늘 저녁 8시, 양재천 산책하실 분!', author: '토리보호자', dog: '푸들 (소형견)', status: '모집중' },
    { id: 2, location: '서울 서초구 반포동', title: '내일 아침 반포한강공원 런닝 메이트 구해요', author: '달려라하니', dog: '보더콜리 (중형견)', status: '모집중' },
    { id: 3, location: '서울 송파구 잠실동', title: '올림픽공원 강아지 놀이터 같이 가실 분', author: '뭉치아빠', dog: '비숑 (소형견)', status: '마감' },
    { id: 4, location: '서울 강남구 논현동', title: '소심한 강아지 사회화 훈련 같이해요', author: '초코마카롱', dog: '말티즈 (소형견)', status: '모집중' },
  ];

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* 좌측 지도 영역 (가상 플레이스홀더) */}
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 h-[400px] md:h-[600px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
              <MapPin size={48} className="mb-4 text-gray-300" />
              <p className="font-bold">지도 영역 (Kakao/Naver Map API)</p>
              <p className="text-sm mt-2 font-medium text-gray-500">현재 위치: 서울특별시 강남구</p>
            </div>
            {/* 가상 마커들 */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#FF4D4D] text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#FF4D4D]/30 border-2 border-white animate-bounce cursor-pointer z-10">1</div>
            <div className="absolute top-1/2 left-2/3 w-8 h-8 bg-[#FF4D4D] text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#FF4D4D]/30 border-2 border-white cursor-pointer z-10">2</div>
            
            {/* 검색창 오버레이 */}
            <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-3 flex items-center gap-3 z-20">
              <MapPin className="text-[#FF4D4D] w-5 h-5 ml-2" />
              <input type="text" placeholder="동네 이름(동, 읍, 면)으로 검색" className="w-full bg-transparent border-none focus:outline-none text-sm font-medium" defaultValue="강남구" />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">검색</button>
            </div>
          </div>
        </div>

        {/* 우측 리스트 영역 */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">우리 동네 산책 메이트</h1>
              <p className="text-sm text-gray-500 mt-1">반려견과 함께 걸을 친구를 찾아보세요</p>
            </div>
            <button className="bg-[#FF4D4D] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#ff3333] transition-colors">
              <UserPlus size={20} />
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto flex-1 md:h-[530px] pr-2 custom-scrollbar">
            {mates.map((mate, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={mate.id}
                className={`bg-white rounded-2xl p-5 border ${mate.status === '마감' ? 'border-gray-100 opacity-60' : 'border-[#FF4D4D]/20 shadow-sm hover:shadow-md'} transition-all cursor-pointer relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md flex items-center gap-1">
                    <MapPin size={12} /> {mate.location}
                  </span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${mate.status === '모집중' ? 'bg-[#FF4D4D] text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {mate.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{mate.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">{mate.dog}</span>
                </div>
                <div className="flex items-center justify-between text-sm border-t border-gray-50 pt-3 text-gray-500">
                  <span className="font-medium">{mate.author}</span>
                  <span className="flex items-center gap-1 text-xs"><Clock size={12}/> 방금 전</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
