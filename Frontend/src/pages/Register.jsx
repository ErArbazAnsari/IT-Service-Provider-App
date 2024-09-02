import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import LightDarkMode from "../components/UI/LightDarkMode";

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const { storeTokenInLS, URI } = useAuth();

    useEffect(() => {
        document.title = "Register Page";
    }, []);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${URI}/myapi/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const responseData = await response.json();

            if (!response.ok) {
                toast.error(responseData.message);
            } else {
                storeTokenInLS(responseData.token);
                setUser({ username: "", email: "", phone: "", password: "" });
                toast.success("Registration successful 😎");
                navigate("/");
            }
        } catch (error) {
            console.log("Error while registering: ", error);
        }
    };

    return (
        <div
            className={`dark:bg-gray-900 min-h-screen transition-colors duration-300 flex items-center justify-center py-20`}
        >
            <div className="container max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="hidden md:flex flex-col justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-10">
                        <h2 className="text-4xl font-bold mb-4">Join Us</h2>
                        <p className="text-lg">
                            Experience the best services with us. Create your
                            account now to get started!
                        </p>
                        <img
                            src="https://i.pinimg.com/736x/4a/90/33/4a903338c0e478248153bd8f3f6f6745.jpg"
                            alt="registration"
                            className="mt-10 rounded-lg shadow-md"
                        />
                    </div>

                    <div className="p-8 md:p-12 bg-gray-100 dark:bg-gray-800">
                        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                            Register
                        </h1>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="form-group">
                                <label
                                    htmlFor="username"
                                    className="block text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter your username"
                                    required
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    required
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInput}
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-200 focus:ring-2 focus:ring-purple-500"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Dark Mode Toggle Button */}
            <LightDarkMode />
        </div>
    );
}

export default Register;
