import React from "react";
import { Badge } from "@/components/ui/badge";

export interface TagItemProps {
  tag: string;
  index: number;
  onTagClick?: (tag: string) => void;
  renderTag?: (tag: string, index: number) => React.ReactNode;
}

const textColorClass = "text-[#9EABB8]";

const TagItem: React.FC<TagItemProps> = ({ tag, index, onTagClick, renderTag }) => {
  if (renderTag) {
    return <>{renderTag(tag, index)}</>;
  }
  if (onTagClick) {
    return (
      <Badge
        asChild
        className={`bg-gray-800 text-sm hover:bg-gray-700 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${textColorClass}`}
      >
        <button
          type="button"
          tabIndex={0}
          aria-label={`Tag: ${tag}`}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </button>
      </Badge>
    );
  }
  return (
    <Badge className={`bg-gray-800  cursor-pointer ${textColorClass}`}>
      {tag}
    </Badge>
  );
};

export default TagItem; 