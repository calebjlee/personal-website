import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Lee - Data Science Student & Aspiring Data Engineer',
  description: 'Personal website of Caleb Lee, a Data Science student at the University of Michigan with experience in algorithmic trading and data engineering.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}