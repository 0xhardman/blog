"use client";

import React from "react";
import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function CarouselSection() {
    // Using the NFT image from public directory
    const images = [
        "/nft/BitmapPunks%232091594.png",
        "/nft/0xmonkey%231331.png",
        "/nft/0xmonkey%231333.png",
        "/nft/doge.png",
        "/nft/loong.png",
        "/nft/cat.gif",
        "/nft/noncebird.png"
    ];

    return (
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
                    {/* Text content */}
                    <div className="flex flex-col h-full lg:w-2/5 lg:sticky lg:top-28 justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-vt323 mb-6 text-center lg:text-left">Pixel Zoo Keeper</h1>
                            <div className="h-1 w-20 bg-black mb-6 mx-auto lg:mx-0"></div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Pixels should have been abandoned in an era of increasingly advanced display devices, but in my eyes, pixel art carries a nostalgic haziness.
                                Through the assembly of pixel blocks, it leaves room for imagination. Pixel art always brings me surprises.
                                Since entering the blockchain world, I&apos;ve been deeply attracted to this art form.
                                I welcome any pixel artists to contact me.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link
                                href="https://opensea.io/0xb15115a15d5992a756d003ae74c0b832918fab75"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 bg-[#2081E2] hover:bg-[#1868b7] text-white py-3 px-6 rounded-lg transition-all font-medium"
                                aria-label="View my NFT collection on OpenSea"
                            >
                                <span>Check my collection on</span>
                                <Image
                                    src="/opensea-logo.svg"
                                    alt="OpenSea"
                                    width={24}
                                    height={24}
                                    className="filter brightness-0 invert"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="w-full lg:w-3/5 max-w-xl mx-auto">
                        <div className="bg-white p-2 rounded-xl shadow-xl">
                            <Carousel images={images} className="rounded-lg overflow-hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
