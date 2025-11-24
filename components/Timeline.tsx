
import React, { useEffect, useRef, useState } from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { Rocket, Zap, AlertTriangle, Trophy, Star } from 'lucide-react';
import { TimelineEvent } from '../types';

const IconMap: { [key: string]: React.FC<{ className?: string }> } = {
  Rocket: Rocket,
  Zap: Zap,
  AlertTriangle: AlertTriangle,
  Trophy: Trophy,
  Star: Star
};

const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = event.icon ? IconMap[event.icon] : Star;
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after triggering to run only once
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { 
        threshold: 0.2, // Trigger when 20% of the item is visible
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative flex items-center mb-12 last:mb-0 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Card Side */}
      <div className="w-1/2 px-4 md:px-12">
        <div className={`
          group relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 
          hover:shadow-2xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-700 ease-out
          ${isEven ? 'text-right items-end' : 'text-left items-start'}
          ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 translate-y-10 ${isEven ? '-translate-x-10' : 'translate-x-10'}`}
        `}>
          <span className="inline-block px-3 py-1 bg-gray-50 text-gray-500 text-xs font-bold rounded-full mb-3">
            {event.year}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {event.description}
          </p>
          
          {/* Decorative colored accent */}
          <div className={`
            absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${isEven ? 'right-0 rounded-r-2xl' : 'left-0 rounded-l-2xl'}
          `}></div>
        </div>
      </div>

      {/* Center Node */}
      <div className={`
          absolute left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 delay-300
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
      `}>
        <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
           <Icon className="w-5 h-5 text-black" />
        </div>
      </div>

      {/* Empty space for the other side */}
      <div className="w-1/2"></div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-black tracking-tight mb-2">The Journey</h2>
          <p className="text-gray-500">From 0 subscribers to internet sensation.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-100">
             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          <div className="relative">
            {TIMELINE_EVENTS.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
