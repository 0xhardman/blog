import AchievementsSection from "@/components/sections/achievements";
import HeroSection from "@/components/sections/hero";
import { ScrollingTags } from "./ScrollingTags";

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


