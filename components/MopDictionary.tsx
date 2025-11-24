
import React from 'react';
import { BookType } from 'lucide-react';
import { MOP_DICTIONARY } from '../constants';

const MopDictionary: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-black text-white rounded-xl">
                <BookType className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-3xl font-black tracking-tight">The Dictionary</h2>
                <p className="text-gray-400 font-medium">Terms you need to know.</p>
            </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {MOP_DICTIONARY.map((item, index) => (
                <div 
                    key={index} 
                    className="sticky top-28 md:static group p-8 border border-gray-100 rounded-[2rem] hover:border-black/10 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 bg-white shadow-lg md:shadow-none"
                    style={{ zIndex: index }}
                >
                    <div className="mb-4">
                        <h3 className="text-4xl font-black text-black mb-1 group-hover:text-blue-600 transition-colors">
                            {item.term}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                            <span>{item.phonetic}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="italic">{item.partOfSpeech}</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-700 font-medium leading-relaxed mb-6">
                        {item.definition}
                    </p>
                    
                    <div className="pl-3 border-l-2 border-gray-100 italic text-gray-400 text-sm">
                        {item.example}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default MopDictionary;
