
import React from 'react';

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ title, children, className }) => {
  return (
    <div className={`group relative glass-effect rounded-3xl p-8 sm:p-10 border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 hover:shadow-cyan-500/15 transition-all duration-500 hover:scale-[1.02] cyber-border ${className || ''}`}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Title */}
      <h2 className="relative text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-6 sm:mb-8 font-noto-jp">
        {title}
      </h2>
      
      {/* Content */}
      <div className="relative text-slate-200 leading-relaxed space-y-4">
        {children}
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};
