import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ana1 from '../assets/anasayfa-1.jpg';
import ana2 from '../assets/anasayfa-2.jpg';
import ana3 from '../assets/anasayfa-3.jpg';
import ana4 from '../assets/anasayfa-4.jpg';

export default function HomePerformance() {
    return (
        <section id="services" className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        Hedef Power ile Performansı Yükselt
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                        Performans, verimlilik ve sürüş konforunu bir arada sunan çözümler. Aracınızın verimliliğini artırın.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {/* Block 1 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 w-full">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
                                <img src={ana1} alt="Hedef Power Chiptuning ile Performans Artışı" loading="lazy" decoding="async" className="w-full h-[400px] md:h-[500px] object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1" draggable={false} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Aracınızın potansiyelini açığa çıkarın</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Motorunuzun sınırlarını güvenle genişleterek %35'e varan performans artışı ve %15'e varan yakıt ekonomisi sağlıyoruz. Özel yazılımlarımızla sürüş keyfinizi katlayın.
                            </p>
                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-indigo-600 mt-1" size={26} />
                                    <div>
                                        <span className="font-semibold text-slate-900 block text-lg mb-1">%100 Güvenli İşlem</span>
                                        <span className="text-slate-600">Orijinal sınırlar korunarak araca zarar vermeden uygulanır.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-indigo-600 mt-1" size={26} />
                                    <div>
                                        <span className="font-semibold text-slate-900 block text-lg mb-1">Dinamik Sürüş Hissi</span>
                                        <span className="text-slate-600">Daha iyi gaz tepkimesi ve ivmelenme ile pürüzsüz sürüş.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 w-full">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
                                <img src={ana2} alt="Araç Yazılımı ile Yakıt Tasarrufu" loading="lazy" decoding="async" className="w-full h-[400px] md:h-[500px] object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" draggable={false} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Akıllı Dönüşüm, Maksimum Güç</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Modern ekipman ve titiz işçilik ile aracınızın potansiyelini optimum seviyeye taşıyın. Hassas kalibrasyon ile sorunsuz bir deneyim yaşayın.
                            </p>
                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={26} />
                                    <div>
                                        <span className="font-semibold text-slate-900 block text-lg mb-1">Modern Donanım</span>
                                        <span className="text-slate-600">En güncel teknolojilerle aracınız için kusursuz çözümler.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={26} />
                                    <div>
                                        <span className="font-semibold text-slate-900 block text-lg mb-1">Uzun Ömürlü Kullanım</span>
                                        <span className="text-slate-600">Detaylarda kalite ve titiz işçilik ile güven veren montaj.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 w-full">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
                                <img src={ana3} alt="Güvenli Stage 1 ve Stage 2 Tuning" loading="lazy" decoding="async" className="w-full h-[400px] md:h-[500px] object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1" draggable={false} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Güvenli Performans</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Sürüş karakterini bozmadan optimize edilmiş güç.
                            </p>
                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-blue-600 mt-1" size={26} />
                                    <div>
                                        <span className="font-semibold text-slate-900 block text-lg mb-1">Optimum Denge</span>
                                        <span className="text-slate-600">Aracınızın motor değerleri kusursuz dengede tutulur.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Block 4 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 w-full">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
                                <img src={ana4} alt="EGR, DPF ve Adblue İptali Çözümleri" loading="lazy" decoding="async" className="w-full h-[400px] md:h-[500px] object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" draggable={false} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Modern Çözümler</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Aracınıza uygun modern yazılım ve performans çözümleri.
                            </p>
                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-purple-600 mt-1" size={26} />
                                    <div>
                                        <span className="font-semibold text-slate-900 block text-lg mb-1">Yeni Nesil Teknoloji</span>
                                        <span className="text-slate-600">En güncel donanım ve yazılımlarla donatılmış altyapı.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
