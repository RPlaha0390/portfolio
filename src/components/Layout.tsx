import type { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="lg:ml-[22rem] lg:w-[calc(100%-22rem)]">
        {children}
        <Footer />
      </main>
    </div>
  )
}
