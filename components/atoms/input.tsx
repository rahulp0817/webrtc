"use client";

import React, { useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  isRequired?: boolean;
  onValueChange?: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  error,
  isRequired = false,
  value,
  onValueChange,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* <label className="mb-1.5 text-sm font-medium">{label}</label> */}
      <input
        {...props}
        value={value}
        onChange={(e) => {
          onValueChange?.(e.target.value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`px-4 py-2.5 rounded-lg w-full border-2 transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-500"}
          focus:outline-none 
        `}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1.5 transition-opacity duration-200">
          {error}
        </span>
      )}
    </div>
  );
};
