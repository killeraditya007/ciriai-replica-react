
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from './ScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How does the pricing work?",
      answer: "We offer monthly and annual subscription plans. All plans include core features, with premium features available on higher tiers. You can upgrade or downgrade your plan at any time."
    },
    {
      question: "Can I try your service before purchasing?",
      answer: "Yes! We offer a 14-day free trial on all plans with no credit card required. You can explore all features during the trial period to determine which plan best fits your needs."
    },
    {
      question: "Do you offer technical support?",
      answer: "We provide 24/7 technical support on all plans. Premium plans include priority support and a dedicated account manager to ensure prompt assistance whenever you need help."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to the service until the end of your current billing period."
    },
    {
      question: "How secure is my data on your platform?",
      answer: "We take security very seriously. Our platform uses industry-standard encryption, regular security audits, and strict access controls to keep your data safe and secure."
    },
    {
      question: "Do you offer custom solutions for enterprise clients?",
      answer: "Yes, we offer custom enterprise solutions tailored to your specific business needs. Contact our sales team for a consultation and personalized quote."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-purple-500 font-semibold mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 mb-4 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">Still have questions?</p>
              <button className="btn-primary">
                Contact Support
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
