import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'mo',
    highlight: false,
    features: ['1 seat', '500 contacts/mo', 'Basic AI personalization', 'Email support']
  },
  {
    name: 'Growth',
    price: '$99',
    period: 'mo',
    highlight: true,
    features: ['5 seats', '5k contacts/mo', 'Advanced AI + Inbox Copilot', 'Priority support']
  },
  {
    name: 'Scale',
    price: '$299',
    period: 'mo',
    highlight: false,
    features: ['20 seats', '25k contacts/mo', 'Audit + Compliance controls', 'Dedicated manager']
  }
]

export default function Pricing(){
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you see results.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className={`p-6 rounded-2xl glass border ${p.highlight ? 'border-blue-500/40 shadow-lg shadow-blue-500/20' : 'border-white/10'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium">{p.name}</h3>
                {p.highlight && <span className="text-xs text-blue-300">Most popular</span>}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                <span className="text-white/60">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-white/80">
                    <Check className="w-4 h-4 mt-1 text-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center rounded-lg px-4 py-2 font-medium transition ${p.highlight ? 'bg-blue-600 hover:bg-blue-500' : 'glass'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
