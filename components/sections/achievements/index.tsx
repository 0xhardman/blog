/* eslint-disable @next/next/no-img-element */
'use client'
export default function AchievementsSection() {
    return <section className='w-full min-h-screen pt-24'>
        <div className='flex flex-col h-full'>
            <h1 className='text-4xl mt-8 font-bold container mx-auto'>Projects</h1>
        </div>
        <div className='mt-8 w-full overflow-x-auto'>
            <div className='flex gap-4 w-full container mx-auto'>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="min-w-[400px] py-4 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
                        <img className="w-full h-48 object-cover" src="/logo.png" alt="Project thumbnail" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Project Title</div>
                            <p className="text-gray-700 text-base">
                                A brief description of the project and its key features. This showcases the main achievements and technical highlights.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#technology</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#framework</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tools</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}