import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Aplica Technology',
  description: 'How Aplica Technology uses cookies and similar tracking technologies.',
  alternates: { canonical: 'https://aplicatech.com/cookies' },
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24" style={{ backgroundColor: '#131313' }}>
      <div className="container-xl max-w-3xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-display text-4xl font-bold text-white mb-3">Cookie Policy</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: 1 January 2025</p>

        <div className="prose-legal">
          <Section title="1. What are cookies?">
            <p>Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently and to provide information to site owners about how visitors use a site.</p>
          </Section>

          <Section title="2. Cookies we use">
            <p>We use the following categories of cookies:</p>
            <ul>
              <li>
                <strong>Strictly necessary cookies</strong> — essential for the Site to function (e.g. session management). These cannot be disabled.
              </li>
              <li>
                <strong>Analytics cookies</strong> — help us understand how visitors interact with the Site (e.g. pages viewed, time on site). Data is aggregated and anonymised where possible.
              </li>
              <li>
                <strong>Functional cookies</strong> — remember preferences such as language or form data to improve your experience.
              </li>
              <li>
                <strong>Marketing cookies</strong> — used to show relevant advertising and track the effectiveness of campaigns. Only set with your consent.
              </li>
            </ul>
          </Section>

          <Section title="3. Third-party cookies">
            <p>Some cookies are placed by third-party services appearing on our pages, such as analytics providers (e.g. Google Analytics). These providers have their own privacy policies governing their use of that data.</p>
          </Section>

          <Section title="4. Managing cookies">
            <p>You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of this Site. For more information visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.</p>
            <p>Most browsers allow you to:</p>
            <ul>
              <li>View cookies stored on your device.</li>
              <li>Block cookies from specific sites or all sites.</li>
              <li>Delete all or specific cookies on exit.</li>
            </ul>
          </Section>

          <Section title="5. Changes to this policy">
            <p>We may update this Cookie Policy periodically. Any changes will be reflected on this page with an updated date.</p>
          </Section>

          <Section title="6. Contact">
            <p>If you have questions about our use of cookies, contact us at <a href="mailto:privacy@aplicatech.com">privacy@aplicatech.com</a>.</p>
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
