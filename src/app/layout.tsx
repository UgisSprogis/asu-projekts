import './globals.css'
import { ReactNode } from 'react'
import ClientLayout from '@/components/ClientLayout'

export const metadata = {
  title: 'ASU',
  description: 'Iegūsti ieskatu par iekāroto transportlīdzekli',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="lv">
      <body className="min-h-screen bg-gray-900 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}