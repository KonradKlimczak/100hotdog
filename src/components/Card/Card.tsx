import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Card = (props: CardProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-gray-700 to-gray-800 p-6',
        'flex gap-4 flex-col text-gray-400',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
