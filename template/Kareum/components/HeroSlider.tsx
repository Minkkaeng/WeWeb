import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroMainImg from '../../../src/assets/images/kareum/hero_main.png';
import heroSunsetImg from '../../../src/assets/images/kareum/hero_sunset.png';
import heroSkyImg from '../../../src/assets/images/kareum/hero_sky.png';

const slides = [
  {
    id: 1,
    image: heroMainImg,
    caption: '머무는 그곳이 곧 제주가 됩니다',
    title: '제주 마을에서의 깊은 숨',
    subtitle: '카름스테이에서 시작되는 특별한 여행 이야기'
  },
  {
    id: 2,
    image: heroSkyImg,
    caption: '당신의 가장 느린 하루',
    title: '걷는 속도에 맞춰 바뀌는 계절',
    subtitle: '숲이 주는 커다란 위로, 진정한 힐링의 시간'
  },
  {
    id: 3,
    image: heroSunsetImg,
    caption: '마을에서 만나는 진짜 제주',
    title: '사람과 사람이 연결되는 곳',
    subtitle: '우리를 마을에 머무르게 하는 따뜻한 이야기들'
  }
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5초마다 자동 전환
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-6 max-w-7xl mx-auto">
        <motion.p
          key={`caption-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/80 tracking-widest text-sm md:text-base font-medium mb-6 uppercase"
        >
          {slides[current].caption}
        </motion.p>
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white text-5xl md:text-7xl font-bold mb-8 leading-tight serif-text"
        >
          {slides[current].title.split(' ').map((word, i) => (
             <span key={i} className="block md:inline-block md:mr-4">{word}</span>
          ))}
        </motion.h1>
        <motion.div
          key={`subtitle-${current}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-white/90 text-lg md:text-xl font-light">
             {slides[current].subtitle}
          </p>
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="relative h-1 w-16 overflow-hidden rounded-full bg-white/30"
          >
            {current === idx && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute left-0 top-0 h-full bg-white"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
