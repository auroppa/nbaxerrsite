"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    title: "Klasik Siyah T-Shirt",
    description: "Temel gardırobunuzun vazgeçilmezi, %100 pamuklu premium siyah t-shirt.",
    images: ["/tshirts/tshirt1-front.png", "/tshirts/tshirt1-back.png"]
  },
  {
    title: "Vintage Tasarım T-Shirt",
    description: "Retro desenli, yumuşak dokulu, rahat kesim t-shirt.",
    images: ["/tshirts/tshirt2-front.png", "/tshirts/tshirt2-back.png"]
  },
  {
    title: "Urban Style T-Shirt",
    description: "Modern şehir yaşamı için tasarlanmış, şık ve rahat t-shirt.",
    images: ["/tshirts/tshirt3-front.png", "/tshirts/tshirt3-back.png"]
  },
  {
    title: "Minimalist T-Shirt",
    description: "Sade tasarımı ve kaliteli kumaşıyla öne çıkan t-shirt.",
    images: ["/tshirts/tshirt4-front.png", "/tshirts/tshirt4-back.png"]
  },
  {
    title: "Grafik Desenli T-Shirt",
    description: "Özel tasarım baskısıyla dikkat çeken, yüksek kaliteli t-shirt.",
    images: ["/tshirts/tshirt5-front.png", "/tshirts/tshirt5-back.png"]
  },
  {
    title: "Premium Collection T-Shirt",
    description: "Özel koleksiyon, limitli üretim, premium kalite t-shirt.",
    images: ["/tshirts/tshirt6-front.png", "/tshirts/tshirt6-back.png"]
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center mb-6">
            NBAXERR T-Shirt Koleksiyonu
          </h1>
          <p className="text-xl text-white/80 text-center mb-12">
            Benzersiz Tasarımlar, Yüksek Kalite, Maksimum Konfor
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                images={product.images}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">İletişim</h2>
          <div className="space-y-4">
            <p className="text-white/80">
              Instagram: <a href="https://instagram.com/nbaxerr" className="text-primary hover:text-primary-light transition-colors">@nbaxerr</a>
            </p>
            <p className="text-white/80">
              E-posta: <a href="mailto:bugradurgutt@gmail.com" className="text-primary hover:text-primary-light transition-colors">bugradurgutt@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
