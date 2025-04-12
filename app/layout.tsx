import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Boostility - Boost Your Discord Server",
  description:
    "Get automated Discord server boosts at discounted rates with Boostility. We offer the cheapest Discord Nitro, boosts, and tools with instant delivery.",
  openGraph: {
    title: "Boostility - #1 for Cheap Boosts, Nitro, and Tools!",
    description:
      "Your go-to source for Discord enhancements. Discover affordable Server Boosts, Nitro upgrades, and essential Discord Tools. We're renowned for swift delivery and unbeatable prices.",
    images: [{ url: "/logo.png" }],
    siteName: "Boostility",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boostility - #1 for Cheap Boosts, Nitro, and Tools!",
    description:
      "Your go-to source for Discord enhancements. Discover affordable Server Boosts, Nitro upgrades, and essential Discord Tools.",
    images: [{ url: "/logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'