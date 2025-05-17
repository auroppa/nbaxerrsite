import React from 'react'

export default function NotFound(): React.JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-white/80">Sayfa bulunamadı</p>
      </div>
    </div>
  )
} 