import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import LiveChat from "@/components/live-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "London Building & Roofing | Expert Roofing Services",
  description:
    "Professional roofing services for residential and commercial properties across London. Emergency repairs, installations, and maintenance.",
  keywords: "London roofing, roof repair London, commercial roofing London, residential roofing, emergency roof repair",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <LiveChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
