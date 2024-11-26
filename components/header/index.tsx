/* eslint-disable @next/next/no-img-element */
export function Header() {
    return <header className="flex items-center px-8 backdrop-blur-xl bg-transparent  justify-between py-6 border-b fixed w-full top-0 bg-white">
        <div className="flex items-center ">
            <img width="54px" className="" src="/logo.png" alt="logo" />
            <h1 className="text-xl font-bold">0xHardman</h1>
        </div>
        <ul className="flex items-center gap-8 text-gray-900 font-semibold">
            <li>Intro</li>
            <li>Experience</li>
            <li>Articles</li>
        </ul>
        <div className="flex items-center gap-4">
            <button>Connect</button>
        </div>
    </header>
}