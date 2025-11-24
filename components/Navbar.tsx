
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Settings, Check, Droplets, Snowflake, Sparkles } from 'lucide-react';
import LiquidGlass from './LiquidGlass';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [glassStyle, setGlassStyle] = useState<'frosted' | 'liquid' | 'liquid2'>('frosted');
  const [themeColor, setThemeColor] = useState<'dark' | 'light'>('light'); // 'light' means dark text on light bg
  const navRef = useRef<HTMLElement>(null);
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

  // Automatic Theme Detection Logic
  const checkBackgroundBrightness = useCallback(() => {
    if (!navRef.current) return;
    
    // Get the position to sample (center of the navbar)
    const rect = navRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Get elements at that point
    const elements = document.elementsFromPoint(x, y);

    // Find the first element that is NOT the navbar itself
    let targetElement: Element | null = null;
    for (const el of elements) {
      if (!navRef.current.contains(el) && el !== navRef.current) {
        targetElement = el;
        break;
      }
    }

    if (!targetElement) return;

    // Traverse up to find a background color
    let color = 'rgba(0, 0, 0, 0)';
    let el: Element | null = targetElement;

    while (el) {
      const style = window.getComputedStyle(el);
      const bgColor = style.backgroundColor;
      // Check if not transparent
      if (bgColor !== 'transparent' && bgColor !== 'rgba(0, 0, 0, 0)') {
        color = bgColor;
        break;
      }
      el = el.parentElement;
    }

    // Default to white if we hit the body/html without finding a color
    if (color === 'rgba(0, 0, 0, 0)' || !el) {
        color = 'rgb(255, 255, 255)';
    }

    // Calculate Brightness (YIQ)
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const r = parseInt(rgb[0], 10);
      const g = parseInt(rgb[1], 10);
      const b = parseInt(rgb[2], 10);
      const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      
      // If brightness is high (light bg), use dark text (theme 'light'). 
      // If brightness is low (dark bg), use white text (theme 'dark').
      setThemeColor(yiq >= 128 ? 'light' : 'dark');
    }
  }, []);

  useEffect(() => {
    // Check on scroll and resize
    const handleCheck = () => {
        window.requestAnimationFrame(checkBackgroundBrightness);
    };
    
    window.addEventListener('scroll', handleCheck);
    window.addEventListener('resize', handleCheck);
    
    // Initial check
    checkBackgroundBrightness();

    return () => {
        window.removeEventListener('scroll', handleCheck);
        window.removeEventListener('resize', handleCheck);
    };
  }, [checkBackgroundBrightness]);


  const navLinks = [
    { name: 'Videos', href: '#videos' },
    { name: 'Shorts', href: '#shorts' },
    { name: 'Community', href: '#community' },
    { name: 'Dictionary', href: '#dictionary' },
    { name: 'Shop', href: '#shop' },
  ];

  const glassStyles = {
    frosted: {
      background: themeColor === 'light' ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      border: themeColor === 'light' ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
    },
    liquid: {
      background: themeColor === 'light' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
      backdropFilter: 'blur(10px) saturate(180%)',
      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
      border: themeColor === 'light' ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    },
    // liquid2 is handled by the component, no inline styles needed here mostly
    liquid2: {} 
  };

  const textColorClass = themeColor === 'light' ? 'text-gray-800 group-hover:text-black' : 'text-gray-200 group-hover:text-white';
  const iconColorClass = themeColor === 'light' ? 'text-gray-700' : 'text-white';
  const logoClass = themeColor === 'light' ? 'text-black bg-white border-gray-100' : 'text-white bg-white/10 border-white/20';

  const NavContent = () => (
    <>
      {/* Logo / Home Trigger */}
      <a 
        href="#" 
        className={`
          flex items-center justify-center w-10 h-10 md:w-12 md:h-12 
          rounded-full shadow-sm border 
          hover:scale-110 transition-all duration-300
          ${logoClass}
        `}
      >
        <span className="font-black tracking-tighter text-sm md:text-base">yk.</span>
      </a>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
              <a 
                  key={link.name} 
                  href={link.href} 
                  className={`
                    px-4 py-2 text-sm font-semibold rounded-full 
                    hover:bg-current/10 transition-all duration-300 group
                    ${textColorClass}
                  `}
              >
                  {link.name}
              </a>
          ))}
      </div>

      {/* Action Buttons Group */}
      <div className="flex items-center gap-2">
        <a 
            href="#discord"
            className={`
              text-xs md:text-sm font-bold 
              px-5 py-2.5 md:py-3 rounded-full 
              hover:scale-105 transition-all shadow-lg
              ${themeColor === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}
            `}
        >
            Join
        </a>

        {/* Settings Toggle */}
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-current/10 transition-colors ${iconColorClass}`}
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className={`md:hidden p-2 mr-2 ${iconColorClass}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </>
  );

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="relative pointer-events-auto">
            {/* Conditional Rendering for Navbar Container */}
            {glassStyle === 'liquid2' ? (
                <LiquidGlass className="px-2 py-2 md:px-3 md:py-2 flex items-center gap-4 md:gap-8 transition-all duration-500 ease-out">
                    <nav ref={navRef} className="flex items-center gap-4 md:gap-8">
                        <NavContent />
                    </nav>
                </LiquidGlass>
            ) : (
                <nav 
                    ref={navRef}
                    className={`
                        rounded-full px-2 py-2 md:px-3 md:py-2
                        flex items-center gap-4 md:gap-8
                        transition-all duration-500 ease-out
                        ${isScrolled ? 'w-auto' : 'w-auto'}
                    `}
                    style={glassStyles[glassStyle]}
                >
                    <NavContent />
                </nav>
            )}

            {/* Settings Popover */}
            {isSettingsOpen && (
              <div 
                ref={settingsRef}
                className="absolute top-full right-0 mt-4 w-64 p-4 rounded-2xl animate-fade-in-up border border-white/20 shadow-2xl backdrop-blur-xl"
                style={{
                    background: themeColor === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 30, 0.85)'
                }}
              >
                <h3 className={`text-xs font-bold uppercase mb-3 tracking-wider px-2 ${themeColor === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Glass Effect</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setGlassStyle('frosted')}
                    className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors
                        ${glassStyle === 'frosted' 
                            ? (themeColor === 'light' ? 'bg-white shadow-sm' : 'bg-white/10 shadow-sm') 
                            : 'hover:bg-current/10'}
                        ${themeColor === 'light' ? 'text-gray-800' : 'text-gray-200'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Snowflake className="w-4 h-4 text-blue-500" />
                      <span>Frosted (Default)</span>
                    </div>
                    {glassStyle === 'frosted' && <Check className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => setGlassStyle('liquid')}
                    className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors
                        ${glassStyle === 'liquid' 
                            ? (themeColor === 'light' ? 'bg-white shadow-sm' : 'bg-white/10 shadow-sm') 
                            : 'hover:bg-current/10'}
                        ${themeColor === 'light' ? 'text-gray-800' : 'text-gray-200'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Droplets className="w-4 h-4 text-cyan-500" />
                      <span>Liquid Glass</span>
                    </div>
                    {glassStyle === 'liquid' && <Check className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setGlassStyle('liquid2')}
                    className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors
                        ${glassStyle === 'liquid2' 
                            ? (themeColor === 'light' ? 'bg-white shadow-sm' : 'bg-white/10 shadow-sm') 
                            : 'hover:bg-current/10'}
                        ${themeColor === 'light' ? 'text-gray-800' : 'text-gray-200'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      <span>Liquid 2.0 (New)</span>
                    </div>
                    {glassStyle === 'liquid2' && <Check className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-40 pt-28 px-6 md:hidden animate-fade-in-up backdrop-blur-xl ${themeColor === 'light' ? 'bg-white/95 text-black' : 'bg-black/90 text-white'}`}>
           <div className="flex flex-col gap-6 text-center">
              {navLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold"
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
