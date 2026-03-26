import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, Folder, Image as ImageIcon, MessageCircle, ZoomIn } from 'lucide-react';
import Footer from '../components/Footer';
import carIcon from '../assets/car-icon.png';
import galleryBanner from '../assets/gallery-banner.jpg';
import SEO from '../components/SEO';

// Dynamically import all images in the gallery subfolders
const imageGlob = import.meta.glob('../assets/gallery/**/*.{jpg,jpeg,png,webp,svg}', { eager: true, query: '?url', import: 'default' });

const formatTitle = (slug) => {
    const exactMatches = {
        'albien-smart-kit-donusum': 'Albien Smart Kit Dönüşüm',
        'albien-smart-kit-montaj': 'Albien Smart Kit Montaj',
        'fiat-egea-atiker-obd-kit': 'Fiat Egea OBD Uygulama',
        'renault-atiker-montaj': 'Renault Atiker Montaj',
        'clio-atiker-montaj': 'Clio Atiker Montaj',
        'yag-bakimi': 'Yağ Bakımı',
        'yazilim-araclar': 'Yazılım Araçları'
    };
    
    if (exactMatches[slug]) return exactMatches[slug];

    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    const categories = useMemo(() => {
        const categoriesMap = {};
        for (const path in imageGlob) {
            const parts = path.split('/');
            const folderName = parts[parts.length - 2];
            const imageUrl = imageGlob[path];

            if (folderName === 'gallery') continue;

            if (!categoriesMap[folderName]) {
                categoriesMap[folderName] = {
                    id: folderName,
                    title: formatTitle(folderName),
                    images: []
                };
            }
            categoriesMap[folderName].images.push(imageUrl);
        }
        return Object.values(categoriesMap).sort((a, b) => a.title.localeCompare(b.title));
    }, []);

    const currentCategory = activeCategory ? categories.find(c => c.id === activeCategory) : null;

    // Handle esc key to close modals
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (lightboxImage) {
                    setLightboxImage(null);
                } else if (activeCategory) {
                    setActiveCategory(null);
                }
            }
        };

        if (lightboxImage || activeCategory) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImage, activeCategory]);

    return (
        <main className="min-h-screen flex flex-col font-sans">
            <SEO 
                title="Hedef Power Galeri | Araç Performans Uygulamaları" 
                description="Hedef Power'da gerçekleştirdiğimiz chiptuning ve araç yazılım uygulamalarının görselleri." 
            />
            {/* Hero / Page Intro */}
            <section className="relative w-full h-[40vh] md:h-[55vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Object Cover */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={galleryBanner}
                        alt="Galeri Banner"
                        className="w-full h-full object-cover"
                        fetchpriority="high"
                        loading="eager"
                        decoding="sync"
                    />
                    {/* Dark Overlay for readability, reduced for clarity */}
                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left pt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 lg:mb-6 tracking-tight drop-shadow-lg animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
                        Uygulama Galerisi
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl font-light drop-shadow text-balance animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                        Hedef Power kalite ve işçiliğini yansıtan chiptuning kareleri.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-1 bg-slate-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 animate-[fadeIn_0.5s_ease-out]">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className="group relative bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:bg-slate-50/50 active:scale-[0.98] cursor-pointer h-48 sm:h-56"
                            >
                                <div className="mb-4 transition-all duration-300 transform group-hover:-translate-y-2">
                                    <img src={carIcon} alt="Kategori İkonu" className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors line-clamp-2 leading-tight">
                                    {cat.title}
                                </h3>
                                <span className="inline-flex items-center text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <ImageIcon size={14} className="mr-1.5" />
                                    {cat.images.length} Görsel
                                </span>
                            </button>
                        ))}
                    </div>
                    {categories.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            Henüz galeriye görsel eklenmemiş.
                        </div>
                    )}
                </div>
            </section>


            {/* Category Images Modal */}
            {activeCategory && (
                <div
                    className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 animate-[fadeIn_0.2s_ease-out]"
                    onClick={() => setActiveCategory(null)}
                >
                    <div
                        className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0 bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                    {currentCategory?.title}
                                </h2>
                                <p className="text-slate-400 text-sm mt-1">{currentCategory?.images.length} Görsel</p>
                            </div>
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="p-3 bg-white/5 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105"
                                aria-label="Kapat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body (Scrollable Grid) */}
                        <div className="flex-1 overflow-y-auto p-5 sm:p-6 pb-20 scroll-smooth">
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                                {currentCategory?.images.map((imgSrc, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setLightboxImage(imgSrc)}
                                        className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-sm aspect-square transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/5 w-full text-left cursor-pointer z-0"
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`${currentCategory?.title} - Görsel ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center backdrop-blur-[1px] opacity-0 group-hover:opacity-100">
                                            <div className="bg-white/95 text-slate-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                                                <ZoomIn size={20} />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox Modal (for single image) */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 sm:p-6 animate-[fadeIn_0.2s_ease-out] backdrop-blur-md"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 bg-white/10 hover:bg-white/20 text-white p-3 lg:p-4 rounded-full transition-colors backdrop-blur-md hover:scale-105 z-[101]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage(null);
                        }}
                        aria-label="Kapat"
                    >
                        <X size={24} />
                    </button>
                    <div
                        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={lightboxImage}
                            alt="Büyük Görünüm"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-[scaleIn_0.3s_ease-out]"
                        />
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
