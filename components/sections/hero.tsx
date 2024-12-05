'use client'
import { Hero0xHardman } from "@/app/Hero0xHardman";
import JobLooking from "@/components/job-looking";
import { useEffect } from "react";
import gsap from "gsap";

export default function HeroSection() {
    useEffect(() => {
        const tl = gsap.timeline();
        gsap.set(".hero-content", { opacity: 0, y: -50 });
        tl.to(".hero-content:not(.hero-description)", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 1,
            ease: "power3.out"
        })
            .to(".hero-description", {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 2.5,
                ease: "power3.out"
            });
    }, []);
    return <section id="intro" className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-85px)] py-20 container mx-auto">
        <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-4 md:gap-10">
                <h1 className="text-4xl font-bold hero-content opacity-0">Hi! I&apos;m</h1>
                <div className="relative hero-content opacity-0">
                    <Hero0xHardman />
                    <div className="absolute -bottom-4 -right-8 md:-bottom-8 md:-right-16">
                        <JobLooking />
                    </div>
                </div>
                <div className="text-center space-y-4 hero-content hero-description opacity-0">
                    <p className="text-xl text-gray-600 max-w-2xl">
                        A non-typical freedom-seeking full-stack developer.
                    </p>
                </div>
            </div>
        </div >
    </section >
}