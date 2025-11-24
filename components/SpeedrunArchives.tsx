import React from 'react';
import { Timer, CheckCircle2, Trophy } from 'lucide-react';
import { SPEEDRUN_CHALLENGES } from '../constants';

const SpeedrunArchives: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Abstract Background - Softened for light theme */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px]"></div>
         <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-100 pb-8">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                        <Timer className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Mission Logs</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">
                    The Speedruns
                </h2>
            </div>
            <p className="text-gray-500 max-w-md text-right md:text-left font-medium">
                Xander's signature format: Starting from zero and racing against the clock to build a massive audience.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPEEDRUN_CHALLENGES.map((run, index) => (
                <div 
                    key={run.id}
                    className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-gray-200/60 hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 ${run.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    
                    <div className="flex justify-between items-start mb-8">
                        <span className="text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                            0{index + 1}
                        </span>
                        <div className={`p-3 rounded-2xl ${run.color} bg-opacity-10 text-gray-900`}>
                            <Trophy className={`w-6 h-6 ${run.color.replace('bg-', 'text-')}`} />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-black leading-tight">{run.title}</h3>
                    
                    <div className="space-y-4 mt-8">
                        <div className="flex justify-between text-sm border-b border-dashed border-gray-100 pb-3">
                            <span className="text-gray-400 font-medium">Objective</span>
                            <span className="font-bold text-gray-900 bg-gray-50 px-2 py-0.5 rounded">{run.goal}</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-dashed border-gray-100 pb-3">
                            <span className="text-gray-400 font-medium">Time Limit</span>
                            <span className="font-bold text-gray-900 bg-gray-50 px-2 py-0.5 rounded">{run.timeframe}</span>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-green-700 font-bold bg-green-50 p-4 rounded-xl border border-green-100 group-hover:bg-green-100 transition-colors">
                        <CheckCircle2 className="w-5 h-5 fill-green-200" />
                        <span className="text-xs uppercase tracking-wide">{run.result}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedrunArchives;