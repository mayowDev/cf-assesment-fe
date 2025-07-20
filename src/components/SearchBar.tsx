import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  hideButton?: boolean;
  hideIcon?: boolean;
  placeholder?: string;
}

function SearchBar({
  value,
  onChange,
  onSearch,
  className = "flex items-center bg-[#1C2126] px-4 py-2 rounded-lg w-full max-w-xl mt-6 shadow-lg",
  inputClassName = "flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0",
  buttonClassName = "bg-blue-600 hover:bg-blue-700 text-white ml-4",
  hideButton = false,
  hideIcon = false,
  placeholder = "Type to search...",
}: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  return (
    <div className={className}>
      {!hideIcon && <Search className="text-gray-400 mr-3" />}
      <Input
        name="Search"
        aria-label="Search"
        value={value}
        onChange={handleInputChange}
        type="text"
        placeholder={placeholder}
        className={inputClassName}
      />
      {!hideButton && (
        <Button className={buttonClassName} onClick={handleSearch}>
          Search
        </Button>
      )}
    </div>
  );
}

export default SearchBar; 