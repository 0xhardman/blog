/* eslint-disable @next/next/no-img-element */
'use client'
import { useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AchievementsSection() {
    return <div id="achievements" className='px-4 md:px-0'>
        <ProjectCarousel />
        <HackathonCarousel />
    </div>
}

function ProjectCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)

    //     const element = scrollRef.current
    //     const container = containerRef.current

    //     if (element && container) {
    //         const scrollWidth = container.scrollWidth
    //         const windowWidth = window.innerWidth

    //         gsap.to(container, {
    //             x: -(scrollWidth - windowWidth),
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: element,
    //                 start: "top top",
    //                 end: "+=100%",
    //                 pin: true,
    //                 scrub: 1,
    //             }
    //         })
    //     }
    // }, [])
    return <div ref={scrollRef} className='w-full pt-24'>
        <div className='flex flex-col'>
            <h1 className='text-4xl mt-8 font-bold container md:mx-auto'>Projects</h1>
            <p className='text-gray-600 mt-4 container mx-auto'>
                I specialize in blockchain and full-stack development, with expertise in Rust, Solana, Ethereum, and modern web technologies. My projects demonstrate strong technical capabilities in DeFi, NFT, and DAO domains.
            </p>
        </div>
        <div className='mt-8 w-full overflow-scroll'>
            <div ref={containerRef} className='flex gap-4 w-full container mx-auto'>
                {[
                    {
                        title: "High-Frequency Trading System",
                        period: "2024.01 - Present",
                        description: "Developed a cryptocurrency trading system using Rust, featuring real-time data processing and automated trading strategies. Achieved millisecond-level execution using Tokio for concurrency and Docker for deployment.",
                        tags: ["Rust", "Tokio", "Docker", "GitLab CI", "Binance API"],
                        image: "https://placehold.co/600x400?text=HFT+System",
                        link: ""
                    },
                    {
                        title: "Layer 2 DEX Development",
                        period: "2023.10 - 2024.01",
                        description: "Contributed to a Layer 2 decentralized exchange (DEX) as a core developer. Developed key features for token swapping, liquidity provision, and points system, focusing on optimizing user experience and transaction efficiency.",
                        tags: ["Layer2", "DEX", "AMM", "DeFi"],
                        image: "https://placehold.co/600x400?text=Layer2+DEX",
                        link: ""
                    },
                    {
                        title: "CryptoDCA Development",
                        period: "2024.06 - 2024.08",
                        description: "Built CryptoDCA, a DeFi application enabling automated dollar-cost averaging strategies for cryptocurrency investments.",
                        tags: ["DeFi", "DCA", "Smart Contracts"],
                        image: "/achievements/cryptodca.png",
                        link: "https://cryptodca.xyz"
                    },
                    {
                        title: "Data2.cash Development",
                        period: "2023.09 - 2023.12",
                        description: "Built a privacy-preserved user portrait data layer using ZK, HE, and MPC technologies. Developed features for data staking, user portrait generation, and passive income earning while ensuring data privacy.",
                        tags: ["Zero Knowledge Proof", "MPC", "Web3", "Privacy Computing"],
                        image: "/achievements/data2cash.png",
                        link: "https://data2.cash"
                    },
                    {
                        title: "Donate3 Development",
                        period: "2023.04 - 2023.08",
                        description: "Led development of Donate3, a Web3 donation platform enabling creators and public goods projects to receive multi-chain cryptocurrency donations with EAS certificate generation.",
                        tags: ["Web3", "Multi-chain", "EAS", "DApp"],
                        image: "/achievements/donate3.png",
                        link: "https://donate3.xyz"
                    },
                    {
                        title: "MyFirstLayer2 Contribution",
                        period: "2023.06 - 2023.10",
                        description: "Contributed to MyFirstLayer2, an educational platform sponsored by Ethereum Foundation, helping users understand and interact with Layer 2 solutions.",
                        tags: ["Layer2", "Education", "Ethereum"],
                        image: "/achievements/myfirstlayer2.png",
                        link: "https://layer2.myfirst.io/"
                    },
                    {
                        title: "LXDAO Website Development",
                        period: "2023.11 - 2023.12",
                        description: "Developed and maintained LXDAO's official website, a Web3 R&D-focused DAO supporting public goods development.",
                        tags: ["Frontend", "Web3", "DAO"],
                        image: "/achievements/lxdao.png",
                        link: "https://lxdao.io"
                    },
                    {
                        title: "NFT Collection Platform",
                        period: "2021.11 - 2022.03",
                        description: "Created a Solana-based digital collection platform serving 1M+ users. Implemented comprehensive features including NFT system, user management, and private network deployment.",
                        tags: ["Solana", "Rust", "React", "Redis", "PostgreSQL"],
                        image: "/achievements/jart.png",
                        link: "https://www.joy-art.cn/"
                    },
                    {
                        title: "MM Capital Website Development",
                        period: "2023.12 - 2024.01",
                        description: "Developed the official website for MM Capital, a digital asset investment firm. Built a modern, responsive platform featuring investment portfolio showcase, team introduction, and multi-language support for global audience.",
                        tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
                        image: "/achievements/mmcapital.png",
                        link: "https://www.mmcapital.cn/"
                    },
                    {
                        title: "NX Fund Website Development",
                        period: "2023.11 - 2024.01",
                        description: "Built the official website for NX Fund, a Web3 venture capital firm. Implemented responsive design, multi-language support",
                        tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
                        image: "/achievements/nxfund.png",
                        link: "https://www.nxfund.com/"
                    }
                ].map((project, index) => (
                    <div key={index} onClick={() => {
                        if (project.link) {
                            window.open(project.link, "_blank")
                        }
                    }} className="min-w-[320px] md:min-w-[400px] p-4 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                        <img className="w-full h-48 object-cover rounded-lg border" src={project.image} alt="Project thumbnail" />
                        <div className="py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <div className="text-sm text-gray-500 mb-2">{project.period}</div>
                            <p className="text-gray-700 text-base">
                                {project.description}
                            </p>
                        </div>
                        <div className="pt-4 pb-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

function HackathonCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     // gsap.registerPlugin(ScrollTrigger)

    //     const element = scrollRef.current
    //     const container = containerRef.current

    //     if (element && container) {
    //         const scrollWidth = container.scrollWidth
    //         const windowWidth = window.innerWidth

    //         gsap.to(container, {
    //             x: -(scrollWidth - windowWidth),
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: element,
    //                 start: "top top",
    //                 end: "+=100%",
    //                 pin: true,
    //                 scrub: 1,
    //             }
    //         })
    //     }
    // }, [])
    return <div ref={scrollRef} className='w-full pt-24'>
        <div className='flex flex-col'>
            <h1 className='text-4xl mt-8 font-bold container mx-auto'>Hackathons</h1>
            <p className='text-gray-600 mt-4 container mx-auto'>
                Through hackathons, I collaborate with global developers to build innovative solutions. These competitions sharpen my ability to work in teams, prototype rapidly, and deliver under pressure while expanding my technical expertise.
            </p>
        </div>
        <div className='mt-8 w-full overflow-scroll'>
            <div ref={containerRef} className='flex gap-4 w-full container mx-auto'>
                {[
                    {
                        title: "ETHGlobal Bangkok",
                        date: "Nov 15-17, 2024",
                        image: "/achievements/ethbangkok.png",
                        project: {
                            name: "BangkokOnTime(BOT)",
                            description: "BOT is a cell phone web app that allows users to check the estimated travel time between two locations and purchase insurance for the travel time.",
                            image: "/achievements/bot.png",
                            link: "https://ethglobal.com/showcase/bangkokontime-bot-08k39",
                            achievements: ["🏆 IDEMOED"]
                        }
                    },
                    {
                        title: "ETHGlobal Singapore",
                        date: "Sep 20-22, 2024",
                        image: "/achievements/ethsingapore.png",
                        project: {
                            name: "MACPI",
                            description: "A reliable DAO voting infrastructure for next billion users ⌐◨-◨",
                            image: "/achievements/macpi.png",
                            link: "https://ethglobal.com/showcase/macpi-r3i87",
                            achievements: ["🏆 Ethereum Foundation"]
                        }
                    },
                    {
                        title: "ETHGlobal Istanbul",
                        date: "Nov 17-19, 2023",
                        image: "/achievements/ethistanbul.png",
                        project: {
                            name: "TagTrove",
                            description: "Transitioning Web2 user data to Web3 through a user-centric, privacy preserving way, with a precise marketing channel as data trading use case.",
                            image: "/achievements/tagtrove.png",
                            link: "https://ethglobal.com/showcase/tagtrove-kvtma",
                            achievements: ["🏆 WalletConnect", "🏆 Scroll", "🏆 Mask Network", "🏆 Worldcoin"]
                        }
                    },
                    {
                        title: "ETHOnline 2023",
                        date: "Oct 6-27, 2023",
                        description: "Participated in ETHOnline 2023, developing decentralized applications and exploring new blockchain technologies.",
                        image: "/achievements/ethonline.png",
                        project: {
                            name: "Donate3-InOne",
                            description: "Donate3-inone is a cross-chain donation tool that allows recipients to receive donations from different chains on one chain with just a simple configuration. We hope to lower the barrier to using blockchain and make charity+web3 even simpler.",
                            image: "/achievements/donate3.png",
                            link: "https://ethglobal.com/showcase/donate3-inone-079jo",
                            achievements: ["🏆 IDEMOED"]
                        }
                    },
                    {
                        title: "FVM Space Warp",
                        date: "Jan 20 - Feb 10, 2023",
                        image: "/achievements/fvm.png",
                        project: {
                            name: "DOAAD",
                            description: "DOAAD (Decentralized Open Access Article Database) is a set of decentralized applications dedicated to reconstructing the current academic paper publishing process.",
                            image: "/achievements/doaad.png",
                            link: "https://ethglobal.com/showcase/doaad-xy06j",
                            achievements: ["🏆 IDEMOED"]
                        }
                    }
                ].map((hackathon, index) => (
                    <div key={index} className="min-w-[320px] md:min-w-[400px] p-4 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                        <div className="flex items-center gap-4 mb-4">
                            <img className="w-16 h-16 object-contain rounded-lg border bg-white" src={hackathon.image} alt={`${hackathon.title} logo`} />
                            <div>
                                <div className="font-bold text-lg">{hackathon.title}</div>
                                <div className="text-sm text-gray-500">{hackathon.date}</div>
                            </div>
                        </div>

                        {hackathon.project ? (
                            <div className="border-t pt-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="font-bold text-xl">{hackathon.project.name}</div>
                                    {hackathon.project.link && (
                                        <a href={hackathon.project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                            <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                {hackathon.project.image && (
                                    <img className="w-full h-48 object-cover rounded-lg border mb-3"
                                        src={hackathon.project.image}
                                        alt={`${hackathon.project.name} screenshot`} />
                                )}
                                <p className="text-gray-700 text-base mb-4">
                                    {hackathon.project.description}
                                </p>
                                {hackathon.project.achievements && hackathon.project.achievements.length > 0 && (
                                    <div className="pt-2">
                                        {hackathon.project.achievements.map((achievement, i) => (
                                            <span key={i} className="inline-block bg-yellow-100 rounded-full px-3 py-1 text-sm font-semibold text-yellow-800 mr-2 mb-2">
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="pt-4">
                                {hackathon.description && (
                                    <p className="text-gray-700 text-base">
                                        {hackathon.description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
}