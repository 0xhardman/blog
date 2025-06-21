"use client";

import React from "react";
import { Carousel } from "@/components/ui/carousel";

export default function CarouselSection() {
    // Using the NFT image from public directory
    const images = [
        "/nft/BitmapPunks%232091594.png",
        "/nft/0xmonkey%231331.png",
        "/nft/0xmonkey%231333.png",
        "/nft/doge016.png",
        "/nft/loong.png",
        "/nft/cat.gif",
        "/nft/noncebird.png"
    ];

    return (
        <section className="px-4 md:px-0 mt-10">
            <h1 className='text-4xl mt-4 md:mt-8 font-bold container mx-auto text-center font-vt323'>Pixel Zoo Keeper</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10">
                <div className="max-w-md">
                    <p className="text-gray-700 leading-relaxed">
                        Pixels should have been abandoned in an era of increasingly advanced display devices, but in my eyes, pixel art carries a nostalgic haziness.
                        Through the assembly of pixel blocks, it leaves room for imagination. Pixel art always brings me surprises.
                        Since entering the blockchain world, I&apos;ve been deeply attracted to this art form.
                        I welcome any pixel artists to contact me.
                    </p>
                </div>
                <div className="w-[80vw] lg:w-[400px]">
                    <Carousel images={images} className="rounded-lg shadow-lg" />
                </div>
            </div>

        </section>
    );
}
