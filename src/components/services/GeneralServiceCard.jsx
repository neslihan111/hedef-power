import React from 'react';

export default function GeneralServiceCard({ item, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center text-center p-6 w-full bg-white rounded-2xl border transition-all duration-300 ${
                isActive 
                ? 'border-slate-400 shadow-[0_8px_30px_rgba(0,0,0,0.12)] -translate-y-1 ring-2 ring-slate-900/5' 
                : 'border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-slate-300'
            }`}
        >
            <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] mb-5 flex items-center justify-center">
                <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-full h-full object-contain filter drop-shadow-sm opacity-90 transition-opacity hover:opacity-100" 
                    draggable={false}
                />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                {item.title}
            </h4>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                {item.shortDesc}
            </p>
        </button>
    );
}
