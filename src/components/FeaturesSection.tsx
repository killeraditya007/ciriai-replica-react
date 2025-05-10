
import React from 'react';
import { 
  Layers, 
  TrendingUp, 
  UserCheck, 
  Shield, 
  Code, 
  RefreshCw 
} from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <ScrollAnimation delay={delay} className="card-hover">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </ScrollAnimation>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Layers size={24} />,
      title: "Scalable Architecture",
      description: "Our platform is built to grow with your business, ensuring smooth scaling as your needs evolve.",
      delay: 0
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Performance Analytics",
      description: "Track and analyze your business performance with our comprehensive analytics tools.",
      delay: 100
    },
    {
      icon: <UserCheck size={24} />,
      title: "User-Friendly Interface",
      description: "Intuitive design that makes navigation and usage simple for all team members.",
      delay: 200
    },
    {
      icon: <Shield size={24} />,
      title: "Advanced Security",
      description: "Enterprise-level security measures to keep your data safe and protected.",
      delay: 300
    },
    {
      icon: <Code size={24} />,
      title: "API Integration",
      description: "Seamlessly integrate with your existing systems and third-party applications.",
      delay: 400
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Automatic Updates",
      description: "Always stay up-to-date with automatic software updates and improvements.",
      delay: 500
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-purple-500 font-semibold mb-3">Our Features</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features to Boost Your Productivity</h2>
            <p className="text-gray-600">
              Discover the tools and features designed to take your business to the next level
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
