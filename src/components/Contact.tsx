import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-deep-black tracking-tighter mb-6">
          Let's create something <br/> extraordinary.
        </h2>
        <p className="text-gray-500 font-light mb-12">
          새로운 프로젝트에 대한 고민이 있으신가요? <br/> 공간에 떠오르는 창의적인 솔루션을 제안해 드립니다.
        </p>

        <form className="flex flex-col gap-4 max-w-md mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Name" 
              className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blood-coral/20 transition-all font-light"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Email address" 
              className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blood-coral/20 transition-all font-light"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea 
              id="message" 
              rows={4}
              placeholder="Your message" 
              className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blood-coral/20 transition-all font-light resize-none"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="mt-4 px-8 py-4 bg-blood-coral text-white font-semibold rounded-xl shadow-floating hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};
