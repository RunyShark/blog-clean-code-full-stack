/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Text } from '../../atoms';

interface OptionalProps {
  error: string;
  label: string;
}

interface InputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    Partial<OptionalProps> {
  useForm: any;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  useForm,
  ...prop
}) => (
  <div>
    {label && <Text className="mb-3 capitalize">{label}</Text>}

    <div className="relative">
      <input
        {...useForm}
        {...prop}
        className="border border-indigo-500  bg-transparent relative rounded-md w-full h-w-12 z-1 px-5 py-2 block transition-all   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
      />
      {error ? (
        <p className="text-error-600 mt-2">{error}</p>
      ) : (
        <p className="text-error-600 mt-2">&nbsp;</p>
      )}
    </div>
  </div>
);
