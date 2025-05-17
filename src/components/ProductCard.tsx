"use client"

import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ProductCardProps {
  images: string[]
  title: string
  description: string
}

export default function ProductCard({ images, title, description }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div className="bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/10 transition-all duration-300">
      <div className="relative w-full aspect-square">
        <img
          src={images[currentImageIndex]}
          alt={`${title} - Görüntü ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Görüntü ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300 hover:scale-110"
            aria-label="Önceki görüntü"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300 hover:scale-110"
            aria-label="Sonraki görüntü"
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