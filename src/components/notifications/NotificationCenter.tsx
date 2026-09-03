import { useAppStore } from '../../store/useAppStore'

export default function NotificationCenter(){
  const notifications = useAppStore(s=>s.notifications)
  const remove = useAppStore(s=>s.removeNotification)

  if(!notifications || notifications.length === 0) return null

  return (
    <div className="fixed right-6 top-6 z-50 space-y-3">
      {notifications.map(n=> (
        <div key={n.id} className="glass-card p-3 rounded-lg w-80" role="status" aria-live="polite">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">{n.title}</div>
              {n.message && <div className="text-slate-300 text-sm">{n.message}</div>}
            </div>
            <div>
              <button onClick={()=>remove(n.id)} className="text-xs text-slate-400">Dismiss</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
