import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Smartphone, 
  Layout, 
  Zap, 
  Eye, 
  Search,
  ArrowRight,
  Sparkles,
  Code
} from 'lucide-react';

function WebDesignPage() {
  const [showSpline, setShowSpline] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 500);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      observerRef.current?.disconnect();
    };
  }, []);

  const services = [
    {
      icon: Layout,
      title: "Responsive & Adaptive Design",
      description: "Create seamless experiences across all devices with our responsive design approach. We ensure your website looks and functions perfectly on everything from mobile phones to large desktop displays."
    },
    {
      icon: Eye,
      title: "UI/UX Design",
      description: "Craft intuitive, engaging interfaces that delight users and drive conversions. Our UX-focused approach ensures every interaction is meaningful and purposeful."
    },
    {
      icon: Code,
      title: "Custom Animations & Interactivity",
      description: "Bring your website to life with smooth, purposeful animations and interactive elements. We create engaging experiences that guide users and enhance your brand story."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Build lightning-fast websites that load instantly and perform smoothly. Our optimization techniques ensure your site maintains speed without sacrificing visual appeal."
    },
    {
      icon: Search,
      title: "SEO & Technical Excellence",
      description: "Implement SEO best practices from the ground up. Our websites are built to rank well and maintain technical excellence across all metrics."
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Transform your website into a powerful progressive web app. Provide app-like experiences that work offline and enhance user engagement."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Centered Spline Container */}
      <div 
        className={`fixed inset-0 transition-opacity duration-1000 ${
          showSpline ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <spline-viewer 
          url="https://prod.spline.design/NxfdXNUW868v8Are/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
            background: 'transparent'
          }}
        ></spline-viewer>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Grid Background */}
        <div 
          className="fixed inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(64, 224, 208, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(64, 224, 208, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center',
            opacity: 0.15,
            zIndex: -1
          }}
        />

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-16 pt-24">
          {/* Hero Section */}
          <div className="fade-in-section mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Palette className="h-8 w-8 text-cyan-400" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Web Design
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Crafting Exceptional Digital Experiences
            </h2>
            <p className="text-lg text-gray-300/90 leading-relaxed max-w-3xl mx-auto">
              At Ace Automation Agency, we create visually stunning, user-friendly, and high-performance websites that engage users and drive business results. Our designs are tailored to meet your needs with a focus on responsive design, intuitive UI/UX, and advanced interactivity.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="fade-in-section group p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-block rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-4">
                        <IconComponent className="h-8 w-8 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                      <p className="text-gray-300/90 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition-colors duration-300 group/btn">
                        Learn More
                        <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="fade-in-section text-center py-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300/90 text-lg mb-8">
                Let's create something extraordinary together.
              </p>
            </div>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDesignPage;