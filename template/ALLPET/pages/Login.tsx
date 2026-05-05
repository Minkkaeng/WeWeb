import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* 장식용 배경 요소 */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#FF4D4D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[32px] p-10 md:p-12 shadow-xl shadow-gray-200/50 relative z-10"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#FF4D4D] rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-[#FF4D4D]/30 mx-auto mb-6">
            A
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">환영합니다</h2>
          <p className="text-gray-500 font-medium">반려동물 포털 ALLPET 로그인</p>
        </div>

        <form className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">이메일</label>
            <input 
              type="email" 
              placeholder="allpet@example.com" 
              className="w-full bg-gray-50 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] transition-shadow border border-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">비밀번호</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-gray-50 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] transition-shadow border border-gray-100"
            />
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-xs font-bold text-[#FF4D4D] hover:underline">비밀번호를 잊으셨나요?</a>
          </div>
          <button 
            type="button"
            className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl mt-2 hover:bg-gray-800 transition-colors shadow-lg"
          >
            로그인
          </button>
        </form>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-400 font-medium">간편 로그인</span>
          </div>
        </div>

        <div className="space-y-3">
          <button type="button" className="w-full bg-[#FEE500] text-[#000000] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#FEE500]/90 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.425 2 10.648c0 2.7 1.705 5.08 4.29 6.347l-.92 3.39c-.066.24.218.428.43.292l3.92-2.61c.732.2 1.498.307 2.28.307 5.523 0 10-3.425 10-7.648C22 6.425 17.523 3 12 3z"/>
            </svg>
            카카오로 시작하기
          </button>
          <button type="button" className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google로 시작하기
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          계정이 없으신가요? <a href="#" className="font-bold text-[#FF4D4D] hover:underline">회원가입</a>
        </p>
      </motion.div>
    </div>
  );
}
