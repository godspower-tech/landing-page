import { Circle, Moon, SunDim } from 'lucide-react';
import React, { useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter, FaUserCircle } from 'react-icons/fa';
import { useTheme } from '../../base/Theme';

const Navbar = () => {
    // useTheme Context
    const { isDarkMode, toggleTheme } = useTheme();

    // Local State
    const [isMenuOpen, setIsOpen] = useState(false);

    // Menu Toggle Functionality
    const toggleMenu = () => setIsOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 w-full shadow-md p-4 z-10 bg-[#ff744a] text-black dark:bg-black dark:text-white">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-2">
                    <span className="w-12 h-12 bg-black dark:bg-[#df5c34] block rotate-180 p-2">
                        <Circle
                            size={8}
                            className="bg-[#ff744a] dark:bg-[#000000] rounded-full text-[#ff744a] dark:text-[#000000]"
                        />
                    </span>
                    <div className="font-bold flex flex-col">
                        <b className="md:text-[24px] font-bold">Chery Jones</b>
                        <small className="md:text-[14px]">Digital Media Expert</small>
                    </div>
                </a>

                {/* Hamburger Icon */}
                <div onClick={toggleMenu} className="cursor-pointer z-20 lg:hidden">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>

                {/* Sliding Menu */}
                <div
                    className={`fixed top-0 right-0 lg:static h-full lg:h-auto bg-[#e16b47] dark:bg-[#061316] lg:bg-inherit dark:lg:bg-inherit text-black dark:text-white
                        w-full md:w-[300px] lg:translate-x-0 lg:w-auto transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                        transition-transform duration-500 ease-in-out flex flex-col lg:flex-row justify-center items-center gap-8 z-10`}
                >
                    <button className="text-[18px] font-semibold">Online Courses</button>
                    <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 hover:-translate-y-[2px] duration-300 transition-all">
                        <FaUserCircle size={20} />
                        <span className="text-[14px]">Sign In</span>
                    </div>
                    <div className="flex space-x-6 flex-wrap">
                        <a
                            href="https://www.facebook.com/gpowerdev"
                            className="hover:scale-105 hover:-translate-y-[2px] duration-300 transition-all"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://x.com/godspowerlinne"
                            className="hover:scale-105 hover:-translate-y-[2px] duration-300 transition-all"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/godspowerlinne"
                            className="hover:scale-105 hover:-translate-y-[2px] duration-300 transition-all"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/godspowerlinnea"
                            className="hover:scale-105 hover:-translate-y-[2px] duration-300 transition-all"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                    {/* Dark Theme Toggle */}
                    <button onClick={toggleTheme} className="p-2 w-20 h-10 rounded-full relative flex items-center transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700" >
                        <div className="absolute w-8 h-8 rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out shadow-md" style={{ backgroundColor: isDarkMode ? '#334155' : 'white', transform: isDarkMode ? 'translateX(32px)' : 'translateX(-5px)' }} >
                            {isDarkMode ? (
                                <Moon className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <SunDim className="w-5 h-5 text-gray-400" />
                            )}
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
