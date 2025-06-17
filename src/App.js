import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Home, FolderOpen, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'tentang', label: 'Tentang Saya', icon: User },
    { id: 'project', label: 'Project', icon: FolderOpen },
    { id: 'kontak', label: 'Kontak', icon: Mail }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'beranda':
        return (
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8 relative">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center mb-6 shadow-2xl">
                  <Code className="w-20 h-20 text-blue-200" />
                </div>
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                Hello, Im Rin.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Full Stack Developer | Ui/Ux Designer
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveSection('project')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold rounded-full hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Lihat Project
                </button>
                <button 
                  onClick={() => setActiveSection('kontak')}
                  className="px-8 py-4 border-2 border-blue-700 text-blue-300 font-semibold rounded-full hover:bg-blue-900/30 hover:border-blue-500 transform hover:scale-105 transition-all duration-300"
                >
                  Hubungi Saya
                </button>
              </div>
            </div>
          </section>
        );

      case 'tentang':
        return (
          <section className="min-h-screen flex flex-col gap-24 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text">
                Tentang Saya
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed text-justify">
                    Lulusan Universitas Muhammadiyah Cirebon, jurusan Teknik Informatika. Menguasai dasar-dasar pemrograman, pengembangan web, dan pengelolaan basis data, serta memiliki kemampuan dalam menggunakan berbagai software pengembangan dan memiliki ketelitian, manajemen waktu, serta kemampuan riset yang baik. Saya terampil dalam mengoperasikan Microsoft Office (Word, Excel, dan Power Point). Dan mencari peluang kerja yang memberikan peluang dan pengalaman baru untuk berkembang.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed text-justify">
                    Keahlian dalam pengembangan web saya yang mencakup fullstack developer adalah :
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {['PHP', 'Laravel', 'Mysql', 'PostgreSQL', 'Html', 'CSS', 'JS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-700/50 hover:bg-blue-800/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-700/30 flex items-center justify-center backdrop-blur-sm border border-blue-700/30 shadow-2xl">
                    <User className="w-32 h-32 text-blue-200" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-10 blur-3xl"></div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 mt-24 text-white">
                {/* Education */}
                <div>
                  <h3 className="text-3xl font-bold text-blue-300 mb-8 text-center md:text-left">Pendidikan</h3>
                  <div className="space-y-12">
                    {/* SMA */}
                    <div className="flex gap-6">
                      <div className="relative">
                        <div className="pl-4 border-l-2 border-blue-700 text-gray-400">
                          <div>2017 - 2020</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold">SMA Negeri 1 Plumbon</h4>
                        <p className="text-blue-300">MIPA</p>
                      </div>
                    </div>
                    {/* Universitas */}
                    <div className="flex gap-6">
                      <div className="relative">
                        <div className="pl-4 border-l-2 border-blue-700 text-gray-400">
                          <div>2020 - 2025</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold">Universitas Muhammadiyah Cirebon</h4>
                        <p className="text-blue-300">S1 Teknik Informatika</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Experience */}
                <div>
                  <h3 className="text-3xl font-bold text-blue-300 mb-8 text-center md:text-left">Pengalaman</h3>
                  <div className="space-y-12">
                    {/* Magang */}
                    <div className="flex gap-6">
                      <div className="relative">
                        <div className="pl-4 border-l-2 border-blue-700 text-gray-400">
                          <div>2023</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold">Dinas Kearsipan & Perpustakaan</h4>
                        <p className="text-blue-300">Magang</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'project':
        return (
<section className="min-h-screen flex items-center px-4 py-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text">
      Project
    </h2>

    {/* Container grid project */}
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      
      {/* Card 1 */}
      <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
        <div className="flex flex-col gap-8">
          <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-blue-700/30 rounded-xl flex items-center justify-center border border-blue-700/30 group-hover:border-blue-500/50 transition-colors">
            <Code className="w-16 h-16 text-blue-200" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
              Phyton PyQt5
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Dibangun menggunakan Phyton dan PyQt5 dengan database PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Phyton', 'PyQt5', 'PostgresSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs border border-blue-700/50">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-300 rounded-lg hover:bg-blue-900/30 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
        <div className="flex flex-col gap-8">
          <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-blue-700/30 rounded-xl flex items-center justify-center border border-blue-700/30 group-hover:border-blue-500/50 transition-colors">
            <Code className="w-16 h-16 text-blue-200" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
              Sales Page
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Dibangun menggunakan Html, CSS, JS.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Html', 'CSS', 'JS'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs border border-blue-700/50">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-300 rounded-lg hover:bg-blue-900/30 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
        <div className="flex flex-col gap-8">
          <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-blue-700/30 rounded-xl flex items-center justify-center border border-blue-700/30 group-hover:border-blue-500/50 transition-colors">
            <Code className="w-16 h-16 text-blue-200" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
              Sistem Pakar
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Dibangun menggunakan Laravel, PHP, CSS, JS dengan database MySql.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'CSS', 'JS', 'MySql'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs border border-blue-700/50">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-300 rounded-lg hover:bg-blue-900/30 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        );

      case 'kontak':
        return (
          <section className="min-h-screen flex items-center px-4 py-20">
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text ">
                Hubungi Saya
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      Saya selalu terbuka untuk project baru, ide kreatif, atau sekadar diskusi tentang teknologi.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800/70 transition-colors">
                      <Mail className="w-6 h-6 text-blue-400" />
                      <span className="text-gray-300">fahrezamochamad@gmail.com</span>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800/70 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                      <span className="text-gray-300">linkedin.com/in/#</span>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800/70 transition-colors">
                      <Github className="w-6 h-6 text-blue-400" />
                      <span className="text-gray-300">github.com/#</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div>
                      <div className="block text-sm font-medium text-gray-300 mb-2">
                        Nama
                      </div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Nama Anda"
                      />
                    </div>
                    
                    <div>
                      <div className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </div>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <div className="block text-sm font-medium text-gray-300 mb-2">
                        Pesan
                      </div>
                      <textarea 
                        rows="4" 
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                        placeholder="Ceritakan tentang project Anda..."
                      ></textarea>
                    </div>
                    
                    <button 
                      onClick={() => alert('Pesan berhasil dikirim!')}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-blue-200" />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                RinDev
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default Portfolio;