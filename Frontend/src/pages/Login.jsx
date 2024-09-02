import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import LightDarkMode from "../components/UI/LightDarkMode";

function Login() {
    document.title = "Login Page";

    // useNavigate
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { storeTokenInLS, URI } = useAuth();

    // handle input
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    // handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${URI}/myapi/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const responseData = await response.json();

            if (!response.ok) {
                toast.error(responseData.message);
            }
            if (response.ok) {
                // Store Token in Local Storage
                storeTokenInLS(responseData.token);

                setUser({ email: "", password: "" });
                toast.success("Login successful 😎");
                navigate("/");
            }
        } catch (error) {
            console.log("Error While Logging In: ", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img
                        src="https://i.pinimg.com/736x/4a/90/33/4a903338c0e478248153bd8f3f6f6745.jpg"
                        alt="Login"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-3xl font-bold">Login</h1>
                    </div>
                </div>
                <div className="p-8">
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1"
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
                                className="w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50 p-3"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1"
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
                                className="w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50 p-3"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <LightDarkMode />
        </div>
    );
}

export default Login;
