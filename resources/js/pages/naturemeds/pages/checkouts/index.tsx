import React from 'react';
import Navigation from '../../../../components/naturemeds/naturemeds-nav';
import Footer from '../../../../components/naturemeds/footer';

export default function CheckoutIndex() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FDFDFC] dark:bg-[#0a0a0a]">
            <header className="w-full navigation-bar-all">
                <Navigation />
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Our deals</h1>
                {/* Add your products content here */}
            </main>

            <Footer />
        </div>
    );
}