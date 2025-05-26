
import React from 'react';
import { ContentCardProps } from '../types';

export const ContentCard: React.FC<ContentCardProps> = ({ title, children, className }) => {
  return (
    <div 
      className={`bg-slate-800/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8 
                  border border-slate-700/50 transition-all duration-300 
                  hover:shadow-teal-500/10 hover:border-teal-600/70 hover:scale-[1.015] ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-teal-300 mb-6 border-b-2 border-teal-700/40 pb-3">
        {title}
      </h2>
      <div 
        className="prose prose-slate max-w-none 
                  prose-p:text-slate-300 prose-p:leading-relaxed
                  prose-headings:text-teal-400 
                  prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-a:transition-colors
                  prose-strong:text-slate-100 
                  prose-ul:text-slate-300 prose-ul:list-disc prose-li:marker:text-teal-400
                  prose-ol:text-slate-300 prose-ol:list-decimal prose-li:marker:text-teal-400
                  prose-blockquote:border-l-teal-500 prose-blockquote:text-slate-400
                  prose-invert"
      >
        {children}
      </div>
    </div>
  );
};