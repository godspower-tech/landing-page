import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../base/Theme';
import { 
  MessageSquare, 
  Rocket, 
  ArrowRight, 
  Star, 
  CheckCircle2,
  Mail
} from 'lucide-react';

const CallToAction = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef(null);

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

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const benefits = [
    { icon: <Star size={16} />, text: "Award-winning designs that stand out" },
    { icon: <CheckCircle2 size={16} />, text: "Expert-led development process" },
    { icon: <Rocket size={16} />, text: "Fast turnaround on all projects" }
  ];

  return (
    <div 
      ref={ctaRef}
      className={`relative py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-indigo-500/10 dark:to-violet-500/10 blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-500/10 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-indigo-950/70 px-3 py-1 text-sm font-medium text-orange-800 dark:text-indigo-300 mb-4 border border-orange-200 dark:border-indigo-800 shadow-sm">
                <MessageSquare size={16} className="mr-1.5 text-orange-600 dark:text-indigo-400" />
                <span>Let's Work Together</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Ready to transform your
                <span className="relative mx-2 inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-orange-600 to-red-600 dark:from-indigo-500 dark:to-violet-500 bg-clip-text text-transparent">digital presence</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6C60.5 6 114 1 169.5 1C225 1 300 6 300 6" 
                      stroke={isDarkMode ? "#6d28d9" : "#F97316"} 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      strokeDasharray="300"
                      strokeDashoffset={isVisible ? "0" : "300"}
                      className="transition-all duration-1000 ease-in-out"
                    />
                  </svg>
                </span>
                ?
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Let's collaborate to bring your vision to life. Whether you need a stunning website, 
                a complete brand overhaul, or strategic UX improvements, I'm here to help you achieve 
                your goals and exceed expectations.
              </p>
              
              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 transform transition-all ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                    style={{ transitionDelay: `${100 + index * 150}ms`, transitionDuration: '800ms' }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-indigo-900/50 flex items-center justify-center text-orange-600 dark:text-indigo-400">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-x-4">
                <button className="py-3 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 text-white font-medium flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <Mail size={18} className="mr-2" />
                  <span>Contact Me</span>
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            
            {/* Right Side Form */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl dark:shadow-2xl dark:shadow-violet-950/10 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Get a Free Consultation</h3>
                
                <form className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Type</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                    >
                      <option value="" disabled selected>Select project type</option>
                      <option value="website">Website Design</option>
                      <option value="app">Mobile App</option>
                      <option value="branding">Branding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-indigo-600 focus:border-transparent transition-all duration-200"
                      rows="4"
                      placeholder="Tell me about your project"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Submit Request
                  </button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    I'll get back to you within 24-48 hours with a personalized response.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Style definitions */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default CallToAction;