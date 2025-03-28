import React, { useState } from 'react';
import { Quote, Play } from 'lucide-react';
import Thumbnail from '../../../assets/images/rosario-janza-LHI32I1iodw-unsplash.jpg';


const testimonials = [
    {
        id: 1,
        name: "Sarah Thompson",
        condition: "Chronic Stress",
        quote: "NatureMeds transformed my approach to wellness. The herbal treatments helped me manage stress naturally and effectively.",
        videoThumbnail: Thumbnail,
        beforeAfter: {
            before: "Constant anxiety and sleepless nights",
            after: "Calm, balanced, and more energetic"
        }
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        condition: "Joint Pain",
        quote: "After years of traditional treatments, I found relief through NatureMeds' holistic approach. The herbal supplements changed my life.",
        videoThumbnail: Thumbnail,
        beforeAfter: {
            before: "Chronic joint pain limiting mobility",
            after: "Increased flexibility and reduced inflammation"
        }
    },
    {
        id: 3,
        name: "Elena Petrova",
        condition: "Digestive Health",
        quote: "The personalized herbal consultation helped me understand and heal my digestive issues completely naturally.",
        videoThumbnail: Thumbnail,
        beforeAfter: {
            before: "Constant digestive discomfort",
            after: "Balanced gut health and improved nutrition"
        }
    }
];

const Testimonials = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[number] | null>(null);

    const openVideoModal = (testimonial: typeof testimonials[number]) => {
        setSelectedTestimonial(testimonial);
    };

    const closeVideoModal = () => {
        setSelectedTestimonial(null);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Real Stories, Real Healing
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            className="bg-white rounded-xl shadow-lg p-6 relative transform transition-all hover:scale-105"
                        >
                            <Quote className="absolute top-4 left-4 text-green-600 opacity-20" size={48} />
                            
                            <div className="relative mb-6">
                                <img 
                                    src={testimonial.videoThumbnail} 
                                    alt={`${testimonial.name}'s Testimonial`}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <button 
                                    onClick={() => openVideoModal(testimonial)}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full hover:bg-white/90 transition-colors"
                                >
                                    <Play className="text-green-600" size={32} />
                                </button>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                            <p className="text-gray-600 mb-4">{testimonial.condition}</p>
                            
                            <div className="mb-4">
                                <p className="italic text-gray-700">"{testimonial.quote}"</p>
                            </div>
                            
                            <div className="border-t pt-4">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="font-semibold text-red-600">Before:</span>
                                        <p className="text-sm text-gray-600">{testimonial.beforeAfter.before}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-semibold text-green-600">After:</span>
                                        <p className="text-sm text-gray-600">{testimonial.beforeAfter.after}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Modal (placeholder) */}
                {selectedTestimonial && (
                    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-xl max-w-2xl w-full relative">
                            <button 
                                onClick={closeVideoModal}
                                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            >
                                Close
                            </button>
                            <h3 className="text-2xl font-bold mb-4">{selectedTestimonial.name}'s Story</h3>
                            <div className="bg-gray-200 h-96 flex items-center justify-center">
                                Video Placeholder
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;