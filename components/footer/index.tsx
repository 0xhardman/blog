import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return <footer className="flex flex-col items-center justify-center w-full py-4 gap-2 text-gray-600 text-sm">
        <div>
            <p>Copyright © 2024 0xhardman</p>
        </div>
        <ul className="flex items-center gap-4">
            <li>
                <Link target="_blank" href="https://github.com/0xhardman">
                    <Github className="w-4 h-4" />
                </Link>
            </li>
            <li>
                <Link target="_blank" href="https://www.linkedin.com/in/0xhardman/">
                    <Linkedin className="w-4 h-4" />
                </Link>
            </li>
            <li>
                <Link target="_blank" href="https://x.com/0xhardman">
                    <Twitter className="w-4 h-4" />
                </Link>
            </li>
        </ul>
    </footer>
}