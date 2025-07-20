import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TagList from "@/components/TagList";

export default function Home() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <>
      <HeroSection />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </>
  );
}
