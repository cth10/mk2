
import React from 'react';

export interface PageRoute {
  path: string;
  name: string;
  component: React.FC;
  icon?: React.FC<{ className?: string }>;
}

export interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
