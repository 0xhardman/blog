'use client';

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useAsciiText, graffiti } from 'react-ascii-text';

export function Footer() {
    const asciiTextRef = useAsciiText({
        font: graffiti,
        text: '0xhardman',
    });

    return <footer className="relative mt-20 border-t border-black/5">
        {/* ASCII art divider */}
        <div className="absolute -top-px left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="container mx-auto px-4 py-12">
            {/* ASCII signature */}
            <div className="text-center mb-8 overflow-x-auto">
                <pre
                    ref={asciiTextRef as React.RefObject<HTMLPreElement>}
                    className="text-[8px] md:text-xs text-black/20 inline-block"
                    style={{ fontFamily: 'monospace' }}
                />
            </div>

            <div className="flex flex-col items-center gap-6">
                {/* Social links with glow hover */}
                <ul className="flex items-center gap-6">
                    <li>
                        <Link
                            target="_blank"
                            href="https://github.com/0xhardman"
                            className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/5 transition-all duration-300 hover:bg-accent/10 hover:shadow-glow"
                        >
                            <Github className="w-4 h-4 text-black/50 transition-colors duration-300 group-hover:text-accent" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/0xhardman/"
                            className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/5 transition-all duration-300 hover:bg-accent-secondary/10 hover:shadow-glow-secondary"
                        >
                            <Linkedin className="w-4 h-4 text-black/50 transition-colors duration-300 group-hover:text-accent-secondary" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            target="_blank"
                            href="https://x.com/0xhardman"
                            className="group flex items-center justify-center w-10 h-10 rounded-full bg-black/5 transition-all duration-300 hover:bg-accent/10 hover:shadow-glow"
                        >
                            <Twitter className="w-4 h-4 text-black/50 transition-colors duration-300 group-hover:text-accent" />
                        </Link>
                    </li>
                </ul>

                {/* Copyright */}
                <p className="text-xs text-black/40 font-mono tracking-wider">
                    <span className="text-accent/60">©</span> 2024 <span className="text-accent">0x</span>hardman.eth
                </p>
            </div>
        </div>
    </footer>
}