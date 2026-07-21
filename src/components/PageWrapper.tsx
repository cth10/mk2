
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://miku.com.br';
const DEFAULT_DESCRIPTION = "O hub definitivo para fãs de Hatsune Miku no Brasil! Descubra tudo sobre Vocaloid, música, arte, tecnologia e cultura.";

interface PageWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  titleIcon?: React.ReactNode;
  className?: string;
  id?: string;
  /** Nível do heading do título. Use "h2" quando a página já tiver outro h1 (ex.: hero da home). */
  titleAs?: 'h1' | 'h2';
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ title, description, children, titleIcon, className, id, titleAs = 'h1' }) => {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const fullTitle = `${title} | Hatsune Miku Fan Hub Brasil`;
  const TitleTag = titleAs;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/miku-a.png`} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/miku-a.png`} />
      </Helmet>
      <div id={id} className={`relative animate-slide-up container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${className || ''}`}>
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
      <div className="absolute -top-10 -right-32 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} aria-hidden="true"></div>

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
            <TitleTag className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 py-1 font-noto-jp neon-glow text-center px-2">
              {title}
            </TitleTag>
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
    </>
  );
};
