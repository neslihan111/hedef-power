import React from 'react';
import { Info } from 'lucide-react';

export default function GeneralServiceDetail({ item }) {
    if (!item) return null;

    return (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mt-6 shadow-inner animate-[fadeIn_0.3s_ease-out]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        draggable={false}
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Info size={18} className="text-emerald-600" />
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                            {item.title}
                        </h4>
                    </div>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium max-w-4xl">
                        {item.longDesc}
                    </p>
                </div>
            </div>
        </div>
    );
}
