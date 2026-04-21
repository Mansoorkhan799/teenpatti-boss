import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "About Us — 3 Patti Boss APK Guide Pakistan",
 description: "Learn about teenpattibossgame.com.pk — Pakistan's most trusted independent guide for 3 Patti Boss APK download, strategies, and real money gaming information.",
 alternates: { canonical: `${siteConfig.siteUrl}/about-teen-patti-boss` },
};

export default function AboutPage() {
 return (
    <>
      <BreadcrumbSchema items={[{ name: "About", url: "/about-teen-patti-boss" }]} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "About Us" }]} />

        <div className="mt-6 mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white ">About TeenPattiBossGame.com.pk</h1>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-100 leading-relaxed">
          <p>
            Welcome to <strong>teenpattibossgame.com.pk</strong> — Pakistan&apos;s most comprehensive and trusted independent guide for the 3 Patti Boss gaming app. We were founded by a team of Pakistani gaming enthusiasts and digital content creators who saw a gap in reliable, honest information about real-money gaming apps in Pakistan.
          </p>

          <h2 className="text-xl font-bold text-white ">Who We Are</h2>
          <p>
            We are a small team of writers, researchers, and gaming veterans based in Pakistan. Our team has collectively spent thousands of hours testing real-money gaming apps, verifying withdrawal processes, and documenting the real experiences of Pakistani players. We are not affiliated with 3 Patti Boss or its developers — we operate entirely independently to provide unbiased, honest information.
          </p>

          <h2 className="text-xl font-bold text-white ">Our Mission</h2>
          <p>
            Our mission is to help Pakistani players make informed decisions about real-money gaming apps. We believe that with the right information, players can enjoy gaming as entertainment while managing risk responsibly. We cover download guides, earning strategies, withdrawal processes, legitimacy reviews, and comparisons — everything a Pakistani gamer needs in one place.
          </p>

          <h2 className="text-xl font-bold text-white ">Why We Built This Site</h2>
          <p>
            When 3 Patti Boss gained massive popularity in Pakistan in 2024, we noticed that most available information was either inaccurate, incomplete, or buried in difficult-to-navigate platforms. Pakistani players needed a dedicated, high-quality resource in their language, covering their specific payment methods (JazzCash, Easypaisa) and their unique needs.
          </p>
          <p>
            We built teenpattibossgame.com.pk to fill that gap — with honest reviews, real withdrawal proof, detailed guides, and responsible gaming information.
          </p>

          <h2 className="text-xl font-bold text-white ">Our Content Standards</h2>
          <ul className="space-y-2">
            <li><strong>Accuracy:</strong> All game details, version numbers, and payment information are verified before publishing.</li>
            <li><strong>Honesty:</strong> We report both pros and cons. We do not hide disadvantages to drive downloads.</li>
            <li><strong>Responsibility:</strong> Every page includes responsible gaming reminders. We do not promote addictive gambling behavior.</li>
            <li><strong>Freshness:</strong> Content is regularly updated to reflect the latest app version and features.</li>
          </ul>

          <h2 className="text-xl font-bold text-white ">Contact Us</h2>
          <p>
            Have a question, found an error, or want to share your 3 Patti Boss experience? We&apos;d love to hear from you.
          </p>
          <p>
            Email: <a href={`mailto:${siteConfig.social.email}`} className="text-green-400">{siteConfig.social.email}</a>
          </p>

          <div className="mt-8 p-5 bg-amber-950/30 rounded-2xl border border-amber-900/50 text-sm">
            <p className="font-semibold text-amber-400 mb-2">⚠️ Disclaimer</p>
            <p>This website is an independent informational guide. We are not affiliated with 3 Patti Boss, its developers, or parent company. Real-money gaming involves financial risk. This content is for adults 18+ only.</p>
          </div>
        </div>
      </div>
    </>
  );
}
