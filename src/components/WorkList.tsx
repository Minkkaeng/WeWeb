import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

// Assets
import freshActualImg from '../assets/images/fresh_grove_actual.png';
import freshMobileActualImg from '../assets/images/fresh_grove_mobile_actual.png';
import wiseActualImg from '../assets/images/wise_actual.png';
import wiseMobileActualImg from '../assets/images/wise_mobile_actual.png';
import archivActualImg from '../assets/images/archiv_actual.png';
import archivMobileActualImg from '../assets/images/archiv_mobile_actual.png';
import pickActualImg from '../assets/images/pick_actual.png';
import pickMobileActualImg from '../assets/images/pick_mobile_actual.png';
import brunLoveTannActualImg from '../assets/images/brun_love_tann_actual.png';
import brunLoveTannMobileActualImg from '../assets/images/brun_love_tann_mobile_actual.png';

const projects = [
  { id: 1, title: 'Fresh Grove', category: '쇼핑몰', width: 'col-span-12 md:col-span-4', img: freshActualImg, mobileImg: freshMobileActualImg, path: 'fresh-grove' },
  { id: 2, title: 'WISE', category: '기업 브랜드', width: 'col-span-12 md:col-span-8', img: wiseActualImg, mobileImg: wiseMobileActualImg, path: 'wise' },
  { id: 3, title: 'ARCHIV', category: '지식 포털', width: 'col-span-12 md:col-span-6', img: archivActualImg, mobileImg: archivMobileActualImg, path: 'archiv' },
  { id: 4, title: 'BRUN LØVETANN', category: '쇼핑몰', width: 'col-span-12 md:col-span-6', img: pickActualImg, mobileImg: pickMobileActualImg, path: 'brun-love-tann' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

export const WorkList = () => {
  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-deep-black font-serif-en tracking-tighter">Selected Works</h2>
        <div className="w-12 h-1 bg-blood-coral mt-4"></div>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            onClick={() => window.location.href = `/template/${project.path}`}
            className={`group relative rounded-3xl bg-gray-50 overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 aspect-[4/3] md:aspect-auto md:min-h-[480px] ${project.width}`}
          >
            {/* Card Content Overlay */}
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-30 transition-all duration-500 group-hover:bg-black/5">
               <div>
                  <span className="text-[10px] font-bold tracking-widest text-blood-coral uppercase bg-white/90 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
               </div>
               <h3 className="text-4xl font-black text-deep-black bg-white/80 inline-block px-4 py-1 backdrop-blur-md self-start rounded-xl shadow-sm tracking-tighter group-hover:scale-105 transition-transform origin-left">
                 {project.title}
               </h3>
            </div>

            {/* Main Template Image */}
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center overflow-hidden z-10">
               <img 
                 src={project.img} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
            </div>

            {/* Mobile Template Reveal on Hover */}
            <div className="absolute -bottom-10 -right-10 w-56 h-96 bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-white opacity-0 translate-y-12 rotate-12 group-hover:opacity-100 group-hover:translate-y-0 group-hover:-rotate-3 transition-all duration-700 ease-out z-20 overflow-hidden flex items-center justify-center">
               <img 
                 src={project.mobileImg} 
                 alt={`${project.title} Mobile`} 
                 className="w-full h-full object-cover"
               />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore More Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 flex justify-center"
      >
        <Link 
          to="/library" 
          className="group relative px-12 py-5 overflow-hidden rounded-full border border-gray-200 hover:border-blood-coral transition-all duration-500"
        >
          <div className="relative z-10 flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 group-hover:text-blood-coral transition-colors">
              Explore Theme Library
            </span>
            <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-blood-coral transition-all group-hover:w-12"></div>
          </div>
          <div className="absolute inset-0 bg-blood-coral/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </Link>
      </motion.div>
    </section>
  );
};
