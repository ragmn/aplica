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
    <section className="section-padding section-alt" aria-labelledby="partners-heading">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">Partner Network</span>
          <h2
            id="partners-heading"
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
          >
            Partnerships that strengthen every delivery.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Our partner ecosystem deepens our capability across Dynamics 365, cloud infrastructure, and systems integration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partnerLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-24 items-center justify-center rounded-2xl bg-white p-6"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.06)' }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={72}
                className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
