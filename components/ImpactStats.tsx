import React from 'react';
import { IMPACT_STATS } from '../constants';

const ImpactStats: React.FC = () => {
  return (
    <section className="w-full border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 border-x border-gray-200">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.id} className="p-8 text-center group hover:bg-white transition-colors duration-300">
              <h3 className="text-4xl md:text-5xl font-black text-black mb-1 tracking-tighter group-hover:scale-110 transition-transform">
                {stat.value}
              </h3>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-400 font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
