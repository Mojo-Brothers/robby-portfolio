import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className = '',
}) => {
  useScrollToTop();

  return (
    <main className={`flex-grow w-full ${className}`}>
      {children}
    </main>
  );
};
