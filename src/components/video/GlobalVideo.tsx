import { useAppStore } from '../../store/useAppStore'
import { motion, AnimatePresence } from 'framer-motion'

export default function GlobalVideo(){
  const video = useAppStore(s=>s.video)
  const expand = useAppStore(s=>s.expandVideo)
  const toggleVideo = useAppStore(s=>s.toggleVideo)

  return (
    <AnimatePresence>
      {video.active && (
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="fixed right-6 bottom-6 w-64 md:w-80 z-50">
          <div className="glass-card rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-b from-cosmic-1/40 to-deep-blue/40 p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Live — {video.expanded ? 'Expanded' : 'Floating'}</div>
                <div className="flex gap-2">
                  <button onClick={()=>expand(!video.expanded)} className="px-2 py-1 rounded bg-white/5">{video.expanded? 'Min' : 'Max'}</button>
                  <button onClick={()=>toggleVideo()} className="px-2 py-1 rounded bg-red-500 text-white">End</button>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="h-36 bg-black/40 rounded-md flex items-center justify-center text-slate-300">Video preview</div>
              <div className="mt-2 text-xs text-slate-400">Camera and mic controls will appear here in expanded mode.</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
