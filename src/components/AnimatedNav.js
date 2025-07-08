import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Mail } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { id: 'beranda', label: 'Beranda', icon: Home },
  { id: 'tentang', label: 'Resume', icon: User },
  { id: 'project', label: 'Project', icon: FolderOpen },
  { id: 'kontak', label: 'Kontak', icon: Mail }
];

export default function AnimatedNav({ activeSection, setActiveSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="flex justify-center pt-6">
        <motion.div 
          className="flex items-center bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-full p-2 border border-white/20 dark:border-gray-700/50 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "relative flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-full transition-all duration-300 group",
                    isActive
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  <IconComponent 
                    className={cn(
                      "w-4 h-4 md:w-5 md:h-5 relative z-10 transition-all duration-300",
                      isActive ? "scale-110" : "group-hover:scale-105"
                    )} 
                  />
                  
                  <span className="font-medium text-sm hidden md:block relative z-10">
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
} 