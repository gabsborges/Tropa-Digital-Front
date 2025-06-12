// components/PasswordInputField.tsx

import React, { useState } from 'react';

interface PasswordInputFieldProps {
    id: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
}

export const PasswordInputField: React.FC<PasswordInputFieldProps> = ({
    id,
    label,
    placeholder,
    value,
    onChange,
    error = false,
    errorMessage,
    disabled,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-2 relative w-full">
            <label htmlFor={id} className="text-primary font-[600] pb-[5px]">
                {label} {error && <span className="text-error">*</span>}
                {error && errorMessage && (
                    <span className="text-[12px] text-error">{errorMessage}</span>
                )}
            </label>
            <input
                id={id}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`border rounded-full p-[12px] pl-[20px] pr-[40px] bg-third transition-all duration-200 focus:outline-none focus:ring-2 ${error ? 'ring-error' : 'ring-transparent'
                    }`}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[20px] top-[45px] transform -translate-y-1/2 bg-third border-none"
            >
                <img
                    src={showPassword ? './pass-eye-off.svg' : './pass-eye.svg'}
                    alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    className="w-[24px]"
                />
            </button>

        </div>
    );
};
