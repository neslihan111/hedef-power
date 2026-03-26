import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import headerLogo from '../assets/footer/logo.png';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Anasayfa', path: '/#home' },
        { name: 'Hakkımızda', path: '/#about' },
        { name: 'Hizmetler', path: '/services' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'İletişim', path: '/#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">

                {/* Logo Area */}
                <div className="flex-1 basis-0">
                    <Link to="/" className="inline-block transition-all duration-300 hover:scale-105">
                        <img
                            src={headerLogo}
                            alt="Hedef Power Logo"
                            className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                            draggable={false}
                        />
                    </Link>
                </div>

                {/* Desktop Menu - Centered */}
                <nav className="hidden md:flex flex-1 basis-0 justify-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-white drop-shadow-md px-5 py-1.5 transition-all text-sm font-medium ${isActive
                                    ? 'border border-white/70 rounded-full bg-white/10'
                                    : 'hover:text-white/80'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Area (Mobile Toggle) */}
                <div className="flex-1 basis-0 flex justify-end items-center gap-4">
                    <button
                        className="md:hidden text-white drop-shadow-md p-1 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-black/50 backdrop-blur-md px-4 py-4 space-y-3 mt-4 border-t border-white/10 flex flex-col items-center justify-center text-center">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block text-white transition-all text-base font-medium ${isActive
                                    ? 'border border-white/70 rounded-full bg-white/10 px-6 py-2'
                                    : 'hover:text-white/80 px-6 py-2'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

export default Header;
