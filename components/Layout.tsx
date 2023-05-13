import Header from './Header'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header></Header>
      <div className="mt-5">{children}</div>
    </div>
  )
}
