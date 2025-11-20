import React from 'react'

const faqs = [
  { q: 'Is this compliant with LinkedIn policies?', a: 'Yes. We implement strict throttling, randomization and human review to ensure safe usage.' },
  { q: 'Do you integrate with CRMs?', a: 'Native integrations for HubSpot and Salesforce, plus Zapier and webhooks.' },
  { q: 'Can I bring my own copy voice?', a: 'Absolutely. The AI learns from your emails and call transcripts to match tone.' },
  { q: 'What about data privacy?', a: 'We store only what we need, encrypt sensitive fields and are SOC 2 Type II ready.' },
]

export default function FAQ(){
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Frequently asked questions</h2>
          <p className="mt-3 text-white/70">Everything you want to know before you start.</p>
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl glass">
          {faqs.map(({q,a}) => (
            <details key={q} className="p-6 group">
              <summary className="cursor-pointer list-none font-medium flex justify-between items-center">
                <span>{q}</span>
                <span className="ml-6 text-white/40 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-white/70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
