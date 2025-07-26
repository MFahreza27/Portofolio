import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Code } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mochamad-fahreza/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      href: "https://github.com/MFahreza27",
      icon: Github,
      label: "GitHub",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      href: "https://www.instagram.com/m.ffhrezaa_/",
      icon: Instagram,
      label: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 relative overflow-hidden transition-all duration-500">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 transition-colors duration-500" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 transition-opacity duration-500">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-gray-400 rounded-full"></div>
      </div>

      <div ref={ref} className="text-center max-w-4xl mx-auto relative z-10">
        {/* Profile Image */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500">
            <Code className="w-16 h-16 text-gray-600 dark:text-gray-400 transition-colors duration-500" />
          </div>
        </motion.div>
        
        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Mochamad Fahreza
        </motion.h1>
        
        {/* Title */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Full Stack Developer | UI/UX Designer
        </motion.p>


        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 ${social.color} text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <IconComponent className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
        </motion.div>
      </div>
    </section>
  );
} 