import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceDetail({ service }) {
    if (!service) return null;

    return (
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 mt-12 mb-12 animate-[fadeInUp_0.4s_ease-out]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-lg">
                        <img 
                            src={service.gallery?.[0] || service.image} 
                            alt={`${service.title} detay`} 
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        {service.title}
                    </h2>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {service.longDescription}
                    </p>
                    
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-4">
                            Öne Çıkan Avantajlar
                        </h4>
                        <ul className="space-y-4">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-0.5 shrink-0" size={22} />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
