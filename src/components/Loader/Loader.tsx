import './Loader.css';

import React, { ReactNode } from 'react';

type LoaderProps = {
  children: ReactNode;
};

export const Loader = (props: LoaderProps) => {
  const { children } = props;
  // TailwindCSS animation classes
  const animation = 'toss';

  return (
    <div className={`${animation} text-sm`}>
      <span>{children}</span>
    </div>
  );
};
