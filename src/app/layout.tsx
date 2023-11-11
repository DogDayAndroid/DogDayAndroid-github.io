import type { Metadata } from 'next'
import './globals.css'

import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Config Builder',
  description: 'Generate your own config',
}
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className='grid p-16 justify-items-center'>
            {children}
          </div>
        </Providers>
      </body>
    </html >
  )
}
