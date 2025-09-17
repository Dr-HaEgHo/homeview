import React from "react";

interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  name,
  required = false,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm text-card-title mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-[#888] rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-primary"
      />
    </div>
  );
};

export interface MessageBoxProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  name,
  required = false,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm text-card-title mb-1">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="border border-[#888] rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-primary resize-none"
      />
    </div>
  );
};

export default Input;
