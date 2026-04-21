import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "Privacy Policy — 3 Patti Boss APK Guide Pakistan",
 description: "Privacy policy for teenpattibossgame.com.pk. Learn how we collect, use, and protect your information when you visit our website.",
 alternates: { canonical: `${siteConfig.siteUrl}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
 return (
    <>
      <BreadcrumbSchema items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        <div className="mt-6 mb-10">
          <h1 className="text-3xl font-black text-white ">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last Updated: April 21, 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-100 leading-relaxed">
          <p>This Privacy Policy describes how teenpattibossgame.com.pk (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information about you when you visit our website.</p>

          <h2 className="text-xl font-bold text-white ">1. Information We Collect</h2>
          <h3 className="font-semibold text-white">Automatically Collected Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring URL</li>
            <li>IP address (anonymized where possible)</li>
          </ul>

          <h3 className="font-semibold text-white">Information You Provide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact form submissions (name, email, message)</li>
            <li>Email newsletter sign-ups</li>
            <li>Comments or feedback submitted through the website</li>
          </ul>

          <h2 className="text-xl font-bold text-white ">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and improve website content</li>
            <li>To respond to inquiries and support requests</li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To send newsletters if you have subscribed</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-white ">3. Cookies</h2>
          <p>We use cookies to improve your browsing experience. Cookies are small files stored on your device. You can control cookies through your browser settings. Types of cookies we use:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essential cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
            <li><strong>Advertising cookies:</strong> Used by ad networks to show relevant ads</li>
          </ul>

          <h2 className="text-xl font-bold text-white ">4. Third-Party Services</h2>
          <p>We may use third-party services including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google Analytics — website traffic analysis</li>
            <li>Google AdSense — advertising</li>
            <li>Affiliate networks — tracking referral commissions</li>
          </ul>
          <p>These services have their own privacy policies. We encourage you to review them.</p>

          <h2 className="text-xl font-bold text-white ">5. Data Sharing</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Service providers necessary to operate our website</li>
            <li>Legal authorities when required by law</li>
            <li>Business successors in case of merger or acquisition</li>
          </ul>

          <h2 className="text-xl font-bold text-white ">6. Data Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure. We encourage you to use strong passwords and secure connections.</p>

          <h2 className="text-xl font-bold text-white ">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-xl font-bold text-white ">8. Children&apos;s Privacy</h2>
          <p>Our website is intended for users 18 years and older. We do not knowingly collect information from children under 18. If we become aware of such collection, we will delete it immediately.</p>

          <h2 className="text-xl font-bold text-white ">9. Changes to This Policy</h2>
          <p>We may update this policy periodically. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance.</p>

          <h2 className="text-xl font-bold text-white ">10. Contact</h2>
          <p>For privacy-related inquiries: <a href={`mailto:${siteConfig.social.email}`} className="text-green-400">{siteConfig.social.email}</a></p>
        </div>
      </div>
    </>
  );
}
