export default function Study(){
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Study Room</h2>
      <p className="text-slate-300">Shared study session demo data below.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Sanjid</h3>
          <p className="text-slate-300 text-sm">Current: Reading • Last activity: 12 min ago</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Kabir</h3>
          <p className="text-slate-300 text-sm">Current: Idle • Last activity: 1 hr ago</p>
        </div>
      </div>
    </div>
  )
}
