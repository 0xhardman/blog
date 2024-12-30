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
    return <header className="flex items-center px-4 md:px-8 backdrop-blur-md bg-white/50 justify-between  py-3 md:py-6 border-b fixed w-full top-0 z-10">
        <div className="flex items-center ">
            <img className="w-[48px] md:w-[54px]" src="/logo.png" alt="logo" />
            <h1 className="text-xl font-bold hidden md:block">0xHardman</h1>
        </div>
        <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-900 font-semibold">
                <li><a href="#intro">Intro</a></li>
                <li><a href="#achievements">Experience</a></li>
                <li><Link href="https://0xhardman.medium.com/" target="_blank">Articles</Link></li>
            </ul>
        </div>
        <div className="md:hidden flex">
            <Drawer>
                <DrawerTrigger asChild>
                    <button className="text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="p-4">
                        <DrawerHeader>
                            <DrawerTitle>Menu</DrawerTitle>
                        </DrawerHeader>
                        <ul className="flex flex-col gap-4 text-gray-900 font-semibold">
                            <li><a href="#intro">Intro</a></li>
                            <li><a href="#achievements">Experience</a></li>
                            <li><Link href="https://0xhardman.medium.com/" target="_blank">Articles</Link></li>

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