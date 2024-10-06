import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Lee - Project Portfolio',
  description: 'Personal website of Caleb Lee, a Data Science student at the University of Michigan with experience in algorithmic trading, data engineering, consulting, research, and more.',
  keywords: ['Data Science', 'University of Michigan', 'Algorithmic Trading', 'Data Engineering', 'Software Engineering', 'Consulting', 'Math'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}