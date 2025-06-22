import AchievementsSection from "@/components/sections/achievements";
import CarouselSection from "@/components/sections/carousel-section";
import HeroSection from "@/components/sections/hero";
import { ScrollingTags } from "./ScrollingTags";
import SkillCloud from "@/components/sections/skill-cloud";

/* eslint-disable @next/next/no-img-element */
export default function Home() {

  return (
    <div>
      <HeroSection />
      <ScrollingTags />
      <CarouselSection />
      <SkillCloud />
      <AchievementsSection />
    </div >
  );
}


