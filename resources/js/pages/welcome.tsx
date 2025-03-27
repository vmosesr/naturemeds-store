// import { type SharedData } from '@/types';
import { Head, Link } from '@inertiajs/react'; //i have removed "usePage" from the import
import TopDoctors from '../components/naturemeds/top-doctors'; 
import Navigation from '../components/naturemeds/naturemeds-nav'; 
import welcomeImage from "../../assets/images/aspidistra.png";

export default function Welcome() {
    // Removed unused 'auth' variable assignment

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex flex-col items-center bg-[#FDFDFC] w-full h-screen text-[#1b1b18] dark:bg-[#0a0a0a]">
                <header className="w-full navigation-bar-all">
                    <nav className="flex items-center justify-between w-full p-2">
                        <div className="navigation-items">
                            <p className="navigation-text-logo">
                                NATUREMEDS STORE
                            </p>
                            <p className="navigation-text-logo-media-screen">
                                NMS
                            </p>
                        </div>

                        <Navigation />

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
                                    <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="welcome-image">
                                <img src={welcomeImage} alt="Welcome Image" />
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <section className="py-12 bg-gray-100">
                        <div className="container mx-auto about-section">
                            <h2 className="about-title">About NatureMeds</h2>
                            <div className="about-content">
                                <p className="about-text">
                                    NatureMeds Store is an online platform designed to connect natural herbal doctors 
                                    across Africa, allowing users to compare services, purchase herbal products, and 
                                    access shipping services.
                                </p>
                            </div>
                            <div className="auth-links-home">
                                <Link href={route('register')}
                                    className="inline-block rounded-sm px-5 py-2 text-sm leading-normal text-black auth-links">
                                    Get started
                                </Link>
                                <Link href={route('login')}
                                    className="inline-block rounded-sm px-5 py-2 text-sm leading-normal text-black _auth-links">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Include the TopDoctors Component */}
                    <TopDoctors />

                </main>
            </div>
        </>
    );
}
