import { motion } from 'framer-motion';
import villageGreenImg from '../../../src/assets/images/kareum/village_green.png';
import villSeaImg from '../../../src/assets/images/kareum/vill_sea.png';
import villCamelliaImg from '../../../src/assets/images/kareum/vill_camellia.png';
import villOrangeImg from '../../../src/assets/images/kareum/vill_orange.png';
import heroSunsetImg from '../../../src/assets/images/kareum/hero_sunset.png';

const villages = [
  { name: '세화리', desc: '뚜벅이 여행자에게 최적인 아름다운 해변 마을.', img: villSeaImg },
  { name: '가시리', desc: '가장 느린 하루를 만날 수 있는 평화로운 마을.', img: villageGreenImg },
  { name: '김녕리', desc: '깨끗한 바다와 해녀들의 전통적인 삶이 녹아 있는 곳.', img: villSeaImg },
  { name: '신창리', desc: '풍차와 일몰이 어우러진 싱그러운 해안 도로.', img: heroSunsetImg }, // Hero에서 넘겨받은 이미지 쓰긴 애매하므로 다시 villOrangeImg로 씀
  { name: '동백마을', desc: '마을 전체가 붉은 동백꽃으로 물드는 신흥2리.', img: villCamelliaImg },
  { name: '교래리', desc: '제주의 허파, 곶자왈과 삼다수 숲길이 있는 숲의 마을.', img: villOrangeImg }
];

export const VillageSlider = () => {
  // 무한 반복을 위해 배열을 두 번 이어붙임
  const repeatedVillages = [...villages, ...villages];

  return (
    <section className="py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
         <span className="text-sm font-bold text-[#4A7c59] tracking-widest uppercase mb-2 block">Kareum Villages</span>
         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 serif-text leading-tight mb-6">
            마을에서 만나는 <br/> 진짜 제주
         </h2>
         <p className="text-lg text-gray-500 max-w-2xl font-light">
            카름스테이의 마을은 여행자에게 집처럼 머물 수 있는 공간이자, 지역의 삶을 나누는 무대입니다.
         </p>
      </div>

      {/* Auto-Slide Carousel Area */}
      <div className="relative w-full overflow-hidden flex">
         <motion.div 
           className="flex gap-6 md:gap-10 px-6 shrink-0"
           animate={{
             x: ["0%", "-50%"]
           }}
           transition={{
             duration: 30, // 슬라이드 속도 조절
             ease: "linear",
             repeat: Infinity
           }}
         >
           {repeatedVillages.map((village, idx) => (
             <div 
               key={idx}
               className="relative shrink-0 w-[280px] md:w-[400px] h-[400px] md:h-[550px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
             >
               <img src={village.img} alt={village.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
               
               <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-3 serif-text">{village.name}</h3>
                  <p className="text-white/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                     {village.desc}
                  </p>
               </div>
             </div>
           ))}
         </motion.div>
      </div>
    </section>
  );
};
