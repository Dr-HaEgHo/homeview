'use client'
import { Search } from "lucide-react";
import React, { useState } from "react";

interface FiltersProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<FiltersProps> = ({ placeholder = "Location or Project", onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-[1] items-center gap-[14px] bg-white border border-[#E5E5E5] rounded-lg px-4 py-3">
        <Search color="#78736E" size={16}/>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-white outline-none text-gray-600 text-sm"
        />
      </div>
    </div>
  );
};

export default SearchInput;