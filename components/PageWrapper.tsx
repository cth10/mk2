
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
    <div id={id} className={`relative animate-slide-up container mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`}>
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -top-10 -right-32 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Title section */}
      <div className="relative flex items-center justify-center mb-8 sm:mb-12 lg:mb-16">
        <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 w-full max-w-5xl">
          <div className="flex items-center justify-center gap-4">
            {titleIcon && (
              <div className="text-cyan-400 animate-sparkle flex-shrink-0">
                {React.cloneElement(titleIcon as React.ReactElement<{ className?: string }>, { 
                  className: "w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-lg" 
                })}
              </div>
            )}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 py-1 font-noto-jp neon-glow text-center px-2">
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
