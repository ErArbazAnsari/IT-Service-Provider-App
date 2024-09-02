import React from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import LightDarkMode from "../components/UI/LightDarkMode";

function Logout() {
    document.title = "Logout";
    const { LogoutUser } = useAuth();

    React.useEffect(() => {
        if (localStorage.getItem("token")) {
            LogoutUser();
            toast.success("Logout Successfully");
        }
    }, [LogoutUser]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    You Have Been Logged Out
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Thank you for using our service. You have successfully
                    logged out.
                </p>
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <LightDarkMode />
        </div>
    );
}

export default Logout;
