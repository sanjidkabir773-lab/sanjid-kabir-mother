import { useAppStore } from '../../store/useAppStore'
import { AnimatePresence, motion } from 'framer-motion'

export default function NotificationCenter(){
  const notifications = useAppStore(s=>s.notifications)
  const remove = useAppStore(s=>s.removeNotification)

  if(!notifications || notifications.length === 0) return null

  return (
    <div className="fixed right-6 top-6 z-50 space-y-3" aria-live="polite">
      <AnimatePresence initial={false}>
        {notifications.map(n => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="glass-card p-3 rounded-lg w-80"
            role="status"
          >
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
      </AnimatePresence>
    </div>
  )
}
