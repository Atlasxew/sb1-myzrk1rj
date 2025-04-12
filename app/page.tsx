"use client"
import {
  ArrowRight,
  Check,
  ChevronDown,
  CreditCard,
  Diamond,
  Hexagon,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
  Users,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Featured products for the homepage
const featuredProducts = [
  {
    id: 1,
    name: "2 1M Boosts",
    icon: "hexagon",
    price: 0.4,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/2-1month-boosts",
  },
  {
    id: 2,
    name: "4 1M Boosts",
    icon: "token",
    price: 0.8,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/4-1m-boosts",
  },
  {
    id: 3,
    name: "6 1M Boosts",
    icon: "discord",
    price: 1.2,
    sellAuthLink: "https://boostilityshop.mysellauth.com/product/6-1m-boosts",
  },
]

// FAQ items
const faqItems = [
  {
    question: "How can I get in touch with support after I bought the product?",
    answer:
      "You can reach our support team 24/7 through our Discord server or by using the chat button in the bottom right corner of our website. Our team is always ready to assist you with any questions or concerns.",
  },
  {
    question: "Can I make payments using my preferred method?",
    answer:
      "Yes, we accept a wide range of payment methods including major cryptocurrencies, Cash App, PayPal, Venmo, credit/debit cards, and gift cards for your convenience.",
  },
  {
    question: "How do I make a purchase?",
    answer:
      "Simply browse our products, select the one you want, click the 'Purchase' button, and follow the checkout process on our secure payment platform. After payment, your product will be delivered automatically.",
  },
  {
    question: "What is the return policy for purchases?",
    answer:
      "Due to the digital nature of our products, we generally don't offer refunds once the product has been delivered. However, if you encounter any issues with your purchase, our support team will work with you to resolve them.",
  },
  {
    question: "Is it safe to make payments?",
    answer:
      "Absolutely. We use secure payment processors and don't store your payment information. All transactions are encrypted and processed through trusted third-party payment providers.",
  },
]

// Team members
const teamMembers = [
  {
    name: "! Atlasx(100% high)",
    role: "Owner",
    image: "/images/atlas.gif",
    bio: "Warning: Silly! I am the owner of many projects, 2 boosting servers and lots of generation servers. currently our main server is https://discord.gg/boostility aswell as the webiste https://boostility.org . dm my discord account for more support or create a ticket. thanks!",
  },
  {
    name: "H0meV2",
    role: "Co-Owner",
    image: "/images/homev2.jpeg",
  },
  {
    name: "! NowArtic",
    role: "Co-Owner",
    image: "/images/nowartic.jpeg",
    bio: "✝ 32.6K Robux Donated ✝",
  },
  {
    name: "step",
    role: "Staff",
    image: "/images/step.png",
  },
  {
    name: "town",
    role: "Staff",
    image: "/images/town.png",
  },
]


export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

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
      setScrolled(window.scrollY > 50)
      animateElements()
    }

    // Initial check for elements in view
    animateElements()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" })
  }

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
      <header
        className={`fixed top-0 left-0 right-0 mt-12 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg shadow-purple-900/10" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
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
          </div>

          <nav className="hidden md:block">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <ul className="flex space-x-8">
                <li>
                  <button onClick={scrollToAbout} className="text-white hover:text-purple-300 transition">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={scrollToFeatures} className="text-white hover:text-purple-300 transition">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={scrollToFaq} className="text-white hover:text-purple-300 transition">
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={scrollToProducts} className="text-white hover:text-purple-300 transition">
                    Products
                  </button>
                </li>
                <li>
                  <button onClick={scrollToTeam} className="text-white hover:text-purple-300 transition">
                    Team
                  </button>
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

      {/* Hero section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 relative animate-on-scroll" data-animation="animate-bounceIn">
              <span className="bg-gradient-to-r from-purple-900/80 to-fuchsia-900/80 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Now Live!
              </span>
            </div>

            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-100 to-purple-200 max-w-5xl mx-auto leading-tight animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.2s"
            >
              Boost Your Server The Right Way With Our Discounted Rates!
            </h2>

            <p
              className="mt-8 max-w-2xl mx-auto text-purple-100/80 text-lg animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.4s"
            >
              Welcome to Boostility, your ultimate destination for unleashing the full potential of your Discord server!
              Introducing our cutting-edge Nitro Tokens and Server Boosting service, designed to elevate your Discord
              experience to new heights.
            </p>

            <div
              className="mt-12 flex flex-wrap gap-4 justify-center animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.6s"
            >
              <button
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-purple-700/30 group font-medium"
              >
                Shop now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#"
                className="bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white px-8 py-4 rounded-full flex items-center gap-2 border border-purple-500/30 transition-all font-medium"
              >
                Join Discord
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>

            <div className="mt-16 flex justify-center">
              <button
                onClick={scrollToAbout}
                className="text-purple-300 hover:text-white flex flex-col items-center gap-2 transition-colors animate-bounce"
              >
                <span className="text-sm">Learn more</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section id="about" ref={aboutRef} className="relative py-24 md:py-32 z-10 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-400 mb-2 animate-on-scroll" data-animation="animate-fadeInUp">
              <span className="text-sm">Want to know more about us?</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-4 relative inline-block animate-on-scroll"
              data-animation="animate-bounceIn"
            >
              About us
              <span className="absolute -top-6 -right-6 text-purple-500 text-xl">✦</span>
              <span className="absolute -bottom-3 -left-4 text-purple-500 text-xl">✦</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-on-scroll" data-animation="animate-slideInLeft">
              <div className="relative mx-auto max-w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 rounded-[40px] blur-xl"></div>
                <div className="relative z-10 bg-gradient-to-br from-purple-950 to-black p-4 rounded-[40px] border border-purple-800/30 shadow-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((phone) => (
                      <div key={phone} className="relative">
                        <div
                          className={`aspect-[9/19] bg-black rounded-2xl overflow-hidden border border-purple-800/50 ${phone === 2 ? "translate-y-6" : phone === 3 ? "translate-y-12" : ""}`}
                        >
                          <div className="h-6 bg-black flex justify-center items-center">
                            <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
                          </div>
                          <div className="p-1">
                            <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-xl h-full w-full p-2">
                              <div className="text-[6px] text-white font-medium mb-1">Nitro Plans</div>
                              {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-black/30 rounded-md p-1 mb-1 flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                                  <div className="flex-1 h-1 bg-gray-700 rounded-full"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" data-animation="animate-slideInRight">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We're your top choice for Discord needs.
              </h3>

              <p className="text-purple-100/80 mb-8">
                At Boostility, we are proud to offer an unparalleled suite of services, including Nitro Tokens, Discord
                IDs, UHQ tools, and top-notch Server Boosting capabilities. Our mission is to empower Discord
                communities by providing an extensive array of tools and resources to elevate your server's
                functionality and aesthetics.
              </p>

              <div className="space-y-4">
                <div
                  className="flex items-start gap-3 animate-on-scroll"
                  data-animation="animate-fadeInUp"
                  data-delay="0.1s"
                >
                  <div className="mt-1 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">24/7 Customer Support</h4>
                    <p className="text-purple-200/70 text-sm">
                      Our dedicated team is always available to assist you with any questions or concerns.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 animate-on-scroll"
                  data-animation="animate-fadeInUp"
                  data-delay="0.2s"
                >
                  <div className="mt-1 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Instant Delivery</h4>
                    <p className="text-purple-200/70 text-sm">
                      Get your boosts and tokens delivered automatically within seconds of purchase.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 animate-on-scroll"
                  data-animation="animate-fadeInUp"
                  data-delay="0.3s"
                >
                  <div className="mt-1 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Most affordable pricing</h4>
                    <p className="text-purple-200/70 text-sm">
                      We offer the best rates in the market, ensuring you get the most value for your money.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={scrollToFeatures}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-white font-medium transition-colors"
                >
                  Explore our features
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={scrollToFeatures}
            className="text-purple-300 hover:text-white flex flex-col items-center gap-2 transition-colors animate-bounce"
          >
            <span className="text-sm">See our features</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative py-24 md:py-32 z-10 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-400 mb-2 animate-on-scroll" data-animation="animate-fadeInUp">
              <span className="text-sm">We Have Exciting Features</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-12 relative inline-block animate-on-scroll"
              data-animation="animate-bounceIn"
            >
              Features
              <span className="absolute -top-6 -right-6 text-purple-500 text-xl">✦</span>
              <span className="absolute -bottom-3 -left-4 text-purple-500 text-xl">✦</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 - Seamless Payment */}
            <div
              className="bg-black/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 hover:bg-black/40 transition-all group animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.1s"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800/50 transition-all">
                <CreditCard className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Payment</h3>
              <p className="text-purple-200/70">
                Ordering from us is a breeze. We accept all major cryptocurrencies, Cash App, PayPal, Venmo, cards, and
                gift cards for your convenience.
              </p>
            </div>

            {/* Feature 2 - Cheap Prices */}
            <div
              className="bg-black/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 hover:bg-black/40 transition-all group animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.2s"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800/50 transition-all">
                <Diamond className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cheap Prices</h3>
              <p className="text-purple-200/70">
                Our ultimate motto is to ensure that everyone, regardless of their location, can access high-quality
                services at an affordable price.
              </p>
            </div>

            {/* Feature 3 - Trusted & Reputated Seller */}
            <div
              className="bg-black/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 hover:bg-black/40 transition-all group animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.3s"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800/50 transition-all">
                <ShieldCheck className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Trusted & Reputated Seller</h3>
              <p className="text-purple-200/70">
                Our customers consistently provide positive feedback, praising not only our top-tier services but also
                our premium support.
              </p>
            </div>

            {/* Feature 4 - Legal Methods */}
            <div
              className="bg-black/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 hover:bg-black/40 transition-all group animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.4s"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800/50 transition-all">
                <Scale className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Legal Methods</h3>
              <p className="text-purple-200/70">
                Rest assured, every service we offer is acquired through entirely legal channels, ensuring you peace of
                mind without concerns about reversals.
              </p>
            </div>

            {/* Feature 5 - 24/7 Support */}
            <div
              className="bg-black/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 hover:bg-black/40 transition-all group animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.5s"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800/50 transition-all">
                <MessageCircle className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-purple-200/70">
                Our unmatched chat support is available 24/7, ready to address any questions or concerns you may have,
                every single day.
              </p>
            </div>

            {/* Feature 6 - Automatic Delivery */}
            <div
              className="bg-black/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-8 hover:bg-black/40 transition-all group animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.6s"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800/50 transition-all">
                <Sparkles className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automatic Delivery</h3>
              <p className="text-purple-200/70">
                Your order will be delivered in just around 30 seconds after placement, thanks to our ultra-fast
                automatic delivery system.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={scrollToFaq}
            className="text-purple-300 hover:text-white flex flex-col items-center gap-2 transition-colors animate-bounce"
          >
            <span className="text-sm">Check our FAQ</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="relative py-24 md:py-32 z-10 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-400 mb-2 animate-on-scroll" data-animation="animate-fadeInUp">
              <span className="text-sm flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Asked Questions
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-12 relative inline-block animate-on-scroll"
              data-animation="animate-bounceIn"
            >
              FAQ
              <span className="absolute -top-6 -right-6 text-purple-500 text-xl">✦</span>
              <span className="absolute -bottom-3 -left-4 text-purple-500 text-xl">✦</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-purple-800/30 rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm animate-on-scroll"
                  data-animation="animate-fadeInUp"
                  data-delay={`${0.1 * (index + 1)}s`}
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-purple-300 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-purple-200/70">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={scrollToProducts}
            className="text-purple-300 hover:text-white flex flex-col items-center gap-2 transition-colors animate-bounce"
          >
            <span className="text-sm">View our products</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" ref={productsRef} className="relative py-24 md:py-32 z-10 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-400 mb-2 animate-on-scroll" data-animation="animate-fadeInUp">
              <span className="text-sm">Explore the products</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-8 relative inline-block animate-on-scroll"
              data-animation="animate-bounceIn"
            >
              Products
              <span className="absolute -top-6 -right-6 text-purple-500 text-xl">✦</span>
            </h2>
            <p
              className="max-w-2xl mx-auto text-purple-100/80 animate-on-scroll"
              data-animation="animate-fadeInUp"
              data-delay="0.2s"
            >
              Check out our most popular Discord boosting packages. All products come with instant delivery and our 24/7
              customer support.
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-800/30 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20 animate-on-scroll"
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

          {/* View All Products Button */}
          <div className="text-center animate-on-scroll" data-animation="animate-fadeInUp" data-delay="0.5s">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-full transition-all shadow-lg shadow-purple-700/30 font-medium"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Us Section */}
      <section id="team" ref={teamRef} className="relative py-24 md:py-32 z-10 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-400 mb-2 animate-on-scroll" data-animation="animate-fadeInUp">
              <span className="text-sm flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Our Amazing Team
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-12 relative inline-block animate-on-scroll"
              data-animation="animate-bounceIn"
            >
              Meet Us
              <span className="absolute -top-6 -right-6 text-purple-500 text-xl">✦</span>
              <span className="absolute -bottom-3 -left-4 text-purple-500 text-xl">✦</span>
            </h2>
          </div>

          {/* Top row - 3 team members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center animate-on-scroll"
                data-animation="animate-fadeInUp"
                data-delay={`${0.1 * (index + 1)}s`}
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-600 mb-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 rounded-full blur-md"></div>
                  <div className="relative z-10 w-full h-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={240}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-fuchsia-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{member.name}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-300 mb-2">{member.role}</p>
                {member.bio && <p className="text-purple-200/70 text-sm text-center max-w-xs">{member.bio}</p>}
              </div>
            ))}
          </div>

          {/* Bottom row - 2 team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {teamMembers.slice(3, 5).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center animate-on-scroll"
                data-animation="animate-fadeInUp"
                data-delay={`${0.4 + 0.1 * (index + 1)}s`}
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-600 mb-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 rounded-full blur-md"></div>
                  <div className="relative z-10 w-full h-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={240}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-fuchsia-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{member.name}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1a1625] border-t border-purple-900/30 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start mb-10">
              <div className="mb-8 md:mb-0 md:mr-16">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/logo.png"
                      alt="Boostility Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-white text-xl font-bold">Boostility</h3>
                </div>
                <p className="text-gray-400 max-w-md">
                  Boostility provides a cheap and affordable service for your Discord server.
                  <br />
                  Our service is the best secure, safe and cheap service for boosting your server.
                </p>
                <p className="text-gray-500 text-xs mt-4 max-w-md">
                  Disclaimer: This website is in no way affiliated with, authorized, maintained, sponsored or endorsed
                  by Discord Inc. (discord.com) or any of its affiliates or subsidiaries. Images belong to respected
                  owners.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">©2025 BOOSTILITY.ORG</p>
              <div className="flex items-center gap-8">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Go up
                </button>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Terms of service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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

