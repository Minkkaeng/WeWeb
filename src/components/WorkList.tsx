import { motion, type Variants } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'GRAND TASTE', 
    category: '쇼핑몰', 
    width: 'col-span-12 md:col-span-12',
    mainImage: 'assets/images/nongshim_hero_bg.png',
    mobileImage: 'assets/images/nongshim_product_milk.png' // Use milk as mobile preview for variety
  },
  { 
    id: 2, 
    title: 'K-Nexus', 
    category: '관공서', 
    width: 'col-span-12 md:col-span-4',
    mainImage: 'assets/images/knexus_desktop.png',
    mobileImage: 'assets/images/knexus_mobile_actual.png'
  },
  { 
    id: 3, 
    title: 'Kinn Collective', 
    category: '에이전시', 
    width: 'col-span-12 md:col-span-8',
    mainImage: 'assets/images/minimalist_studio_actual.png',
    mobileImage: 'assets/images/minimalist_studio_mobile_actual.png'
  },
  { 
    id: 4, 
    title: 'Kookmin25', 
    category: '브랜드 사이트', 
    width: 'col-span-12 md:col-span-6',
    mainImage: 'assets/images/kookmin25_hero.png',
    mobileImage: 'assets/images/kookmin25_mobile_actual.png'
  },
  { 
    id: 5, 
    title: 'NAAM', 
    category: '코스메틱', 
    width: 'col-span-12 md:col-span-6',
    mainImage: 'assets/images/naam_hero.png',
    mobileImage: 'assets/images/naam_mobile.png'
  },
  { 
    id: 6, 
    title: 'Fresh Grove', 
    category: '친환경 쇼핑몰', 
    width: 'col-span-12 md:col-span-8',
    mainImage: 'assets/images/fresh_grove_desktop.png',
    mobileImage: 'assets/images/fresh_grove_mobile.png'
  },
  { 
    id: 7, 
    title: 'BRUN LØVE TANN', 
    category: '라이프스타일', 
    width: 'col-span-12 md:col-span-4',
    mainImage: 'assets/images/pick_desktop.png',
    mobileImage: 'assets/images/pick_mobile.png'
  },
  { 
    id: 8, 
    title: 'WISE', 
    category: '기업 웹사이트', 
    width: 'col-span-12 md:col-span-12',
    mainImage: 'assets/images/wise_desktop.png',
    mobileImage: 'assets/images/wise_mobile.png'
  },
  { 
    id: 9, 
    title: 'ALLPET', 
    category: '포털사이트', 
    width: 'col-span-12 md:col-span-12',
    mainImage: 'assets/images/allpet_desktop.png',
    mobileImage: 'assets/images/allpet_mobile.png' 
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

export const WorkList = () => {
  const getImageUrl = (path: string) => {
    return import.meta.env.BASE_URL + path;
  };

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-deep-black">Selected Works</h2>
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
            className={`group relative rounded-2xl bg-gray-50 overflow-hidden cursor-pointer shadow-sm hover:shadow-floating transition-shadow duration-500 aspect-[4/3] md:aspect-auto md:min-h-[460px] ${project.width}`}
          >
            {/* Main Template Image */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
               {project.mainImage ? (
                 <img src={getImageUrl(project.mainImage)} alt={project.title} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
               ) : (
                 <div className="w-full h-full bg-[#FF4D4D] flex items-center justify-center text-white font-bold text-2xl opacity-90 group-hover:opacity-100 transition-opacity">COMING SOON</div>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-deep-black/20 to-transparent transition-opacity group-hover:opacity-80"></div>
            </div>

            {/* Card Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
               <div>
                  <span className="text-xs font-semibold tracking-wider text-blood-coral uppercase bg-white/90 px-4 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
                    {project.category}
                  </span>
               </div>
               <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                 {project.title}
               </h3>
            </div>

            {/* Mobile Template Reveal on Hover */}
            <div className="absolute -bottom-10 -right-10 w-48 h-80 bg-white rounded-[2rem] shadow-2xl border-4 border-gray-100 opacity-0 translate-y-12 rotate-12 group-hover:opacity-100 group-hover:translate-y-0 group-hover:-rotate-3 transition-all duration-700 ease-out z-20 overflow-hidden flex items-start justify-center">
               {project.mobileImage ? (
                 <img src={getImageUrl(project.mobileImage)} alt={`${project.title} Mobile`} className="w-full h-auto object-cover object-top" />
               ) : (
                 <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-sm">MOBILE</div>
               )}
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};
