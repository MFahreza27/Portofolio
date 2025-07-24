import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Code, Database, Wrench, Users } from 'lucide-react';
import CertificatesSection from "./CertificatesSection";

export default function ResumeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      period: "2020 - 2025",
      institution: "Universitas Muhammadiyah Cirebon",
      degree: "S1 Teknik Informatika",
      icon: GraduationCap
    },
    {
      period: "2017 - 2020",
      institution: "SMA Negeri 1 Plumbon",
      degree: "MIPA",
      icon: GraduationCap
    }
  ];

  const experience = [
    {
      period: "2023",
      company: "Dinas Kearsipan & Perpustakaan",
      position: "Magang",
      icon: Briefcase
    }
  ];

  const skills = [
    {
      category: "Programming & Web Development",
      skills: "PHP, Laravel, HTML/CSS, Javascript",
      icon: Code,
      color: "bg-blue-600"
    },
    {
      category: "Database Management",
      skills: "MySQL, PostgreSQL",
      icon: Database,
      color: "bg-green-600"
    },
    {
      category: "Tools & Office",
      skills: "Microsoft Office (Word, Excel, Power Point)",
      icon: Wrench,
      color: "bg-purple-600"
    },
    {
      category: "Soft Skills",
      skills: "Teliti, Kerjasama Tim, Manajemen Waktu, Riset",
      icon: Users,
      color: "bg-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            RESUME
          </h2>
        </motion.div>

        <div ref={ref}>
          {/* Profile Description */}
          <motion.div 
            className="mb-16 sm:mb-20"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                  Lulusan Universitas Muhammadiyah Cirebon, jurusan Teknik Informatika. Menguasai dasar-dasar pemrograman, pengembangan web, dan pengelolaan basis data, serta memiliki kemampuan dalam menggunakan berbagai software pengembangan dan memiliki ketelitian, manajemen waktu, serta kemampuan riset yang baik. Saya terampil dalam mengoperasikan Microsoft Office (Word, Excel, dan Power Point). Dan mencari peluang kerja yang memberikan peluang dan pengalaman baru untuk berkembang.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Education & Experience */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Education */}
            <motion.div 
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
                Pendidikan
              </h3>
              <div className="space-y-8">     
                {education.map((edu, index) => {
                  const IconComponent = edu.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-20 sm:w-24">
                          <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                            {edu.period}
                          </div>
                        </div>
                        <div className="flex-1 border-l-2 border-gray-300 dark:border-gray-600 pl-6">
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                              {edu.institution}
                            </h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                            {edu.degree}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            {/* Experience */}
            <motion.div 
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
                Pengalaman
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => {
                  const IconComponent = exp.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-20 sm:w-24">
                          <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                            {exp.period}
                          </div>
                        </div>
                        <div className="flex-1 border-l-2 border-gray-300 dark:border-gray-600 pl-6">
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                              {exp.company}
                            </h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
          {/* Skills */}
          <motion.div 
            className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-sm transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 2 }}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${skill.color} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">{skill.category}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.skills}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          {/* Certificates Section */}
          <CertificatesSection />
        </div>
      </div>
    </section>
  );
} 