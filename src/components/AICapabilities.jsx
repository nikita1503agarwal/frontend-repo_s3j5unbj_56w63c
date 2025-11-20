import React from 'react'
import { Brain, Quote } from 'lucide-react'

const bullets = [
  'Tone-matching from past emails and calls',
  'Real-time profile + website summarization',
  'Automatic objection handling with sources',
  'Multilingual outreach across 30+ languages',
]

export default function AICapabilities(){
  return (
    <section id="ai" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl glass p-6">
            <div className="flex items-center gap-2 text-blue-300">
              <Brain className="w-5 h-5" />
              <span className="text-sm">Responsible AI</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">AI that sounds like you, with guardrails</h2>
            <ul className="mt-6 space-y-3">
              {bullets.map(b => (
                <li key={b} className="flex gap-3 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <figure className="rounded-2xl glass p-6">
              <blockquote className="text-white/80">
                “Within two weeks we doubled meetings while staying fully compliant. Replies actually feel human.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/60 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/30" />
                <span>Head of Growth, Series A SaaS</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
