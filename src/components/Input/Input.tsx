import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={`${className} shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    />
  );
};
