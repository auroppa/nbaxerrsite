"use client"

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-light flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl text-white mb-6">Sayfa Bulunamadı</h2>
        <p className="text-gray-400 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
} 