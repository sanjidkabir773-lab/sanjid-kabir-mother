import { useState } from 'react'
import Head from 'next/head'
import { useAppStore } from '../store/useAppStore'

export default function DevPage(){
  const video = useAppStore(s=>s.video)
  const connectionStatus = useAppStore(s=>s.connectionStatus)
  const user = useAppStore(s=>s.user)
  const partner = useAppStore(s=>s.partner)
  const toggleVideo = useAppStore(s=>s.toggleVideo)
  const expandVideo = useAppStore(s=>s.expandVideo)
  const addNotification = useAppStore(s=>s.addNotification)

  const [lastId, setLastId] = useState<string | null>(null)

  function simulatePartnerVideo(){
    // mark video active and add a notification as if partner started
    useAppStore.setState({ video: { active: true, expanded: false } })
    const id = Date.now().toString()
    setLastId(id)
    addNotification({ id, title: `📹 ${partner.name} started a video connection.`, message: 'Tap to open or dismiss.' })
  }

  function simulateNotification(){
    const id = Date.now().toString()
    setLastId(id)
    addNotification({ id, title: '✨ New Moment available', message: 'A new shared Moment is waiting for you.' })
  }

  function toggleConnection(){
    const next = connectionStatus === 'connected' ? 'reconnecting' : connectionStatus === 'reconnecting' ? 'offline' : 'connected'
    useAppStore.setState({ connectionStatus: next })
  }

  return (
    <div className="p-6">
      <Head>
        <title>Dev — Sanjid × Kabir</title>
      </Head>

      <h1 className="text-2xl font-semibold mb-4">Developer Controls</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Video</h3>
          <p className="text-slate-400 text-sm">Global video state: <strong>{video.active ? 'Active' : 'Inactive'}</strong> {video.expanded && '(Expanded)'}</p>
          <div className="mt-3 flex gap-2">
            <button onClick={()=>toggleVideo()} className="px-3 py-2 rounded bg-accent text-slate-900 font-medium">Toggle Video</button>
            <button onClick={()=>expandVideo(!video.expanded)} className="px-3 py-2 rounded bg-white/5">Toggle Expand</button>
            <button onClick={simulatePartnerVideo} className="px-3 py-2 rounded bg-blue-600 text-white">Simulate Partner Video</button>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Notifications</h3>
          <p className="text-slate-400 text-sm">Last created id: {lastId || '—'}</p>
          <div className="mt-3 flex gap-2">
            <button onClick={simulateNotification} className="px-3 py-2 rounded bg-accent text-slate-900 font-medium">Send Notification</button>
            <button onClick={()=>{
              if(lastId) useAppStore.setState(state=>({ notifications: state.notifications.filter(n=>n.id!==lastId) }))
            }} className="px-3 py-2 rounded bg-white/5">Remove Last</button>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Connection</h3>
          <p className="text-slate-400 text-sm">Current: <strong>{connectionStatus}</strong></p>
          <div className="mt-3">
            <button onClick={toggleConnection} className="px-3 py-2 rounded bg-yellow-500">Cycle Connection Status</button>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Profiles</h3>
          <p className="text-slate-400 text-sm">You: {user.name} • Partner: {partner.name}</p>
          <div className="mt-3 flex gap-2">
            <button onClick={()=>useAppStore.setState({ user: { ...user, name: 'Sanjid' }})} className="px-3 py-2 rounded bg-white/5">Reset Names</button>
          </div>
        </div>
      </div>

    </div>
  )
}
