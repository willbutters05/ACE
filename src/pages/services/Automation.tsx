import React from 'react';
import { 
  Cpu, 
  Workflow, 
  Bot, 
  ArrowRightLeft, 
  Timer, 
  BarChart, 
  Settings,
  Cog, 
  Zap, 
  GitBranch 
} from 'lucide-react';

const Automation = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-xl" />
              <div className="relative p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                <Cpu className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Automation Services
            </h1>
          </div>
          <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation solutions. Streamline workflows, integrate systems, and boost efficiency with custom automation tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Workflow,
              title: "Workflow Automation",
              description: "Streamline repetitive tasks and processes with intelligent automation systems."
            },
            {
              icon: Bot,
              title: "Process Automation",
              description: "Identify and eliminate bottlenecks to improve operational efficiency."
            },
            {
              icon: ArrowRightLeft,
              title: "System Integration",
              description: "Seamlessly connect your existing tools and platforms."
            },
            {
              icon: Timer,
              title: "Time-Saving Solutions",
              description: "Reduce manual work and focus on strategic initiatives."
            },
            {
              icon: BarChart,
              title: "Performance Analytics",
              description: "Track and optimize your automated processes in real-time."
            },
            {
              icon: Settings,
              title: "Custom Solutions",
              description: "Tailored automation solutions for your specific business needs."
            },
            {
              icon: Cog,
              title: "Process Optimization",
              description: "Fine-tune your workflows for maximum efficiency and productivity."
            },
            {
              icon: Zap,
              title: "Rapid Deployment",
              description: "Quick implementation of automation solutions with minimal disruption."
            },
            {
              icon: GitBranch,
              title: "Version Control",
              description: "Track and manage changes to your automated processes with ease."
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                  <div className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300/90">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Automation;