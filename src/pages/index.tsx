import Head from 'next/head'
import { useEffect, useState } from 'react'
import ModuleCard from '../components/ui/ModuleCard'
import { useAppStore } from '../store/useAppStore'
import { FiChevronRight } from 'react-icons/fi'

export default function Dashboard(){
  const user = useAppStore(s => s.user)
  const partner = useAppStore(s => s.partner)
  const connectionStatus = useAppStore(s => s.connectionStatus)
  const [now, setNow] = useState(new Date())

  useEffect(()=>{
    const t = setInterval(()=>setNow(new Date()),1000)
    return ()=>clearInterval(t)
  },[])

  return (
    <div className="p-6">
      <Head>
        <title>Sanjid × Kabir — Dashboard</title>
      </Head>

      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, {user.name}</h1>
          <p className="text-sm text-slate-300">Connected with {partner.name}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-300">{now.toLocaleDateString()} {now.toLocaleTimeString()}</div>
          <div className="mt-1 text-xs text-slate-400">Status: <span className="font-medium">{connectionStatus}</span></div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ModuleCard title="Chat" subtitle="Private conversation" status="Ready to connect" href="/chat" />
        <ModuleCard title="Study Room" subtitle="Shared study session" status="Sanjid: reading • Kabir: idle" href="/study" />
        <ModuleCard title="Game Room" subtitle="Play together" status="Play Ludo and more" href="/games" />
        <ModuleCard title="Video Call" subtitle="Global call system" status="Video connection inactive" href="/video" />
        <div className="md:col-span-2 glass-card p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Upcoming</h3>
            <div className="text-sm text-slate-400">Future modules</div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-cosmic-1/10 to-deep-blue/20">Coming Soon: Moments</div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-cosmic-2/5 to-deep-blue/10">New Room: Dreamspace</div>
          </div>
        </div>
      </main>
    </div>
  )
}
