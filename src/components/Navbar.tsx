
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-purple-600">
            Ciriai
          </a>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-purple-500 font-medium">Home</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-800 hover:text-purple-500 font-medium">Features</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-purple-500 font-medium">About</button>
          <button onClick={() => scrollToSection('pricing')} className="text-gray-800 hover:text-purple-500 font-medium">Pricing</button>
          <button onClick={() => scrollToSection('faq')} className="text-gray-800 hover:text-purple-500 font-medium">FAQ</button>
          <button onClick={() => scrollToSection('blog')} className="text-gray-800 hover:text-purple-500 font-medium">Blog</button>
          <button onClick={() => scrollToSection('contact')} className="btn-primary">Contact</button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-purple-500 font-medium py-2">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-800 hover:text-purple-500 font-medium py-2">Features</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-purple-500 font-medium py-2">About</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-800 hover:text-purple-500 font-medium py-2">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-800 hover:text-purple-500 font-medium py-2">FAQ</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-800 hover:text-purple-500 font-medium py-2">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
