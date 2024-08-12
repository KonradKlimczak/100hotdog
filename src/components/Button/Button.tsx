import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
};

const COMMON_STYLES = 'p-2 font-bold cursor-pointer';
const DISABLED_STYLES = 'opacity-50 cursor-not-allowed'; // Styles for disabled state

const variantStyles = {
  primary: 'bg-gradient-to-r from-pink-400 to-yellow-500 text-black hover:from-pink-500 hover:to-yellow-600',
  secondary: 'bg-gradient-to-r from-slate-600 to-gray-500 text-white hover:from-slate-700 hover:to-gray-600',
  ghost: 'bg-transparent text-gray-600 hover:text-white hover:bg-gray-900 border-2 border-gray-700 ',
};

const RETRO_STYLE = 'border-4 border-dotted border-black';
const SCALE_ON_HOVER = 'transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105';

export const Button = (props: ButtonProps) => {
  const { variant, children, className, disabled, ...rest } = props;

  // Apply styles conditionally based on the disabled prop
  const buttonStyles = `${COMMON_STYLES} ${RETRO_STYLE} ${!disabled ? SCALE_ON_HOVER : ''} ${variantStyles[variant]} ${className} ${disabled ? DISABLED_STYLES : ''}`;

  return (
    <button
      className={buttonStyles}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
