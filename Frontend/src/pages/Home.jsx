import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SwipeableDrawer, Button } from "@mui/material";
import LightDarkMode from "../components/UI/LightDarkMode";

// Dummy data
const featuredServices = [
    {
        title: "Sale Laptop/Desktop",
        description:
            "Expert sale and purchase of laptops and desktops with warranty.",
        icon: "💻",
    },
    {
        title: "Provide IT Support",
        description:
            "Comprehensive IT support for small and medium-sized businesses.",
        icon: "🔧", // You can use any icon or image here
    },

    {
        title: "Network Solutions",
        description: "Customized network solutions for homes and offices.",
        icon: "🌐",
    },
    {
        title: "Computer Repairing",
        description:
            "Reliable repair services for laptops, desktops, and more.",
        icon: "🖥️",
    },
];

// Dummy data
const featuredProducts = [
    {
        title: "Complete IT Support Package",
        description:
            "Comprehensive IT support for small businesses, including software installation, network setup, and regular maintenance.",
        price: "$499.99",
        image: "/Featured_Products/support.png",
    },
    {
        title: "Website Development",
        description:
            "Professional website development services tailored to your business needs, with responsive design and SEO optimization.",
        price: "$999.99",
        image: "/Featured_Products/development.png",
    },
    {
        title: "Cloud Backup Solutions",
        description:
            "Secure cloud backup solutions to keep your business data safe and accessible from anywhere.to keep your business data safe and accessible from anywhere.",
        price: "$299.99",
        image: "/Featured_Products/cloud.png",
    },
    {
        title: "Network Security Services",
        description:
            "Advanced network security services to protect your business from cyber threats and ensure data integrity. ensure data integrity",
        price: "$399.99",
        image: "/Featured_Products/networking.png",
    },
    {
        title: "Hardware Installation",
        description:
            "Expert installation of hardware components, including servers, workstations, and networking devices. ensure data integrity ensure data integrity",
        price: "$199.99",
        image: "/Featured_Products/repairing.png",
    },
];

const recentUpdates = [
    "New cloud services launched this month.",
    "Cybersecurity enhancements for all clients.",
    "Special offers on IT support for small businesses.",
    "Launched a new customer portal for easy service management.",
    "Expanded partnership with top hardware vendors.",
    "Upgraded network solutions for higher reliability.",
    "Introduced 24/7 customer support for all service plans.",
    "New data backup solutions now available with enhanced security.",
    "Completed 100+ successful IT support cases this quarter.",
];

function Home() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div
            className={`container mx-auto min-h-screen transition-colors duration-300 lg:my-8 md:my-0 sm:my-0`}
        >
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <Carousel
                    showArrows={true}
                    showIndicators={true}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                    className="carousel-container overflow-hidden lg:rounded-2xl md:rounded-2xl bg-transparent md:mx-10 sm:mx-10"
                >
                    {/* Slide 1 */}
                    <div className="relative text-white h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-70 lg:rounded-2xl md:rounded-2xl overflow-hidden">
                            <img
                                src="/hero1.jpg"
                                alt="IT Solutions Partner Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4">
                            Your IT Solutions Partner
                        </p>
                    </div>

                    {/* Slide 2 */}
                    <div className="relative text-white h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-70 lg:rounded-2xl md:rounded-2xl overflow-hidden">
                            <img
                                src="/hero2.png"
                                alt="Expert IT Support & Services Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4">
                            Expert IT Support & Services
                        </p>
                    </div>

                    {/* Slide 3 */}
                    <div className="relative text-white h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-70 lg:rounded-2xl md:rounded-2xl overflow-hidden">
                            <img
                                src="/hero3.png"
                                alt="Securing Digital Future Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4">
                            Securing Your Digital Future
                        </p>
                    </div>
                </Carousel>
            </section>

            {/* Featured Products */}
            <section className="pb-16 pt-8 px-48 dark:bg-black">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                        Featured Products
                    </h2>
                    <div className="flex justify-center gap-8">
                        <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full sm:w-1/3 hover:scale-105 transition duration-300 cursor-pointer">
                            <img
                                src="/Products/apple2.png"
                                alt="Product 1"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">
                                Apple MacBook Air
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                $99.99
                            </p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full sm:w-1/3 hover:scale-105 transition duration-300 cursor-pointer">
                            <img
                                src="/Products/apple.png"
                                alt="Product 2"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">
                                MacBook Pro M3
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                $129.99
                            </p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full sm:w-1/3 hover:scale-105 transition duration-300 cursor-pointer">
                            <img
                                src="/Products/asus.png"
                                alt="Product 3"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">
                                Asus ZenBook
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                $149.99
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <a
                            href="/products"
                            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
                        >
                            View More Products
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Services Section */}
            <section className="pb-16 pt-8 px-48">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 dark:text-white">
                        Our Featured Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:text-white"
                            >
                                <div className="text-5xl mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <a
                            href="/services"
                            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
                        >
                            See More Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Recent Updates Section */}
            <section className="py-16 pt-8 px-20 dark:bg-black ">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 dark:text-white text-gray-800">
                        Recent Updates
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-48">
                        {recentUpdates.map((update, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <h3 className="text-2xl font-semibold mb-2 dark:text-white text-gray-900">
                                    Update {index + 1}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                    {update}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="pb-8 pt-8 px-96  dark:bg-black">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                        Customer Reviews
                    </h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <textarea
                            placeholder="Write your review..."
                            className="w-full p-4 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                            rows="4"
                        ></textarea>
                        <button
                            className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 px-6 py-3 rounded-lg font-semibold transition-all"
                            aria-label="Submit Review"
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            </section>

            {/* Reviews & Ratings Section */}
            <section className="pb-16 px-96">
                <div className="container mx-auto text-center">
                    <Button
                        onClick={() => setDrawerOpen(true)}
                        className="mb-8 bg-blue-500 text-white hover:bg-blue-600 dark:text-white dark:hover:bg-blue-500 hover:text-white"
                    >
                        Check Customer Reviews
                    </Button>
                    <SwipeableDrawer
                        anchor="bottom"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        onOpen={() => setDrawerOpen(true)}
                    >
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-4 text-center">
                                Customer Reviews
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mx-10">
                                {featuredProducts.map((product, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-40 object-cover rounded-md mb-4"
                                        />
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-400 mb-2">
                                                {product.description}
                                            </p>
                                            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                                {product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwipeableDrawer>
                </div>
            </section>

            {/* Light And Dark Mode Component*/}
            <LightDarkMode />
        </div>
    );
}

export default Home;
