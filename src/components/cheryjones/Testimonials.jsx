import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../base/Theme';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Star,
  ArrowRight,
  Sparkles,
  BadgeCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ testimonial, isActive, direction }) => {
  const { isDarkMode } = useTheme();
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute top-0 left-0 w-full h-full"
    >
      <div className="relative h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl dark:shadow-2xl dark:shadow-violet-950/10 border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-indigo-600/10 dark:to-violet-600/10 rounded-full blur-3xl"></div>
        
        {/* Dynamic background shape */}
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-orange-500/5 to-yellow-500/5 dark:from-indigo-500/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative">
          {/* Premium badge for top clients */}
          {testimonial.isPremium && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 dark:from-indigo-500 dark:to-purple-600 rounded-full p-0.5 z-10">
              <div className="flex items-center space-x-1 bg-white dark:bg-gray-900 rounded-full px-3 py-1">
                <Sparkles size={14} className="text-amber-500 dark:text-indigo-400" />
                <span className="text-xs font-medium text-gray-800 dark:text-gray-200">Premium Client</span>
              </div>
            </div>
          )}
          
          {/* Rating Stars with animation */}
          <div className="flex mb-6 text-yellow-400 dark:text-amber-300">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <Star
                  size={22}
                  fill={i < testimonial.rating ? "currentColor" : "none"}
                  className={i < testimonial.rating ? "" : "text-gray-300 dark:text-gray-600"}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Quote Text with animated reveal */}
          <motion.blockquote 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-8 leading-relaxed relative"
          >
            <div className="absolute -left-6 top-0 text-orange-200 dark:text-indigo-900 opacity-50">
              <Quote size={30} />
            </div>
            
            <div className="pl-4 border-l-4 border-orange-200 dark:border-indigo-800 italic">
              {testimonial.quote}
            </div>
          </motion.blockquote>
          
          {/* Project details if available */}
          {testimonial.project && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 p-3 rounded-lg bg-orange-50 dark:bg-indigo-950/50 border border-orange-100 dark:border-indigo-900"
            >
              <div className="text-sm text-orange-700 dark:text-indigo-300 font-medium mb-1">
                Project: {testimonial.project.name}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {testimonial.project.description}
              </div>
            </motion.div>
          )}
          
          {/* Author Info with animation */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  {/* Avatar placeholder with subtle animation */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-lg font-medium text-gray-500 dark:text-gray-400 relative">
                    <span className="relative z-10">{testimonial.author.charAt(0)}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                {testimonial.verified && (
                  <BadgeCheck size={16} className="ml-1 text-blue-500 dark:text-blue-400" />
                )}
              </div>
              <div className="text-sm text-orange-600 dark:text-indigo-400">{testimonial.position}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsRef = useRef(null);
  const containerRef = useRef(null);

  // Initialize visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Modernized testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Chery transformed our brand identity with exceptional design work. Her ability to understand our vision and translate it into a cohesive digital experience exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Innovate Solutions",
      avatar: null, // placeholder
      rating: 5,
      verified: true,
      isPremium: true,
      project: {
        name: "Website Rebrand & UI Redesign",
        description: "Complete brand overhaul with responsive design system implementation"
      }
    },
    {
      id: 2,
      quote: "Working with Chery was a game-changer for our website redesign. Her technical expertise combined with creative vision delivered a product that increased our conversion rates by 45%.",
      author: "Michael Chen",
      position: "CEO",
      company: "TechWave",
      avatar: null, // placeholder
      rating: 5,
      verified: true,
      isPremium: false,
      project: {
        name: "E-commerce Platform Redesign",
        description: "User experience optimization focused on conversion rate improvement"
      }
    },
    {
      id: 3,
      quote: "Chery's approach to UI/UX design is methodical yet creative. She delivered a user interface that not only looks stunning but also significantly improved our user engagement metrics.",
      author: "Olivia Rodriguez",
      position: "Product Manager",
      company: "Digital Platforms Inc.",
      avatar: null, // placeholder
      rating: 5,
      verified: true,
      project: null
    },
    {
      id: 4,
      quote: "The attention to detail and thoughtful UX improvements Chery implemented transformed our app from functional to exceptional. User retention increased by 38% within three months of launch.",
      author: "James Wilson",
      position: "CTO",
      company: "AppNova",
      avatar: null,
      rating: 5,
      verified: true,
      isPremium: true,
      project: {
        name: "Mobile App Redesign",
        description: "User experience optimization with focus on retention metrics"
      }
    }
  ];

  // Navigation handlers
  const handlePrev = () => {
    setIsPaused(true);
    setDirection(-1);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    // Resume auto-rotation after manual navigation
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNext = () => {
    setIsPaused(true);
    setDirection(1);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    
    // Resume auto-rotation after manual navigation
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Mouse enter/leave handlers for auto-rotation pause
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      ref={testimonialsRef}
      className={`relative py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'} overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs with animation */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-indigo-500/10 dark:to-violet-500/10 blur-3xl transform animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-500/10 blur-3xl transform animate-float-delay"></div>
        
        {/* Subtle moving particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>

        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-full bg-orange-100 dark:bg-indigo-950/70 px-4 py-1.5 text-sm font-medium text-orange-800 dark:text-indigo-300 mb-4 border border-orange-200 dark:border-indigo-800 shadow-sm"
          >
            <MessageSquare size={16} className="mr-1.5 text-orange-600 dark:text-indigo-400" />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            What People
            <motion.span 
              initial={{ width: 0 }}
              animate={isVisible ? { width: "auto" } : { width: 0 }}
              className="relative ml-2 inline-block overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-orange-600 to-red-600 dark:from-indigo-500 dark:to-violet-500 bg-clip-text text-transparent whitespace-nowrap">Say About My Work</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M1 6C60.5 6 114 1 169.5 1C225 1 300 6 300 6"
                  stroke={isDarkMode ? "#6d28d9" : "#F97316"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </motion.span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            Client feedback that reflects my commitment to delivering exceptional digital experiences
            that drive real results and exceed expectations.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          {/* Large Quote Icon with motion */}
          <motion.div 
            initial={{ opacity: 0, rotate: -20 }}
            animate={isVisible ? { opacity: 0.7, rotate: 0 } : { opacity: 0, rotate: -20 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -top-10 -left-10 text-orange-200 dark:text-indigo-900 z-10"
          >
            <Quote size={80} />
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute -top-6 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 dark:from-indigo-500 dark:to-violet-500"
              initial={{ width: 0 }}
              animate={{ width: isPaused ? "100%" : "0%" }}
              transition={isPaused ? { duration: 0 } : { duration: 8, ease: "linear" }}
            />
          </div>

          {/* Testimonial Cards Container */}
          <div className="relative h-[400px] md:h-[440px] bg-white/0 rounded-2xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <TestimonialCard 
                key={testimonials[activeTestimonial].id} 
                testimonial={testimonials[activeTestimonial]} 
                isActive={true}
                direction={direction}
              />
            </AnimatePresence>
            
            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex space-x-3 z-20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-md"
              >
                <ChevronLeft size={22} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 dark:from-indigo-500 dark:to-violet-600 text-white hover:from-orange-600 hover:to-red-700 dark:hover:from-indigo-600 dark:hover:to-violet-700 transition-colors shadow-md"
              >
                <ChevronRight size={22} />
              </motion.button>
            </div>
          </div>

          {/* Indicators with Animation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setDirection(index > activeTestimonial ? 1 : -1);
                  setActiveTestimonial(index);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 dark:from-indigo-500 dark:to-violet-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-700 w-2.5'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.7 }}
              ></motion.button>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
              <span className="relative inline-block">
                Trusted by innovative companies worldwide
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 dark:from-indigo-500 dark:to-violet-500"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                ></motion.div>
              </span>
            </h3>

            {/* Company Logos Grid with hover effects */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 max-w-5xl mx-auto px-4">
              {['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook'].map((brand, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.9 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: isDarkMode ? 
                      "0 10px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)" : 
                      "0 10px 25px -5px rgba(249, 115, 22, 0.1), 0 8px 10px -6px rgba(249, 115, 22, 0.1)" 
                  }}
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-md dark:shadow-gray-900/30 transition-all duration-300"
                >
                  <div className="h-16 w-16 md:h-20 md:w-20 relative mb-3 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      isDarkMode ? 
                        'from-indigo-600/10 to-violet-600/10' : 
                        'from-orange-500/10 to-red-500/10'
                    } rounded-full blur-md`}></div>
                    
                    <div className="relative h-full w-full flex items-center justify-center">
                      <img 
                  src={`src/assets/cheryjones/${brand.toLowerCase()}.jpg`} 
                  alt={`${brand} logo`} 
                  className="h-12 md:h-14 min-w-20 object-cover mb-4 -brightness-200" 
                />
                    </div>
                  </div>
                  <div className={`text-base font-semibold ${
                    isDarkMode ? 
                      'text-white' : 
                      'text-gray-800'
                  }`}>
                    {brand}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-12"
            >
              <motion.a 
                href="#contact" 
                className="group inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View client portfolio</span>
                <motion.div
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Style definitions */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px);
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 10px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes float-delay {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 20s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
        }
        
        .particle-1 {
          top: 20%;
          left: 20%;
          width: 15px;
          height: 15px;
          background: ${isDarkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(249, 115, 22, 0.2)'};
          animation: float 25s linear infinite;
        }
        
        .particle-2 {
          top: 40%;
          right: 30%;
          width: 20px;
          height: 20px;
          background: ${isDarkMode ? 'rgba(124, 58, 237, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
          animation: float-delay 20s linear infinite;
        }
        
        .particle-3 {
          bottom: 30%;
          left: 40%;
          width: 10px;
          height: 10px;
          background: ${isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(251, 146, 60, 0.2)'};
          animation: float 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;