import AchievementsSection from "@/components/sections/achievements";
import { ScrollingTags } from "./ScrollingTags";
import HeroSection from "@/components/sections/hero";

/* eslint-disable @next/next/no-img-element */
export default function Home() {

  return (
    <div>
      <HeroSection />
      <ScrollingTags />
      <AchievementsSection />
    </div >
  );
}


