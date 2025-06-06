import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | VDBYai",
  description:
    "Terms of Service for VDBYai - Instagram and Pinterest content downloader. Read our terms and conditions.",
  openGraph: {
    title: "Terms of Service - VDBYai",
    description: "Terms and conditions for using VDBYai content downloader.",
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
          <p className="mb-4">
            By accessing VDBYai, you agree to be bound by these terms of service
            and agree that you are responsible for compliance with any
            applicable local laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on VDBYai for personal,
            non-commercial transitory viewing only.
          </p>
          <p className="mb-4">
            This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose;</li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              VDBYai;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials;
            </li>
            <li>
              transfer the materials to another person or &quot;mirror&quot; the
              materials on any other server.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on VDBYai are provided on an &apos;as is&apos; basis.
            VDBYai makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall VDBYai or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on VDBYai, even if VDBYai or a VDBYai
            authorized representative has been notified orally or in writing of
            the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Accuracy of Materials
          </h2>
          <p className="mb-4">
            The materials appearing on VDBYai could include technical,
            typographical, or photographic errors. VDBYai does not warrant that
            any of the materials on its website are accurate, complete, or
            current.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
          <p className="mb-4">
            VDBYai has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by VDBYai of the
            site. Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
          <p className="mb-4">
            VDBYai may revise these terms of service for its website at any time
            without notice. By using this website you are agreeing to be bound
            by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in
            accordance with the laws and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </div>
  );
}
