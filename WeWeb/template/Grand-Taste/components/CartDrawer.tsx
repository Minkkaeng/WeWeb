import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

export default function CartDrawer({ isOpen, onClose, items }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-8 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-ns-primary" />
                <h2 className="ns-heading text-xl font-black">Shopping Bag</h2>
                <span className="bg-ns-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-light">장바구니가 비어 있습니다.</p>
                  <button 
                    onClick={onClose}
                    className="text-ns-primary text-sm font-bold border-b border-ns-primary pb-0.5"
                  >
                    쇼핑 계속하기
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-6 group">
                      <div className="w-24 h-24 bg-ns-surface rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-ns-secondary">{item.title}</h3>
                            <button className="text-gray-300 hover:text-ns-primary transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Mealkit for 2 persons</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-gray-200 rounded-md p-1">
                            <button className="p-1 hover:text-ns-primary transition-colors"><Minus size={14} /></button>
                            <span className="px-3 text-sm font-bold">{item.quantity}</span>
                            <button className="p-1 hover:text-ns-primary transition-colors"><Plus size={14} /></button>
                          </div>
                          <span className="font-black text-ns-secondary">
                            {(item.price * item.quantity).toLocaleString()}원
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-ns-surface border-t border-gray-100 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>상품 금액</span>
                    <span>{subtotal.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>배송비</span>
                    <span>3,000원</span>
                  </div>
                  <div className="flex justify-between text-lg font-black text-ns-secondary pt-4 border-t border-gray-200 mt-4">
                    <span>결제 예정 금액</span>
                    <span>{(subtotal + 3000).toLocaleString()}원</span>
                  </div>
                </div>
                <button className="w-full bg-ns-secondary text-white py-5 rounded-lg font-black tracking-widest uppercase hover:bg-ns-primary transition-colors duration-500">
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
