import type { Metadata } from 'next'
import { Acme } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SupportButton from '@/components/Support'

const acme = Acme({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: '?',
  description: 'Guess Number',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={acme.className}>
        <ToastContainer />
        {children}
        <SupportButton />
      </body>
    </html>
  )
}
