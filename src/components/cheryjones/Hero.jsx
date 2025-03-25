import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../base/Theme';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  PenTool, 
  Code, 
  TrendingUp, 
  Play,
  MousePointer
} from 'lucide-react';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [playAnimation, setPlayAnimation] = useState(false);

  // Show elements with staggered animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle parallax and other scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate parallax transforms for decorative elements
  const calculateTransform = (factor) => {
    return `translateY(${scrollY * factor}px)`;
  };

  // Calculate 3D tilt effect based on mouse position
  const calculateTilt = (element) => {
    if (!heroRef.current) return {};
    
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (mousePosition.x - centerX) / 25;
    const moveY = (mousePosition.y - centerY) / 25;
    
    return {
      transform: `perspective(1000px) rotateX(${-moveY * 0.2}deg) rotateY(${moveX * 0.2}deg)`
    };
  };

  return (
    <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-950' : ''}`} ref={heroRef}>      
      {/* Hero Section Main Content */}
      <div className="relative min-h-screen pt-24 flex flex-col justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0" 
          style={{background: isDarkMode ? 
            'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.15), transparent 70%), radial-gradient(circle at 100% 0%, rgba(76, 29, 149, 0.1), transparent 50%), radial-gradient(circle at 0% 100%, rgba(88, 28, 135, 0.15), transparent 50%)' :
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.15), transparent 70%), radial-gradient(circle at 100% 0%, rgba(251, 113, 133, 0.1), transparent 50%), radial-gradient(circle at 0% 100%, rgba(244, 63, 94, 0.2), transparent 50%)'
          }}>
          {/* Floating Geometric Decorations */}
          <div className="absolute top-1/4 left-[15%] w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/10 to-red-500/10 dark:from-indigo-900/20 dark:to-purple-900/20 blur-2xl"
            style={{ transform: calculateTransform(-0.15) }}></div>
          <div className="absolute top-2/3 right-[10%] w-48 h-48 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 blur-3xl"
            style={{ transform: calculateTransform(-0.1) }}></div>
          <div className="absolute top-1/4 right-[25%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-purple-900/10 dark:to-pink-900/10 blur-3xl"
            style={{ transform: calculateTransform(-0.05) }}></div>
            
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
        </div>
        
        {/* Decorative Curved Lines */}
        <svg className="absolute top-0 left-0 right-0 z-0 opacity-30 dark:opacity-10" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,202.7C672,192,768,128,864,106.7C960,85,1056,107,1152,133.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
            fill={isDarkMode ? "#1e3a8a" : "#f97316"} 
            fillOpacity="0.2"
            style={{ transform: calculateTransform(0.1) }}></path>
          <path d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,149.3C672,181,768,203,864,186.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
            fill={isDarkMode ? "#4f46e5" : "#f43f5e"} 
            fillOpacity="0.15"
            style={{ transform: calculateTransform(0.05) }}></path>
        </svg>
        
        {/* Main Hero Content */}
        <div className="container mx-auto px-6 pt-16 pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text Content - 3 Columns */}
            <div className={`lg:col-span-3 space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-indigo-950/70 px-3 py-1 text-sm font-medium text-orange-800 dark:text-indigo-300 mb-4 border border-orange-200 dark:border-indigo-800 shadow-sm">
                <Sparkles size={16} className="mr-1.5 text-orange-600 dark:text-indigo-400" />
                <span>New Portfolio Experience</span>
                <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 dark:bg-indigo-400 animate-pulse"></span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-50 dark:to-gray-400 leading-tight">
                Crafting Digital <br/>
                <span className="relative inline-block">
                  <span className="relative z-10 text-green-600">Experiences</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 385 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M384 6C329.167 6 276.5 11 215.5 11C154.5 11 79.5 6 36.5 6C13.5 6 1 6 1 6" 
                      stroke={isDarkMode ? "#6d28d9" : "#F97316"} 
                      strokeWidth="8" 
                      strokeLinecap="round"
                      className="animate-draw-line"
                    />
                  </svg>
                </span>
                <br className="block md:hidden" />
                <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-indigo-500 dark:to-violet-500 bg-clip-text text-transparent"> with Passion</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Digital Media Expert specialized in creating memorable designs and 
                experiences that connect brands with their audiences through strategic thinking and creative execution.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 px-6 py-3 font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="relative z-10 flex items-center">
                    Explore My Work
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-orange-600 to-red-700 dark:from-indigo-700 dark:to-violet-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                
                <button 
                  className="group relative rounded-lg border border-gray-300 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setPlayAnimation(true)}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 dark:bg-indigo-950 mr-2 group-hover:scale-110 transition-transform duration-300">
                      <Play size={12} className="text-orange-600 dark:text-indigo-400 ml-0.5" />
                    </span>
                    Watch Showreel
                  </span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
                {[
                  { value: '7+', label: 'Years of Experience' },
                  { value: '120+', label: 'Projects Completed' },
                  { value: '98%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className={`transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 bg-clip-text">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interactive Visual - 2 Columns */}
            <div className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="relative" style={calculateTilt()}>
                {/* Main Visual Element */}
                <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl dark:shadow-2xl dark:shadow-violet-950/20 border border-gray-200 dark:border-gray-800 backdrop-blur-sm overflow-hidden group">
                  {/* Interactive Preview */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-950">
                    {/* Decorative Grid Lines */}
                    <div className="absolute inset-0 bg-grid-pattern-fine opacity-20 dark:opacity-20"></div>
                    
                    {/* Preview Content */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Header Bar */}
                      <div className="bg-white/80 dark:bg-gray-900 backdrop-blur-sm p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
                        <div className="flex space-x-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <span>Portfolio</span>
                          <ChevronDown size={14} />
                        </div>
                      </div>
                      
                      {/* Animated Preview Content */}
                      <div className="flex-1 p-5 space-y-4 relative">
                        {/* Category Tags */}
                        <div className="flex flex-wrap gap-2">
                          {['UI Design', 'Web Dev', 'Branding'].map((tag, index) => (
                            <span 
                              key={index} 
                              className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 ${
                                isDarkMode
                                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Service Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { icon: <PenTool size={18} />, title: 'UI/UX Design', color: 'from-pink-500 to-rose-500 dark:from-indigo-600 dark:to-violet-700' },
                            { icon: <Code size={18} />, title: 'Development', color: 'from-blue-500 to-cyan-500 dark:from-blue-700 dark:to-cyan-800' },
                            { icon: <TrendingUp size={18} />, title: 'Marketing', color: 'from-amber-500 to-orange-500 dark:from-amber-700 dark:to-orange-800' },
                            { icon: <Sparkles size={18} />, title: 'Branding', color: 'from-emerald-500 to-green-500 dark:from-emerald-700 dark:to-green-800' }
                          ].map((service, index) => (
                            <div 
                              key={index} 
                              className={`rounded-lg p-3 border backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                                isDarkMode 
                                  ? 'bg-gray-850 border-gray-800 hover:bg-gray-800' 
                                  : 'bg-white/70 border-gray-200 hover:bg-white/90'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} mb-2 flex items-center justify-center text-white`}>
                                {service.icon}
                              </div>
                              <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{service.title}</h3>
                            </div>
                          ))}
                        </div>
                        
                        {/* Project Preview */}
                        <div className={`rounded-lg overflow-hidden mt-4 border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                          <div className="aspect-video bg-gradient-to-br from-orange-400/20 to-red-500/20 dark:from-indigo-700/20 dark:to-violet-800/20 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900 shadow-md flex items-center justify-center mx-auto mb-2">
                                  <Play size={16} className="text-orange-500 dark:text-violet-500 ml-0.5" />
                                </div>
                                <p className="text-xs text-gray-700 dark:text-gray-300">Featured Project</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mouse Cursor Indicator (when not in animation mode) */}
                        {!playAnimation && (
                          <div className="absolute bottom-6 right-6 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 animate-pulse">
                            <MousePointer size={14} />
                            <span>Interactive Preview</span>
                          </div>
                        )}
                        
                        {/* Animated Cursor (when in animation mode) */}
                        {playAnimation && (
                          <div 
                            className="absolute w-6 h-6 transition-all duration-300 ease-out z-50 pointer-events-none"
                            style={{
                              left: '60%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                              animation: 'moveCursor 6s ease-in-out forwards'
                            }}
                          >
                            <MousePointer size={16} className="text-orange-600 dark:text-violet-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Circles */}
                  <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-indigo-700/10 dark:to-violet-700/10 blur-2xl"></div>
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-700/10 dark:to-cyan-700/10 blur-xl"></div>
                </div>
                
                {/* Shadow Element */}
                <div className="absolute -bottom-5 left-0 right-0 h-24 bg-gradient-to-b from-orange-600/10 to-orange-600/0 dark:from-indigo-800/10 dark:to-indigo-800/0 blur-2xl rounded-full mx-12"></div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 animate-bounce">
            <span className="text-xs mb-2">Scroll to explore</span>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes moveCursor {
          0% { left: 40%; top: 70%; }
          25% { left: 70%; top: 30%; }
          50% { left: 30%; top: 50%; }
          75% { left: 60%; top: 60%; }
          100% { left: 50%; top: 40%; }
        }
        
        @keyframes draw-line {
          from { stroke-dashoffset: 385; }
          to { stroke-dashoffset: 0; }
        }
        
        .animate-draw-line {
          stroke-dasharray: 385;
          stroke-dashoffset: 385;
          animation: draw-line 1.5s forwards 0.5s;
        }
        
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px);
        }
        
        .bg-grid-pattern-fine {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Hero;