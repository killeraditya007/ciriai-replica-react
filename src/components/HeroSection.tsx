
import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <ScrollAnimation>
              <p className="text-purple-500 font-semibold mb-3">Welcome to Ciriai</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Modern Solution for <span className="text-purple-500">Your Business</span>
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                We provide innovative solutions to help your business grow and reach new heights. Our team of experts is dedicated to your success.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Get Started
                </button>
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
            </ScrollAnimation>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <ScrollAnimation animationType="right">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Business Team" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-20">
        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-center">
            <div className="p-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-purple-500 mb-2">500+</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-purple-500 mb-2">85+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-purple-500 mb-2">1K+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-purple-500 mb-2">10+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
