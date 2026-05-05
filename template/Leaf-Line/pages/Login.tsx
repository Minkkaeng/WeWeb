import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const InputField = ({ label, type, id }: { label: string, type: string, id: string }) => (
    <div className="mb-8 relative">
      <label htmlFor={id} className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        onFocus={() => setFocusedField(id)}
        onBlur={() => setFocusedField(null)}
        className="w-full bg-transparent border-none outline-none text-base font-bold py-2 text-[#121212]"
        placeholder={`ENTER ${label}`}
      />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100">
        <motion.div 
          animate={{ 
            width: focusedField === id ? '100%' : '0%',
            backgroundColor: focusedField === id ? '#E6FF00' : '#004D40'
          }}
          className="h-[2px] bg-[#004D40]"
        />
      </div>
    </div>
  );

  return (
    <div className="login-page py-32 px-6 flex justify-center items-center bg-[#F9F9F9] min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-12 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-100"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tighter text-[#004D40] mb-2 uppercase">Welcome Back</h2>
          <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">Sign in to your Urban Greenhouse account</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <InputField label="Email Address" type="email" id="email" />
          <InputField label="Password" type="password" id="password" />
          
          <div className="flex justify-between items-center mb-10">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-[#E6FF00]" />
              <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#121212] transition-colors">Keep me signed in</span>
            </label>
            <span className="text-[11px] font-bold text-[#004D40] cursor-pointer hover:text-[#121212] transition-colors">Forgot Password?</span>
          </div>

          <button className="w-full py-5 bg-[#004D40] text-white text-sm font-black tracking-[0.2em] uppercase rounded-none border-none cursor-pointer hover:bg-[#121212] transition-all mb-4 shadow-xl">
            Sign In
          </button>
          
          <button className="w-full py-5 bg-white text-[#004D40] border-2 border-[#004D40] text-sm font-black tracking-[0.2em] uppercase rounded-none cursor-pointer hover:bg-gray-50 transition-all">
            Join the Collective
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center gap-8">
          {['Google', 'Apple'].map(social => (
            <span key={social} className="text-[10px] font-black tracking-widest text-gray-300 uppercase cursor-pointer hover:text-[#004D40] transition-colors">
              Continue with {social}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
