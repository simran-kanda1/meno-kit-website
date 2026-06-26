import { Link } from "react-router-dom"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <Link to="/" className="text-sm font-medium text-primary hover:text-primaryDark">
          ← Back to Home
        </Link>

        <article className="mt-6 space-y-6 rounded-3xl border border-border bg-white p-6 text-text shadow-[0_16px_40px_-28px_rgba(77,68,128,0.35)] sm:p-8">
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold text-[#27214B]">Terms and Conditions</h1>
            <p className="text-sm text-textMuted">Effective Date: May 27, 2026</p>
          </header>

          <p>
            These Terms and Conditions ("Terms") govern your use of the Meno-Kit website, mobile application, and related services (collectively, the "Service") operated by Meno-Kit ("we," "our," or "us"). By accessing or using the Service, you agree to these Terms.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">1. Coming Soon / Pre-Launch</h2>
            <p>
              Meno-Kit is currently in a pre-launch phase. Features described on this site — including the community app, symptom quiz, and quarterly Meno Kits — may not yet be fully available. Waitlist signups and quiz submissions do not constitute a purchase or subscription until explicitly confirmed at launch.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">2. Eligibility</h2>
            <p>
              The Service is intended for adults. You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service. By using Meno-Kit, you represent that you meet this requirement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">3. Health & Wellness Disclaimer</h2>
            <p>
              Meno-Kit provides community support, educational content, and wellness products. The Service is not intended to diagnose, treat, cure, or prevent any disease or medical condition. Information and products are not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider before starting supplements or making health decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">4. Community Guidelines</h2>
            <p>When using community features, you agree not to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Post harmful, harassing, or misleading content</li>
              <li>Share personal medical advice presented as professional guidance</li>
              <li>Violate others' privacy or intellectual property rights</li>
              <li>Use the Service for unlawful purposes</li>
            </ul>
            <p>We may remove content or suspend accounts that violate these guidelines.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">5. Quarterly Meno Kits (Future Purchases)</h2>
            <p>
              When kit subscriptions become available, pricing, billing frequency, shipping, cancellation, and refund policies will be presented at checkout and may be updated from time to time. Product contents may vary based on your symptom profile and availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">6. Intellectual Property</h2>
            <p>
              All content, branding, and materials on the Service are owned by Meno-Kit or our licensors. You may not copy, modify, or distribute our content without written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Meno-Kit is not liable for indirect, incidental, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim, or $100 if no purchase was made.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">8. Privacy</h2>
            <p>
              Your use of the Service is also governed by our{" "}
              <Link to="/privacy" className="text-primary hover:text-primaryDark">Privacy Policy</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">10. Contact</h2>
            <p>Questions about these Terms? Contact us at hello@meno-kit.com</p>
          </section>
        </article>
      </div>
    </main>
  )
}
