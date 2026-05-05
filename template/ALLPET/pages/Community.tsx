import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Search, Filter } from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('전체');
  const tabs = ['전체', '자랑', '질문', '꿀팁'];

  const posts = [
    { id: 1, category: '자랑', title: '울집 갱얼쥐 미용 다녀왔는데 너무 귀엽죠? ㅠㅠ', author: '초코맘', likes: 245, comments: 32, time: '10분 전' },
    { id: 2, category: '질문', title: '고양이 양치질 어떻게 시작하나요?', author: '집사초보', likes: 12, comments: 8, time: '30분 전' },
    { id: 3, category: '꿀팁', 단: '강아지 털빠짐 줄이는 빗질 방법', author: '펫마스터', likes: 89, comments: 15, time: '1시간 전' },
    { id: 4, category: '자랑', title: '오늘 산책하면서 찍은 베스트 샷!', author: '보리누나', likes: 156, comments: 24, time: '2시간 전' },
    { id: 5, category: '질문', title: '이 사료 먹여보신 분 있나요?', author: '궁금러', likes: 5, comments: 3, time: '5시간 전' },
  ];

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">커뮤니티</h1>
          <p className="text-gray-500">집사들의 생생한 이야기와 정보 공유 공간</p>
        </div>
        <button className="bg-[#FF4D4D] text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-[#FF4D4D]/20 hover:-translate-y-1 transition-all">
          글쓰기
        </button>
      </div>

      <div className="bg-white rounded-[32px] p-6 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-bold whitespace-nowrap transition-colors ${
                activeTab === tab ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="게시글 검색..." 
            className="w-full bg-gray-50 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/20"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {posts.filter(p => activeTab === '전체' || p.category === activeTab).map((post, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={post.id} 
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                post.category === '자랑' ? 'bg-pink-100 text-pink-600' :
                post.category === '질문' ? 'bg-blue-100 text-blue-600' :
                'bg-emerald-100 text-emerald-600'
              }`}>
                {post.category}
              </span>
              <span className="text-sm text-gray-400">{post.time}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF4D4D] transition-colors">{post.title || post.단}</h3>
            <div className="flex items-center justify-between mt-4 border-t border-gray-50 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                {post.author}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 font-bold">
                <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-[#FF4D4D]" /> {post.likes}</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> {post.comments}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
