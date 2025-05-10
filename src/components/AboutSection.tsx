
import React from 'react';
import { CheckCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const AboutSection: React.FC = () => {
  const benefits = [
    "Innovative Solutions for Modern Businesses",
    "Expert Team with Years of Experience",
    "Customer-Centric Approach to Every Project",
    "Continuous Support and Maintenance",
    "Cutting-Edge Technology Integration"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollAnimation animationType="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                alt="About Us" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400 rounded-lg -z-10"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationType="right">
            <div>
              <p className="text-purple-500 font-semibold mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We Help Businesses Reach Their Full Potential</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2014, we've been helping businesses transform their digital presence and operations. 
                Our mission is to provide innovative solutions that drive growth and efficiency for our clients.
              </p>
              <p className="text-gray-600 mb-8">
                With a team of experienced professionals and a commitment to excellence, we're your trusted partner 
                for all your business needs.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="btn-primary">Learn More About Us</button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
