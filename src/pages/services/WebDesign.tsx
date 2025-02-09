import React from 'react';
import { 
  Palette, 
  Layout, 
  Smartphone, 
  Code, 
  Gauge, 
  Sparkles 
} from 'lucide-react';

const WebDesign = () => {
  const features = [
    {
      Icon: Layout,
      title: "Responsive Design",
      description: "Websites that look and perform beautifully across all devices and screen sizes."
    },
    {
      Icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Optimized for mobile users while maintaining desktop excellence."
    },
    {
      Icon: Code,
      title: "Clean Code",
      description: "Well-structured, maintainable code following best practices and modern standards."
    },
    {
      Icon: Gauge,
      title: "Performance Optimization",
      description: "Lightning-fast load times and smooth user experience."
    },
    {
      Icon: Sparkles,
      title: "Modern UI/UX",
      description: "Intuitive interfaces with engaging user experiences and animations."
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-xl" />
              <div className="relative p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                <Palette className="h-16 w-16 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Web Design Services
            </h1>
          </div>
          <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
            Transform your digital presence with our cutting-edge web design solutions. We create stunning, responsive websites that combine innovative aesthetics with seamless functionality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                <feature.Icon className="h-6 w-6 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDesign;