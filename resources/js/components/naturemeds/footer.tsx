import React from 'react';
import { Link } from '@inertiajs/react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Doctors', href: '/doctors' },
        { name: 'How It Works', href: '/how-it-works' },
    ];

    const customerService = [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
    ];

    const legalInfo = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Accessibility', href: '/accessibility' },
    ];

    return (
        <footer className="bg-[#F5F5F4] dark:bg-[#1a1a1a] text-[#1b1b18] dark:text-[#e0e0e0] py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Information */}
                <div className="col-span-1 space-y-4">
                    <div className="flex items-center space-x-2">
                        <img 
                            src="/logo.svg" 
                            alt="NatureMeds Logo" 
                            className="h-10 w-10"
                        />
                        <span className="text-xl font-semibold">NatureMeds</span>
                    </div>
                    <p className="text-sm opacity-80">
                        Empowering natural health solutions with expert care and innovative products.
                    </p>
                    <div className="flex space-x-4 text-[#1b1b18] dark:text-[#e0e0e0]">
                        {/* Social Media Icons */}
                        <a href="#" className="hover:opacity-75 transition-opacity">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Facebook Icon */}
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-75 transition-opacity">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Instagram Icon */}
                                <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 0 0-1.772 1.153 4.902 4.902 0 0 0-1.153 1.772c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.908 4.908 0 0 0 1.153 1.772 4.908 4.908 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.901 4.901 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.901 4.901 0 0 0-1.153-1.772 4.901 4.901 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465-1.067-.048-1.407-.06-4.123-.06zm0 1.802c2.67 0 2.987.01 4.042.058.975.045 1.504.207 1.857.344.467.182.8.4 1.15.748.348.35.566.683.748 1.15.137.353.3.882.344 1.857.047 1.055.058 1.372.058 4.042s-.011 2.987-.058 4.042c-.045.975-.207 1.504-.344 1.857-.182.467-.4.8-.748 1.15a3.099 3.099 0 0 1-1.15.748c-.353.137-.882.3-1.857.344-1.055.047-1.372.058-4.042.058s-2.987-.011-4.042-.058c-.975-.045-1.504-.207-1.857-.344a3.099 3.099 0 0 1-1.15-.748 3.099 3.099 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857-.047-1.055-.058-1.372-.058-4.042s.011-2.987.058-4.042c.045-.975.207-1.504.344-1.857.182-.467.4-.8.748-1.15.35-.348.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.047 1.372-.058 4.042-.058z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-75 transition-opacity">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Twitter/X Icon */}
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406L10.658 15.2 4.923 22.846H1.24l8.601-9.824L0 1.153h7.594l4.922 6.525 5.64-6.525h3.745zM17.61 20.644h2.039L6.486 3.259H4.298L17.61 20.644z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-sm hover:text-green-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="col-span-1">
                    <h4 className="font-semibold mb-4">Customer Service</h4>
                    <ul className="space-y-2">
                        {customerService.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-sm hover:text-green-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Information */}
                <div className="col-span-1">
                    <h4 className="font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2">
                        {legalInfo.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-sm hover:text-green-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright and Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-sm opacity-70">
                    © {currentYear} NatureMeds. All Rights Reserved.
                </p>
                <p className="text-xs opacity-50 mt-2">
                    These statements have not been evaluated by the Food and Drug Administration. 
                    This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
            </div>
        </footer>
    );
};

export default Footer;