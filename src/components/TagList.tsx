import React from "react";
import TagItem from "./TagItem";
import TitleTag from "./TitleTag";
import type { TitleTagProps } from "./TitleTag";

interface TagListProps {
  title?: React.ReactNode;
  titleAs?: TitleTagProps["as"];
  tags: string[];
  onTagClick?: (tag: string) => void;
  renderTag?: (tag: string, index: number) => React.ReactNode;
  emptyText?: React.ReactNode;
  maxVisible?: number;
  className?: string;
}

const TagList: React.FC<TagListProps> = ({
  title,
  titleAs = "h3",
  tags,
  onTagClick,
  renderTag,
  emptyText = "No tags available",
  maxVisible,
  className = "",
}) => {
  const visibleTags = maxVisible ? tags.slice(0, maxVisible) : tags;

  return (
    <section
      className={`mt-8 px-6 max-w-5xl mx-auto ${className}`}
      aria-label={typeof title === "string" ? title : undefined}
    >
      {title && (
        <TitleTag as={titleAs} className="text-white text-lg font-semibold mb-4">
          {title}
        </TitleTag>
      )}
      {visibleTags.length === 0 ? (
        <div className="text-gray-400 text-base italic">{emptyText}</div>
      ) : (
        <ul data-slot="tags-list"
          className="flex flex-wrap gap-3" role="list">
          {visibleTags.map((tag, idx) => (
            <li key={tag} className="list-none">
              <TagItem tag={tag} index={idx} onTagClick={onTagClick} renderTag={renderTag} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TagList; 