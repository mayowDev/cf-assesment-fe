import React from "react";

export interface TitleTagProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

const TitleTag: React.FC<TitleTagProps> = ({ as = "h3", className = "", children }) => {
  switch (as) {
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;
    case "h5":
      return <h5 className={className}>{children}</h5>;
    case "h6":
      return <h6 className={className}>{children}</h6>;
    default:
      return <h3 className={className}>{children}</h3>;
  }
};

export default TitleTag; 