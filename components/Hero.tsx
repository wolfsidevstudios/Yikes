import React from 'react';
import { CREATOR_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center px-6 pt-20 pb-10 overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50/50 to-purple-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10 animate-fade-in-up">
        
        {/* Label Badge */}
        <div className="mb-6 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/5 backdrop-blur-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
            The Internet's Trickster
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-[12vw] md:text-[150px] font-black leading-[0.85] tracking-tighter text-black text-center select-none relative">
          <span className="relative z-10">YIKES.</span>
          <span className="absolute top-1 left-1 text-gray-100 -z-10 select-none">YIKES.</span>
        </h1>

        {/* Bio Container */}
        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Stats Column */}
          <div className="md:col-span-3 flex flex-col gap-6 md:text-right order-2 md:order-1">
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Subscribers</h3>
              <p className="text-2xl font-bold text-black">{CREATOR_INFO.subscribers}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Location</h3>
              <p className="text-lg font-semibold text-black">{CREATOR_INFO.location}</p>
            </div>
          </div>

          {/* Profile Image (Center) */}
          <div className="md:col-span-6 flex justify-center order-1 md:order-2 -mt-4 md:-mt-12 relative group">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
              <img 
                src="https://i.ibb.co/vC3kSCNt/IMG-4174.jpg" 
                alt="Xander Keller" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
              
              {/* Name Tag on Image */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-medium opacity-80">Real Name</p>
                <p className="font-bold text-lg">{CREATOR_INFO.realName}</p>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="md:col-span-3 flex flex-col gap-6 order-3 md:order-3">
             <div>
               <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Specialty</h3>
               <div className="flex flex-wrap gap-2 mt-2">
                 {CREATOR_INFO.niche.slice(0, 3).map((tag, i) => (
                   <span key={i} className="px-2 py-1 bg-gray-100 text-xs font-semibold rounded-md text-gray-700">
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
             <p className="text-sm leading-relaxed text-gray-600 border-l-2 border-gray-200 pl-4">
                {CREATOR_INFO.bio.split('.')[0]}. 
                <br/>
                <span className="italic text-gray-400 mt-1 block">"Tricking the internet since 2020"</span>
             </p>
          </div>
        </div>

        <div className="mt-20 animate-bounce text-gray-300">
          <ArrowDown className="w-6 h-6" />
        </div>

      </div>
    </section>
  );
};

export default Hero;