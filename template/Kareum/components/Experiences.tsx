import { motion } from 'framer-motion';
import experienceImg from '../../../src/assets/images/kareum/experience.png';
import expTrekImg from '../../../src/assets/images/kareum/exp_trek.png';
import expHaenyeoImg from '../../../src/assets/images/kareum/exp_haenyeo.png';
import expJamImg from '../../../src/assets/images/kareum/exp_jam.png';

const experiences = [
  { title: "동백나무 숲과 함께 다정한 동백생활", desc: "제주동백마을에서 느리게 머무는 1박 2일 느린 쉼 투어", price: "175,000원", tag: "동백마을", time: "1박 2일", img: experienceImg },
  { title: "곶자왈 숲 오감만족 힐링여행", desc: "머체왓숲에서 즐기는 걷기, 명상, 그리고 차 한잔", price: "62,300원", tag: "교래리", time: "당일", img: expTrekImg },
  { title: "세화 해녀문화 산책", desc: "직접 듣고 체험하는 유네스코 지정 인류무형문화유산", price: "28,000원", tag: "세화리", time: "당일", img: expHaenyeoImg },
  { title: "무릉 외갓집 제철 과일 잼 만들기", desc: "제주 땅에서 자란 과일로 끓이는 새콤달콤한 경험", price: "20,000원", tag: "무릉리", time: "당일", img: expJamImg },
];

export const Experiences = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-sm font-bold text-[#4A7c59] tracking-widest uppercase mb-2 block">Kareum Signature</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 serif-text">여행을 채우는 <br/> 특별한 경험</h2>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            모든 체험 보기
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
           {experiences.map((exp, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               className="group cursor-pointer flex flex-col"
             >
               <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 flex gap-2">
                     <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gray-900 rounded-full">{exp.tag}</span>
                     <span className="bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white rounded-full">{exp.time}</span>
                  </div>
               </div>
               
               <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#4A7c59] transition-colors">{exp.title}</h3>
                 <p className="text-gray-500 font-light mb-4">{exp.desc}</p>
                 <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold text-gray-900">{exp.price}</span>
                    <span className="text-[#4A7c59] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 -translate-x-2">예약하기 &rarr;</span>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
