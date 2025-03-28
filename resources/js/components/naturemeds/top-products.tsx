import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import ProductImage from '../../../assets/images/micheile-henderson-XPCdZXncj64-unsplash.jpg';

const products = [
    {
        id: 1,
        name: "Immune Boost Herbal Blend",
        price: 39.99,
        rating: 4.7,
        image: ProductImage,
        description: "Natural immunity enhancing herbal supplement"
    },
    {
        id: 2,
        name: "Stress Relief Tea",
        price: 24.99,
        rating: 4.8,
        image: ProductImage,
        description: "Calming herbal tea blend"
    },
    {
        id: 3,
        name: "Organic Turmeric Capsules",
        price: 29.99,
        rating: 4.9,
        image: ProductImage,
        description: "Anti-inflammatory herbal supplement"
    },
    {
        id: 4,
        name: "Sleep Support Tincture",
        price: 34.99,
        rating: 4.6,
        image: ProductImage,
        description: "Natural sleep aid herbal extract"
    },
    {
        id: 5,
        name: "Digestive Health Probiotics",
        price: 44.99,
        rating: 4.5,
        image: ProductImage,
        description: "Herbal probiotic blend for gut health"
    },
    {
        id: 6,
        name: "Energy Boost Herbal Mix",
        price: 36.99,
        rating: 4.7,
        image: ProductImage,
        description: "Natural energy-enhancing herbal supplement"
    }
];

const TopProducts = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Top-Selling Herbal Products
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
                        >
                            <div className="relative">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
                                    ${product.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="flex text-yellow-400 mr-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    size={20} 
                                                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-600">({product.rating})</span>
                                    </div>
                                    
                                    <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopProducts;