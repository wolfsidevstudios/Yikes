
import React, { useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSlider from './components/VideoSlider';
import Socials from './components/Socials';
import Shop from './components/Shop';
import DiscordSection from './components/DiscordSection';
import ImpactStats from './components/ImpactStats';
import ShortsWall from './components/ShortsWall';
import Timeline from './components/Timeline';
import MopDictionary from './components/MopDictionary';
import Community from './components/Community';
import { TOP_VIDEOS } from './constants';

const App: React.FC = () => {
  const midPoint = Math.ceil(TOP_VIDEOS.length / 2);
  const rowOne = useMemo(() => TOP_VIDEOS.slice(0, midPoint), [midPoint]);
  const rowTwo = useMemo(() => TOP_VIDEOS.slice(midPoint), [midPoint]);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <Socials />
        <ImpactStats />

        <div id="videos" className="py-24 space-y-12 scroll-mt-24">
           <div className="container mx-auto px-6 mb-12 text-center">
              <h2 className="text-4xl font-black tracking-tight mb-4">The Experiments</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A curated archive of social media manipulation, viral challenges, and internet culture hacking.
              </p>
           </div>
           
           <VideoSlider videos={rowOne} />
           <VideoSlider videos={rowTwo} reverse={true} />
        </div>

        <div id="shorts" className="scroll-mt-24">
          <ShortsWall />
        </div>
        
        <div id="timeline" className="scroll-mt-24">
          <Timeline />
        </div>

        <div id="community" className="scroll-mt-24">
          <Community />
        </div>
        
        <div id="dictionary" className="scroll-mt-24">
          <MopDictionary />
        </div>
        
        <div id="shop" className="scroll-mt-24">
          <Shop />
        </div>

        <div id="discord" className="scroll-mt-24">
          <DiscordSection />
        </div>
      </main>

      <footer className="w-full border-t border-gray-100 bg-gray-50 py-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="font-black text-2xl tracking-tighter">yikes.</span>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Xander Keller.
          </p>
        </div>
      </footer>

      <div className="w-full">
         <img 
            src="https://i.ibb.co/T90jV3J/IMG-4177.jpg" 
            alt="Yikes Footer Graphic" 
            className="w-full h-auto object-cover block"
         />
      </div>
    </div>
  );
};

export default App;