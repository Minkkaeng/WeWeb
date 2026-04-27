import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GRAND TASTE | Login";
  }, []);

  return (
    <div className="ns-root min-h-screen bg-ns-surface flex items-center justify-center p-6">
      <Link 
        to="/template/grand-taste" 
        className="absolute top-10 left-10 inline-flex items-center gap-2 text-gray-400 hover:text-ns-secondary transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black tracking-widest uppercase">Back to Home</span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100"
      >
        <div className="text-center mb-12">
          <div className="ns-heading text-3xl font-black mb-4">GRAND TASTE<span className="text-ns-primary">.</span></div>
          <p className="text-gray-400 text-sm font-bold tracking-tight">
            {isLogin ? '프리미엄 밀키트 라이프의 시작' : '그랜드 테이스트의 일원이 되어보세요'}
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full h-14 bg-ns-surface rounded-xl pl-12 pr-4 text-sm font-bold border-2 border-transparent focus:border-ns-primary outline-none transition-all"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="email" 
                placeholder="hello@grandtaste.com"
                className="w-full h-14 bg-ns-surface rounded-xl pl-12 pr-4 text-sm font-bold border-2 border-transparent focus:border-ns-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
              {isLogin && <button className="text-[10px] font-black uppercase tracking-widest text-ns-primary">Forgot?</button>}
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-14 bg-ns-surface rounded-xl pl-12 pr-4 text-sm font-bold border-2 border-transparent focus:border-ns-primary outline-none transition-all"
              />
            </div>
          </div>

          <button className="w-full h-14 bg-ns-secondary text-white rounded-xl font-black tracking-widest uppercase hover:bg-ns-primary transition-all duration-500 shadow-lg shadow-ns-secondary/20">
            {isLogin ? 'Login Now' : 'Create Account'}
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-gray-50">
          <div className="relative flex justify-center mb-8">
            <span className="bg-white px-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] relative z-10">Or continue with</span>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-100"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-14 border border-gray-100 rounded-xl flex items-center justify-center gap-3 hover:bg-ns-surface transition-colors">
              <Globe size={20} />
              <span className="text-xs font-black uppercase tracking-widest">Global</span>
            </button>
            <button className="h-14 border border-gray-100 rounded-xl flex items-center justify-center gap-3 hover:bg-ns-surface transition-colors">
              <div className="w-5 h-5 bg-ns-primary rounded-full" />
              <span className="text-xs font-black uppercase tracking-widest">Social</span>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-bold text-gray-400 hover:text-ns-secondary transition-colors"
          >
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="text-ns-primary border-b border-ns-primary ml-1">{isLogin ? 'Sign up' : 'Login'}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
