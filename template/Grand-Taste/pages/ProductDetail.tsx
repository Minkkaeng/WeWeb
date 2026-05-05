import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Share2, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GRAND TASTE | Product Details";
  }, []);

  const getImageUrl = (path: string) => {
    return import.meta.env.BASE_URL + path;
  };

  // Mock product data
  const product = {
    id: 1,
    title: '시그니처 스테이크 & 구운 채소 세트',
    price: 38900,
    category: 'MEALKIT',
    rating: 4.9,
    reviews: 128,
    description: '최상급 와규 스테이크와 셰프의 비법 소스, 그리고 신선한 계절 채소가 어우러진 그랜드 테이스트의 시그니처 메뉴입니다. 집에서도 레스토랑의 품격을 그대로 경험해 보세요.',
    images: [
      getImageUrl('assets/images/grand_taste_steak_detail.png'),
      getImageUrl('assets/images/nongshim_hero_bg.png'),
      getImageUrl('assets/images/nongshim_product_snack.png'),
    ],
    features: [
      { icon: <Clock size={20} />, title: '20 min', desc: '간편한 조리 시간' },
      { icon: <Truck size={20} />, title: 'Fresh Delivery', desc: '새벽 배송 가능' },
      { icon: <ShieldCheck size={20} />, title: 'Organic', desc: '친환경 인증 재료' }
    ]
  };

  return (
    <div className="ns-root bg-white">
      <Header />
      
      <main className="pt-32 pb-48">
        <div className="ns-container">
          {/* Back Button */}
          <Link 
            to="/template/grand-taste" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-ns-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black tracking-widest uppercase">Back to Collection</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Image Gallery */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-square rounded-2xl overflow-hidden bg-ns-surface border border-gray-100"
              >
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-ns-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-ns-primary text-xs font-black tracking-widest uppercase">{product.category}</span>
                  <div className="flex gap-4 text-gray-400">
                    <button className="hover:text-ns-primary transition-colors"><Heart size={20} /></button>
                    <button className="hover:text-ns-primary transition-colors"><Share2 size={20} /></button>
                  </div>
                </div>

                <h1 className="ns-heading text-4xl md:text-5xl font-black text-ns-secondary mb-6 leading-tight">
                  {product.title}
                </h1>

                <div className="flex items-center gap-6 mb-10">
                  <div className="flex items-center gap-1 text-ns-primary">
                    <Star size={18} fill="currentColor" />
                    <span className="font-black">{product.rating}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500 text-sm font-bold">{product.reviews} Reviews</span>
                </div>

                <div className="text-3xl font-black text-ns-secondary mb-10">
                  {product.price.toLocaleString()}원
                </div>

                <p className="text-gray-500 leading-relaxed mb-12 text-lg font-light">
                  {product.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                  {product.features.map((f, i) => (
                    <div key={i} className="p-6 bg-ns-surface rounded-xl flex flex-col items-center text-center gap-3">
                      <div className="text-ns-primary">{f.icon}</div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-tighter mb-1">{f.title}</div>
                        <div className="text-[10px] text-gray-400 font-bold">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Purchase Actions */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center border-2 border-ns-secondary rounded-lg px-4 h-16">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-ns-primary"><ArrowLeft size={16} /></button>
                    <span className="px-6 font-black text-lg w-16 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-ns-primary rotate-180"><ArrowLeft size={16} /></button>
                  </div>
                  <button 
                    onClick={() => addToCart({
                      id: Number(id) || 1,
                      title: product.title,
                      price: product.price,
                      quantity: quantity,
                      image: product.images[0]
                    })}
                    className="flex-1 bg-white border-2 border-ns-secondary text-ns-secondary h-16 rounded-lg font-black tracking-[0.2em] uppercase hover:bg-ns-secondary hover:text-white transition-colors duration-500 flex items-center justify-center gap-3"
                  >
                    <ShoppingBag size={20} />
                    Add to Bag
                  </button>
                  <button 
                    className="flex-1 bg-ns-primary text-white h-16 rounded-lg font-black tracking-[0.2em] uppercase hover:bg-ns-secondary transition-colors duration-500 flex items-center justify-center"
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
