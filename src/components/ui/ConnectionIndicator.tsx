import { useAppStore } from '../../store/useAppStore'

export default function ConnectionIndicator(){
  const status = useAppStore(s=>s.connectionStatus)
  const color = status === 'connected' ? 'bg-green-400' : status === 'reconnecting' ? 'bg-yellow-400' : 'bg-slate-400'
  return (
    <div className="flex items-center gap-2">
      <span className={`${color} w-3 h-3 rounded-full block`} />
      <div className="text-sm text-slate-300">{status}</div>
    </div>
  )
}
