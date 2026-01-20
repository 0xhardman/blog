'use client'
import { Hero0xHardman } from "@/app/Hero0xHardman";
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
    return <section id="intro" className="relative flex flex-col items-center justify-center w-full min-h-[calc(100vh-85px)] py-20 container mx-auto overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center gap-10 relative z-10">
            <div className="flex flex-col justify-center items-center gap-4 md:gap-10">
                <h1 className="text-3xl md:text-4xl font-bold hero-content opacity-0 tracking-tight">
                    <span className="text-black/40">Hi!</span> I&apos;m
                </h1>
                <div className="relative hero-content opacity-0 group">
                    {/* Glow effect behind the ASCII art */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent-secondary/10 to-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                    <Hero0xHardman />
                </div>
                <div className="text-center space-y-4 hero-content hero-description opacity-0">
                    <p className="text-lg md:text-xl text-black/50 max-w-2xl font-light tracking-wide">
                        A non-typical <span className="text-accent font-medium">freedom-seeking</span> full-stack developer.
                    </p>
                    {/* Scroll indicator */}
                    <div className="pt-8 animate-bounce">
                        <svg className="w-6 h-6 mx-auto text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
}