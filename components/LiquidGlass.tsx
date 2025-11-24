import React from 'react';

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({ children, className = '', intensity = 'medium' }) => {
  return (
    <>
      {/* SVG Filter Definition for the Liquid Distortion */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-glass-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="2.5" result="blur" />
            <feDisplacementMap in="SourceGraphic" in2="blur" scale="15" xChannelSelector="R" yChannelSelector="G" />
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      <div className={`relative group ${className}`}>
        {/* The Liquid Container */}
        <div 
          className="absolute inset-0 rounded-full z-0 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        >
          {/* Animated Sheen Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 opacity-70 pointer-events-none"></div>
          
          {/* Subtle liquid distortion on the border/edges using a pseudo-element technique or inner shadow trickery */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-50 mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  );
};

export default LiquidGlass;