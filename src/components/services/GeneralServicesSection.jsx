import React, { useState } from 'react';
import { generalServicesCategories } from './generalServicesData';
import ServiceCategoryBlock from './ServiceCategoryBlock';

export default function GeneralServicesSection() {
    // Optionally default to the first service of the first category, or null.
    // Given the grid structure, defaulting to null might be cleaner until clicked. 
    // Or we can pre-select stage1. Let's pre-select stage1 for better UX.
    const [activeService, setActiveService] = useState(generalServicesCategories[0].items[0]);

    const handleServiceSelect = (service) => {
        setActiveService(service);
    };

    return (
        <div className="w-full animate-[fadeIn_0.5s_ease-out]">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                    Genel Hizmetler
                </h2>
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                    Aracınıza yönelik yazılım, teşhis ve teknik çözüm hizmetleri tek noktada.
                </p>
            </div>

            {/* Categories Loop */}
            <div className="space-y-12">
                {generalServicesCategories.map((category, idx) => (
                    <ServiceCategoryBlock 
                        key={idx}
                        category={category}
                        activeService={activeService}
                        onServiceSelect={handleServiceSelect}
                    />
                ))}
            </div>

            {/* Bottom Spacer/Callout */}
            <div className="mt-20 flex justify-center">
                <p className="text-slate-500 font-medium text-sm text-center px-4 py-2 bg-slate-100 rounded-full inline-block">
                    Yukarıdaki ikonlara tıklayarak detaylı bilgi alabilirsiniz.
                </p>
            </div>
        </div>
    );
}
