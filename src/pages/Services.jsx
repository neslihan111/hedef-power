import React, { useState, useEffect } from 'react';
import {
    Wrench, Settings, Activity, Search,
    Cpu, Zap, Fuel, BarChart,
    MessageCircle, Image as ImageIcon
} from 'lucide-react';
import Footer from '../components/Footer';
import servicesBanner from '../assets/services-banner.jpg';
import ChiptuningSection from '../components/chiptuning/ChiptuningSection';
import GeneralServicesSection from '../components/services/GeneralServicesSection';
import SEO from '../components/SEO';

export default function Services() {
    const [activeTab, setActiveTab] = useState('genel');

    useEffect(() => {
        if (window.location.hash === '#chiptuning') {
            setActiveTab('chiptuning');
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen flex flex-col font-sans">
            <SEO 
                title="Hizmetlerimiz | Hedef Power Araç Yazılımı" 
                description="Profesyonel chiptuning, stage 1 tuning, DPF iptali, EGR iptali ve araç performans hizmetleri." 
            />
            {/* Hero / Page Intro */}
            <section className="relative w-full h-[40vh] md:h-[55vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={servicesBanner}
                        alt="Hizmetler Banner"
                        className="w-full h-full object-cover"
                    />
                    {/* Consistent overlay with Gallery */}
                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left pt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 lg:mb-6 tracking-tight drop-shadow-lg animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
                        Hedef Power Hizmetler
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl font-light drop-shadow text-balance animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                        Araca özel yazılım, profesyonel chiptuning, garantili işlemler ile performans artırma.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-1 bg-slate-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex bg-slate-200/50 p-1.5 rounded-full shadow-inner border border-slate-200">
                            <button
                                onClick={() => setActiveTab('genel')}
                                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeTab === 'genel'
                                    ? 'bg-white text-slate-900 shadow-[0_2px_12px_rgba(0,0,0,0.08)]'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                                    }`}
                            >
                                Genel Hizmetler
                            </button>
                            <button
                                onClick={() => setActiveTab('chiptuning')}
                                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeTab === 'chiptuning'
                                    ? 'bg-white text-slate-900 shadow-[0_2px_12px_rgba(0,0,0,0.08)]'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                                    }`}
                            >
                                Hedef Power Chiptuning
                            </button>
                        </div>
                    </div>

                    {/* Render Content Based on Active Tab */}
                    {activeTab === 'genel' ? (
                        <GeneralServicesSection />
                    ) : (
                        <ChiptuningSection />
                    )}
                </div>
            </section>


            <Footer />
        </main>
    );
}
