import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "Disclaimer — 3 Patti Boss APK Guide Pakistan",
 description: "Read the disclaimer for teenpattibossgame.com.pk — important information about independent status, financial risk, and responsible gaming for Pakistani users.",
 alternates: { canonical: `${siteConfig.siteUrl}/disclaimer` },
};

export default function DisclaimerPage() {
 return (
    <>
      <BreadcrumbSchema items={[{ name: "Disclaimer", url: "/disclaimer" }]} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Disclaimer" }]} />

        <div className="mt-6 mb-10">
          <h1 className="text-3xl font-black text-white ">Disclaimer</h1>
          <p className="mt-2 text-sm text-gray-500">Last Updated: April 21, 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-100 leading-relaxed">
          <div className="p-5 bg-red-950/30 rounded-2xl border border-red-200">
            <p className="font-bold text-red-400 mb-2">⚠️ Important Notice</p>
            <p>Real-money gaming involves significant financial risk. You can lose money. This website is for informational purposes only. Always play responsibly within your financial means.</p>
          </div>

          <h2 className="text-xl font-bold text-white ">1. Independence Statement</h2>
          <p>teenpattibossgame.com.pk is an <strong>independent informational website</strong>. We are not affiliated with, endorsed by, or connected to 3 Patti Boss, Teen Patti Boss Official, or any associated company. Our content represents our independent analysis and editorial opinions.</p>

          <h2 className="text-xl font-bold text-white ">2. Financial Risk Warning</h2>
          <p>Real-money gaming and online gambling involve significant financial risk. There is no guarantee of winning. You may lose all deposited funds. The information on this website does not constitute financial advice. We strongly recommend:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Only play with money you can afford to lose completely</li>
            <li>Set strict budgets and time limits</li>
            <li>Never chase losses</li>
            <li>Treat gaming as entertainment, not income</li>
            <li>Seek help if gaming is causing financial or emotional distress</li>
          </ul>

          <h2 className="text-xl font-bold text-white ">3. Age Restriction</h2>
          <p>This website and the gaming app described herein are strictly for adults aged <strong>18 years and older</strong>. If you are under 18, please leave this website immediately. We do not knowingly provide information to minors.</p>

          <h2 className="text-xl font-bold text-white ">4. Legal Jurisdiction</h2>
          <p>The legality of online real-money gaming varies by country, province, and jurisdiction. It is your responsibility to verify whether real-money gaming is legal in your specific location before participating. We do not provide legal advice.</p>

          <h2 className="text-xl font-bold text-white ">5. Accuracy of Information</h2>
          <p>While we strive to maintain accurate, up-to-date information, app features, bonuses, payment methods, and terms may change without notice. Always verify current details directly within the 3 Patti Boss app before making financial decisions.</p>

          <h2 className="text-xl font-bold text-white ">6. Affiliate Disclosure</h2>
          <p>This website may contain affiliate links. If you click a download link and install the app, we may receive a commission at no additional cost to you. This does not influence our editorial content or reviews.</p>

          <h2 className="text-xl font-bold text-white ">7. Responsible Gaming Resources</h2>
          <p>If you or someone you know is struggling with gambling-related issues, please seek professional help. Resources available in Pakistan include counseling services and mental health hotlines.</p>

          <h2 className="text-xl font-bold text-white ">8. Contact</h2>
          <p>For questions about this disclaimer, contact us at: <a href={`mailto:${siteConfig.social.email}`} className="text-green-400">{siteConfig.social.email}</a></p>
        </div>
      </div>
    </>
  );
}
