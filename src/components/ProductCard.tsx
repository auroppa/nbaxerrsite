"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ProductCardProps {
  images: string[]
  title: string
  description: string
}

export default function ProductCard({ images, title, description }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative w-full aspect-square">
        <div key={currentImageIndex} className="absolute inset-0">
          <Image
            src={images[currentImageIndex]}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={handlePrevImage}
            className="p-2 rounded-full bg-primary text-white transform transition-all duration-300 hover:scale-110"
            aria-label="Önceki resim"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextImage}
            className="p-2 rounded-full bg-primary text-white transform transition-all duration-300 hover:scale-110"
            aria-label="Sonraki resim"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  )
} 