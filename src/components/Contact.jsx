import React, { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we\'ll be in touch shortly!')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Talk to a specialist</h2>
          <p className="mt-3 text-white/70">Tell us about your team and goals. We\'ll tailor a quick plan.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <input className="glass rounded-lg px-4 py-3" placeholder="Full name" required />
          <input type="email" className="glass rounded-lg px-4 py-3" placeholder="Work email" required />
          <input className="glass rounded-lg px-4 py-3" placeholder="Company" />
          <textarea className="glass rounded-lg px-4 py-3 min-h-[120px]" placeholder="What are you aiming to achieve?" />
          <button className="rounded-lg bg-blue-600 hover:bg-blue-500 transition px-5 py-3 font-medium w-full">Request demo</button>
          {status && <p className="text-center text-green-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
