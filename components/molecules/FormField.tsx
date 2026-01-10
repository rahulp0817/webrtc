"use client";

import React from "react";
import { Input } from "../atoms/input";

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  isRequired,
}) => (
  <Input
    label={label}
    value={value}
    onValueChange={onChange}
    placeholder={placeholder}
    error={error}
    isRequired={isRequired}
  />
);
