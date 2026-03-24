import React from 'react';

export default function ServiceCard({ service, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                isActive 
                ? 'border-slate-400 shadow-[0_8px_30px_rgba(0,0,0,0.12)] -translate-y-1' 
                : 'border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]'
            }`}
        >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy" 
                    draggable={false}
                />
                {isActive && (
                    <div className="absolute inset-0 border-4 border-slate-900/10 rounded-t-2xl pointer-events-none"></div>
                )}
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-2">
                    {service.shortDescription}
                </p>
            </div>
        </button>
    );
}
