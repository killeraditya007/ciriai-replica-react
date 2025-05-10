
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PageLoader from '../components/PageLoader';

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Ciriai - One Page Template';
    
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(
      '.scroll-animation, .scroll-animation-left, .scroll-animation-right'
    );
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <PageLoader />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
