import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Omar Jabloun Portfolio',
  description: 'Personal Portfolio',
  icons: {
    icon : "/favicon.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
