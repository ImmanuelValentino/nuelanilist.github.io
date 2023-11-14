import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'NuelAnimeList',
  description: 'Website Anime List Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-color-etc`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
