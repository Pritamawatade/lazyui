import { ArrowBigLeft, ArrowLeft, ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Liquid UI",
  description: "Read the terms that govern your use of Liquid UI.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Effective date: January 1, 2025 • Last updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            These Terms of Service ("Terms") govern your access to and use of
            Liquid UI (the "Service"). By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>

          <h2>1. Use of the Service</h2>
          <ul>
            <li>You must comply with all applicable laws and regulations.</li>
            <li>
              You may not misuse the Service, including attempting to access it
              using methods other than the interface and instructions we
              provide.
            </li>
          </ul>

          <h2>2. Accounts</h2>
          <p>
            If certain features require an account, you are responsible for
            safeguarding your account credentials and for any activity under
            your account.
          </p>

          <h2>3. Content</h2>
          <ul>
            <li>
              You retain ownership of content you submit, post, or display on
              the Service.
            </li>
            <li>
              By submitting content, you grant us a non-exclusive, worldwide,
              royalty-free license to use, reproduce, and display the content
              solely to operate and improve the Service.
            </li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            The Service, including its design, components, and branding, is
            protected by intellectual property laws. Except as expressly
            permitted, you may not copy, modify, distribute, sell, or lease any
            part of the Service.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            The Service may contain links to third-party websites or services.
            We do not endorse or assume responsibility for such third-party
            content.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            The Service is provided on an "as is" and "as available" basis. To
            the fullest extent permitted by law, we disclaim all warranties of
            any kind.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Liquid UI and its
            contributors will not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits
            or revenues.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service if we
            reasonably believe you have violated these Terms.
          </p>

          <h2>9. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes become effective constitutes acceptance of the
            new Terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:hello@liquidui.dev">hello@liquidui.dev</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
