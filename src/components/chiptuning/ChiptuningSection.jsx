import React, { useState } from 'react';
import { chiptuningServices } from './chiptuningData';
import ServiceGrid from './ServiceGrid';
import ServiceDetail from './ServiceDetail';
import { dsgTuningRemaps } from '../../assets/chiptuning';
import { Settings, Zap, Search, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChiptuningSection() {
    const [activeService, setActiveService] = useState(chiptuningServices[0]);

    const scrollToDetail = (service) => {
        setActiveService(service);
        // Scroll slightly to detail section if needed, but smooth enough not to break flow
        const element = document.getElementById('service-detail');
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full animate-[fadeIn_0.5s_ease-out]">
            
            {/* Intra-tab Hero */}
            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative mb-16 shadow-2xl flex flex-col md:flex-row items-center border border-slate-800">
                <div className="md:w-1/2 p-10 md:p-16 lg:p-20 z-10 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                        Hedef Power <br /> <span className="text-emerald-400">Chiptuning</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-lg text-balance drop-shadow">
                        Yazılım, performans ve sürüş karakterini yeniden şekillendiren profesyonel, modern ve güvenilir çözümler.
                    </p>
                </div>
                
                <div className="md:w-1/2 w-full h-64 md:h-full absolute md:relative right-0 top-0 opacity-40 md:opacity-100 z-0 mask-image-gradient">
                    <img 
                        src={dsgTuningRemaps} 
                        alt="Hedef Power Chiptuning ve Performans Yazılımı Merkezi" 
                        className="w-full h-full object-cover" 
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent md:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:hidden block"></div>
                </div>
            </div>

            {/* Sub-highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                    <Zap className="mx-auto text-emerald-500 mb-4" size={32} />
                    <h4 className="font-bold text-slate-800">Yazılım Optimizasyonu</h4>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                    <Activity className="mx-auto text-blue-500 mb-4" size={32} />
                    <h4 className="font-bold text-slate-800">Performans Çözümleri</h4>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                    <Search className="mx-auto text-purple-500 mb-4" size={32} />
                    <h4 className="font-bold text-slate-800">Teknik Teşhis</h4>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                    <Settings className="mx-auto text-rose-500 mb-4" size={32} />
                    <h4 className="font-bold text-slate-800">Sürüş Karakteri</h4>
                </div>
            </div>

            {/* Service Detail Area */}
            <div id="service-detail">
                <ServiceDetail service={activeService} />
            </div>

            {/* Grid Area */}
            <ServiceGrid 
                services={chiptuningServices} 
                activeService={activeService} 
                onServiceSelect={scrollToDetail} 
            />

            {/* Bottom CTA */}
            <div className="mt-24 p-12 bg-slate-900 rounded-[2.5rem] text-center shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                        Aracınıza Uygun Yazılım Çözümünü Keşfedin
                    </h3>
                    <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
                        Hedef Power Chiptuning ile performans, sürüş hissi ve teknik çözümleri tek noktada bir araya getirin. 
                        Profesyonel, güvenli ve size özel dokunuşlar için iletişime geçin.
                    </p>
                    <a 
                        href="https://wa.me/905384954616" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
                    >
                        Bize Ulaşın
                    </a>
                </div>
            </div>

        </div>
    );
}
