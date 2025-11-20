import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AICapabilities from './components/AICapabilities'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function Navbar(){
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-xl glass px-4 py-2">
          <a href="#" className="font-semibold">Outreach IQ</a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#ai" className="hover:text-white">AI</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <a href="#contact" className="inline-flex rounded-lg bg-blue-600 hover:bg-blue-500 transition px-4 py-2 text-sm font-medium">Get started</a>
        </div>
      </div>
    </nav>
  )
}

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AICapabilities />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
