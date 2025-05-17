"use client"

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl text-white mb-8">Sayfa Bulunamadı</h2>
        <a
          href="/"
          className="text-primary hover:text-primary-dark transition-colors"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  )
} 