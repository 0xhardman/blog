import { useState } from 'react'
import Link from 'next/link'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const items = [
    { href: '/', name: 'blog' },
    { href: '', name: 'project' },
    { href: '', name: 'about' },
  ]
  return (
    <>
      <div className="hidden sm:flex fixed top-0 w-full justify-center ">
        <div className="flex justify-between w-full mx-4 max-w-2xl">
          {items.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.href}>{item.name}</Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex cursor-pointer flex-col sm:hidden">
        <div
          className="w-full"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          menu
        </div>
        {isMenuOpen && (
          <div className="flex  flex-col w-full items-center justify-center">
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
