/* eslint-disable @next/next/no-img-element */
"use client"

import { IconCloud } from "@/components/magicui/icon-cloud"
import { useState } from "react"

const iconData = [
  { slug: "typescript", title: "TypeScript", desc: "Typed superset of JavaScript that compiles to plain" },
  { slug: "javascript", title: "JavaScript", desc: "High-level programming language for web development" },
  { slug: "dart", title: "Dart", desc: "Client-optimized language for fast apps on any platform" },
  { slug: "java", title: "Java", desc: "Object-oriented programming language and computing platform" },
  { slug: "react", title: "React", desc: "JavaScript library for building user interfaces" },
  { slug: "flutter", title: "Flutter", desc: "UI toolkit for building natively compiled applications" },
  { slug: "android", title: "Android", desc: "Mobile operating system based on Linux kernel" },
  { slug: "html5", title: "HTML5", desc: "Markup language used for structuring web content" },
  { slug: "css3", title: "CSS3", desc: "Style sheet language used for describing presentation" },
  { slug: "nodedotjs", title: "Node.js", desc: "JavaScript runtime built on Chrome's V8 engine" },
  { slug: "express", title: "Express", desc: "Fast, unopinionated web framework for Node.js" },
  { slug: "nextdotjs", title: "Next.js", desc: "React framework for production-grade applications" },
  { slug: "prisma", title: "Prisma", desc: "Next-generation ORM for Node.js and TypeScript" },
  { slug: "amazonaws", title: "AWS", desc: "Comprehensive cloud computing platform" },
  { slug: "postgresql", title: "PostgreSQL", desc: "Advanced open source relational database" },
  { slug: "firebase", title: "Firebase", desc: "Platform for building mobile and web applications" },
  { slug: "nginx", title: "Nginx", desc: "High-performance HTTP server and reverse proxy" },
  { slug: "vercel", title: "Vercel", desc: "Platform for frontend frameworks and static sites" },
  { slug: "testinglibrary", title: "Testing Library", desc: "Simple and complete testing utilities" },
  { slug: "jest", title: "Jest", desc: "JavaScript testing framework with focus on simplicity" },
  { slug: "cypress", title: "Cypress", desc: "End-to-end testing framework for web applications" },
  { slug: "docker", title: "Docker", desc: "Platform for developing, shipping, and running applications" },
  { slug: "git", title: "Git", desc: "Distributed version control system" },
  { slug: "jira", title: "Jira", desc: "Issue tracking and project management tool" },
  { slug: "github", title: "GitHub", desc: "Web-based Git repository hosting service" },
  { slug: "gitlab", title: "GitLab", desc: "Web-based DevOps lifecycle tool" },
  { slug: "visualstudiocode", title: "VS Code", desc: "Source code editor with rich ecosystem" },
  { slug: "androidstudio", title: "Android Studio", desc: "Official IDE for Android development" },
  { slug: "sonarqube", title: "SonarQube", desc: "Platform for continuous inspection of code quality" },
  { slug: "figma", title: "Figma", desc: "Collaborative interface design tool" },
]

export default function SkillCloud() {
  const [hoveredIcon, setHoveredIcon] = useState<(typeof iconData)[0] | null>(null)

  const images = iconData.map((item) => `https://cdn.simpleicons.org/${item.slug}/${item.slug}`)

  const handleIconHover = (iconIndex: number | null) => {
    if (iconIndex !== null && iconIndex < iconData.length) {
      setHoveredIcon(iconData[iconIndex])
    } else {
      setHoveredIcon(null)
    }
  }

  return (
    <div className='px-4 md:px-6 lg:px-8 pt-16 md:pt-24'>
      <div className="flex flex-col">
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-2'>Skills</h1>
        <p className='text-center text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto'>Hover over any icon to learn more about my technical expertise</p>

        {/* Main content with responsive layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-6xl w-full mx-auto mt-6">
          {/* Left side - Icon Cloud with caption */}
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 rounded-2xl shadow-sm">
              <IconCloud images={images} onIconHover={handleIconHover} />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click and drag to rotate</p>
          </div>

          {/* Right side - Info Panel */}
          <InfoPanel hoveredIcon={hoveredIcon} />
        </div>
      </div>
    </div>
  )
}


function InfoPanel({ hoveredIcon }: { hoveredIcon: (typeof iconData)[0] | null }) {
  return <div className="w-full md:w-80 h-auto md:h-96 bg-white rounded-xl shadow-lg border border-neutral-200 p-4 md:p-6 flex flex-col dark:border-neutral-800">
    {hoveredIcon ? (
      <div className="flex flex-row md:flex-col items-center md:justify-center h-full md:text-center space-x-4 md:space-x-0">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 md:mb-4">
          <img
            src={`https://cdn.simpleicons.org/${hoveredIcon.slug}/${hoveredIcon.slug}`}
            alt={hoveredIcon.title}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
        <div className="flex-1 md:flex-none">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">{hoveredIcon.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{hoveredIcon.desc}</p>
        </div>
      </div>
    ) : (
      <div className="flex flex-row md:flex-col items-center md:justify-center h-full md:text-center space-x-4 md:space-x-0">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 md:mb-4">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1 md:flex-none">
          <h3 className="text-base md:text-lg font-medium text-gray-500 mb-1 md:mb-2">Hover over an icon</h3>
          <p className="text-gray-400 text-xs md:text-sm">Move your cursor over any technology icon to see more details</p>
        </div>
      </div>
    )}
  </div>
}