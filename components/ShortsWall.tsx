
import React from 'react';
import { Play } from 'lucide-react';
import { VIRAL_SHORTS } from '../constants';
import { ShortVideo } from '../types';

const ShortCard: React.FC<{ short: ShortVideo }> = ({ short }) => (
  <a 
    href={short.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block w-[180px] md:w-[220px] flex-shrink-0 mx-3 group relative rounded-xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
  >
    <div className="aspect-[9/16] relative bg-gray-100">
      <img 
        src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`} 
        onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${short.id}/hqdefault.jpg`; }}
        alt={short.title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20 opacity-90 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white text-sm font-bold leading-snug line-clamp-2 drop-shadow-md">
                {short.title}
            </h3>
        </div>
        
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                <Play className="w-5 h-5 text-white fill-current ml-0.5" />
            </div>
        </div>
      </div>
      
      {/* Shorts Logo Badge */}
      <div className="absolute top-3 right-3">
        <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
           <Play className="w-3 h-3 text-white fill-white" />
        </div>
      </div>
    </div>
  </a>
);

const ShortsWall: React.FC = () => {
  const midPoint = Math.ceil(VIRAL_SHORTS.length / 2);
  const rowOne = [...VIRAL_SHORTS.slice(0, midPoint), ...VIRAL_SHORTS.slice(0, midPoint), ...VIRAL_SHORTS.slice(0, midPoint)];
  const rowTwo = [...VIRAL_SHORTS.slice(midPoint), ...VIRAL_SHORTS.slice(midPoint), ...VIRAL_SHORTS.slice(midPoint)];

  return (
    <section className="w-full py-20 bg-white border-t border-gray-100 overflow-hidden relative">
      
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-4xl font-black tracking-tight mb-3">Viral Shorts</h2>
        <p className="text-gray-500">The most viewed vertical moments.</p>
      </div>

      <div className="relative w-full space-y-6">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 - Moves Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {rowOne.map((short, i) => (
            <ShortCard key={`r1-${short.id}-${i}`} short={short} />
          ))}
        </div>

        {/* Row 2 - Moves Right (Reverse) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {rowTwo.map((short, i) => (
            <ShortCard key={`r2-${short.id}-${i}`} short={short} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortsWall;
