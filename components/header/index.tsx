import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export function Header() {
    return <header className="flex items-center px-8 backdrop-blur-md bg-white/50 justify-between py-6 border-b fixed w-full top-0 z-10">
        <div className="flex items-center ">
            <img width="54px" className="" src="/logo.png" alt="logo" />
            <h1 className="text-xl font-bold">0xHardman</h1>
        </div>
        <ul className="flex items-center gap-8 text-gray-900 font-semibold">
            <li><a href="#intro">Intro</a></li>
            <li><a href="#achievements" >Experience</a></li>
            <li><Link href="https://medium.com/@0xhardman" target="_blank">Articles</Link></li>
        </ul>
        <div className="flex items-center gap-4">
            <ConnectButton />
        </div>
    </header>
}