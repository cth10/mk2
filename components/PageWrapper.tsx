
import React from 'react';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
  titleIcon?: React.ReactNode;
  className?: string;
  id?: string; // Added id prop
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ title, children, titleIcon, className, id }) => {
  return (
    // Pass id to the root div
    <div id={id} className={`animate-slideUpFadeIn container mx-auto ${className || ''}`}>
      <div className="flex items-center mb-8 sm:mb-12">
        {/* FIX: Cast titleIcon to React.ReactElement<{ className?: string }> to ensure TypeScript recognizes the className prop */}
        {titleIcon && <div className="mr-3 sm:mr-4 text-teal-400">{React.cloneElement(titleIcon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10 sm:w-12 md:w-14 md:h-14" })}</div>}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-sky-400 to-pink-400 text-transparent bg-clip-text py-1">
          {title}
        </h1>
      </div>
      <div className="space-y-8 sm:space-y-10">
        {children}
      </div>
    </div>
  );
};
