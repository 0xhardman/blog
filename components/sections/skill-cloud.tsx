/* eslint-disable @next/next/no-img-element */
"use client"

import { IconCloud } from "@/components/magicui/icon-cloud"
import { useState } from "react"

// Define a type for our icon data with optional custom icon path
type IconData = {
  slug: string;
  title: string;
  desc: string;
  proficiency: number;
  customIconPath?: string;
};

const iconData: IconData[] = [
  { slug: "nextdotjs", title: "Next.js", desc: "Expert in building full-stack applications with advanced features and optimizations", proficiency: 5 },
  { slug: "react", title: "React", desc: "Proficient in developing modern, interactive UIs with advanced state management", proficiency: 5 },
  { slug: "typescript", title: "TypeScript", desc: "Daily driver for type-safe frontend and backend development", proficiency: 5 },
  { slug: "rust", title: "Rust", desc: "Used for developing high-performance quantitative trading systems", proficiency: 4 },
  { slug: "python", title: "Python", desc: "Utilized for scripting, automation, and data processing tasks", proficiency: 4 },
  { slug: "django", title: "Django", desc: "Experience with Python's robust web framework for rapid development", proficiency: 4 },
  { slug: "solidity", title: "Solidity", desc: "Experience building ERC20, ERC721, and ERC1155 smart contracts", proficiency: 4 },
  { slug: "bitcoin", title: "Bitcoin", desc: "Blockchain development experience with Bitcoin protocols", proficiency: 3 },
  { slug: "ethereum", title: "Ethereum", desc: "Development across multiple EVM chains including Mainnet, Optimism, Base, and Polygon", proficiency: 5 },
  { slug: "solana", title: "Solana", desc: "Experience with Solana blockchain development and ecosystem", proficiency: 3 },
  { slug: "docker", title: "Docker", desc: "Proficient in containerization for consistent development and deployment environments", proficiency: 5 },
  { slug: "kubernetes", title: "Kubernetes", desc: "Recently learning container orchestration for scalable deployments", proficiency: 3 },
  { slug: "github", title: "GitHub", desc: "Experienced with Git workflows and CI/CD pipeline integration", proficiency: 5 },
  { slug: "gitlab", title: "GitLab", desc: "Skilled in DevOps workflows and automated testing/deployment", proficiency: 4 },
  { slug: "postgresql", title: "PostgreSQL", desc: "Primary database of choice for robust, scalable data storage solutions", proficiency: 5 },
  { slug: "mysql", title: "MySQL", desc: "Secondary database experience for various application requirements", proficiency: 4 },
  { slug: "sqlite", title: "SQLite", desc: "Used for lightweight, embedded database solutions", proficiency: 4 },
  { slug: "redis", title: "Redis", desc: "Implemented for high-performance caching and session management", proficiency: 4 },
  { slug: "apachekafka", title: "Kafka", desc: "Experience with message queuing for distributed system communication", proficiency: 3 },
  { slug: "openai", title: "AI Integration", desc: "Recent exploration in AI technologies and integrations", proficiency: 3 },
  { slug: "n8n", title: "n8n", desc: "Configured workflow automation nodes for various integration tasks", proficiency: 3 },
  { slug: "javascript", title: "JavaScript", desc: "Core language for web development across frontend and backend", proficiency: 5 },
  { slug: "nodedotjs", title: "Node.js", desc: "Runtime environment for server-side JavaScript applications", proficiency: 5 },
  { slug: "vercel", title: "Vercel", desc: "Preferred platform for deploying Next.js and frontend applications", proficiency: 5 },
  { slug: "celestia", title: "Celestia", desc: "Experience with modular blockchain development", proficiency: 3, customIconPath: "/skill/celestia.svg" },
  { slug: "polygon", title: "Polygon", desc: "Developed applications on Polygon's scaling solution", proficiency: 4 },
  { slug: "zircuit", title: "Zircuit", desc: "Experience with EVM-compatible ZK rollup development", proficiency: 3, customIconPath: "/skill/zircuit.svg" },
  { slug: "visualstudiocode", title: "VS Code", desc: "Primary development environment with customized workflows", proficiency: 5, customIconPath: "/skill/vscode.svg" },
  { slug: "git", title: "Git", desc: "Version control system for all development projects", proficiency: 5 },
  { slug: "html5", title: "HTML5", desc: "Semantic markup for structured web content", proficiency: 5 },
  { slug: "css", title: "CSS3", desc: "Styling and layout for responsive web applications", proficiency: 5 },
  { slug: "tailwindcss", title: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI development", proficiency: 5 },
  { slug: "php", title: "PHP", desc: "Early career experience with server-side web development", proficiency: 3 },
  { slug: "java", title: "Java", desc: "Academic experience through university coursework", proficiency: 3, customIconPath: "/skill/java.svg" },
  { slug: "c", title: "C", desc: "Used for algorithm competitions and foundational programming", proficiency: 4 },
  { slug: "cplusplus", title: "C++", desc: "Applied in competitive programming and algorithm challenges", proficiency: 4 },
  { slug: "go", title: "Go", desc: "Experience with backend development using this efficient language", proficiency: 4 },
  { slug: "gin", title: "Gin", desc: "Used Go's Gin framework for building web applications", proficiency: 4 },
  { slug: "figma", title: "Figma", desc: "Regular use for UI/UX design and developer collaboration", proficiency: 4 },
  { slug: "adobephotoshop", title: "Photoshop", desc: "Design skills developed since high school for graphic work", proficiency: 4 },
  { slug: "telegram", title: "Telegram Bot", desc: "Experience developing automated bots for the Telegram messaging platform", proficiency: 4 },
  { slug: "discord", title: "Discord Bot", desc: "Experience developing automated bots for the Discord messaging platform", proficiency: 4 },
]

export default function SkillCloud() {
  const [hoveredIcon, setHoveredIcon] = useState<(typeof iconData)[0] | null>(null)
  
  const images = iconData.map((item) => {
    // Use custom icon path if available
    if (item.customIconPath) {
      return item.customIconPath;
    }
    // Use Simple Icons for everything else
    return `https://cdn.simpleicons.org/${item.slug}/${item.slug}`
  })

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


// Star rating component to display proficiency
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex md:justify-center space-x-1 mt-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function InfoPanel({ hoveredIcon }: { hoveredIcon: (typeof iconData)[0] | null }) {
  // Function to get the correct icon URL
  const getIconUrl = (icon: typeof iconData[0]) => {
    // Use custom icon path if available
    if (icon.customIconPath) {
      return icon.customIconPath;
    }
    // Use Simple Icons for everything else
    return `https://cdn.simpleicons.org/${icon.slug}/${icon.slug}`
  }
  
  return <div className="w-full md:w-80 h-auto md:h-96 bg-white rounded-xl shadow-lg border border-neutral-200 p-4 md:p-6 flex flex-col dark:border-neutral-800">
    {hoveredIcon ? (
      <div className="flex flex-row md:flex-col items-center md:justify-center h-full md:text-center space-x-4 md:space-x-0">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 md:mb-4">
          <img
            src={getIconUrl(hoveredIcon)}
            alt={hoveredIcon.title}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
        <div className="flex-1 md:flex-none ">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">{hoveredIcon.title}</h3>
          <StarRating rating={hoveredIcon.proficiency} />
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