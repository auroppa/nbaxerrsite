"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ProductCardProps {
  images: string[]
  title: string
  description: string
}

export default function ProductCard({ images, title, description }: ProductCardProps): React.JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
      <div className="relative aspect-square bg-black rounded-t-xl overflow-hidden group">
        <div className="relative w-full h-full transition-opacity duration-300">
          <Image
            src={`/nbaxerrsite${images[currentImageIndex]}`}
            alt={`${title} - Görüntü ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={previousImage}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors hover:scale-110 active:scale-90"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors hover:scale-110 active:scale-90"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-3">
          {title}
        </h3>
        <p className="text-white/80">
          {description}
        </p>
      </div>
    </div>
  )
} 