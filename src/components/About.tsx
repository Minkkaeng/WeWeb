import { motion } from 'framer-motion';
import { PenTool, Video, Layers, Layout, Sparkles } from 'lucide-react';

const tools = [
  { id: 'figma', name: 'Figma', icon: Layout, delay: 0.2 },
  { id: 'premiere', name: 'Premiere Pro', icon: Video, delay: 0.4 },
  { id: 'aftereffects', name: 'After Effects', icon: Layers, delay: 0.6 },
  { id: 'illustrator', name: 'Illustrator', icon: PenTool, delay: 0.8 },
];

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-deep-black mb-6">Meticulous Detail</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8 max-w-lg">
              디자인부터 영상 편집까지, 감각적인 기술력과 디테일한 설계 능력으로 프로젝트를 공중에 띄우듯 한 차원 끌어올립니다. 사용하는 모든 도구는 최적의 결과물을 위한 정밀한 조절을 거칩니다.
            </p>
          </motion.div>
        </div>

        <div className="md:w-1/2 w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: tool.delay }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-blood-coral">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* 뷰포트에 있을 때만 애니메이션 실행 */}
      <motion.div
        whileInView={{ rotate: 360 }}
        viewport={{ once: false }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 text-gray-100 opacity-50 z-0 pointer-events-none"
      >
        <Sparkles size={400} strokeWidth={0.5} />
      </motion.div>
    </section>
  );
};
