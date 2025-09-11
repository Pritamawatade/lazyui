import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Liquid UI",
  description: "Learn how Liquid UI collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 hover:text-gray-300">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>  
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Effective date: January 1, 2025 • Last updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            Your privacy matters to us. This Privacy Policy explains what
            information we collect, how we use it, and your choices regarding
            your information when using Liquid UI.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Usage data</strong>: Interactions with our website such as
              pages viewed, referrers, and feature usage.
            </li>
            <li>
              <strong>Device and technical data</strong>: Browser type, OS,
              anonymized IP, and performance metrics.
            </li>
            <li>
              <strong>Contact information</strong>: If you reach out to us,
              we’ll receive details you provide (like your email address).
            </li>
          </ul>

          <h2>How We Use Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve the site and components.</li>
            <li>Analyze performance and usage to enhance user experience.</li>
            <li>Communicate updates, fixes, or important notices.</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies for essential functionality,
            analytics, and to remember your preferences (such as theme).
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share limited data
            with trusted service providers solely to operate and improve our
            services. These providers are bound by confidentiality and data
            protection obligations.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain information only as long as necessary for the purposes
            described in this Policy and to comply with legal obligations.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>
              You can disable non-essential cookies in your browser settings.
            </li>
            <li>
              You may request access, correction, or deletion of your data by
              contacting us.
            </li>
          </ul>

          <h2>Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your information. However, no method of transmission or
            storage is completely secure.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            Our site is not directed to children under 13, and we do not
            knowingly collect personal information from children.
          </p>

          <h2>International Transfers</h2>
          <p>
            Your information may be processed outside of your country. We take
            steps to ensure appropriate safeguards are in place.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Policy from time to time. We will post the new
            effective date at the top of this page when changes occur.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions or requests? Contact us at
            {" "}
            <a href="mailto:hello@liquidui.dev">hello@liquidui.dev</a>.
          </p>
        </div>
      </div>
    </main>
  );
}


