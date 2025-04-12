"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Hexagon, Zap } from "lucide-react"

// Product category tabs
const productCategories = []

// Product data
const products = [
  {
    id: 1,
    name: "2 1M Boosts",
    icon: "boosts",
    price: 0.4,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/2-1month-boosts",
  },
  {
    id: 2,
    name: "4 1M Boosts",
    icon: "boosts",
    price: 0.8,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/4-1m-boosts",
  },
  {
    id: 3,
    name: "6 1M Boosts",
    icon: "boosts",
    price: 1.2,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/6-1m-boosts",
  },
  {
    id: 4,
    name: "8 1M Boosts",
    icon: "boosts",
    price: 1.6,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/8-1m-boosts",
  },
  {
    id: 5,
    name: "10 1M Boosts",
    icon: "boosts",
    price: 1.8,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/10-1m-boosts",
  },
  {
    id: 6,
    name: "14 1M Boosts",
    icon: "boosts",
    price: 2.0,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/14-1m-boosts",
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products")

  // Animation on scroll
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight - 100) {
          const animation = element.getAttribute("data-animation")
          const delay = element.getAttribute("data-delay")

          if (animation) {
            element.classList.add(animation)
          }

          if (delay) {
            element.style.animationDelay = delay
          }
        }
      })
    }

    const handleScroll = () => {
      animateElements()
    }

    // Initial check for elements in view
    animateElements()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "All Products" || activeCategory === "Groups"
      ? products
      : products.filter((product) => product.name === activeCategory)

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,0,170,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(138,43,226,0.2),transparent_70%)]"></div>

        {/* Stars */}
        <div className="stars-container">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + "px",
                height: Math.random() * 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.7,
                animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-1/3 -right-[15%] w-[50%] h-[30%] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-[25%] w-[30%] h-[30%] bg-fuchsia-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Notification bar */}
      <div className="bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 backdrop-blur-sm text-center py-3 px-4 text-purple-100 relative z-10 border-b border-purple-700/30">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-4 h-4 text-purple-300" />
          <p>All services are live and fully operational. Get your automated boosts today!</p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md py-3 shadow-lg shadow-purple-900/10 mt-12 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="Boostility Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <h1 className="text-white text-2xl font-bold">Boostility</h1>
          </Link>

          <nav className="hidden md:block">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/#about" className="text-white hover:text-purple-300 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-purple-400 hover:text-purple-300 transition">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-white hover:text-purple-300 transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-white hover:text-purple-300 transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Products section */}
      <section className="relative pt-20 pb-32 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-400 mb-2 animate-on-scroll" data-animation="animate-fadeInUp">
              <span className="text-sm">Explore the products</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-12 animate-on-scroll"
              data-animation="animate-bounceIn"
            >
              Products
            </h2>

            {/* Product categories */}
            <div className="overflow-x-auto pb-4 mb-8">
              <div className="bg-black/50 backdrop-blur-md border border-purple-900/30 rounded-full inline-flex p-1.5 min-w-max mx-auto">
                <div className="flex space-x-1">
                  {productCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                        activeCategory === category
                          ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-800/30 animate-on-scroll"
                data-animation="animate-fadeInUp"
                data-delay={`${0.1 * (index + 1)}s`}
              >
                <div className="relative bg-purple-900 h-48 flex items-center justify-center">
                  <div className="absolute top-3 left-3">
                    <Zap className="w-5 h-5 text-fuchsia-400" />
                  </div>

                  <div className="w-20 h-20 bg-purple-950/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-700/30">
                    {product.icon === "hexagon" ? (
                      <Hexagon className="w-10 h-10 text-fuchsia-500" />
                    ) : product.icon === "discord" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-fuchsia-500"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                      </svg>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="text-xs text-purple-300 opacity-70">boostility.org</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-purple-300 mb-4">
                    Starting at: <span className="text-fuchsia-400">${product.price.toFixed(2)}</span>
                  </p>

                  <a
                    href={product.sellAuthLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black/40 hover:bg-black/60 text-white py-3 rounded-lg text-center border border-purple-700/30 transition-all"
                  >
                    Purchase
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/30 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

