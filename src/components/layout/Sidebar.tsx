import Link from 'next/link'
import { modules } from '../../modules'
import { useAppStore } from '../../store/useAppStore'
import Avatar from '../ui/Avatar'
import ConnectionIndicator from '../ui/ConnectionIndicator'

export default function Sidebar(){
  const user = useAppStore(s=>s.user)
  const partner = useAppStore(s=>s.partner)
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="mb-6">
          <div className="text-2xl font-semibold">Sanjid × Kabir</div>
          <div className="text-sm text-slate-400">Private space</div>
        </div>
        <nav className="space-y-1">
          {modules.map(m=> (
            <Link key={m.id} href={m.href} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/3">
              <m.icon />
              <span>{m.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-3">
          <Avatar name={user.name} />
          <div>
            <div className="text-sm">{user.name}</div>
            <div className="text-xs text-slate-400">Connected with <strong>{partner.name}</strong></div>
          </div>
        </div>
        <div className="mt-3">
          <ConnectionIndicator />
        </div>
      </div>
    </div>
  )
}
