import React from 'react'
import { Linkedin, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} Outreach IQ. All rights reserved.</div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
          <a href="#contact" className="hover:text-white"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}
