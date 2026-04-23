import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Aplica Technology',
  description: 'How Aplica Technology collects, uses, and protects your personal data.',
  alternates: { canonical: 'https://aplicatech.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24" style={{ backgroundColor: '#131313' }}>
      <div className="container-xl max-w-3xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-display text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: 1 January 2025</p>

        <div className="prose-legal">
          <Section title="1. Who we are">
            <p>Aplica Technology Ltd ("Aplica", "we", "us", "our") is a Microsoft Dynamics 365 implementation partner registered in England and Wales. Our registered address is available on request. We act as a data controller in respect of personal data collected through this website and our services.</p>
          </Section>

          <Section title="2. Data we collect">
            <p>We may collect the following categories of personal data:</p>
            <ul>
              <li><strong>Contact data</strong> — name, email address, phone number, company name, job title.</li>
              <li><strong>Usage data</strong> — pages visited, time on site, referral source, browser and device type (via analytics cookies).</li>
              <li><strong>Communications data</strong> — messages you send via our contact form or email.</li>
              <li><strong>Lead magnet data</strong> — email address provided when downloading resources.</li>
            </ul>
          </Section>

          <Section title="3. How we use your data">
            <p>We process personal data for the following purposes:</p>
            <ul>
              <li>Responding to enquiries and booking consultations.</li>
              <li>Sending requested resources and follow-up communications.</li>
              <li>Improving our website and services through anonymised analytics.</li>
              <li>Meeting legal and regulatory obligations.</li>
            </ul>
            <p>Our lawful bases are <strong>legitimate interests</strong> (responding to enquiries, analytics) and <strong>consent</strong> (marketing emails).</p>
          </Section>

          <Section title="4. Data retention">
            <p>We retain contact and enquiry data for up to 3 years from last interaction, unless you ask us to delete it sooner. Analytics data is retained in aggregate form indefinitely.</p>
          </Section>

          <Section title="5. Third-party processors">
            <p>We share data only with trusted processors necessary to operate our services, including our CRM provider, email delivery platform, and website analytics provider. We do not sell personal data to third parties.</p>
          </Section>

          <Section title="6. Your rights">
            <p>Under UK GDPR you have the right to access, rectify, erase, restrict, or port your personal data, and to object to processing. To exercise any right, email us at <a href="mailto:privacy@aplicatech.com">privacy@aplicatech.com</a>. You may also lodge a complaint with the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
          </Section>

          <Section title="7. Cookies">
            <p>We use cookies and similar technologies as described in our <a href="/cookies">Cookie Policy</a>.</p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>We may update this policy from time to time. Material changes will be noted at the top of this page with a revised date.</p>
          </Section>

          <Section title="9. Contact">
            <p>For any privacy-related queries, contact us at <a href="mailto:privacy@aplicatech.com">privacy@aplicatech.com</a>.</p>
          </Section>
        </div>
      </div>

      <style>{`
        .prose-legal { color: #94a3b8; line-height: 1.8; }
        .prose-legal h2 { color: #fff; font-size: 1.125rem; font-weight: 600; margin: 2rem 0 0.75rem; }
        .prose-legal p { margin-bottom: 1rem; }
        .prose-legal ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
        .prose-legal li { margin-bottom: 0.4rem; }
        .prose-legal strong { color: #e2e8f0; }
        .prose-legal a { color: #6eaaff; text-decoration: underline; }
        .prose-legal a:hover { color: #fff; }
      `}</style>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
