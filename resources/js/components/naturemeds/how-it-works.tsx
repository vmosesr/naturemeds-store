import React from 'react';
import { Search, ShoppingBag, Truck } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Search size={48} className="text-green-600" />,
            title: "Search & Compare",
            description: "Explore verified doctors and organic herbal products tailored to your health needs."
        },
        {
            icon: <ShoppingBag size={48} className="text-green-600" />,
            title: "Consult & Purchase",
            description: "Book consultations with herbal medicine experts or purchase high-quality herbal products."
        },
        {
            icon: <Truck size={48} className="text-green-600" />,
            title: "Global Delivery",
            description: "Receive your personalized herbal solutions with our worldwide shipping and tracking."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    How NatureMeds Works
                </h2>
                
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                    {steps.map((step) => (
                        <div 
                            key={step.title} 
                            className="flex flex-col items-center text-center max-w-xs transform transition-all hover:scale-105"
                        >
                            <div className="mb-6 p-6 bg-green-50 rounded-full">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                            <div className="mt-4 h-1 w-16 bg-green-600 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;