import { motion, type Variants } from 'framer-motion';

const projects = [
  { id: 1, title: 'Fresh Grove', category: '쇼핑몰', width: 'col-span-12 md:col-span-4' },
  { id: 2, title: 'WISE', category: '기업 브랜드', width: 'col-span-12 md:col-span-8' },
  { id: 3, title: 'NOBASE CLASS', category: '포털사이트', width: 'col-span-12 md:col-span-6' },
  { id: 4, title: 'PICK', category: '쇼핑몰', width: 'col-span-12 md:col-span-6' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

export const WorkList = () => {
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
            {/* Card Content placeholder */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 object-cover">
               <div>
                  <span className="text-xs font-semibold tracking-wider text-blood-coral uppercase bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
               </div>
               <h3 className="text-3xl font-bold text-deep-black bg-white/50 inline-block px-2 backdrop-blur-sm self-start rounded-md">
                 {project.title}
               </h3>
            </div>

            {/* Main Template Image Placeholder (Empty for now per request) */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-50 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
               <span className="text-gray-300 font-light">Main Preview</span>
            </div>

            {/* Mobile Template Reveal on Hover */}
            <div className="absolute -bottom-10 -right-10 w-48 h-80 bg-white rounded-[2rem] shadow-2xl border-4 border-gray-100 opacity-0 translate-y-12 rotate-12 group-hover:opacity-100 group-hover:translate-y-0 group-hover:-rotate-3 transition-all duration-700 ease-out z-20 overflow-hidden flex items-center justify-center">
               {/* Mobile Template Placeholder */}
               <span className="text-gray-400 text-xs">Mobile View</span>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};
