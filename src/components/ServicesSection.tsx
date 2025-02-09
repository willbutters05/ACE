import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Palette,
  Cpu,
  Brain,
  ArrowRight,
} from 'lucide-react';

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  path: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, path, delay }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:from-gray-800/50 hover:to-gray-900/50 opacity-0 animate-service-card cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => navigate(path)}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
        <Icon className="h-6 w-6 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="mb-6 text-lg text-gray-300/90 leading-relaxed">{description}</p>

      {/* Learn More Button */}
      <div 
        className="relative inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 group-hover:scale-105"
      >
        <span>Learn More</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      {/* Border Gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ padding: '1px' }} />
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      Icon: Palette,
      title: 'Web Design',
      description: 'Elevate your digital presence with cutting-edge web design solutions. We create stunning, responsive websites that combine innovative aesthetics with seamless functionality.',
      path: '/web-design',
    },
    {
      Icon: Cpu,
      title: 'Automation',
      description: 'Transform your business operations with intelligent automation solutions. Streamline workflows, integrate systems, and boost efficiency with custom automation tools.',
      path: '/automation',
    },
    {
      Icon: Brain,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence for your business. From smart chatbots to predictive analytics, we implement advanced AI solutions that drive growth.',
      path: '/services/ai',
    },
  ];

  return (
    <section className="relative z-10 min-h-screen w-full py-24">
      {/* Section Title */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent sm:text-5xl mb-4">
          Our Services
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-300/90">
          Discover our comprehensive suite of services designed to transform your business with cutting-edge technology and innovation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            delay={index * 200}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;