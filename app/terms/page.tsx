import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Aplica Technology',
  description: 'Terms governing use of the Aplica Technology website and services.',
  alternates: { canonical: 'https://aplicatech.com/terms' },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container-xl max-w-3xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-3">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: 1 January 2025</p>

        <div className="prose-legal">
          <Section title="1. Acceptance">
            <p>By accessing or using aplicatech.com ("Site") you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.</p>
          </Section>

          <Section title="2. Use of the site">
            <p>You may use the Site for lawful purposes only. You must not:</p>
            <ul>
              <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure.</li>
              <li>Transmit any unsolicited commercial communications or malicious code.</li>
              <li>Reproduce, distribute, or create derivative works from Site content without prior written permission.</li>
            </ul>
          </Section>

          <Section title="3. Intellectual property">
            <p>All content on this Site — including text, graphics, logos, and code — is the property of Aplica Technology Ltd or its licensors and is protected by applicable intellectual property laws. Nothing on this Site grants you a licence to use our intellectual property unless expressly stated.</p>
          </Section>

          <Section title="4. Disclaimer of warranties">
            <p>The Site is provided on an "as is" and "as available" basis. Aplica Technology makes no warranties, express or implied, regarding accuracy, completeness, or fitness for a particular purpose. We do not warrant that the Site will be uninterrupted or error-free.</p>
          </Section>

          <Section title="5. Limitation of liability">
            <p>To the fullest extent permitted by law, Aplica Technology shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site. Our total liability for any claim arising out of these Terms shall not exceed £100.</p>
          </Section>

          <Section title="6. Third-party links">
            <p>The Site may contain links to third-party websites. We are not responsible for the content or practices of those sites and encourage you to review their terms and privacy policies.</p>
          </Section>

          <Section title="7. Governing law">
            <p>These Terms are governed by the laws of England and Wales. Any dispute shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </Section>

          <Section title="8. Changes to these terms">
            <p>We reserve the right to update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section title="9. Contact">
            <p>For any queries regarding these Terms, contact us at <a href="mailto:legal@aplicatech.com">legal@aplicatech.com</a>.</p>
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
