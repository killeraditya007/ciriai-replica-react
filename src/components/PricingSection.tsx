
import React from 'react';
import { Check } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay: number;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$29",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 team members",
        "20GB storage",
        "Basic analytics",
        "24/7 support",
        "API access"
      ],
      delay: 0
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 team members",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      isPopular: true,
      delay: 200
    },
    {
      name: "Enterprise",
      price: "$149",
      description: "For large businesses with complex needs",
      features: [
        "Unlimited team members",
        "100GB storage",
        "Premium analytics",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "White-labeling"
      ],
      delay: 400
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-purple-500 font-semibold mb-3">Pricing Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Right Plan for Your Business</h2>
            <p className="text-gray-600">
              We offer flexible pricing options to meet the needs of businesses of all sizes
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimation key={index} delay={plan.delay}>
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${plan.isPopular ? 'border-2 border-purple-500 relative' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${plan.isPopular ? 'bg-purple-500 text-white hover:bg-purple-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                    Get Started
                  </button>
                </div>
                <div className="border-t border-gray-100 p-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
