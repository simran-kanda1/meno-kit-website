import { Link } from "react-router-dom"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <Link to="/" className="text-sm font-medium text-primary hover:text-primaryDark">
          ← Back to Home
        </Link>

        <article className="mt-6 space-y-6 rounded-3xl border border-border bg-white p-6 text-text shadow-[0_16px_40px_-28px_rgba(77,68,128,0.35)] sm:p-8">
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold text-[#27214B]">Privacy Policy for Meno-Kit</h1>
            <p className="text-sm text-textMuted">Effective Date: May 27, 2026</p>
          </header>

          <p>
            Meno-Kit ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the Meno-Kit mobile application and related services (the "Service").
          </p>
          <p>By using Meno-Kit, you agree to this Privacy Policy.</p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">1. Information We Collect</h2>
            <p>We collect information you provide directly, information created through use of the app, and limited technical information.</p>
            <h3 className="font-semibold">A. Account and Profile Information</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Username</li>
              <li>Country</li>
              <li>Date of birth</li>
              <li>Menopause stage</li>
              <li>Symptoms and preferences</li>
              <li>Privacy and notification settings</li>
            </ul>
            <h3 className="font-semibold">B. Content You Create</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Posts and comments</li>
              <li>"What Helped Me" posts</li>
              <li>Saved posts</li>
              <li>Reports submitted about content</li>
              <li>Support/contact messages sent through the app</li>
            </ul>
            <h3 className="font-semibold">C. Check-In and Wellness Data</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Daily mood check-ins</li>
              <li>Symptoms selected during check-ins</li>
              <li>Sleep quality</li>
              <li>Energy level</li>
              <li>Notes you enter in check-ins</li>
            </ul>
            <h3 className="font-semibold">D. Device and Technical Information</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Push notification token (Expo push token)</li>
              <li>Basic app/device metadata needed for app functionality and notifications</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Create and manage your account</li>
              <li>Personalize your experience (e.g., circles and content relevance)</li>
              <li>Enable posting, commenting, saving, and reporting features</li>
              <li>Provide check-in tracking and calendar/history views</li>
              <li>Send push notifications you choose to receive</li>
              <li>Respond to support requests</li>
              <li>Maintain app safety, moderation, and abuse prevention</li>
              <li>Improve app performance and reliability</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">3. How Your Information Is Shared</h2>
            <p>We do not sell your personal information.</p>
            <p>We may share information only in the following cases:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Service Providers: We use trusted providers (such as Firebase and Expo) to host data, authenticate users, and deliver notifications.</li>
              <li>Community Features: Content you post in community areas may be visible to other users based on your privacy settings and posting choices (including anonymous posting).</li>
              <li>Legal/Safety Reasons: If required by law, regulation, legal process, or to protect users and the Service.</li>
              <li>Business Transfer: If Meno-Kit is involved in a merger, acquisition, or asset transfer, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">4. Data Retention</h2>
            <p>We retain information for as long as needed to operate the Service and comply with legal obligations.</p>
            <p>If you delete your account:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Your profile and account-linked personal data are deleted.</li>
              <li>Certain community content may remain for continuity of discussions, but authorship may be anonymized (for example, shown as "Deleted Account"), where applicable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">5. Your Choices and Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or limit certain processing</li>
            </ul>
            <p>You can also:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Update profile/settings in-app</li>
              <li>Manage notification preferences in-app</li>
              <li>Request support by contacting us (see Contact section)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">6. Children’s Privacy</h2>
            <p>Meno-Kit is not intended for children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children.</p>
            <p>If you believe a child has provided personal information, contact us and we will take appropriate action.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">7. Security</h2>
            <p>We use reasonable administrative, technical, and organizational safeguards to protect your information. However, no method of transmission or storage is 100% secure.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">8. International Data Transfers</h2>
            <p>Your information may be processed and stored in countries other than your own, including where our service providers operate. We take steps to protect information in accordance with applicable laws.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the updated version in the app and/or on our website with a revised effective date.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#27214B]">10. Contact Us</h2>
            <p>If you have questions or requests about this Privacy Policy or your data, contact us at:</p>
            <p>Email: hello@meno-kit.com</p>
            <p>Website: https://meno-kit.com</p>
          </section>
        </article>
      </div>
    </main>
  )
}
