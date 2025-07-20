import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const isMobile = useIsMobile();
  const avatarSize = "w-8 h-8";
  const searchInputClasses =
    "pl-9 bg-gray-800 text-white border-none focus:ring-0 rounded-md";

  const parentClass = isMobile
    ? "flex flex-row items-center justify-between gap-58"
    : "flex flex-col gap-3 md:flex-row md:items-center md:justify-between";

  return (
    <header className="bg-black border-b border-gray-800 px-4 py-3 md:px-6 md:py-4">
      <div className={parentClass}>
        {/* Logo & Title */}
        <a href="/" className="flex items-center gap-2" aria-label="Home">
          <img src="/task1/logo.png" alt="Worctionary logo" className="w-10 h-10" />
          <span className="text-white font-semibold text-lg">Worctionary</span>
        </a>

        {/* Navigation: Search & Avatar */}
        <nav className="flex items-center gap-4 md:gap-4 w-full md:w-auto" aria-label="NavigationSite">
          {/* Search */}
          {!isMobile && (
            <div className="relative w-full md:w-48">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <SearchBar
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Search"
                hideButton
                hideIcon
                className="w-48 h-10"
                inputClassName={searchInputClasses}
              />
            </div>
          )}

          {/* Avatar */}
          <Avatar className={avatarSize}>
            <AvatarImage src="/task1/avatar.png" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  );
};

export default Header;