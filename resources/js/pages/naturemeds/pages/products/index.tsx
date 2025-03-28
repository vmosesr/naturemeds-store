import React, { useState, useMemo } from 'react';
import { Filter, ShoppingCart, Star, ChevronDown, ChevronUp, Heart, MessageCircle } from 'lucide-react';
import Navigation from '../../../../components/naturemeds/naturemeds-nav';
import Footer from '../../../../components/naturemeds/footer';
import ProductImage from '../../../../../assets/images/micheile-henderson-XPCdZXncj64-unsplash.jpg';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    inStock: boolean;
    doctor: {
        name: string;
        specialty: string;
    };
    estimatedDelivery: string;
};

const initialProducts: Product[] = [
    {
        id: 1,
        name: "Organic Turmeric Curcumin",
        description: "High-potency anti-inflammatory supplement with black pepper extract",
        price: 24.99,
        category: "Immune Boosters",
        rating: 4.7,
        reviewCount: 342,
        imageUrl: ProductImage,
        inStock: true,
        doctor: {
            name: "Dr. Elena Rodriguez",
            specialty: "Herbal Medicine"
        },
        estimatedDelivery: "3-5 business days"
    },
    // Add more products as needed
];

export default function ProductsIndex() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc'>('rating');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
    const [showFilters, setShowFilters] = useState(false);
    const [wishlist, setWishlist] = useState<number[]>([]);

    const categories = Array.from(new Set(initialProducts.map(p => p.category)));

    const filteredProducts = useMemo(() => {
        return initialProducts
            .filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter(product => 
                selectedCategories.length === 0 || 
                selectedCategories.includes(product.category)
            )
            .filter(product => 
                product.price >= priceRange.min && product.price <= priceRange.max
            )
            .sort((a, b) => {
                switch(sortBy) {
                    case 'price-asc': return a.price - b.price;
                    case 'price-desc': return b.price - a.price;
                    case 'rating':
                    default: return b.rating - a.rating;
                }
            });
    }, [searchTerm, selectedCategories, sortBy, priceRange]);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev => 
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const toggleWishlist = (productId: number) => {
        setWishlist(prev => 
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            
            <main className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Natural Wellness Products</h1>
                    <p className="text-gray-600">
                        Discover herbal remedies to support your health journey.
                    </p>
                </div>

                {/* Controls */}
                <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
                    <div className="flex-grow w-full sm:w-auto">
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent"
                        />
                    </div>
                    
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button 
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-green-800"
                        >
                            <Filter size={18} className="mr-2 text-green-800" />
                            Filters
                            {showFilters ? <ChevronUp size={18} className="ml-1 text-green-800" /> : <ChevronDown size={18} className="ml-1 text-green-800" />}
                        </button>
                        
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'rating' | 'price-asc' | 'price-desc')}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 text-green-800"
                        >
                            <option value="rating text-green-800">Top Rated</option>
                            <option value="price-asc text-green-800">Price: Low to High</option>
                            <option value="price-desc text-green-800">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Filters */}
                {showFilters && (
                    <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-medium mb-3 text-gray-700">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <label key={category} className="flex items-center">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => toggleCategory(category)}
                                                className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
                                            />
                                            <span className="ml-2 text-gray-700">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium mb-3 text-gray-700">Price Range</h3>
                                <div className="flex items-center space-x-3">
                                    <input 
                                        type="number" 
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange(prev => ({...prev, min: Number(e.target.value)}))}
                                        className="w-24 px-3 py-1 border border-gray-300 rounded focus:ring-green-300"
                                        placeholder="Min"
                                    />
                                    <span className="text-gray-400">to</span>
                                    <input 
                                        type="number" 
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange(prev => ({...prev, max: Number(e.target.value)}))}
                                        className="w-24 px-3 py-1 border border-gray-300 rounded focus:ring-green-300"
                                        placeholder="Max"
                                    />
                                </div>
                            </div>

                            <div className="flex items-end">
                                <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                                    <MessageCircle size={18} className="mr-2" />
                                    Consult Specialist
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Products */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
                                <div className="relative">
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.name} 
                                        className="w-full h-48 object-cover"
                                    />
                                    <button 
                                        onClick={() => toggleWishlist(product.id)}
                                        className={`absolute top-3 right-3 p-2 rounded-full ${wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-400'} bg-white/80 hover:bg-white`}
                                    >
                                        <Heart 
                                            size={20} 
                                            fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                                        />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
                                        <div className="flex items-center text-yellow-500">
                                            <Star size={16} fill="currentColor" className="mr-1" />
                                            <span className="text-sm">{product.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                                    
                                    <div className="text-xs text-gray-500 mb-3">
                                        <p>By {product.doctor.name}</p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
                                            <p className="text-xs text-gray-500">
                                                Ships in {product.estimatedDelivery}
                                            </p>
                                        </div>
                                        <button 
                                            disabled={!product.inStock}
                                            className={`px-3 py-2 rounded-lg flex items-center ${product.inStock ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 text-gray-500'}`}
                                        >
                                            <ShoppingCart size={16} className="mr-1" />
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No products found. Try adjusting your filters.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}