import React, { useState, useMemo } from 'react';
// import { Link } from '@inertiajs/react';
import { 
    Filter, 
    ShoppingCart, 
    Star, 
    ChevronDown, 
    ChevronUp 
} from 'lucide-react';
import Navigation from '../../../../components/naturemeds/naturemeds-nav';
import Footer from '../../../../components/naturemeds/footer';
import ProductImage from '../../../../../assets/images/micheile-henderson-XPCdZXncj64-unsplash.jpg';

// Product type definition
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    rating: number;
    imageUrl: string;
    inStock: boolean;
};

// Sample product data (replace with actual data from backend)
const initialProducts: Product[] = [
    {
        id: 1,
        name: "Organic Turmeric Curcumin",
        description: "High-potency anti-inflammatory supplement with black pepper extract",
        price: 24.99,
        category: "Supplements",
        rating: 4.7,
        imageUrl: ProductImage,
        inStock: true
    },
    {
        id: 2,
        name: "Ashwagandha Stress Relief",
        description: "Adaptogenic herb for stress reduction and mental clarity",
        price: 19.99,
        category: "Herbal Remedies",
        rating: 4.5,
        imageUrl: ProductImage,
        inStock: true
    },
    {
        id: 3,
        name: "Omega-3 Fish Oil Capsules",
        description: "Premium wild-caught fish oil for heart and brain health",
        price: 29.99,
        category: "Supplements",
        rating: 4.8,
        imageUrl: ProductImage,
        inStock: true
    },
    {
        id: 4,
        name: "Probiotic Complex",
        description: "Multi-strain probiotic for digestive and immune health",
        price: 34.99,
        category: "Supplements",
        rating: 4.6,
        imageUrl: ProductImage,
        inStock: false
    },
    // Add more products...
];

export default function ProductsIndex() {
    // State for filtering and sorting
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
    const [showFilters, setShowFilters] = useState(false);

    // Get unique categories
    const categories = Array.from(new Set(initialProducts.map(p => p.category)));

    // Filter and sort products
    const filteredAndSortedProducts = useMemo(() => {
        return initialProducts
            .filter(product => 
                // Search filter
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter(product => 
                // Category filter
                selectedCategories.length === 0 || 
                selectedCategories.includes(product.category)
            )
            .filter(product => 
                // Price range filter
                product.price >= priceRange.min && product.price <= priceRange.max
            )
            .sort((a, b) => {
                // Sorting logic
                switch(sortBy) {
                    case 'price-asc':
                        return a.price - b.price;
                    case 'price-desc':
                        return b.price - a.price;
                    case 'rating':
                    default:
                        return b.rating - a.rating;
                }
            });
    }, [searchTerm, selectedCategories, sortBy, priceRange]);

    // Handle category selection
    const toggleCategory = (category: string) => {
        setSelectedCategories(prev => 
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] dark:text-[#e0e0e0]">
            {/* Navigation */}
            <header className="w-full navigation-bar-all">
                <Navigation />
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">Our Natural Health Products</h1>
                    <p className="text-lg opacity-80">
                        Discover high-quality, scientifically-backed natural supplements 
                        to support your wellness journey.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8 flex flex-col md:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-grow">
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md dark:bg-[#2a2a2a] dark:border-[#3a3a3a]"
                        />
                    </div>

                    {/* Filters Toggle */}
                    <div className="flex items-center">
                        <button 
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-md"
                        >
                            <Filter className="mr-2" />
                            Filters
                            {showFilters ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'rating')}
                            className="px-4 py-2 border rounded-md dark:bg-[#2a2a2a] dark:border-[#3a3a3a]"
                        >
                            <option value="rating">Top Rated</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Expandable Filters */}
                {showFilters && (
                    <div className="mb-8 grid md:grid-cols-3 gap-4 bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-md">
                        {/* Category Filter */}
                        <div>
                            <h3 className="font-semibold mb-2">Categories</h3>
                            {categories.map(category => (
                                <label key={category} className="block">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                        className="mr-2"
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <h3 className="font-semibold mb-2">Price Range</h3>
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="number" 
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange(prev => ({...prev, min: Number(e.target.value)}))}
                                    className="w-24 px-2 py-1 border rounded dark:bg-[#2a2a2a] dark:border-[#3a3a3a]"
                                    placeholder="Min"
                                />
                                <span>-</span>
                                <input 
                                    type="number" 
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({...prev, max: Number(e.target.value)}))}
                                    className="w-24 px-2 py-1 border rounded dark:bg-[#2a2a2a] dark:border-[#3a3a3a]"
                                    placeholder="Max"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Products Grid */}
                {filteredAndSortedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredAndSortedProducts.map(product => (
                            <div 
                                key={product.id} 
                                className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105"
                            >
                                {/* Product Image */}
                                <div className="relative">
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.name} 
                                        className="w-full h-48 object-cover"
                                    />
                                    {!product.inStock && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                                            Out of Stock
                                        </div>
                                    )}
                                </div>

                                {/* Product Details */}
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold text-lg">{product.name}</h3>
                                        <div className="flex items-center text-yellow-500">
                                            <Star size={16} fill="currentColor" className="mr-1" />
                                            <span>{product.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm opacity-70 mb-2">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                                        <button 
                                            disabled={!product.inStock}
                                            className={`
                                                flex items-center px-3 py-2 rounded-md 
                                                ${product.inStock 
                                                    ? 'bg-green-500 text-white hover:bg-green-600' 
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }
                                            `}
                                        >
                                            <ShoppingCart size={16} className="mr-2" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl">No products found matching your criteria.</p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}