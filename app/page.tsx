import { Hero0xHardman } from "./Hero0xHardman";
import { ScrollingTags } from "./ScrollingTags";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-85px)] py-20 container mx-auto">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-4xl font-bold">Hi! I&apos;m</h1>
            <div className="relative ">
              <Hero0xHardman />
              <div className="absolute -bottom-8 -right-16">
                <JobLooking />
              </div>
            </div>
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-600 max-w-2xl">
                A non-typical freedom-seeking full-stack developer.
              </p>
            </div>
          </div>
        </div >
      </section >
      <ScrollingTags />
      <section>

      </section>
    </div >
  );
}

function JobLooking() {
  return (
    <div className="bg-yellow-400 uppercase  text-black px-3 py-2 rounded-lg font-bold text-sm border-2 border-black transform rotate-[-4deg] shadow-lg hover:rotate-[4deg] transition-transform">
      Looking for a job
    </div>
  );
}