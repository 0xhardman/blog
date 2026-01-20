import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

/* eslint-disable @next/next/no-img-element */
export function Header() {
    return <header className="flex items-center px-4 md:px-8 backdrop-blur-xl bg-white/70 justify-between py-3 md:py-5 border-b border-black/5 fixed w-full top-0 z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-accent/30 after:to-transparent">
        <div className="flex items-center gap-2">
            <img className="w-[48px] md:w-[54px] transition-transform duration-300 hover:scale-110 hover:rotate-3" src="/logo.png" alt="logo" />
            <h1 className="text-lg font-bold hidden md:block tracking-tight">
                <span className="text-accent">0x</span>hardman<span className="text-black/40">.eth</span>
            </h1>
        </div>
        <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
                <li><a href="#intro" className="text-black/70 hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 hover:after:w-full">Intro</a></li>
                <li><a href="#achievements" className="text-black/70 hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 hover:after:w-full">Experience</a></li>
                <li><Link href="https://0xhardman.medium.com/" target="_blank" className="text-black/70 hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 hover:after:w-full">Articles</Link></li>
            </ul>
        </div>
        <div className="md:hidden flex">
            <Drawer>
                <DrawerTrigger asChild>
                    <button className="text-black/70 hover:text-accent transition-colors duration-200 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="p-6">
                        <DrawerHeader className="pb-4">
                            <DrawerTitle className="text-lg font-bold tracking-tight">
                                <span className="text-accent">0x</span>hardman<span className="text-black/40">.eth</span>
                            </DrawerTitle>
                        </DrawerHeader>
                        <ul className="flex flex-col gap-1">
                            <li><a href="#intro" className="block py-3 px-4 text-black/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 font-medium">Intro</a></li>
                            <li><a href="#achievements" className="block py-3 px-4 text-black/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 font-medium">Experience</a></li>
                            <li><Link href="https://0xhardman.medium.com/" target="_blank" className="block py-3 px-4 text-black/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 font-medium">Articles</Link></li>
                        </ul>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
        <div className="md:flex items-center gap-4 hidden">
            <ConnectButton
                accountStatus={{
                    smallScreen: 'avatar',
                    largeScreen: 'full',
                }}
            />
        </div>
    </header>
}