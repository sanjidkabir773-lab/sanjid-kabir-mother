import { useAppStore } from '../store/useAppStore'

export default function VideoPage(){
  const videoActive = useAppStore(s => s.video.active)
  const toggleVideo = useAppStore(s => s.toggleVideo)

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Video</h2>
      <p className="text-slate-300">Global video system — this page demonstrates the expanded video interface.</p>
      <div className="mt-6">
        <button onClick={()=>toggleVideo()} className="px-4 py-2 rounded-md bg-accent text-slate-900 font-semibold">{videoActive ? 'End Call' : 'Start Video'}</button>
      </div>
    </div>
  )
}
