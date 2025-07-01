import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrainCircuit size={32} className="text-white" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              DSA Practice Hub
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-blue-100 transition-colors font-medium">
              Problems
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors font-medium">
              Learn
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors font-medium">
              Discuss
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Sign In
            </button>
            <button className="block md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;