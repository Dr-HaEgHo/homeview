'use client'
import React, { useState, useRef, useEffect } from "react";

interface DropdownProps<T> {
  options: T[];
  label?: string;
  placeholder?: string;
  onSelect?: (value: T | null) => void;
  formatOption?: (option: T) => string;
}

function Dropdown<T extends string | number>({
  options,
  placeholder = "Select",
  onSelect,
  formatOption,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<T | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value: T) => {
    setSelected(value);
    setOpen(false);
    if (onSelect) onSelect(value);
  };

  return (
    <div ref={ref} className="relative w-[180px]">
      <button
        className="w-full bg-white border border-[#E5E5E5] rounded-lg px-4 py-3 flex items-center justify-between whitespace-nowrap text-gray-500 text-sm focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span>{selected !== null ? (formatOption ? formatOption(selected) : selected.toString()) : placeholder}</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M6 8l4 4 4-4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-[#E5E5E5] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.toString()}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 cursor-pointer hover:bg-[#F6F6F6] text-gray-700 text-base"
            >
              {formatOption ? formatOption(option) : option.toString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

export function LabelledDropdown<T extends string | number>({
  options,
  label,
  placeholder = "Select", 
  onSelect,
  formatOption,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<T | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value: T) => {
    setSelected(value);
    setOpen(false);
    if (onSelect) onSelect(value);
  };

  return (
    <div ref={ref} className="relative w-full flex flex-col">
      {label && (
        <label className="text-sm text-card-title mb-3 block">
          {label}
        </label>
      )}
      <button
        className="w-full bg-white border border-[#8b8b8b] rounded-lg px-4 py-3 flex items-center justify-between whitespace-nowrap text-gray-500 text-sm focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span>{selected !== null ? (formatOption ? formatOption(selected) : selected.toString()) : placeholder}</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M6 8l4 4 4-4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-[#E5E5E5] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.toString()}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 cursor-pointer hover:bg-[#F6F6F6] text-gray-700 text-base"
            >
              {formatOption ? formatOption(option) : option.toString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}