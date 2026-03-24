import React from 'react';
import GeneralServiceCard from './GeneralServiceCard';
import GeneralServiceDetail from './GeneralServiceDetail';

export default function ServiceCategoryBlock({ category, activeService, onServiceSelect }) {
    // Check if the currently active service belongs to this category block
    const isActiveCategory = category.items.some(item => item.id === activeService?.id);

    return (
        <div className="mb-16 last:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                {category.name}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item) => (
                    <GeneralServiceCard 
                        key={item.id}
                        item={item}
                        isActive={activeService?.id === item.id}
                        onClick={() => onServiceSelect(item)}
                    />
                ))}
            </div>

            {/* Render details right beneath the grid if the active service is in this category */}
            {isActiveCategory && (
                <GeneralServiceDetail item={activeService} />
            )}
        </div>
    );
}
