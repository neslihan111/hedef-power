import React from 'react';
import Hero from '../components/Hero';
import HomeHighlights from '../components/HomeHighlights';
import HomePerformance from '../components/HomePerformance';
import Brands from '../components/Brands';
import Footer from "../components/Footer";
import SEO from '../components/SEO';

function Home() {
    return (
        <main>
            <SEO 
                title="Hedef Power | Araç Yazılım & Performans Artırma" 
                description="Hedef Power ile aracınızın potansiyelini keşfedin. Chiptuning, stage 1-2 performans yazılımı, DPF, EGR, Adblue iptali ve araç performans merkezi." 
            />
            <Hero />
            <HomeHighlights />
            <HomePerformance />
            <Brands />
            <Footer />
        </main>
    );
}

export default Home;
