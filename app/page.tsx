import { Hero0xHardman } from "./Hero0xHardman";
import { ScrollingTags } from "./ScrollingTags";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-100px)] py-20 container mx-auto">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <Hero0xHardman />
          </div>
        </div >
      </section >
      <ScrollingTags />
      <section>

      </section>
    </div >
  );
}
