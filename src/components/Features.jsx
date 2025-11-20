import React from 'react'
import { Bot, ShieldCheck, Target, MessageSquare, Sparkles, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Smart Prospecting',
    desc: 'Auto-build ICP lists from roles, tech stack and intent data with enrichment.'
  },
  {
    icon: MessageSquare,
    title: '1:1 Personalization',
    desc: 'AI writes context-aware openers using recent posts, mutuals and websites.'
  },
  {
    icon: Bot,
    title: 'Workflow Automation',
    desc: 'Sequences across connect, DM and email with guardrails and throttling.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance First',
    desc: 'Human-in-the-loop, daily caps and native randomization to stay within policy.'
  },
  {
    icon: Sparkles,
    title: 'Inbox Copilot',
    desc: 'Classify, summarize and draft replies so you never miss a hot lead.'
  },
  {
    icon: BarChart3,
    title: 'Clear ROI',
    desc: 'Track meetings booked, pipeline and team performance with precision.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Everything you need to scale outbound</h2>
          <p className="mt-3 text-white/70">Built for SDR leaders and founders who want predictable pipeline without the spam.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon: Icon, title, desc}) => (
            <div key={title} className="p-6 rounded-2xl glass hover:shadow-lg hover:shadow-blue-500/10 transition">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
