import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
    const { isLoggedIn, isLoading, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const AdminControl = () => {
        // console.log("isLoggedIn: ", isLoggedIn);
        // console.log("isLoading: ", isLoading);
        // console.log("Admin: ", user.isAdmin);
        if (isLoggedIn) {
            if (isLoading) return <></>;
            if (user.isAdmin)
                return (
                    <>
                        <NavLink
                            to="/admin"
                            className={`text-gray-200 bg-gray-700  font-semibold hover:bg-gray-800 active:bg-gray-900  dark:bg-white dark:text-black hover:scale-105 px-3 rounded-3xl dark:hover:bg-gray-200  transition-colors duration-300`}
                        >
                            Admin Panel
                        </NavLink>
                    </>
                );
        }
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 transition-colors duration-300 text-lg px-8">
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-3xl font-bold text-gray-900 dark:text-white select-none hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                    KTCS <span className="text-sm">(OPC) Pvt. Ltd.</span>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Contact Us
                    </NavLink>

                    {/* const { user, isLoading, isLoggedIn } = useAuth(); */}

                    {isLoggedIn ? (
                        <>
                            <AdminControl /> {/* Admin Panel */}
                            <NavLink
                                to="/logout"
                                className={`text-gray-200 bg-gray-700  font-semibold hover:bg-gray-800 active:bg-gray-900  dark:bg-white dark:text-black hover:scale-105 px-3 rounded-3xl dark:hover:bg-gray-200  transition-colors duration-300`}
                            >
                                Logout
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                        isActive
                                            ? "font-semibold border-b-2 border-blue-500"
                                            : ""
                                    }`
                                }
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                        isActive
                                            ? "font-semibold border-b-2 border-blue-500"
                                            : ""
                                    }`
                                }
                            >
                                Login
                            </NavLink>
                        </>
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors duration-300"
                    >
                        {isMenuOpen ? (
                            <MdClose className="w-6 h-6" />
                        ) : (
                            <MdMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white dark:bg-gray-800 shadow-lg p-4">
                    <ul className="flex flex-col space-y-4">
                        <NavLink
                            to="/"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                        {isLoggedIn ? (
                            <NavLink
                                to="/logout"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 ${
                                        isActive
                                            ? "font-semibold border-b-2 border-red-500"
                                            : ""
                                    }`
                                }
                            >
                                Logout
                            </NavLink>
                        ) : (
                            <>
                                <NavLink
                                    to="/register"
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                            isActive
                                                ? "font-semibold border-b-2 border-blue-500"
                                                : ""
                                        }`
                                    }
                                >
                                    Register
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                            isActive
                                                ? "font-semibold border-b-2 border-blue-500"
                                                : ""
                                        }`
                                    }
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
