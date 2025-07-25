import { JSX } from 'react';

export const ContainerLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};
