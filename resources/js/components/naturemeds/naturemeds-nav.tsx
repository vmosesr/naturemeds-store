import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react"; // Icons for the toggle button

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative p-4">
            {/* Navbar container */}
            <div className="flex justify-between items-center">

                {/* Hamburger Button (Only Visible on Small Screens) */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation Links (Hidden on Small Screens) */}
                <div className="hidden md:flex items-center">
                    <NavLinks />
                </div>
            </div>

            {/* Mobile Navigation Menu (Visible when menuOpen is true) */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full shadow-md md:hidden flex flex-col items-center gap-4 p-4 transition-all navigation-links-media">
                    <NavLinks />
                </div>
            )}
        </nav>
    );
};

// Navigation Links Component
const NavLinks = () => (
    <div className="flex flex-col md:flex-row items-center gap-4">
        {["Products", "Clinics", "Checkouts", "Articles", "Support"].map((item) => (
            <Link 
                key={item} 
                href={route('register')} 
                className="navigation-links"
            >
                {item}
            </Link>
        ))}
    </div>
);

export default Navigation;
