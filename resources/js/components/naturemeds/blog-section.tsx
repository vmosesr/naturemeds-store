import React from 'react';
import { ArrowRight, Leaf, Stethoscope, Beaker } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Herbal Trends of 2024",
        category: "Herbal Trends",
        icon: <Leaf className="text-green-600" size={32} />,
        excerpt: "Discover the most innovative herbal supplements and wellness trends revolutionizing natural health this year.",
        date: "March 15, 2024"
    },
    {
        id: 2,
        title: "Dr. Emily Chen: Pioneering Herbal Oncology",
        category: "Doctor Spotlights",
        icon: <Stethoscope className="text-green-600" size={32} />,
        excerpt: "An exclusive interview with Dr. Chen about her groundbreaking approaches to integrative cancer treatment.",
        date: "February 22, 2024"
    },
    {
        id: 3,
        title: "Breakthrough Research in Herbal Medicine",
        category: "Research Updates",
        icon: <Beaker className="text-green-600" size={32} />,
        excerpt: "Latest scientific studies reveal promising results for natural compounds in treating chronic conditions.",
        date: "January 10, 2024"
    }
];

const BlogSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Herbal Insights & Updates
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="mr-4 bg-green-50 p-3 rounded-full">
                                        {post.icon}
                                    </div>
                                    <span className="text-green-600 font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold mb-4 text-gray-800">
                                    {post.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-4">
                                    {post.excerpt}
                                </p>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">
                                        {post.date}
                                    </span>
                                    
                                    <button className="text-green-600 hover:text-green-800 flex items-center">
                                        Read More
                                        <ArrowRight className="ml-2" size={20} />
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

export default BlogSection;