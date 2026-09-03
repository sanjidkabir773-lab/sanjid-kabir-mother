type Props = { name: string }

export default function Avatar({name}: Props){
  const initials = name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase()
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-2 to-accent flex items-center justify-center text-slate-900 font-semibold">{initials}</div>
  )
}
