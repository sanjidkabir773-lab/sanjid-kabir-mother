import React from 'react'
import Sidebar from './Sidebar'
import MobileNav from './MobileNav'
import GlobalVideo from '../video/GlobalVideo'
import NotificationCenter from '../notifications/NotificationCenter'

const AppShell: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="app-shell flex min-h-screen">
      <aside className="hidden md:block w-72 p-4">
        <Sidebar />
      </aside>
      <div className="flex-1">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <main className="min-h-screen">
          {children}
        </main>
      </div>
      <GlobalVideo />
      <NotificationCenter />
    </div>
  )
}

export default AppShell
