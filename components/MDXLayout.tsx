import { ReactNode } from 'react'
export default function MDXLayout({ children }: { children: ReactNode }) {
  return <div className="bg-gray-600">{children}</div>
}
