// components/InputField.tsx

import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error = false,
  errorMessage,
  disabled,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-primary font-[600] pb-[5px]">
        {label} {error && <span className="text-error">*</span>}
        {error && errorMessage && (
        <span className="text-[12px] text-error">{errorMessage}</span>
      )}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border rounded-full p-[12px] pl-[20px] bg-third transition-all duration-200 focus:outline-none focus:ring-2 ${
          error ? 'ring-error' : 'ring-transparent'
        }`}
      />
      
    </div>
  );
};
