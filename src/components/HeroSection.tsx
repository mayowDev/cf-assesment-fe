import React, { useState } from "react";
import SearchBar from "./SearchBar";

function HeroSection() {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-md overflow-hidden mt-8">
      <img  src="/task1/hero-bg.webp" className="w-full h-96 object-cover"  alt="Hero Background" loading="lazy" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <SearchBar value={searchValue} onChange={setSearchValue} onSearch={onSearch} />
      </div>
    </div>
  );
}

export default HeroSection; 