import React, { useEffect, useMemo, useState } from "react";

import slide1 from "../assets/hero/slide-1.jpg";
import slide2 from "../assets/hero/slide-2.jpg";
import slide3 from "../assets/hero/slide-3.jpg";

export default function Hero() {
    const slides = useMemo(
        () => [
            { src: slide1, pos: "center" },
            { src: slide2, pos: "center 45%" },
            { src: slide3, pos: "center" },
        ],
        []
    );

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentSlide((p) => (p + 1) % slides.length);
        }, 6000); // 6 saniye
        return () => clearInterval(id);
    }, [slides.length]);

    return (
        <section id="home" className="relative min-h-[100svh] overflow-hidden">
            {/* Background slider */}
            <div className="absolute inset-0">
                {slides.map((s, idx) => (
                    <img
                        key={idx}
                        src={s.src}
                        alt=""
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ objectPosition: s.pos }}
                        draggable={false}
                    />
                ))}
                {/* overlay */}
                <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 min-h-[100svh] flex items-center">
                <div className="max-w-3xl">


                    {currentSlide === 0 && (
                        <div className="hero-content text-white animate-[fadeIn_0.5s_ease-out]">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
                                Performansı Yeniden Tanımlayın
                            </h1>

                            <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl drop-shadow-md">
                                Aracınıza güçlü ve profesyonel dokunuş.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/905384954616"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp inline-flex items-center justify-center rounded-full bg-white text-slate-900 hover:bg-slate-100 px-7 py-3 font-semibold transition"
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href="/services#chiptuning"
                                    className="btn-outline inline-flex items-center justify-center rounded-full border border-white/50 hover:border-white text-white px-7 py-3 font-semibold transition"
                                >
                                    Hizmetler
                                </a>
                            </div>
                        </div>
                    )}



                </div>
            </div>

            {/* dots - Bottom Center */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all ${idx === currentSlide
                            ? "w-8 bg-white"
                            : "w-2.5 bg-white/40 hover:bg-white/70"
                            }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}