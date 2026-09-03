export default function Games(){
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Game Room</h2>
      <p className="text-slate-300">Play together — preview of upcoming games.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass-card p-6 rounded-xl">Ludo (coming soon) — <a className="underline text-accent" href="/games/ludo">Open placeholder</a></div>
        <div className="glass-card p-6 rounded-xl">Mini-games & experiences — coming soon</div>
      </div>
    </div>
  )
}
