import { MapPin, Stethoscope, Leaf, Filter } from 'lucide-react';
import { useState, useRef } from 'react';
import HeroVideo from '../../../assets/images/3197629-hd_1920_1080_25fps.mp4';

const HeroSection = () => {
    const [searchType, setSearchType] = useState('doctors');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const searchTypes = [
        { 
            id: 'doctors', 
            label: 'Doctors by Specialty', 
            icon: <Stethoscope className="text-green-600" />,
            placeholderText: 'Search doctors by specialty...'
        },
        { 
            id: 'herbs', 
            label: 'Herbs by Ailment', 
            icon: <Leaf className="text-green-600" />,
            placeholderText: 'Search herbs for specific conditions...'
        },
        { 
            id: 'location', 
            label: 'Location-Based', 
            icon: <MapPin className="text-green-600" />,
            placeholderText: 'Search doctors near you...'
        }
    ];

    const handleSearchTypeChange = (type: string) => {
        setSearchType(type);
        setIsFilterOpen(false);
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
            {/* Animated Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
            >
                <source src={HeroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                {/* Tagline */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    Global Healing, <span className="text-green-400">Naturally</span>.
                </h1>

                {/* Smart Search Section */}
                <div className="w-full max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        {/* Search Input */}
                        <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                            <div className="relative flex-grow">
                                <input 
                                    ref={searchInputRef}
                                    type="text" 
                                    placeholder={searchTypes.find(t => t.id === searchType)?.placeholderText || ''}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-4 pr-12 py-3 text-gray-800 focus:outline-none"
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    {searchTypes.find(t => t.id === searchType)?.icon || null}
                                </div>
                            </div>
                            
                            {/* Filter Dropdown Toggle */}
                            <button 
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="px-4 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors"
                            >
                                <Filter size={20} />
                            </button>
                        </div>

                        {/* Search Type Dropdown */}
                        {isFilterOpen && (
                            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg mt-1 z-20">
                                {searchTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => handleSearchTypeChange(type.id)}
                                        className={`w-full flex items-center p-3 hover:bg-green-50 ${
                                            searchType === type.id 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'text-gray-700'
                                        }`}
                                    >
                                        {type.icon}
                                        <span className="ml-3">{type.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors">
                        Find a Doctor
                    </button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                        Shop Herbs
                    </button>
                    <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors">
                        Book a Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;