import React from 'react';
import { SOCIALS } from '../constants';
import { Youtube, Instagram, Twitter, MessageCircle } from 'lucide-react';

const IconMap = {
  youtube: Youtube,
  instagram: Instagram,
  tiktok: ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
  twitter: Twitter,
  discord: MessageCircle, 
};

const Socials: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-8 px-6">
      <div className="flex items-center gap-2 md:gap-4 p-3 bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-200/50 rounded-full">
        {SOCIALS.map((social) => {
          const Icon = IconMap[social.icon];
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3 rounded-full transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1"
              title={social.platform}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-black transition-colors" />
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.handle}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;