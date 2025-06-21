import AchievementsSection from "@/components/sections/achievements";
import CarouselSection from "@/components/sections/carousel-section";
import HeroSection from "@/components/sections/hero";
import { ScrollingTags } from "./ScrollingTags";

/* eslint-disable @next/next/no-img-element */
export default function Home() {

  return (
    <div>
      <HeroSection />
      <ScrollingTags />
      <CarouselSection />
      <AchievementsSection />
    </div >
  );
}


