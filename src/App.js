import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import AnimatedNav from './components/AnimatedNav';
import ThemeToggle from './components/ThemeToggle';
import ThreeBackground from './components/ThreeBackground';
import HeroSection from './components/sections/HeroSection';
import ResumeSection from './components/sections/ResumeSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

const PortfolioContent = () => {
  const [activeSection, setActiveSection] = useState('beranda');
  const { isDark } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
      const fade = setTimeout(() => setFadeOut(true), 2000);
      const done = setTimeout(() => setShowIntro(false), 3000);
      return () => {
        clearTimeout(fade);
        clearTimeout(done);
      };
    }, []);

  const renderSection = () => {
    switch(activeSection) {
      case 'beranda':
        return <HeroSection />;
      case 'tentang':
        return <ResumeSection />;
      case 'project':
        return <ProjectsSection />;
      case 'kontak':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-white dark:bg-gray-900' 
        : 'bg-white dark:bg-gray-900'
    }`}>
      
      {/* Intro Animation */}
      <AnimatePresence>
      {showIntro && (
          <motion.div
            className="fixed inset-0 z-[999] bg-gray-950 dark:bg-gray-950 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className={`text-gray-100 text-xl md:text-2xl font-bold tracking-wide ${
                fadeOut ? 'animate-fade-out' : 'animate-fade-in'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mochamad Fahreza <span className="text-blue-400">|</span> Portfolio
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Three.js Background */}
      <ThreeBackground />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navigation */}
      <AnimatedNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <motion.main 
        className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
        {renderSection()}
          </motion.div>
        </AnimatePresence>
      </motion.main>
      
      {/* Enhanced floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-30"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-400 rounded-full opacity-40"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: 1 
          }}
        />
        <motion.div
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-20"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: 2 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-35"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.35, 0.7, 0.35]
          }}
          transition={{ 
            duration: 4.5, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: 0.5 
          }}
        />
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default Portfolio;