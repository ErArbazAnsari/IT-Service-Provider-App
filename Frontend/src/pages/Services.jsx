import React from "react";
import LightDarkMode from "../components/UI/LightDarkMode";
import { useAuth } from "../store/auth";

function Services() {
    document.title = "Services";

    const { URI } = useAuth();

    const [services, setServices] = React.useState([]);

    // Fetch data from the backend
    const fetchServices = async () => {
        try {
            const response = await fetch(`${URI}/myapi/data/service`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                console.log("Error while getting data from backend");
            }
            const data = await response.json();
            setServices(data.allServices || []);
        } catch (error) {
            console.log("Error found while fetching services", error);
        }
    };

    React.useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div
            className={`dark:bg-gray-900 min-h-screen transition-colors duration-300 py-28`}
        >
            <section className="services-section  dark:bg-gray-900 max-w-fit min-h-screen">
                <main className="container mx-auto sm:px-12 lg:px-40">
                    <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
                        Our Services
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                key={service._id}
                            >
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src={"/services.png"}
                                        alt={service.service}
                                        className="h-16 w-16 bg-slate-50 rounded-full"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                    {service.service}
                                </h2>
                                <h3 className="text-blue-500 font-medium mb-4">
                                    {service.provider}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </main>
            </section>

            {/* Dark Mode Toggle Button */}
            <LightDarkMode />
        </div>
    );
}

export default Services;
