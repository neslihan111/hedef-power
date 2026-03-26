import React from 'react';
import { TrendingDown, ShieldCheck, Wrench } from 'lucide-react';

export default function HomeHighlights() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Modern Araçlar İçin Profesyonel Chiptuning Çözümleri
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Deneyim odaklı yaklaşım ve modern ekipmanlarla aracınız için en iyisi.
                        Hedef Power, titiz işçilik ile güven veren sonuçlar sunar.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                        <div className="h-14 w-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                            <TrendingDown size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Yüksek Performans</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">Araca özel uygulamalarla maksimum sürüş dinamiği sağlıyoruz.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                        <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                            <ShieldCheck size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Güvenli Uygulama</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">Standartlara uygun, kuralına göre profesyonel kurulum yapıyoruz.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                        <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <Wrench size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Kalibrasyon</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">En güncel cihazlarla ince ayar, bakım ve arıza tespiti.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
