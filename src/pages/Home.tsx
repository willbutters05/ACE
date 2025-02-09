import React from 'react';
import { Spade as Spades } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyNameTypewriter from '../components/CompanyNameTypewriter';
import DescriptionTypewriter from '../components/DescriptionTypewriter';

function Home() {
  return (
    <div className="pointer-events-none relative flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
      {/* Ace Card Icon */}
      <div className="mb-4 opacity-0 fade-in">
        <Spades 
          className="h-16 w-16 animate-pulse" 
          strokeWidth={1.5}
          style={{
            stroke: 'url(#ace-gradient)'
          }}
        />
        <svg width="0" height="0">
          <linearGradient id="ace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" /> {/* cyan-400 */}
            <stop offset="50%" stopColor="#3B82F6" /> {/* blue-500 */}
            <stop offset="100%" stopColor="#9333EA" /> {/* purple-600 */}
          </linearGradient>
        </svg>
      </div>

      {/* Logo and Company Name */}
      <div className="mb-6 sm:mb-8 opacity-0 fade-in">
        <h1 className="animate-flicker bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent leading-normal sm:leading-normal md:leading-normal lg:leading-normal py-2">
          Ace Automation Agency
        </h1>
      </div>

      {/* Typewriter Text */}
      <div className="mb-6 sm:mb-8 opacity-0 fade-in-delay-200">
        <CompanyNameTypewriter />
      </div>

      {/* Description with Typewriter Effect */}
      <div className="mb-8 sm:mb-10 opacity-0 fade-in-delay-400">
        <DescriptionTypewriter />
      </div>

      {/* CTA Button */}
      <Link 
        to="/services"
        className="pointer-events-auto group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5 font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black opacity-0 fade-in-delay-600"
      >
        <span className="relative rounded-md bg-black/50 px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 backdrop-blur-sm group-hover:bg-opacity-0 text-sm sm:text-base">
          Discover Our Solutions
        </span>
      </Link>
    </div>
  );
}

export default Home;