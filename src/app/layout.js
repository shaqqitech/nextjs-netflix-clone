import Navbar from './components/Navbar'
import './globals.css'
import {  Lato } from 'next/font/google'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata = {
  title: 'Netflix Clone',
  description: 'Netflix clone for my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
