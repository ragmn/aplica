'use client'

import Image from 'next/image'

const partnerLogos = [
  {
    src: '/images/partners/dynamics.png',
    alt: 'Microsoft Dynamics partner logo',
  },
  {
    src: '/images/partners/god.png',
    alt: 'GOD partner logo',
  },
  {
    src: '/images/partners/hi.png',
    alt: 'HI partner logo',
  },
  {
    src: '/images/partners/reding_1.png',
    alt: 'Reding partner logo',
  },
  {
    src: '/images/partners/webo.png',
    alt: 'Webo partner logo',
  },
]

export function PartnerLogosSection() {
  return (
    <section className="section-padding">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Partner network</p>
          <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            Partner logos that support our delivery and product execution.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            These partnerships strengthen our capability to deliver Dynamics 365, cloud, and systems integration for enterprise teams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partnerLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-24 items-center justify-center border border-slate-200/15 bg-white p-6 shadow-sm shadow-slate-950/10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={72}
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
