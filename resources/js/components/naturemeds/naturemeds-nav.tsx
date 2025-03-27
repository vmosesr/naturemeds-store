import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react"; // Icons for the toggle button

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative p-4 shadow-md">
            {/* Navbar container */}
            <div className="flex justify-between items-center">

                <button 
                    className="md:hidden menu-button-media-screen"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Navigation Links (Hidden on Small Screens) */}
                <div className="hidden md:flex items-center">
                    <NavLinks />
                </div>
            </div>

            {/* Mobile Navigation Menu (Visible when menuOpen is true) */}
            <div className={`absolute top-full left-0 w-full bg-green-600 md:hidden transition-all duration-300 ${
                    menuOpen ? "block" : "hidden"}`} >
                        
                <NavLinks mobile={true} />
            </div>
        </nav>
    );
};

const NavLinks = ({ mobile = false }) => {
    const links = [
        { name: "Products", route: route('products') },
        { name: "Clinics", route: route('clinics') },
        { name: "Checkouts", route: route('checkouts') },
        { name: "Articles", route: route('articles') },
        { name: "Support", route: route('support') },
    ];

    return (
        <div className={`flex ${mobile ? "flex-col items-center gap-4 py-4" : "flex-row gap-4"}`}>
            {links.map((link) => (
                <Link key={link.name} href={link.route} className="navigation-links">
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
