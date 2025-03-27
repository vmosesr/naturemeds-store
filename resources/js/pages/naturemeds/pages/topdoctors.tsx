import { useRef, useEffect } from 'react';
import welcomeImage from "../../../../assets/images/aspidistra.png";


const doctors = [
    { image: welcomeImage, name: "Dr. John Doe", specialty: "Herbal Specialist", country: "Kenya", clinic: "Green Nature Remedies" },
    { image: welcomeImage, name: "Dr. Amina Yusuf", specialty: "Traditional Healer", country: "Nigeria", clinic: "Healing Roots Pharmacy" },
    { image: welcomeImage, name: "Dr. Kwame Mensah", specialty: "Herbal Pharmacist", country: "Ghana", clinic: "Nature's Cure Hub" },
    { image: welcomeImage, name: "Dr. Fatima Bello", specialty: "Ayurvedic Specialist", country: "South Africa", clinic: "Organic Wellness Clinic" },
    { image: welcomeImage, name: "Dr. Samuel Okoro", specialty: "Herbal Researcher", country: "Uganda", clinic: "Nature's Science Lab" },
    { image: welcomeImage, name: "Dr. Linda Toure", specialty: "Holistic Healer", country: "Tanzania", clinic: "Serenity Herbal Center" },
    { image: welcomeImage, name: "Dr. James Njoroge", specialty: "Alternative Medicine", country: "Ethiopia", clinic: "Earth's Cure Hospital" },
    { image: welcomeImage, name: "Dr. Mariam Keita", specialty: "Naturopathic Doctor", country: "Senegal", clinic: "Vitality Herbal Care" },
    { image: welcomeImage, name: "Dr. Hassan Adamu", specialty: "Homeopathy Expert", country: "Zimbabwe", clinic: "Holistic Healing Haven" },
    { image: welcomeImage, name: "Dr. Paul Odongo", specialty: "Ethnobotanist", country: "Rwanda", clinic: "Nature’s Miracle Pharmacy" },
];

export default function TopDoctors() {
    const doctorListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = doctorListRef.current;
        if (scrollContainer) {
            let scrollAmount = 0;
            const scrollSpeed = 1;

            const scroll = () => {
                if (scrollContainer) {
                    scrollAmount += scrollSpeed;
                    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                        scrollAmount = 0; // Reset scroll when it reaches half
                    }
                    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
                }
                requestAnimationFrame(scroll);
            };

            scroll();
        }
    }, []);

    return (
        <section className="py-12 bg-gray-100 top-doctors-section overflow-hidden">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Top Doctors</h2>

                {/* Scrolling Wrapper */}
                <div className="relative w-full overflow-hidden">
                    <div
                        ref={doctorListRef}
                        className="flex gap-4 min-w-max animate-scroll"
                        style={{ width: "2000px" }} // Ensure wide enough for seamless scrolling
                    >
                        {[...doctors, ...doctors].map((doctor, index) => (
                            <div
                                key={index}
                                className="doctor-card w-[200px] h-[235px] flex-shrink-0 p-3 shadow-lg rounded-lg bg-white"
                            >
                                <img 
                                    src={doctor.image} 
                                    alt={doctor.name} 
                                    className="w-full h-24 object-cover rounded"
                                    onError={(e) => (e.currentTarget.src = "/images/default-doctor.png")} // Fallback image
                                />
                                <h3 className="text-md font-semibold mt-2">{doctor.name}</h3>
                                <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                                <p className="text-gray-500 text-xs">{doctor.country}</p>
                                <p className="text-gray-700 text-xs font-bold">{doctor.clinic}</p>
                                <button className="mt-2 px-3 py-1 bg-green-500 text-white text-xs rounded-lg">
                                    Contact
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
