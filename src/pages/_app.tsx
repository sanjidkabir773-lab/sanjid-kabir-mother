import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '../components/layout/AppShell'
import { AppProvider } from '../contexts/AppProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </AppProvider>
  )
}
