import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Zecrey',
  description: 'Zecrey.com',
}

export default function RootLayout
({
   children,
 }: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=.5,user-scalable=no" />
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  )
}
