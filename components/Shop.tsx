import React from 'react';
import { ShoppingBag, ArrowUpRight, Tag } from 'lucide-react';
import { SHOP_ITEMS } from '../constants';

const Shop: React.FC = () => {
  const featuredItem = SHOP_ITEMS.find(item => item.isFeatured);
  const otherItems = SHOP_ITEMS.filter(item => !item.isFeatured);

  return (
    <section className="w-full py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-2">
              The Drop
            </h2>
            <p className="text-gray-500 font-medium">Limited edition merchandise & legacy items.</p>
          </div>
          <div className="flex gap-4">
             <a 
                href="https://savebuster.store/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all"
             >
                <ShoppingBag className="w-4 h-4" />
                Visit Save Buster
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Featured Item (Takes up 2/3rds or full width on mobile) */}
          {featuredItem && (
            <div className="md:col-span-8 relative group overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
                <a href={featuredItem.url} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                        <img 
                            src={featuredItem.image} 
                            alt={featuredItem.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                             <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-black text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">
                                {featuredItem.tag || "New Arrival"}
                             </span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold leading-none tracking-tight mb-4">
                                {featuredItem.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {featuredItem.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform">
                            Shop Now <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </a>
            </div>
          )}

          {/* Grid of Other Items */}
          <div className="md:col-span-4 flex flex-col gap-6">
             {otherItems.map(item => (
                 <a 
                    key={item.id} 
                    href={item.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-white rounded-[1.5rem] border border-gray-100 p-4 flex gap-4 items-center group shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-gray-200 transition-all"
                 >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" 
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-gray-900 truncate">{item.name}</h4>
                            {item.tag && (
                                <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded font-semibold uppercase">{item.tag}</span>
                            )}
                        </div>
                        <p className="text-sm text-gray-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                            View Product <ArrowUpRight className="w-3 h-3" />
                        </p>
                    </div>
                 </a>
             ))}
             
             {/* Link to other store */}
             <a 
                href="https://mopped.store/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 rounded-[1.5rem] border-2 border-dashed border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-all font-medium gap-2"
             >
                <ShoppingBag className="w-5 h-5" />
                View All Collections
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Shop;