import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Github, Twitter, Linkedin, Globe } from 'lucide-react';

// --- TYPES ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

// --- UI COMPONENTS ---

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyle = "px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- SECTIONS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
            <span className="font-bold text-xl text-gray-900">BrandName</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Button variant="primary" className="py-1.5 text-sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Features</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing</a>
            <div className="pt-4">
              <Button variant="primary" className="w-full justify-center">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 text-center md:text-left space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
        v1.0.0 Released
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
        Build faster with this <span className="text-blue-600">Template</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
        A robust, TypeScript-based boilerplate for Antigravity. Includes responsive navigation, optimized components, and clean architecture.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Button variant="primary">Start Building <ChevronRight size={18} /></Button>
        <Button variant="outline">View Documentation</Button>
      </div>
    </div>
    <div className="flex-1 w-full">
      <div className="bg-gradient-to-tr from-blue-100 to-purple-100 rounded-2xl p-8 w-full h-96 flex items-center justify-center shadow-inner">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm">
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureGrid = () => {
  const features = [
    { title: "TypeScript Ready", desc: "Fully typed for better developer experience.", icon: "TS" },
    { title: "Tailwind CSS", desc: "Rapid UI development with utility classes.", icon: "TW" },
    { title: "Responsive", desc: "Looks great on mobile, tablet, and desktop.", icon: "R" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-gray-900 font-bold text-xs">A</div>
          <span className="text-white font-semibold">Antigravity Template</span>
        </div>
        <div className="flex gap-6">
          <Github className="hover:text-white cursor-pointer transition-colors" size={20} />
          <Twitter className="hover:text-white cursor-pointer transition-colors" size={20} />
          <Linkedin className="hover:text-white cursor-pointer transition-colors" size={20} />
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
