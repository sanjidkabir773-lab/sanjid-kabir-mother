import create from 'zustand'

type User = { id: string; name: string }

type VideoState = { active: boolean; expanded: boolean }

type Notification = { id: string; title: string; message?: string }

type AppState = {
  user: User
  partner: User
  connectionStatus: 'connected' | 'reconnecting' | 'offline'
  video: VideoState
  notifications: Notification[]
  toggleVideo: () => void
  expandVideo: (v: boolean) => void
  addNotification: (n: Notification) => void
  removeNotification: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  user: { id: 'sanjid', name: 'Sanjid' },
  partner: { id: 'kabir', name: 'Kabir' },
  connectionStatus: 'connected',
  video: { active: false, expanded: false },
  notifications: [],
  toggleVideo: () => set((s) => ({ video: { ...s.video, active: !s.video.active } })),
  expandVideo: (v) => set((s) => ({ video: { ...s.video, expanded: v } })),
  addNotification: (n) => set((s) => ({ notifications: [n, ...s.notifications] })),
  removeNotification: (id) => set((s) => ({ notifications: s.notifications.filter(x=>x.id!==id) })),
}))
