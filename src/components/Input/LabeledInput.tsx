import { InputHTMLAttributes } from 'react';

import { Input } from './Input';

type LabeledInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> & {
  name: string;
  label: string;
};

export const LabeledInput = (props: LabeledInputProps) => {
  const { name, label, ...rest } = props;
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-xs font-bold mb-2">
        {label}
      </label>
      <Input
        {...rest}
        name={name}
        className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
