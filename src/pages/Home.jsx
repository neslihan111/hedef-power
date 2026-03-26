import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import HomeHighlights from '../components/HomeHighlights';
import SEO from '../components/SEO';

const HomePerformance = React.lazy(() => import('../components/HomePerformance'));
const Brands = React.lazy(() => import('../components/Brands'));
const Footer = React.lazy(() => import('../components/Footer'));

function Home() {
    return (
        <main>
            <SEO 
                title="Hedef Power | Araç Yazılım & Performans Artırma" 
                description="Hedef Power ile aracınızın potansiyelini keşfedin. Chiptuning, stage 1-2 performans yazılımı, DPF, EGR, Adblue iptali ve araç performans merkezi." 
            />
            <Hero />
            <HomeHighlights />
            <Suspense fallback={<div className="py-20 text-center text-slate-500">Yükleniyor...</div>}>
                <HomePerformance />
                <Brands />
                <Footer />
            </Suspense>
        </main>
    );
}

export default Home;
