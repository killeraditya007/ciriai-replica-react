
import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  delay: number;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "How to Scale Your Business with Modern Technology",
      excerpt: "Discover the latest technology trends that can help your business scale efficiently in today's digital landscape.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "May 5, 2023",
      category: "Technology",
      delay: 0
    },
    {
      title: "5 Ways to Improve Your Team's Productivity",
      excerpt: "Learn practical strategies to boost your team's productivity and efficiency, leading to better results and happier employees.",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
      date: "Apr 22, 2023",
      category: "Productivity",
      delay: 200
    },
    {
      title: "The Future of AI in Business Operations",
      excerpt: "Explore how artificial intelligence is transforming business operations and what you can expect in the near future.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      date: "Apr 10, 2023",
      category: "AI & Technology",
      delay: 400
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-purple-500 font-semibold mb-3">Latest Articles</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Blog Posts</h2>
            <p className="text-gray-600">
              Stay updated with our latest news, insights, and tips from industry experts
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollAnimation key={index} delay={post.delay}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-purple-500 font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="flex items-center text-purple-500 font-medium hover:text-purple-600 transition-colors">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={600}>
          <div className="text-center mt-12">
            <button className="btn-secondary">
              View All Articles
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BlogSection;
