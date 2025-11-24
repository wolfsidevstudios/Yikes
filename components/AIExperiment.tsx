import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight, Bot } from 'lucide-react';
import { generateViralIdea } from '../services/geminiService';
import { AIExperimentState } from '../types';

const AIExperiment: React.FC = () => {
  const [state, setState] = useState<AIExperimentState>({
    prompt: '',
    result: null,
    isLoading: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.prompt.trim()) return;

    setState(prev => ({ ...prev, isLoading: true, error: null, result: null }));

    try {
      const idea = await generateViralIdea(state.prompt);
      setState(prev => ({ ...prev, result: idea, isLoading: false }));
    } catch (err) {
      setState(prev => ({ ...prev, error: "The algorithm is busy. Try again.", isLoading: false }));
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32">
      <div className="relative bg-white rounded-[2rem] border border-gray-200 p-8 md:p-16 shadow-2xl shadow-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center mb-12">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 rotate-3">
                <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
                Viral Idea Generator
            </h2>
            <p className="text-lg text-gray-500 max-w-lg">
                Powered by Gemini AI. Enter a topic, and we'll generate a clickbait title worthy of a Yikes video.
            </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="relative z-10 max-w-2xl mx-auto">
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur transition duration-500 group-hover:opacity-30"></div>
                <div className="relative flex bg-white rounded-2xl border border-gray-200 p-2 shadow-sm transition-all focus-within:ring-4 focus-within:ring-blue-50 focus-within:border-blue-400">
                    <input
                        type="text"
                        value={state.prompt}
                        onChange={(e) => setState(prev => ({ ...prev, prompt: e.target.value }))}
                        placeholder="Example: I survived 24 hours in..."
                        className="flex-1 bg-transparent px-6 py-4 text-lg font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
                    />
                    <button 
                        type="submit" 
                        disabled={state.isLoading || !state.prompt.trim()}
                        className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {state.isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </form>

        {/* Result Display */}
        {state.result && (
            <div className="mt-12 relative z-10 animate-fade-in-up">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Generated Concept</h3>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        "{state.result}"
                    </p>
                    <div className="mt-6 flex justify-center">
                         <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                            <Sparkles className="w-3 h-3" /> 99% Viral Potential
                         </span>
                    </div>
                </div>
            </div>
        )}
        
        {state.error && (
            <div className="mt-8 text-center text-red-500 font-medium animate-pulse">
                {state.error}
            </div>
        )}

        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0"></div>
      </div>
    </section>
  );
};

export default AIExperiment;