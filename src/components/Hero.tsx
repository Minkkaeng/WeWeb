import { motion } from 'framer-motion';
import { Check, MessageCircle, Leaf } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden bg-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF4D4D]/5 via-white to-white z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 font-sans">
        
        {/* Left Content Area */}
        <div className="flex flex-col items-start gap-8 lg:pr-12">
          
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-3"
          >
            {['#진정성', '#밀착케어', '#트렌디'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 border border-gray-200 text-gray-500 text-xs font-semibold rounded-md">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-deep-black leading-[1.2] tracking-tight">
              당신의 아이디어를
              <br />
              <span className="text-blood-coral">가장 감각적으로</span>
              <br />
              현실화합니다.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-600 text-base lg:text-lg max-w-lg leading-relaxed font-light"
          >
            공장형 제작에서 벗어나, 한 프로젝트에 모든 역량을 집중합니다.<br />
            <strong className="text-deep-black font-bold">신설 스튜디오만의 열정</strong>으로 당신의 비즈니스에 가장 트렌디한 디지털 경험을 선물합니다.
          </motion.p>

          {/* Checklists */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col gap-4 mt-2"
          >
            {[
              "대표 개발자가 직접 소통하는 1:1 전담 시스템",
              "최신 글로벌 디자인 트렌드 및 기술 스택 적용",
              "신규 런칭 기념 합리적인 제작 비용 제안"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded bg-blood-coral/10 border border-blood-coral/30 flex items-center justify-center shrink-0">
                  <Check className="text-blood-coral w-4 h-4" />
                </div>
                <span className="text-gray-700 font-medium text-sm lg:text-base">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-8 mt-6"
          >
            <button className="w-full sm:w-auto bg-blood-coral text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-500 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-blood-coral/20">
              첫 프로젝트 상담하기
              <MessageCircle size={20} fill="currentColor" className="opacity-90" />
            </button>
            <button className="text-gray-500 hover:text-deep-black text-sm font-bold transition-colors underline underline-offset-8 decoration-gray-300 hover:decoration-deep-black">
              우리가 추구하는 가치
            </button>
          </motion.div>
        </div>

        {/* Right Design Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center lg:justify-end mt-12 lg:mt-0 relative"
        >
          {/* Card Frame */}
          <div className="w-full max-w-[420px] aspect-[4/5] bg-gray-50 rounded-[2rem] border border-gray-100 relative overflow-hidden flex flex-col items-center justify-center shadow-2xl">
            {/* Inner Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blood-coral/10 rounded-full blur-[80px]"></div>
            
            {/* Center Icon */}
            <div className="relative z-10 flex flex-col items-center gap-10">
              <Leaf 
                size={80} 
                className="text-blood-coral" 
                strokeWidth={1.5}
                style={{ filter: "drop-shadow(0 0 20px rgba(255,77,77,0.2))" }} 
              />
              
              <div className="text-center">
                <h3 className="text-deep-black text-xs font-black tracking-[0.3em] uppercase mb-2">
                  Fresh Perspective
                </h3>
                <p className="text-gray-500 text-[10px] font-medium tracking-widest">
                   새로운 시선으로 비즈니스를 디자인합니다
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
