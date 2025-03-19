import { Circle, Moon, SunDim, ChevronDown, Bell, Settings, LogOut, User, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../../base/Theme';

const Navbar = () => {
    // useTheme Context
    const { isDarkMode, toggleTheme } = useTheme();

    // Local State
    const [isMenuOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, text: "New course available: Advanced UX Design", time: "2 hours ago", read: false },
        { id: 2, text: "Someone commented on your post", time: "Yesterday", read: false },
        { id: 3, text: "Your subscription will expire soon", time: "3 days ago", read: false },
    ]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
    
    // Calculate unread notifications
    const unreadCount = notifications.filter(n => !n.read).length;

    // Menu Toggle Functionality
    const toggleMenu = () => {
        setIsOpen(!isMenuOpen);
        // Prevent body scrolling when menu is open
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    };
    
    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMenuOpen) {
                setIsOpen(false);
                document.body.style.overflow = 'auto';
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);
    
    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.notifications-panel') && showNotifications) {
                setShowNotifications(false);
            }
            if (!event.target.closest('.user-dropdown') && showUserDropdown) {
                setShowUserDropdown(false);
            }
            if (!event.target.closest('.courses-dropdown') && showCoursesDropdown) {
                setShowCoursesDropdown(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showNotifications, showUserDropdown, showCoursesDropdown]);
    
    // Mark notifications as read
    const markAsRead = (id) => {
        setNotifications(notifications.map(n => 
            n.id === id ? {...n, read: true} : n
        ));
    };
    
    // Mark all notifications as read
    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({...n, read: true})));
    };

    // Scroll Listener with progress calculation
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update scroll progress indicator
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollTop / scrollHeight;
            
            const progressBar = document.getElementById('scroll-progress');
            if (progressBar) {
                progressBar.style.width = `${scrollProgress * 100}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle User Actions
    const handleLogout = () => {
        alert("Logging out...");
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md text-gray-800 shadow-lg dark:bg-gray-900/95 dark:text-gray-100 dark:shadow-gray-950/50'
                    : 'bg-white/70 backdrop-blur-sm text-gray-800 dark:bg-gray-900/80 dark:backdrop-blur-sm dark:text-gray-100'
            }`}
        >
            {/* Scroll Progress Indicator */}
            <div
                id="scroll-progress"
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-violet-600 z-50"
                style={{ width: '0%' }}
            ></div>

            <nav className="container mx-auto px-4 py-3 flex justify-between items-center relative">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-2 sm:space-x-3 group z-30">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-red-600 dark:from-indigo-600 dark:to-purple-800 relative overflow-hidden group-hover:rotate-180 transition-all duration-500 shadow-lg rounded-lg flex-shrink-0">
                        <Circle
                            size={6}
                            className="absolute top-2 left-2 bg-white dark:bg-purple-300 rounded-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 dark:from-transparent dark:to-purple-900/50"></div>
                    </div>
                    <div className="font-bold flex flex-col relative overflow-hidden group-hover:text-orange-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        <b className="text-sm sm:text-lg md:text-xl font-bold transform transition-transform duration-500 truncate">Chery Jones</b>
                        <small className="text-xs sm:text-sm transform transition-transform duration-500 text-gray-600 dark:text-gray-300 truncate">Digital Media Expert</small>
                        <div className="h-0.5 w-0 group-hover:w-full bg-orange-500 dark:bg-purple-400 transition-all duration-500"></div>
                    </div>
                </a>

                {/* Mobile Menu Button */}
                <div onClick={toggleMenu} className="cursor-pointer z-30 md:hidden">
                    {isMenuOpen ? (
                        <div className="relative">
                            <FaTimes size={20} className="animate-spin-once text-gray-800 dark:text-gray-100" />
                        </div>
                    ) : (
                        <FaBars size={20} className="hover:scale-110 transition-transform duration-200 text-gray-800 dark:text-gray-100" />
                    )}
                </div>

                {/* Main Navigation */}
                <div
                    className={`fixed top-0 right-0 md:static h-screen md:h-auto bg-gradient-to-b from-pink-300 to-red-600 dark:from-indigo-800 dark:to-purple-900 md:bg-none text-white dark:text-gray-100
                        w-full sm:w-64 md:w-auto transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0
                        transition-transform duration-500 ease-in-out flex flex-col md:flex-row justify-start md:justify-end items-center gap-4 lg:gap-6 z-20 pt-20 md:pt-0 pb-12 md:pb-0 px-6 md:px-0`}
                >
                    {/* Courses Dropdown */}
                    <div className="relative courses-dropdown w-fit mx-auto md:w-auto">
                        <button 
                            className="w-full md:w-auto text-base sm:text-lg font-semibold flex items-center justify-between space-x-1 py-2 px-4 md:px-1 hover:text-orange-200 dark:hover:text-purple-200 md:hover:text-orange-500 md:dark:hover:text-purple-400 transition-colors duration-200 md:text-gray-800 md:dark:text-gray-100 rounded-lg md:rounded-none hover:bg-orange-600/20 dark:hover:bg-purple-800/20 md:hover:bg-transparent"
                            onClick={() => setShowCoursesDropdown(!showCoursesDropdown)}
                        >
                            <span>Online Courses</span>
                            <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-300 ${showCoursesDropdown ? 'rotate-180' : ''}`} 
                            />
                        </button>
                        {showCoursesDropdown && (
                            <div
                                className="md:absolute md:top-full md:-left-4 block bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-lg shadow-xl dark:shadow-purple-900/20 p-2 w-full md:w-48 transition-all duration-300 border border-gray-100 dark:border-gray-800 mt-1 md:mt-0 z-50"
                            >
                                {['UX/UI Design', 'Digital Marketing', 'Web Development'].map((course, index) => (
                                    <a 
                                        key={index} 
                                        href="#" 
                                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800/70 rounded-md transition-colors duration-200 flex items-center space-x-2"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-orange-500 dark:bg-purple-500"></div>
                                        <span>{course}</span>
                                    </a>
                                ))}
                                <div className="px-4 py-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                                    <a href="#" className="text-orange-600 dark:text-purple-400 font-medium text-sm hover:underline">
                                        View All Courses →
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Profile Dropdown */}
                    <div className="relative user-dropdown w-full md:w-auto">
                        <div 
                            className="w-fit mx-auto md:w-auto flex items-center justify-between md:justify-start space-x-2 cursor-pointer py-2 px-4 md:px-1 hover:text-orange-200 dark:hover:text-purple-200 md:hover:text-orange-500 md:dark:hover:text-purple-400 transition-colors duration-200 md:text-gray-800 md:dark:text-gray-100 rounded-lg md:rounded-none hover:bg-orange-600/20 dark:hover:bg-purple-800/20 md:hover:bg-transparent"
                            onClick={() => setShowUserDropdown(!showUserDropdown)}
                        >
                            <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-red-600 dark:from-indigo-600 dark:to-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-md">
                                <User size={14} className="text-white" />
                            </div>
                            <span className="text-[14px]">My Account</span>
                            <ChevronDown 
                                size={14} 
                                className={`transition-transform duration-300 ${showUserDropdown ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {showUserDropdown && (
                            <div
                                className="md:absolute md:top-full md:right-0 block bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-lg shadow-xl dark:shadow-purple-900/20 p-2 w-full md:w-48 transition-all duration-300 border border-gray-100 dark:border-gray-800 mt-1 md:mt-0 z-50"
                            >
                                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                                    <p className="font-medium">Chery Jones</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">chery@example.com</p>
                                </div>
                                <a href="/profile" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800/70 rounded-md transition-colors duration-200">
                                    <User size={16} />
                                    <span>Profile</span>
                                </a>
                                <a href="/settings" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800/70 rounded-md transition-colors duration-200">
                                    <Settings size={16} />
                                    <span>Settings</span>
                                </a>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800/70 rounded-md text-red-500 dark:text-red-400 transition-colors duration-200"
                                >
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Social Media Links with tooltips */}
                    <div className="flex space-x-2 sm:space-x-3 my-4 md:my-0 flex-wrap">
                        {[
                            { icon: <FaFacebookF size={16} />, label: "Facebook", href: "https://www.facebook.com/gpowerdev" },
                            { icon: <FaTwitter size={16} />, label: "Twitter", href: "https://x.com/godspowerlinne" },
                            { icon: <FaInstagram size={16} />, label: "Instagram", href: "https://www.instagram.com/godspowerlinne" },
                            { icon: <FaLinkedinIn size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/godspowerlinne" }
                        ].map((social, index) => (
                            <div key={index} className="relative group/tooltip">
                                <a
                                    href={social.href}
                                    className="block p-1.5 hover:scale-110 hover:-translate-y-1 duration-300 transition-all bg-white/10 dark:bg-indigo-900/30 rounded-full hover:bg-orange-500/20 dark:hover:bg-purple-500/30 md:text-gray-700 md:dark:text-gray-300 md:bg-gray-200/50 md:dark:bg-gray-800/50"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover/tooltip:block bg-black/80 dark:bg-white/80 text-white dark:text-black text-xs py-1 px-2 rounded whitespace-nowrap z-50">
                                    {social.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-1 w-14 h-7 rounded-full relative flex items-center bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease-in-out overflow-hidden group/theme"
                        aria-label="Toggle theme"
                    >
                        <span className="sr-only">Toggle theme</span>
                        <div className="absolute inset-0 opacity-0 group-hover/theme:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-400 dark:from-indigo-800 dark:to-purple-700 opacity-50"></div>
                            {isDarkMode && (
                                <>
                                    <Sparkles className="absolute w-2 h-2 text-purple-200 top-1 left-2 opacity-70" />
                                    <Sparkles className="absolute w-1.5 h-1.5 text-purple-200 bottom-1 left-4 opacity-70" />
                                    <Sparkles className="absolute w-1.5 h-1.5 text-purple-200 top-2 left-10 opacity-70" />
                                </>
                            )}
                        </div>
                        <div
                            className="absolute w-5 h-5 rounded-full flex items-center justify-center transform transition-all duration-500 ease-in-out shadow-lg z-10"
                            style={{
                                backgroundColor: isDarkMode ? '#4338ca' : 'white',
                                transform: isDarkMode ? 'translateX(25px)' : 'translateX(2px)',
                            }}
                        >
                            {isDarkMode ? (
                                <Moon className="w-3 h-3 text-purple-200" />
                            ) : (
                                <SunDim className="w-3 h-3 text-orange-500" />
                            )}
                        </div>
                        <span 
                            className="absolute w-full h-full flex items-center justify-between px-1 text-[9px] font-medium" 
                            style={{ opacity: 0.7 }}
                        >
                            <span className="pl-1 text-gray-600 dark:text-gray-400">Light</span>
                            <span className="pr-6 text-gray-400 dark:text-gray-300">Dark</span>
                        </span>
                    </button>

                    {/* Enhanced Notifications */}
                    <div className="relative notifications-panel">
                        <button 
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-1.5 hover:bg-orange-600/20 dark:hover:bg-purple-800/20 md:hover:bg-gray-100 md:dark:hover:bg-gray-800/70 rounded-full transition-colors duration-200 md:text-gray-700 md:dark:text-gray-300"
                            aria-label="Notifications"
                        >
                            <Bell size={18} className={`transition-colors duration-200 ${unreadCount > 0 ? 'text-blue-600 dark:text-purple-400 animate-pulse' : ''}`} />
                            {unreadCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 dark:bg-purple-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {unreadCount}
                                </span>
                            )}
                        </button>
                        
                        {/* Notifications Panel */}
                        {showNotifications && (
                            <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-white dark:bg-gray-900 rounded-lg shadow-xl dark:shadow-purple-900/20 border border-gray-100 dark:border-gray-800 z-50 overflow-hidden">
                                <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-800">
                                    <h3 className="font-medium text-sm">Notifications</h3>
                                    <button 
                                        onClick={markAllAsRead}
                                        className="text-xs text-orange-600 dark:text-purple-400 hover:underline"
                                    >
                                        Mark all as read
                                    </button>
                                </div>
                                
                                <div className="max-h-60 overflow-y-auto">
                                    {notifications.length > 0 ? (
                                        notifications.map(notification => (
                                            <div 
                                                key={notification.id}
                                                className={`p-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors duration-200 ${
                                                    notification.read 
                                                        ? 'opacity-70' 
                                                        : 'bg-orange-50 dark:bg-indigo-900/30'
                                                }`}
                                                onClick={() => markAsRead(notification.id)}
                                            >
                                                <div className="flex items-start gap-2">
                                                    <div className={`w-2 h-2 rounded-full mt-1.5 ${
                                                        notification.read 
                                                            ? 'bg-gray-300 dark:bg-gray-600' 
                                                            : 'bg-orange-500 dark:bg-purple-500'
                                                    }`}></div>
                                                    <div>
                                                        <p className="text-sm text-gray-800 dark:text-gray-200">{notification.text}</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">No notifications</p>
                                    )}
                                </div>
                                
                                <div className="p-2 text-center border-t border-gray-200 dark:border-gray-800">
                                    <a href="#" className="text-xs text-orange-600 dark:text-purple-400 hover:underline">View all notifications</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;