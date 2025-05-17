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

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden">
      <div className="relative w-full aspect-square">
        <Image
          src={images[currentImageIndex]}
          alt={title}
          fill
          priority
          loading="eager"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="p-2 rounded-full bg-primary text-white"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
            className="p-2 rounded-full bg-primary text-white"
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