import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../base/Theme';
import { 
  User, 
  Award, 
  Code2, 
  Briefcase, 
  Sparkles, 
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Globe,
  Coffee,
  Clock,
  GitBranch
} from 'lucide-react';

const About = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const aboutRef = useRef(null);
  const [animateSkills, setAnimateSkills] = useState(false);

  // Initialize visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          // Delay skill bar animations
          setTimeout(() => {
            setAnimateSkills(true);
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Data for the about section
  const aboutData = {
    skills: [
      { name: 'UI/UX Design', proficiency: 95, color: 'from-orange-500 to-red-600 dark:from-indigo-500 dark:to-violet-600' },
      { name: 'Frontend Development', proficiency: 90, color: 'from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700' },
      { name: 'React & Next.js', proficiency: 92, color: 'from-teal-500 to-green-600 dark:from-teal-600 dark:to-green-700' },
      { name: 'Creative Direction', proficiency: 88, color: 'from-pink-500 to-purple-600 dark:from-pink-600 dark:to-purple-700' },
      { name: 'Digital Marketing', proficiency: 82, color: 'from-yellow-500 to-amber-600 dark:from-yellow-600 dark:to-amber-700' }
    ],
    experience: [
      {
        role: 'Senior UI/UX Designer',
        company: 'Creative Solutions Inc.',
        period: '2021 - Present',
        description: 'Leading design initiatives for enterprise clients, focusing on creating cohesive design systems and accessible interfaces.'
      },
      {
        role: 'Frontend Developer',
        company: 'Tech Innovations',
        period: '2018 - 2021',
        description: 'Developed responsive web applications using React, optimizing performance and implementing modern UI patterns.'
      },
      {
        role: 'UI Designer',
        company: 'DigitalCraft Agency',
        period: '2016 - 2018',
        description: 'Created user interfaces for mobile applications and websites, collaborating closely with development teams.'
      }
    ],
    education: [
      {
        degree: 'Master of Design',
        institution: 'Design Institute',
        year: '2016',
        focus: 'Interaction Design & User Experience'
      },
      {
        degree: 'Bachelor of Computer Science',
        institution: 'Tech University',
        year: '2014',
        focus: 'Software Development'
      }
    ]
  };

  // Quick stats
  const quickStats = [
    { icon: <Coffee size={18} />, value: '1,400+', label: 'Coffee Cups' },
    { icon: <Clock size={18} />, value: '12,000+', label: 'Hours Designed' },
    { icon: <GitBranch size={18} />, value: '350+', label: 'Git Commits' },
    { icon: <Globe size={18} />, value: '24+', label: 'Countries Visited' }
  ];

  return (
    <div 
      ref={aboutRef}
      className={`relative py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-orange-50/30'} overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-indigo-500/5 dark:to-violet-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/5 dark:to-cyan-500/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Animation */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-indigo-950/70 px-3 py-1 text-sm font-medium text-orange-800 dark:text-indigo-300 mb-4 border border-orange-200 dark:border-indigo-800 shadow-sm">
            <User size={16} className="mr-1.5 text-orange-600 dark:text-indigo-400" />
            <span>About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Passionate about creating
            <span className="relative ml-2 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-600 to-red-600 dark:from-indigo-500 dark:to-violet-500 bg-clip-text text-transparent">impactful experiences</span>
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
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Digital Media Expert with expertise in UI/UX design and frontend development,
            creating memorable designs that connect brands with their audiences through strategic thinking.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl dark:shadow-2xl dark:shadow-violet-950/10 border border-gray-200 dark:border-gray-800 h-full">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative mb-6 group">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                      {/* Profile image placeholder - replace with actual image */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <User size={48} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-2 -bottom-2 bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>
                
                {/* Personal Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Chery Jones</h3>
                <p className="text-orange-600 dark:text-indigo-400 font-medium mb-4">Digital Media Expert</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  Passionate designer and developer with a focus on creating human-centered digital experiences.
                </p>
                
                {/* Contact Button */}
                <button className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 dark:from-indigo-600 dark:to-violet-800 text-white font-medium flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <span>Get In Touch</span>
                  <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                {/* Quick Stats */}
                <div className="w-full mt-8 grid grid-cols-2 gap-3">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="mx-auto w-8 h-8 rounded-full bg-orange-100 dark:bg-indigo-900/50 flex items-center justify-center text-orange-600 dark:text-indigo-400 mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content Tabs */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 py-6 sm:p-6 shadow-xl dark:shadow-2xl dark:shadow-violet-950/10 border border-gray-200 dark:border-gray-800 h-full">
              {/* Tab Navigation */}
              <div className="flex flex-wrap space-x-1 bg-gray-100 dark:bg-gray-800/60 rounded-lg p-1 mb-6">
                {[
                  { id: 'skills', label: 'Skills', icon: <Code2 size={16} /> },
                  { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
                  { id: 'education', label: 'Education', icon: <GraduationCap size={16} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center justify-center space-x-1.5 flex-1 py-2 px-3 sm:px-3 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-white dark:bg-gray-900 text-orange-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="space-y-8">
                {/* Skills Tab */}
                <div className={activeTab === 'skills' ? 'block' : 'hidden'}>
                  <div className="space-y-6">
                    {aboutData.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ 
                              width: animateSkills ? `${skill.proficiency}%` : '0%',
                              transitionDelay: `${index * 150}ms`
                            }}
                          >
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Additional Skill Tags */}
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Additional Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Figma', 'Adobe XD', 'Tailwind CSS', 'TypeScript', 
                          'Next.js', 'User Research', 'Prototyping', 'Motion Design'
                        ].map((tag, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Experience Tab */}
                <div className={activeTab === 'experience' ? 'block' : 'hidden'}>
                  <div className="space-y-8">
                    {aboutData.experience.map((exp, index) => (
                      <div key={index} className="relative pl-6 pb-6 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0">
                        {/* Timeline Marker */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 dark:bg-indigo-600 border-2 border-white dark:border-gray-900"></div>
                        
                        {/* Content */}
                        <div>
                          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-indigo-900/50 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:text-indigo-300 mb-2">
                            {exp.period}
                          </span>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                          <p className="text-sm font-medium text-orange-600 dark:text-indigo-400 mb-2">{exp.company}</p>
                          <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Education Tab */}
                <div className={activeTab === 'education' ? 'block' : 'hidden'}>
                  <div className="space-y-8">
                    {aboutData.education.map((edu, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                            <p className="text-sm font-medium text-orange-600 dark:text-indigo-400 mb-2">{edu.institution}</p>
                          </div>
                          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-indigo-900/50 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:text-indigo-300">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Focus: {edu.focus}</p>
                      </div>
                    ))}
                    
                    {/* Certifications */}
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <h4 className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        <Award size={16} className="mr-1.5 text-orange-600 dark:text-indigo-400" />
                        <span>Certifications</span>
                      </h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Advanced UX Certification', issuer: 'Nielsen Norman Group' },
                          { name: 'Frontend Web Development', issuer: 'Udacity' },
                          { name: 'Professional UI/UX Designer', issuer: 'Google' }
                        ].map((cert, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span className="font-medium text-gray-900 dark:text-gray-100">{cert.name}</span>
                            <span className="text-gray-500 dark:text-gray-400">{cert.issuer}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Featured Achievements */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Sparkles size={16} className="mr-1.5 text-orange-600 dark:text-indigo-400" />
                    <span>Featured Achievements</span>
                  </h4>
                  <a href="#" className="text-xs text-orange-600 dark:text-indigo-400 hover:underline flex items-center">
                    View All
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: 'Design Award Finalist',
                      desc: 'Top 5 in International Design Competition'
                    },
                    {
                      title: 'Published Research Paper',
                      desc: 'On UX Patterns in Digital Interfaces'
                    }
                  ].map((achievement, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700"
                    >
                      <h5 className="font-medium text-gray-900 dark:text-gray-100">{achievement.title}</h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.desc}</p>
                    </div>
                  ))}
                </div>
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

export default About;