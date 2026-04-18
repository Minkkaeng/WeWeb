import React, { useEffect, useRef, useState } from 'react';

/**
 * BrandStory Component
 * 신규 웹/앱 제작 스튜디오 'WEWEB' 랜딩 페이지 레이아웃
 */
export default function App() {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [isHeroMounted, setIsHeroMounted] = useState(false);

    useEffect(() => {
        setIsHeroMounted(true);

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-up');
        elements.forEach(el => observerRef.current?.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="brand-story-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
                
                .brand-story-page {
                    --coral: #FF4D4D;
                    --bg: #050505;
                    font-family: 'Noto Sans KR', 'Inter', sans-serif;
                    background-color: var(--bg);
                    color: #ffffff;
                    -webkit-font-smoothing: antialiased;
                    word-break: keep-all;
                    min-height: 100vh;
                }

                .color-coral { color: var(--coral); }
                .bg-coral { background-color: var(--coral); }
                
                .btn-contact {
                    background-color: var(--coral);
                    color: white;
                    padding: 1.25rem 2.5rem;
                    font-weight: 700;
                    font-size: 1.05rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    border-radius: 4px;
                }
                .btn-contact:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 40px rgba(255, 77, 77, 0.3);
                }

                .spec-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 3rem 2rem;
                    transition: all 0.3s ease;
                }
                .spec-card:hover {
                    border-color: var(--coral);
                    background: rgba(255, 77, 77, 0.03);
                }

                .main-visual-box {
                    background: radial-gradient(circle at 50% 50%, #151515 0%, #050505 100%);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .glow-effect {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    background: var(--coral);
                    filter: blur(120px);
                    opacity: 0.1;
                    z-index: 1;
                }

                .fade-up {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease-out;
                }
                .fade-up.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .floating-asset {
                    animation: floating 4s ease-in-out infinite;
                    z-index: 2;
                }

                .trust-tag {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 2px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #ccc;
                }
            `}</style>
            
            {/* Font Awesome CDN */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

            {/* Header */}
            <header className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
                <div className="text-2xl font-black tracking-tighter">
                    WEWEB<span className="text-[#FF4D4D]">.</span>
                </div>
                <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <a href="#" className="hover:text-white transition-colors">Vision</a>
                    <a href="#" className="hover:text-white transition-colors">Portfolio</a>
                    <a href="#" className="text-[#FF4D4D]">Project Inquiry</a>
                </nav>
            </header>

            <main>
                <section className="max-w-7xl mx-auto px-8 pt-20 pb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className={`lg:col-span-7 fade-up ${isHeroMounted ? 'visible' : ''}`} id="hero-content">
                        <div className="flex gap-3 mb-8">
                            <span className="trust-tag">#진정성</span>
                            <span className="trust-tag">#밀착케어</span>
                            <span className="trust-tag">#트렌디</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-[1.15] mb-10 tracking-tight">
                            당신의 아이디어를 <br/>
                            <span className="text-[#FF4D4D]">가장 감각적으로</span><br/>
                            현실화합니다.
                        </h1>
                        <p className="text-xl text-slate-400 mb-14 leading-relaxed max-w-2xl font-light">
                            공장형 제작에서 벗어나, 한 프로젝트에 모든 역량을 집중합니다. <br/>
                            <strong className="font-bold text-white">신설 스튜디오만의 열정</strong>으로 당신의 비즈니스에 가장 트렌디한 디지털 경험을 선물합니다.
                        </p>
                        
                        <div className="flex flex-col gap-5 mb-14">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded bg-[#FF4D4D]/10 flex items-center justify-center text-[#FF4D4D] group-hover:bg-[#FF4D4D] group-hover:text-white transition-all">
                                    <i className="fa-solid fa-check text-sm"></i>
                                </div>
                                <p className="text-slate-300 font-medium text-lg">대표 개발자가 직접 소통하는 1:1 전담 시스템</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded bg-[#FF4D4D]/10 flex items-center justify-center text-[#FF4D4D] group-hover:bg-[#FF4D4D] group-hover:text-white transition-all">
                                    <i className="fa-solid fa-check text-sm"></i>
                                </div>
                                <p className="text-slate-300 font-medium text-lg">최신 글로벌 디자인 트렌드 및 기술 스택 적용</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded bg-[#FF4D4D]/10 flex items-center justify-center text-[#FF4D4D] group-hover:bg-[#FF4D4D] group-hover:text-white transition-all">
                                    <i className="fa-solid fa-check text-sm"></i>
                                </div>
                                <p className="text-slate-300 font-medium text-lg">신규 런칭 기념 합리적인 제작 비용 제안</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 items-center">
                            <a href="#" className="btn-contact">
                                첫 프로젝트 상담하기 <i className="fa-solid fa-comment-dots text-sm"></i>
                            </a>
                            <a href="#" className="text-sm font-bold border-b border-white/20 pb-1 hover:border-[#FF4D4D] transition-all">
                                우리가 추구하는 가치
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 fade-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="main-visual-box aspect-square lg:aspect-[4/5] rounded-lg">
                            <div className="glow-effect"></div>
                            <div className="floating-asset text-center">
                                <div className="mb-10 relative">
                                    <i className="fa-solid fa-seedling text-8xl text-[#FF4D4D] opacity-30"></i>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] tracking-[0.5em] text-white font-black uppercase">Fresh Perspective</p>
                                    <p className="text-xs text-slate-500 font-medium italic">새로운 시선으로 비즈니스를 디자인합니다</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-8 py-40 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="spec-card fade-up">
                            <h3 className="text-2xl font-black mb-6 tracking-tighter">BRAND WEB</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">브랜드의 철학을 시각적으로 구현하여 고객의 기억에 남는 웹사이트를 제작합니다.</p>
                            <span className="text-[10px] font-bold text-[#FF4D4D] uppercase tracking-widest">Digital Identity</span>
                        </div>
                        <div className="spec-card fade-up" style={{ transitionDelay: '0.1s' }}>
                            <h3 className="text-2xl font-black mb-6 tracking-tighter">SMART APP</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">가장 효율적인 기술로 아이디어를 빠르게 시장에 선보일 수 있도록 돕습니다.</p>
                            <span className="text-[10px] font-bold text-[#FF4D4D] uppercase tracking-widest">MVP Launching</span>
                        </div>
                        <div className="spec-card fade-up" style={{ transitionDelay: '0.2s' }}>
                            <h3 className="text-2xl font-black mb-6 tracking-tighter">TOTAL CARE</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">제작 후 방치되지 않도록, 초기 운영에 필요한 기술 지원을 아끼지 않습니다.</p>
                            <span className="text-[10px] font-bold text-[#FF4D4D] uppercase tracking-widest">Growth Partner</span>
                        </div>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto px-8 py-40 text-center fade-up">
                    <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight">
                        우리는 당신의 프로젝트를 <br/> <span className="text-[#FF4D4D]">가장 소중하게</span> 다룹니다.
                    </h2>
                    <p className="text-slate-500 mb-14 text-lg font-light leading-relaxed">
                        신설 스튜디오만의 몰입도와 열정을 경험해 보세요. <br/>
                        진심을 다해 당신의 파트너가 되어 드립니다.
                    </p>
                    <a href="#" className="btn-contact">
                        진심이 담긴 상담 시작 <i className="fa-solid fa-heart text-sm"></i>
                    </a>
                </section>
            </main>

            <footer className="max-w-7xl mx-auto px-8 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-600">
                <div className="text-xl font-black italic text-white">WEWEB<span className="text-[#FF4D4D]">.</span></div>
                <div className="text-[10px] font-bold tracking-[0.4em] uppercase">© 2024 WEWEB STUDIO. Fresh Start.</div>
                <div className="flex gap-10 text-[11px] font-bold uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Open Talk</a>
                </div>
            </footer>
        </div>
    );
}
