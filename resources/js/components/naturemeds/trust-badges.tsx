import React from 'react';
import { Shield, Leaf, Globe, CheckCircle, Award } from 'lucide-react';

const TrustBadges = () => {
    const badges = [
        {
            icon: <Shield className="text-green-600" size={48} />,
            title: "Certified Practitioners",
            description: "All our doctors are rigorously verified and licensed professionals"
        },
        {
            icon: <Leaf className="text-green-600" size={48} />,
            title: "100% Organic",
            description: "Strictly organic, sustainably sourced herbal products"
        },
        {
            icon: <Globe className="text-green-600" size={48} />,
            title: "Worldwide Shipping",
            description: "Fast, secure global delivery of herbal supplements"
        },
        {
            icon: <CheckCircle className="text-green-600" size={48} />,
            title: "Quality Guaranteed",
            description: "Highest standards of herbal medicine and patient care"
        },
        {
            icon: <Award className="text-green-600" size={48} />,
            title: "Award-Winning",
            description: "Recognized for excellence in natural healthcare solutions"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Why Trust NatureMeds
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {badges.map((badge) => (
                        <div 
                            key={badge.title} 
                            className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all hover:scale-105"
                        >
                            <div className="mb-4 flex justify-center">
                                {badge.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                {badge.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {badge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;