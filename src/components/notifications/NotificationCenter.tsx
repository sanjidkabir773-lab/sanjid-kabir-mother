import { useAppStore } from '../../store/useAppStore'
import { motion } from 'framer-motion'

export default function NotificationCenter(){
  const notifications = useAppStore(s=>s.notifications)
  const remove = useAppStore(s=>s.removeNotification)

  return (
    <div className="fixed right-6 top-6 z-50 space-y-3">
      {notifications.map(n=> (
        <motion.div key={n.id} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0}} className="glass-card p-3 rounded-lg w-80">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">{n.title}</div>
              {n.message && <div className="text-slate-300 text-sm">{n.message}</div>}
            </div>
            <div>
              <button onClick={()=>remove(n.id)} className="text-xs text-slate-400">Dismiss</button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
