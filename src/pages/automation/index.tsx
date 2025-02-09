import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Calendar, Database, ArrowRight, Zap, Workflow, GitBranch } from 'lucide-react';

function AutomationPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [showSpline, setShowSpline] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
      observerRef.current?.disconnect();
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      icon: Bot,
      title: "Customer Support Automation",
      description: "Transform your customer support with AI-driven chatbots and intelligent ticketing systems. Reduce response times by up to 80% while maintaining high customer satisfaction levels."
    },
    {
      icon: MessageSquare,
      title: "Automated Outreach Systems",
      description: "Leverage advanced lead generation and nurturing tools to reach your target audience effectively. Our systems adapt and learn from engagement patterns to optimize conversion rates."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Eliminate scheduling conflicts and reduce administrative overhead with our smart scheduling system. Seamlessly integrate with your existing calendar infrastructure."
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Connect and automate your entire customer journey with seamless CRM integration. Unify your data and create powerful automated workflows that scale with your business."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Reduce manual tasks by up to 90%"
    },
    {
      icon: Workflow,
      title: "Smart Workflows",
      description: "AI-powered process optimization"
    },
    {
      icon: GitBranch,
      title: "Seamless Integration",
      description: "Works with your existing tools"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Spline Container */}
      <div 
        className={`fixed left-0 top-0 transition-opacity duration-1000 ${
          showSpline ? 'opacity-100' : 'opacity-0'
        } ${isMobile ? 'w-full' : 'w-[55%] lg:block hidden'}`}
        style={isMobile ? undefined : { 
          height: '100vh',
          transform: 'translate(-15%, -10%)'
        }}
      >
        <spline-viewer 
          url={isMobile 
            ? "https://prod.spline.design/a9BWEnM6b487ettY/scene.splinecode"
            : "https://prod.spline.design/wKzvg26nK1Jwwek0/scene.splinecode"
          }
          style={{ 
            width: '100%', 
            height: '100%',
            background: 'transparent'
          }}
        ></spline-viewer>
      </div>

      {/* Content Container with Grid Background */}
      <div className={`${isMobile ? '' : 'lg:ml-[45%]'} min-h-screen relative`}>
        {/* Grid Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(64, 224, 208, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(64, 224, 208, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center',
            opacity: 0.15,
            maskImage: isMobile ? undefined : 'linear-gradient(to left, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
          }}
        />

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-6 py-16 pt-24">
          {/* Hero Section */}
          <div className="fade-in-section">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Advanced Automation Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business operations with cutting-edge automation technology. Streamline workflows, reduce costs, and accelerate growth.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fade-in-section">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-3">
                    <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="space-y-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="fade-in-section p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500 group"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-block rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-4">
                        <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                          <IconComponent className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="fade-in-section text-center">
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Get Started with Automation
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomationPage;