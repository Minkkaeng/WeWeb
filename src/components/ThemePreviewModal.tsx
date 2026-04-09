import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, X } from 'lucide-react';

interface ThemePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeTitle: string;
  themeCategory: string;
}

export const ThemePreviewModal = ({ isOpen, onClose, themeTitle, themeCategory }: ThemePreviewModalProps) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col"
        >
          {/* Modal Header */}
          <div className="h-16 flex items-center justify-between px-6 bg-black/40 border-b border-white/10 text-white flex-shrink-0">
            {/* Left: Info */}
            <div className="flex items-center gap-4 w-1/3">
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div>
                <span className="text-xs text-gray-400 block">{themeCategory}</span>
                <h3 className="font-bold text-lg leading-tight">{themeTitle}</h3>
              </div>
            </div>

            {/* Middle: Device Toggle */}
            <div className="w-1/3 flex justify-center">
              <div className="flex items-center bg-white/5 rounded-lg p-1">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`p-2 rounded-md transition-all ${device === 'desktop' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Monitor size={20} />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`p-2 rounded-md transition-all ${device === 'mobile' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Smartphone size={20} />
                </button>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="w-1/3 flex justify-end">
              <button className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm">
                웹사이트 개설
              </button>
            </div>
          </div>

          {/* Preview Container */}
          <div className="flex-1 overflow-hidden flex justify-center pt-8 pb-0 px-4">
            <motion.div 
              animate={{ 
                width: '100%',
                maxWidth: device === 'desktop' ? '1152px' : '375px' 
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className="relative bg-white rounded-t-xl overflow-hidden shadow-2xl flex flex-col"
              style={{ height: '100%' }}
            >
              {/* Browser Mockup Top Bar removed per request */}
              
              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto bg-gray-50 flex items-center justify-center p-8">
                 {/* Placeholder for iframe / tall actual theme image */}
                 <div className="text-center text-gray-400 font-light">
                   <Monitor size={48} className="mx-auto mb-4 opacity-30" />
                   <p className="text-lg">미리보기 화면입니다.</p>
                   <p className="text-sm">실제 아임웹에서는 iframe으로 테마 URL을 불러옵니다.</p>
                   <br/>
                   <br/>
                   <br/>
                   <p className="text-xs">Scroll Test</p>
                   {/* Create a tall element to enable scrolling test */}
                   <div className="h-[2000px] w-full mt-4 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-end justify-center pb-8">
                      <span className="text-gray-300">End of Theme Template</span>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
