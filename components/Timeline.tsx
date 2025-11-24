
import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { Rocket, Zap, AlertTriangle, Trophy, Star } from 'lucide-react';

const IconMap: { [key: string]: React.FC<{ className?: string }> } = {
  Rocket: Rocket,
  Zap: Zap,
  AlertTriangle: AlertTriangle,
  Trophy: Trophy,
  Star: Star
};

const Timeline: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-2">The Journey</h2>
          <p className="text-gray-500">From 0 subscribers to internet sensation.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-dashed border-l border-gray-200"></div>

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const Icon = event.icon ? IconMap[event.icon] : Star;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <div className="w-1/2 px-8">
                    <div className={`
                      group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 
                      hover:shadow-2xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-500
                      ${isEven ? 'text-right items-end' : 'text-left items-start'}
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-black" />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
