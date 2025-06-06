import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VDBYai",
  description:
    "Privacy Policy for VDBYai - Learn how we handle and protect your data when using our Instagram and Pinterest content downloader.",
  openGraph: {
    title: "Privacy Policy - VDBYai",
    description: "Learn how we protect your privacy at VDBYai.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            When you use VDBYai, we may collect the following types of
            information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>URLs of content you wish to download</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Access timestamps</li>
          </ul>
          <p className="mb-4">
            We do not collect or store any personal information or login
            credentials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">The information we collect is used for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing the content downloading service</li>
            <li>Improving our service functionality</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Preventing abuse of our service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Storage</h2>
          <p className="mb-4">
            We do not permanently store any downloaded content or user data. All
            processed content is temporarily cached and automatically deleted
            after download completion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
          <p className="mb-4">
            We use essential cookies to maintain basic functionality. These
            cookies do not track personal information and are deleted when you
            close your browser.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Third-Party Services
          </h2>
          <p className="mb-4">We may use third-party services for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Analytics (e.g., Google Analytics)</li>
            <li>Content delivery networks</li>
            <li>Error tracking</li>
          </ul>
          <p className="mb-4">
            These services may collect anonymous usage data subject to their
            respective privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p className="mb-4">
            We implement security measures to protect your information. However,
            no internet transmission is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Children&apos;s Privacy
          </h2>
          <p className="mb-4">
            Our service is not directed to children under 13. We do not
            knowingly collect information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Changes to Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify
            users of any material changes by posting the new privacy policy on
            this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, please contact us.
          </p>
        </section>
      </div>
    </div>
  );
}
