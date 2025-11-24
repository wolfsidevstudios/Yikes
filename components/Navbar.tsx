
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Settings, Check, Droplets, Snowflake } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [glassStyle, setGlassStyle] = useState<'frosted' | 'liquid'>('frosted');
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close settings when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Videos', href: '#videos' },
    { name: 'Shorts', href: '#shorts' },
    { name: 'Journey', href: '#timeline' },
    { name: 'Dictionary', href: '#dictionary' },
    { name: 'Shop', href: '#shop' },
  ];

  const glassStyles = {
    frosted: {
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
    },
    liquid: {
      // Simulating @liquidglass/react style (More transparent, glossy, subtle border)
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px) saturate(180%)',
      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    }
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="relative pointer-events-auto">
            <nav 
              className={`
                rounded-full px-2 py-2 md:px-3 md:py-2
                flex items-center gap-4 md:gap-8
                transition-all duration-500 ease-out
                ${isScrolled ? 'w-auto' : 'w-auto'}
              `}
              style={glassStyles[glassStyle]}
            >
              {/* Logo / Home Trigger */}
              <a 
                href="#" 
                className="
                  flex items-center justify-center w-10 h-10 md:w-12 md:h-12 
                  bg-white rounded-full shadow-sm border border-gray-100 
                  hover:scale-110 transition-transform duration-300
                "
              >
                <span className="font-black tracking-tighter text-sm md:text-base text-black">yk.</span>
              </a>
              
              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-1">
                  {navLinks.map(link => (
                      <a 
                          key={link.name} 
                          href={link.href} 
                          className="
                            px-4 py-2 text-sm font-semibold text-gray-700 
                            hover:text-black hover:bg-white/50 rounded-full 
                            transition-all duration-300
                          "
                      >
                          {link.name}
                      </a>
                  ))}
              </div>

              {/* Action Buttons Group */}
              <div className="flex items-center gap-2">
                <a 
                    href="#discord"
                    className="
                      bg-black text-white text-xs md:text-sm font-bold 
                      px-5 py-2.5 md:py-3 rounded-full 
                      hover:bg-gray-800 hover:scale-105 transition-all shadow-lg
                    "
                >
                    Join
                </a>

                {/* Settings Toggle */}
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-gray-700"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-2 text-gray-700 mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </nav>

            {/* Settings Popover */}
            {isSettingsOpen && (
              <div 
                ref={settingsRef}
                className="absolute top-full right-0 mt-4 w-64 p-4 rounded-2xl animate-fade-in-up"
                style={glassStyles[glassStyle]}
              >
                <h3 className="text-xs font-bold uppercase text-gray-500 mb-3 tracking-wider px-2">Glass Effect</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setGlassStyle('frosted')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${glassStyle === 'frosted' ? 'bg-white/60 shadow-sm' : 'hover:bg-white/30'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Snowflake className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-800">Frosted (Default)</span>
                    </div>
                    {glassStyle === 'frosted' && <Check className="w-4 h-4 text-black" />}
                  </button>
                  
                  <button
                    onClick={() => setGlassStyle('liquid')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${glassStyle === 'liquid' ? 'bg-white/60 shadow-sm' : 'hover:bg-white/30'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Droplets className="w-4 h-4 text-cyan-500" />
                      <span className="text-gray-800">Liquid Glass</span>
                    </div>
                    {glassStyle === 'liquid' && <Check className="w-4 h-4 text-black" />}
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-6 md:hidden animate-fade-in-up">
           <div className="flex flex-col gap-6 text-center">
              {navLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-900"
                >
                  {link.name}
                </a>
              ))}
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
