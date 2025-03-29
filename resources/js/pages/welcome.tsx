// import { type SharedData } from '@/types';
import { Head } from '@inertiajs/react';
import Navigation from '../components/naturemeds/naturemeds-nav';                                           
import HeroSection from '../components/naturemeds/hero-section';       
import FeaturedDoctors from '../components/naturemeds/featured-doctors';
import TopProducts from '../components/naturemeds/top-products';
import HowItWorks from '../components/naturemeds/how-it-works';
import Testimonials from '../components/naturemeds/testimonials';
import BlogSection from '../components/naturemeds/blog-section';
import TrustBadges from '../components/naturemeds/trust-badges';   
import Footer from '../components/naturemeds/footer';                                 

export default function Welcome() {
    // Check if the user is authenticated
    const isAuthenticated = true; // Replace this with actual authentication logic

    if (!isAuthenticated) {
        // Redirect to login or another page
        window.location.href = '/login'; // Replace '/login' with your desired route
        return null;
    }
    

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex flex-col items-center bg-[#FDFDFC] w-full h-screen text-[#1b1b18] dark:bg-[#0a0a0a]">
                <header className="w-full navigation-bar-all">

                        <Navigation />

                </header>

                <main className="w-full">
                    <div className="">

                        <HeroSection />
                        <FeaturedDoctors />
                        <TopProducts />
                        <HowItWorks />
                        <Testimonials />
                        <BlogSection />
                        <TrustBadges /> 
                        
                    </div>

                    {/* other contents goes here */}

                </main>

                <Footer />

            </div>
        </>
    );
}
