import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="gradient-ring pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 glass">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs/relaxed text-blue-100">AI-powered LinkedIn outreach</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Book more meetings with laser‑targeted LinkedIn outreach
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-prose">
              Launch hyper-personalized campaigns that land in the right inboxes. Automate connection requests, follow-ups and inbox triage — powered by compliant AI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition px-5 py-3 font-medium">
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-lg glass px-5 py-3 font-medium text-white/80 hover:text-white transition">
                See how it works
              </a>
            </div>
            <div className="mt-8 text-sm text-white/50">
              No credit card required • Cancel anytime
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl glass">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
