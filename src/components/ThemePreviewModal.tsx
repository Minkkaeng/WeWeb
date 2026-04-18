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
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIframeLoaded(false); // 리셋
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label={`${themeTitle} 미리보기`}
        >
          {/* Modal Header */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="h-16 flex items-center justify-between px-6 bg-black/40 border-b border-white/10 text-white flex-shrink-0 cursor-default"
          >
            <div className="flex items-center gap-4 w-1/3">
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="닫기"
              >
                <X size={24} />
              </button>
              <div>
                <span className="text-xs text-gray-400 block">{themeCategory}</span>
                <h3 className="font-bold text-lg leading-tight">{themeTitle}</h3>
              </div>
            </div>

            {/* Device Toggle */}
            <div className="w-1/3 flex justify-center">
              <div className="flex items-center bg-white/5 rounded-lg p-1">
                <button
                  onClick={() => setDevice('desktop')}
                  aria-label="데스크톱 보기"
                  className={`p-2 rounded-md transition-all ${device === 'desktop' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Monitor size={20} />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  aria-label="모바일 보기"
                  className={`p-2 rounded-md transition-all ${device === 'mobile' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Smartphone size={20} />
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="w-1/3 flex justify-end">
            </div>
          </div>

          {/* Preview Container */}
          <div className="flex-1 overflow-hidden flex justify-center py-6 px-6 lg:px-12">
            <motion.div
              initial={{ width: '100%', maxWidth: '1600px' }}
              animate={{
                width: '100%',
                maxWidth: device === 'desktop' ? '1600px' : '375px'
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col cursor-default"
              style={{ height: '100%' }}
            >
              {/* Scrollable Content Area */}
               <div className="flex-1 bg-gray-50 flex flex-col items-center overflow-y-auto no-scrollbar relative">
                  {['MINIMAL', 'FRESH GROVE', 'WISE', 'PICK', 'NAAM', 'K-NEXUS'].includes(themeTitle.toUpperCase()) ? (
                    <>
                      {!iframeLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
                          <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                          <p className="mt-4 text-sm text-gray-500 font-light">템플릿 렌더링 중...</p>
                        </div>
                      )}
                      <iframe 
                        src={
                          themeTitle.toUpperCase() === 'MINIMAL' ? "/template/minimalist-studio" : 
                          themeTitle.toUpperCase() === 'FRESH GROVE' ? "/template/fresh-grove" : 
                          themeTitle.toUpperCase() === 'WISE' ? "/template/wise" : 
                          themeTitle.toUpperCase() === 'PICK' ? "/template/pick" :
                          themeTitle.toUpperCase() === 'NAAM' ? "/template/naam" :
                          "/template/knexus"
                        } 
                       className={`w-full h-full border-0 transition-opacity duration-1000 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                       onLoad={() => setIframeLoaded(true)}
                       title="Template Preview"
                     />
                   </>
                 ) : (
                   <div className="flex-1 flex flex-col items-center justify-center p-8 mt-20 text-center text-gray-400 font-light w-full overflow-y-auto no-scrollbar">
                     <Monitor size={48} className="mx-auto mb-4 opacity-30" />
                     <p className="text-lg">미리보기 화면입니다.</p>
                     <p className="text-sm">선택하신 '{themeTitle}' 테마의 미리보기 페이지를 준비 중입니다.</p>
                     <br/>
                     <br/>
                     <br/>
                     <p className="text-xs">Scroll Test</p>
                     <div className="h-[2000px] w-full max-w-4xl mt-4 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-end justify-center pb-8 mx-auto">
                        <span className="text-gray-300">End of Theme Template</span>
                     </div>
                   </div>
                 )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
