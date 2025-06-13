import React, { useState } from 'react';
import GlassIcon from './GlassIcon';

interface SearchInputFieldProps {
    id: string;
    placeholder?: string;
    disabled?: boolean;
}

export const SearchInputField: React.FC<SearchInputFieldProps> = ({
    id,
    placeholder,
    disabled,
}) => {

    return (
        <div className="flex flex-col gap-2 relative max-w-[203px]">
            <input
                id={id}
                type='text'
                placeholder={placeholder}
                disabled={disabled}
                className={`border rounded-full p-[12px] pl-[40px] pr-[40px] bg-third transition-all duration-200 focus:outline-none focus:ring-2 border-none`}
            />
            <div className="absolute left-[20px] top-1/2 transform -translate-y-1/2 bg-third border-none"
            >
                <GlassIcon width={40} height={40}/>
            </div>

        </div>
    );
};
