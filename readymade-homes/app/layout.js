import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
// import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReadyMade Homes - Build Your Dream Home Fast',
  description: 'Premium readymade houses delivered and installed within weeks. Quality construction, sustainable materials, modern designs.',
  keywords: 'readymade homes, prefab houses, modular homes, quick construction, sustainable housing',
  authors: [{ name: 'ReadyMade Homes' }],
  openGraph: {
    title: 'ReadyMade Homes - Build Your Dream Home Fast',
    description: 'Premium readymade houses delivered and installed within weeks',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}