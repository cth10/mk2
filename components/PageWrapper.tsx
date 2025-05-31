
import React from 'react';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
  titleIcon?: React.ReactNode;
  className?: string;
  id?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ title, children, titleIcon, className, id }) => {
  return (
    <div id={id} className={`relative animate-slide-up container mx-auto ${className || ''}`}>
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -top-10 -right-32 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Title section */}
      <div className="relative flex items-center justify-center mb-12 sm:mb-16">
        <div className="glass-effect rounded-3xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
          <div className="flex items-center justify-center gap-4">
            {titleIcon && (
              <div className="text-cyan-400 animate-sparkle">
                {React.cloneElement(titleIcon as React.ReactElement<{ className?: string }>, { 
                  className: "w-12 h-12 sm:w-16 md:w-20 md:h-20 drop-shadow-lg" 
                })}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 py-1 font-noto-jp neon-glow">
              {title}
            </h1>
          </div>
          
          {/* Decorative line */}
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-12 sm:space-y-16">
        {children}
      </div>
    </div>
  );
};
