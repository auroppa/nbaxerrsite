'use client'

import Image from 'next/image'
import Link from 'next/link'

const basePath = process.env.NODE_ENV === 'production' ? '/nbaxerrsite' : ''

export default function Navbar() {
  return (
    <nav 
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-primary/10 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div 
            className="w-[200px] h-[80px] relative transition-transform duration-300 hover:scale-105"
          >
            <Link href={basePath || '/'}>
              <img
                src={`${basePath}/logo.jpg`}
                alt="NBAXERR Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              <Link 
                href="#products" 
                className="text-white hover:text-primary transition-colors text-lg font-medium"
              >
                Ürünler
              </Link>
              <Link 
                href="#features" 
                className="text-white hover:text-primary transition-colors text-lg font-medium"
              >
                Özellikler
              </Link>
              <Link 
                href="#contact" 
                className="text-white hover:text-primary transition-colors text-lg font-medium"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 