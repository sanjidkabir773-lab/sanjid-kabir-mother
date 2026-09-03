import Link from 'next/link'
import { modules } from '../../modules'

export default function MobileNav(){
  return (
    <div className="bg-deep-blue/50 backdrop-blur p-2">
      <div className="flex justify-between">
        {modules.map(m=> (
          <Link key={m.id} href={m.href} className="flex-1 text-center py-2 text-sm">{m.name}</Link>
        ))}
      </div>
    </div>
  )
}
