import React from 'react';
import Hero from '../components/Hero';
import HomeHighlights from '../components/HomeHighlights';
import HomePerformance from '../components/HomePerformance';
import Brands from '../components/Brands';
import Footer from "../components/Footer";

function Home() {
    return (
        <main>
            <Hero />
            <HomeHighlights />
            <HomePerformance />
            <Brands />
            <Footer />
        </main>
    );
}

export default Home;
