import React from 'react';
import { Star, UserCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import DoctorPicture from '../../../assets/images/bruno-rodrigues-279xIHymPYY-unsplash.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const doctors = [
    {
        id: 1,
        name: "Dr. Emily Chen",
        specialty: "Herbal Oncology",
        rating: 4.8,
        image: DoctorPicture,
        verified: true
    },
    {
        id: 2,
        name: "Dr. Raj Patel",
        specialty: "Holistic Medicine",
        rating: 4.9,
        image: DoctorPicture,
        verified: true
    },
    {
        id: 3,
        name: "Dr. Maria Santos",
        specialty: "Herbal Nutrition",
        rating: 4.7,
        image: DoctorPicture,
        verified: true
    },
    {
        id: 4,
        name: "Dr. Alex Johnson",
        specialty: "Herbal Psychiatry",
        rating: 4.6,
        image: DoctorPicture,
        verified: true
    }
];

const FeaturedDoctors = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Featured Herbal Doctors
                </h2>
                
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    className="featured-doctors-swiper"
                >
                    {doctors.map((doctor) => (
                        <SwiperSlide key={doctor.id}>
                            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105">
                                <div className="relative">
                                    <img 
                                        src={doctor.image} 
                                        alt={doctor.name} 
                                        className="w-full h-64 object-cover"
                                    />
                                    {doctor.verified && (
                                        <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                                            <UserCheck size={20} />
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                                    <p className="text-gray-600 mb-4">{doctor.specialty}</p>
                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-400 mr-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    size={20} 
                                                    fill={i < Math.floor(doctor.rating) ? 'currentColor' : 'none'}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-600">({doctor.rating})</span>
                                    </div>
                                    <button className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedDoctors;