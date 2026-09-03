export default function Settings(){
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Settings</h2>
      <p className="text-slate-300">UI-only settings for Theme, Notifications, Video preferences, Privacy, Account, Connected partner.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Theme</h3>
          <p className="text-slate-400 text-sm">Midnight × Cosmic theme is active.</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <h3 className="font-medium">Notifications</h3>
          <p className="text-slate-400 text-sm">Manage notification preferences (UI only).</p>
        </div>
      </div>
    </div>
  )
}
