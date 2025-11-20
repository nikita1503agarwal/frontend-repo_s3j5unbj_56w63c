import React from 'react'
import { ListChecks, SearchCheck, Send, CalendarDays } from 'lucide-react'

const steps = [
  { icon: SearchCheck, title: 'Define ICP', desc: 'Pick industries, roles, tech and intent. We enrich from 20+ sources.' },
  { icon: ListChecks, title: 'Generate Sequences', desc: 'AI crafts multi-step connects and DMs with personalization tokens.' },
  { icon: Send, title: 'Launch Safely', desc: 'Automatic throttling, time windows and randomized cadences.' },
  { icon: CalendarDays, title: 'Book Meetings', desc: 'Inbox copilot triages replies and hands hot leads to your calendar.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">How it works</h2>
            <p className="mt-3 text-white/70">From targeting to replies, everything runs in one streamlined flow.</p>

            <ol className="mt-8 space-y-4">
              {steps.map(({icon: Icon, title, desc}, i) => (
                <li key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-none rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{i+1}. {title}</h3>
                    <p className="text-white/70 text-sm mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl glass p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-emerald-500/20" />
            <p className="mt-4 text-sm text-white/60">Visual builder, sequence editor and inbox shown here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
