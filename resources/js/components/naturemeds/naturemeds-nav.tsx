import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Products", route: route('products') },
        { name: "Clinics", route: route('clinics') },
        { name: "Checkouts", route: route('checkouts') },
        { name: "Articles", route: route('articles') },
        { name: "Support", route: route('support') },
    ];

    const NavLinks = ({ mobile = false }) => {
        return (
            <div className={`flex ${mobile 
                ? "flex-col items-start gap-4 py-4 px-4" 
                : "flex-row gap-4"}`}>
                {links.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.route} 
                        className="hover:text-green-700 transition-colors duration-300"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <header className="w-full bg-white shadow-md">
            <nav className="relative p-4 navigation-bar-all">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold hidden md:block">
                            NATUREMEDS STORE
                        </span>
                        <span className="text-xl font-bold md:hidden">
                            NMS
                        </span>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden menu-button-media-screen"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center">
                        <NavLinks />
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`
                    absolute top-full left-0 w-full 
                    bg-white shadow-md 
                    md:hidden 
                    transition-all duration-300 
                    ${menuOpen ? "block" : "hidden"}
                `}>
                    <NavLinks mobile={true} />
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;