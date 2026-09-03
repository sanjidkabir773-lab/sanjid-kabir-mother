import Link from 'next/link'
import { IconType } from 'react-icons'
import { FiHome, FiMessageCircle, FiBook, FiGift, FiVideo, FiSettings } from 'react-icons/fi'

export const modules = [
  { id: 'dashboard', name: 'Dashboard', href: '/', icon: FiHome },
  { id: 'chat', name: 'Chat', href: '/chat', icon: FiMessageCircle },
  { id: 'study', name: 'Study', href: '/study', icon: FiBook },
  { id: 'games', name: 'Games', href: '/games', icon: FiGift },
  { id: 'video', name: 'Video', href: '/video', icon: FiVideo },
  { id: 'settings', name: 'Settings', href: '/settings', icon: FiSettings },
]
