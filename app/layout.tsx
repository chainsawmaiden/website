import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Aditya Das',
  description: 'My Personal Portfolio',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='py-8 px-10 bg-secondary-0 body-font font-abcdiatype font-normal overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
