import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Card = (props: CardProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={clsx(
        'max-w-md mx-auto overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-gray-700 to-gray-800 p-6',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
