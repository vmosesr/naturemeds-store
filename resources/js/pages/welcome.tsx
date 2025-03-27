import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import welcomeImage from "../../assets/images/aspidistra.png";


export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex flex-col items-center bg-[#FDFDFC] w-full h-screen text-[#1b1b18] dark:bg-[#0a0a0a]">
                <header className="w-full navigation-bar-all">
                    <nav className="flex items-center justify-between w-full p-4">
                        <div className="navigation-items">
                            <p className="navigation-text-logo">
                                NATUREMEDS STORE
                            </p>
                            <p className="navigation-text-logo-media-screen">
                                NMS
                            </p>
                        </div>
                        <div className="navigation-items flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="w-full">
                    
                    <div className="welcome-section">
                        <p className="welcome-head text-0.5xl">MORE SHIPPED</p>

                        <div className="welcome-contents-2">
                            <div className="welcome-text">
                                <div className="product-details mt-6">
                                    <h2 className="text-2xl font-semibold">Medicine Name</h2>
                                    <p className="text-lg text-gray-600">Description of the medicine goes here.</p>
                                    <p className="text-xl font-bold mt-2">Price: $25.00</p>
                                    <div className="ratings mt-2">
                                        <span className="text-warning">★★★★☆</span>
                                        <span className="text-muted ms-2">(120 reviews)</span>
                                    </div>
                                    <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:pointer">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="welcome-image">
                                <img src={welcomeImage} alt="Welcome Image" />
                            </div>
                        </div>
                    </div>

                    <section className="py-12 bg-gray-100">
                        <div className="container mx-auto about-section">
                            <h2 className="about-title">About NatureMeds</h2>
                            <div className="about-content">
                                <p className="about-text">
                                    NatureMeds Store is an online platform designed to connect natural herbal doctors 
                                    across Africa, allowing users to compare services, purchase herbal products, and 
                                    access shipping services. This platform aims to bridge the gap between herbal 
                                    practitioners and customers seeking natural remedies, ensuring authenticity, 
                                    convenience, and accessibility.
                                </p>
                            </div>
                        </div>
                    </section>

                     {/* Top Doctors Section */}
                     <section className="py-12 bg-white">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Top Doctors</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                
                                {/* Doctor 1 */}
                                <div className="doctor-card p-4 shadow-lg rounded-lg">
                                    <img src={welcomeImage} alt="Dr. John Doe" className="w-full h-48 object-cover rounded" />
                                    <h3 className="text-xl font-semibold mt-3">Dr. John Doe</h3>
                                    <p className="text-gray-600">Herbal Specialist</p>
                                    <p className="text-gray-500">Kenya</p>
                                    <p className="text-gray-700 font-bold">Green Nature Remedies</p>
                                    <button className="contact-btn mt-3 px-4 py-2 bg-green-500 text-white rounded-lg">Contact</button>
                                </div>

                                {/* Doctor 2 */}
                                <div className="doctor-card p-4 shadow-lg rounded-lg">
                                    <img src={welcomeImage} alt="Dr. Amina Yusuf" className="w-full h-48 object-cover rounded" />
                                    <h3 className="text-xl font-semibold mt-3">Dr. Amina Yusuf</h3>
                                    <p className="text-gray-600">Traditional Healer</p>
                                    <p className="text-gray-500">Nigeria</p>
                                    <p className="text-gray-700 font-bold">Healing Roots Pharmacy</p>
                                    <button className="contact-btn mt-3 px-4 py-2 bg-green-500 text-white rounded-lg">Contact</button>
                                </div>

                                {/* Doctor 3 */}
                                <div className="doctor-card p-4 shadow-lg rounded-lg">
                                    <img src={welcomeImage} alt="Dr. Kwame Mensah" className="w-full h-48 object-cover rounded" />
                                    <h3 className="text-xl font-semibold mt-3">Dr. Kwame Mensah</h3>
                                    <p className="text-gray-600">Herbal Pharmacist</p>
                                    <p className="text-gray-500">Ghana</p>
                                    <p className="text-gray-700 font-bold">Nature's Cure Hub</p>
                                    <button className="contact-btn mt-3 px-4 py-2 bg-green-500 text-white rounded-lg">Contact</button>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>


            </div>

        </>
    );
}
