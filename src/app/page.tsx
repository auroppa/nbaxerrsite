"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    title: "Klasik Siyah T-Shirt",
    description: "Temel gardırobunuzun vazgeçilmezi, %100 pamuklu premium siyah t-shirt.",
    images: ["/nbaxerrsite/tshirts/tshirt1-front.png", "/nbaxerrsite/tshirts/tshirt1-back.png"]
  },
  {
    title: "Vintage Tasarım T-Shirt",
    description: "Retro desenli, yumuşak dokulu, rahat kesim t-shirt.",
    images: ["/nbaxerrsite/tshirts/tshirt2-front.png", "/nbaxerrsite/tshirts/tshirt2-back.png"]
  },
  {
    title: "Urban Style T-Shirt",
    description: "Modern şehir yaşamı için tasarlanmış, şık ve rahat t-shirt.",
    images: ["/nbaxerrsite/tshirts/tshirt3-front.png", "/nbaxerrsite/tshirts/tshirt3-back.png"]
  },
  {
    title: "Minimalist T-Shirt",
    description: "Sade tasarımı ve kaliteli kumaşıyla öne çıkan t-shirt.",
    images: ["/nbaxerrsite/tshirts/tshirt4-front.png", "/nbaxerrsite/tshirts/tshirt4-back.png"]
  },
  {
    title: "Grafik Desenli T-Shirt",
    description: "Özel tasarım baskısıyla dikkat çeken, yüksek kaliteli t-shirt.",
    images: ["/nbaxerrsite/tshirts/tshirt5-front.png", "/nbaxerrsite/tshirts/tshirt5-back.png"]
  },
  {
    title: "Premium Collection T-Shirt",
    description: "Özel koleksiyon, limitli üretim, premium kalite t-shirt.",
    images: ["/nbaxerrsite/tshirts/tshirt6-front.png", "/nbaxerrsite/tshirts/tshirt6-back.png"]
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-light">
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter via-dark-light to-dark opacity-70" />
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            NBAXERR T-Shirt Koleksiyonu
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Benzersiz Tasarımlar, Yüksek Kalite, Maksimum Konfor
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
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
      </section>

      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">İletişim</h2>
          <div className="bg-dark p-8 rounded-lg">
            <p className="text-gray-300 mb-4">
              <span className="font-medium text-white">Email:</span><br />
              bugradurgutt@gmail.com
            </p>
            <p className="text-gray-300">
              <span className="font-medium text-white">Instagram:</span><br />
              @nbaxerr
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
