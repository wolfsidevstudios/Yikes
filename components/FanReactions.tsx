
import React from 'react';
import { MessageSquareQuote, Heart, Share2 } from 'lucide-react';
import { FAN_REACTIONS } from '../constants';

const FanReactions: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gray-50/30 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-3">Wall of Confusion</h2>
            <p className="text-gray-500">People still trying to figure out what is real.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAN_REACTIONS.map((reaction) => (
                <div key={reaction.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full ${reaction.avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                            {reaction.user.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-sm text-gray-900">{reaction.user}</p>
                            <p className="text-xs text-gray-400">via {reaction.source}</p>
                        </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                        "{reaction.text}"
                    </p>

                    <div className="flex items-center justify-between text-gray-400 text-xs font-semibold pt-4 border-t border-gray-50">
                        <div className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            {reaction.likes}
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                            <Share2 className="w-4 h-4" />
                            Share
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default FanReactions;
