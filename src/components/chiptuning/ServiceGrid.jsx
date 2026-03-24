import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceGrid({ services, activeService, onServiceSelect }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
                <ServiceCard 
                    key={service.id}
                    service={service}
                    isActive={activeService?.id === service.id}
                    onClick={() => onServiceSelect(service)}
                />
            ))}
        </div>
    );
}
