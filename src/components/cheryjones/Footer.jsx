import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../base/Theme';
import {
    ChevronUp,
    ArrowUpRight,
    Circle,
    MapPin,
    Phone,
    Clock,
    
    Sparkles
} from 'lucide-react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaMediumM, FaDribbble } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState(null);
    const currentYear = new Date().getFullYear();
    
    // Using react-intersection-observer hook for better animation trigger
    const { ref: footerRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    
    // Set visibility when in view
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Handle newsletter subscription
    const handleSubscribe = (e) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            setSubscribeStatus({ success: false, message: 'Please enter a valid email address' });
            return;
        }
        
        // Simulating API call
        setTimeout(() => {
            setSubscribeStatus({ success: true, message: 'Thank you for subscribing!' });
            setEmail('');
            
            // Clear message after 3 seconds
            setTimeout(() => {
                setSubscribeStatus(null);
            }, 3000);
        }, 800);
    };
    
    // Footer links configuration with badge features
    const footerLinks = [
        {
            title: 'Navigation',
            links: [
                { label: 'Home', href: '#' },
                { label: 'About', href: '#' },
                { label: 'Projects', href: '#', badge: 'New' },
                { label: 'Services', href: '#' },
                { label: 'Contact', href: '#' }
            ]
        },
        {
            title: 'Services',
            links: [
                { label: 'UI/UX Design', href: '#' },
                { label: 'Frontend Development', href: '#', badge: 'Popular' },
                { label: 'Brand Identity', href: '#' },
                { label: 'Digital Marketing', href: '#' },
                { label: 'Consultation', href: '#', badge: '24/7' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' },
                { label: 'Licenses', href: '#', badge: 'Updated' }
            ]
        }
    ];
    
    // Contact details
    const contactDetails = [
        { icon: <MapPin size={16} />, text: '123 Innovation Avenue, Tech City, CA 94043' },
        { icon: <Phone size={16} />, text: '+1 (555) 123-4567' },
        { icon: <Clock size={16} />, text: 'Mon-Fri: 9am-5pm PST' }
    ];

    return (
        <footer
            ref={footerRef}
            className={`relative pt-16 pb-8 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'} overflow-hidden`}
        >
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 z-0">
                {/* gradient orbs with animation */}
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-indigo-500/10 dark:to-violet-500/10 blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-500/10 blur-3xl animate-float"></div>
                
                {/* Additional subtle shape */}
                <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-purple-500/5 to-pink-500/5 dark:from-teal-500/5 dark:to-green-500/5 blur-2xl animate-float-slow"></div>
                
                {/* grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Pre-footer CTA Banner */}
                <div className={`mb-16 p-8 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-indigo-950 dark:to-violet-950 shadow-xl transition-all transform duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid-pattern-dense opacity-[0.03] dark:opacity-[0.05]"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to start your project?</h3>
                            <p className="text-gray-600 dark:text-gray-300">Let's create something amazing together.</p>
                        </div>
                        <a href="#contact" className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                            <span>Get in Touch</span>
                            <Sparkles size={16} className="ml-2" />
                        </a>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {/* Top part with logo and sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200 dark:border-gray-800">
                        {/* Logo and Description Column */}
                        <div className="lg:col-span-2">
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

                            <p className="text-gray-600 dark:text-gray-400 my-6 max-w-md">
                                Creating beautiful digital experiences that connect brands with their audiences through
                                thoughtful design and intuitive interfaces.
                            </p>

                            {/* Contact Information */}
                            <div className="mb-6 space-y-3">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                                        <span className="mr-2 text-orange-600 dark:text-indigo-400">{item.icon}</span>
                                        <span className="text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Newsletter Form with validation and feedback */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Stay Updated</h3>
                                <form onSubmit={handleSubscribe} className="space-y-2">
                                    <div className="flex">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email address"
                                            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                                        />
                                        <button 
                                            type="submit" 
                                            className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 text-white font-medium flex items-center justify-center hover:shadow-lg transition-all duration-300"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                    {subscribeStatus && (
                                        <div className={`text-sm ${subscribeStatus.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                            {subscribeStatus.message}
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* Social Media Icons with hover effects */}
                            <div className="flex space-x-2 sm:space-x-3 my-4 md:my-0 flex-wrap">
                                {[
                                    { icon: <FaFacebookF size={16} />, label: "Facebook", href: "https://www.facebook.com/gpowerdev" },
                                    { icon: <FaXTwitter size={16} />, label: "Twitter", href: "https://x.com/godspowerlinne" },
                                    { icon: <FaInstagram size={16} />, label: "Instagram", href: "https://www.instagram.com/godspowerlinne" },
                                    { icon: <FaLinkedinIn size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/godspowerlinne" },
                                    { icon: <FaGithub size={16} />, label: "GitHub", href: "#" },
                                    { icon: <FaDribbble size={16} />, label: "Dribbble", href: "#" },
                                    { icon: <FaMediumM size={16} />, label: "Medium", href: "#" },
                                    { icon: <FaEnvelope size={16} />, label: "Email", href: "mailto:amriccygodspea@gmail.com" }
                                ].map((social, index) => (
                                    <div key={index} className="relative group/tooltip">
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-2 hover:scale-110 hover:-translate-y-1 duration-300 transition-all bg-white/10 dark:bg-indigo-900/30 rounded-full hover:bg-orange-500/20 dark:hover:bg-purple-500/30 text-gray-700 dark:text-gray-300 md:bg-gray-200/50 md:dark:bg-gray-800/50"
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
                        </div>

                        {/* Link Columns with badges */}
                        {footerLinks.map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                                            >
                                                <span>{link.label}</span>
                                                {link.badge && (
                                                    <span className="ml-2 px-1.5 py-0.5 text-xs rounded bg-orange-100 text-orange-800 dark:bg-indigo-900 dark:text-indigo-300">
                                                        {link.badge}
                                                    </span>
                                                )}
                                                <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">&copy; {currentYear} All rights reserved.</span>
                        {/* Scroll to top button with animation */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-indigo-400 transition-colors duration-200"
                        >
                            <span>Back to top</span>
                            <ChevronUp size={16} className="ml-1 group-hover:-translate-y-1 transition-transform duration-200" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Style definitions with animations */}
            <style jsx>{`
                .bg-grid-pattern {
                    background-size: 50px 50px;
                    background-image: linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px),
                                    linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px);
                }
                
                .bg-grid-pattern-dense {
                    background-size: 20px 20px;
                    background-image: linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
                                    linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px);
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.2; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    33% { transform: translateY(-5px) translateX(5px); }
                    66% { transform: translateY(5px) translateX(-5px); }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 12s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
};

export default Footer;