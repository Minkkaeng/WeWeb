import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import News from './pages/News';
import WalkMate from './pages/WalkMate';
import Login from './pages/Login';

// 간단한 네비게이션 헤더
function AllPetHeader() {
  const location = useLocation();
  const isHome = location.pathname === '/template/allpet';
  const isCommunity = location.pathname.includes('/community');
  const isNews = location.pathname.includes('/news');
  const isWalkmate = location.pathname.includes('/walkmate');
  const isLogin = location.pathname.includes('/login');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/template/allpet" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FF4D4D] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#FF4D4D]/20">
            A
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">ALLPET</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link to="/template/allpet" className={`text-sm font-bold ${isHome ? 'text-[#FF4D4D]' : 'text-gray-500 hover:text-gray-900'}`}>홈</Link>
          <Link to="/template/allpet/community" className={`text-sm font-bold ${isCommunity ? 'text-[#FF4D4D]' : 'text-gray-500 hover:text-gray-900'}`}>커뮤니티</Link>
          <Link to="/template/allpet/news" className={`text-sm font-bold ${isNews ? 'text-[#FF4D4D]' : 'text-gray-500 hover:text-gray-900'}`}>뉴스/매거진</Link>
          <Link to="/template/allpet/walkmate" className={`text-sm font-bold ${isWalkmate ? 'text-[#FF4D4D]' : 'text-gray-500 hover:text-gray-900'}`}>산책메이트</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/template/allpet/login" className={`hidden md:block px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${isLogin ? 'bg-[#FF4D4D] text-white shadow-lg shadow-[#FF4D4D]/30' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function AllPetTemplate() {
  return (
    <div className="allpet-root font-sans text-gray-900 bg-gray-50 min-h-screen">
      <AllPetHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="news" element={<News />} />
        <Route path="walkmate" element={<WalkMate />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
