import React from 'react';
import { Play, Eye } from 'lucide-react';
import { Video } from '../types';

interface VideoSliderProps {
  videos: Video[];
  reverse?: boolean;
}

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <a 
    href={video.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block w-[320px] md:w-[380px] flex-shrink-0 mx-4 group relative rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2"
  >
    {/* Thumbnail Container */}
    <div className="aspect-video relative overflow-hidden rounded-2xl shadow-sm group-hover:shadow-2xl shadow-black/5 transition-all duration-500">
      <img 
        src={video.thumbnailUrl} 
        alt={video.title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex flex-col items-center justify-center">
        {/* Play Button */}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
          <Play className="w-6 h-6 text-white fill-current ml-1" />
        </div>
      </div>

      {/* Views Badge */}
      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-sm">
        <Eye className="w-3 h-3 text-red-500" />
        {video.views}
      </div>
    </div>

    {/* Title Info */}
    <div className="pt-5 px-2">
      <h3 className="font-bold text-lg leading-snug text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
        {video.title}
      </h3>
      <div className="flex items-center gap-2 mt-2">
         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
         <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
           Viral Experiment
         </p>
      </div>
    </div>
  </a>
);

const VideoSlider: React.FC<VideoSliderProps> = ({ videos, reverse = false }) => {
  // Quadruple the array for seamless infinite loop on large screens
  const duplicatedVideos = [...videos, ...videos, ...videos, ...videos];

  return (
    <div className="w-full overflow-hidden py-10 bg-white relative">
      {/* Left Fade Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right Fade Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

      <div 
        className={`flex w-max hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {duplicatedVideos.map((video, index) => (
          <VideoCard key={`${video.id}-${index}`} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;