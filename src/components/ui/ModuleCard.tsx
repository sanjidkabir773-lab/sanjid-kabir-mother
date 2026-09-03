type Props = { title: string; subtitle?: string; status?: string; href?: string }
import Link from 'next/link'

export default function ModuleCard({title, subtitle, status, href}: Props){
  return (
    <Link href={href||'#'} className="glass-card p-5 rounded-xl block hover:scale-[1.01] transition-transform">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          {subtitle && <div className="text-slate-400 text-sm">{subtitle}</div>}
        </div>
        <div className="text-sm text-slate-300">{status}</div>
      </div>
    </Link>
  )
}
