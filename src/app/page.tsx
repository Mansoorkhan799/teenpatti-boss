import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScreenshotsSlider } from "@/components/sections/ScreenshotsSlider";
import { TLDRSection } from "@/components/sections/TLDRSection";
import { AppDetailsCard } from "@/components/sections/AppDetailsCard";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { BonusSection } from "@/components/sections/BonusSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { StepGuide } from "@/components/sections/StepGuide";
import { ProsCons } from "@/components/sections/ProsCons";
import { FAQSection } from "@/components/sections/FAQSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { InternalLinksSection } from "@/components/sections/InternalLinksSection";
import {
  SoftwareAppSchema,
  FAQSchema,
  HowToSchema,
  BreadcrumbSchema,
} from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";
export const metadata: Metadata = {
 title: siteConfig.defaultMetaTitle,
 description:
    "Download Teen Patti Boss APK v1.27 free for Android in Pakistan. Play 25+ real money games — Teen Patti, Rummy, Poker. Earn via JazzCash & Easypaisa. Rs. 111 welcome bonus.",
 alternates: {
   canonical: siteConfig.siteUrl,
  },
};

export default function HomePage() {
 return (
    <>
      <SoftwareAppSchema />
      <FAQSchema faqs={siteConfig.faqs} />
      <HowToSchema
       name="How to Download and Install Teen Patti Boss APK"
       description="Step-by-step guide to download and install Teen Patti Boss APK on Android in Pakistan."
       steps={siteConfig.steps.download}
      />
      <BreadcrumbSchema items={[]} />

      {/* Hero */}
      <HeroSection />

      {/* TL;DR */}
      <TLDRSection />

      {/* App Overview + Details */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-4 border border-green-900/50">
                App Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What Is Teen Patti Boss?
              </h2>
              <div className="text-sm space-y-4 text-gray-100 leading-relaxed">
                <p>
                  <strong><Link href="/blog/teen-patti-boss-review-2026" className="text-green-400 hover:text-green-300 underline underline-offset-2 decoration-green-500/40 hover:decoration-green-400 transition-colors">Teen Patti Boss</Link></strong> (also known as <strong>3 Patti Boss</strong>) is a feature-rich Android application that brings the classic South Asian card game Teen Patti into the digital age. Designed primarily for players in Pakistan, this platform allows users to play traditional and modern card games, slot machines, board games, and prediction-based games — all while earning real money.
                </p>
                <p>
                  Unlike casual gaming apps, <strong>Teen Patti Boss</strong> operates as a <strong>real-cash gaming platform</strong>. Players deposit funds using local payment methods like JazzCash, Easypaisa, or direct bank transfers, participate in various games, and withdraw their winnings directly to their mobile wallets or bank accounts.
                </p>
                <p>
                  The platform uses certified <strong>Random Number Generators (RNG)</strong> to ensure fair outcomes in every game. Anti-cheating mechanisms, encrypted transactions, and a dedicated customer support team further reinforce trust and reliability.
                </p>
              </div>

            </div>

            <div>
              <AppDetailsCard />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Slider */}
      <ScreenshotsSlider />

      {/* Features */}
      <FeaturesGrid />

      {/* Bonuses */}
      <BonusSection />

      {/* Games */}
      <GamesSection />

      {/* Download Guide */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <StepGuide
             badge="Download Guide"
             title="How to Download & Install 3 Patti Boss APK"
             subtitle="Step-by-step instructions for Android users in Pakistan."
             steps={siteConfig.steps.download}
             ctaLabel="⬇️ Download APK Now"
             ctaHref={siteConfig.downloadLink}
            />
            <StepGuide
             badge="Registration"
             title="How to Register on 3 Patti Boss"
             subtitle="Create your account in under 2 minutes."
             steps={siteConfig.steps.register}
             ctaLabel="📝 Register Now"
             ctaHref={siteConfig.downloadLink}
            />
          </div>
        </div>
      </section>

      {/* Deposit & Withdraw */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <StepGuide
             badge="Deposit"
             title="How to Deposit Money on 3 Patti Boss"
             subtitle="Add funds via JazzCash, Easypaisa, or bank transfer."
             steps={siteConfig.steps.deposit}
             ctaLabel="💳 Deposit Now"
             ctaHref={siteConfig.downloadLink}
            />
            <StepGuide
             badge="Withdrawal"
             title="How to Withdraw Money from 3 Patti Boss"
             subtitle="Cash out your winnings in 5–10 minutes."
             steps={siteConfig.steps.withdraw}
             ctaLabel="💸 Withdraw Winnings"
             ctaHref={siteConfig.downloadLink}
            />
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
              Expert Tips
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tips to Win More on Teen Patti Boss
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🎯", tip: "Start Small and Build Gradually", desc: "Begin with the lowest bet tables. Protect your bankroll while learning game patterns and opponent behavior." },
              { icon: "🃏", tip: "Master One Game First", desc: "Deep understanding of a single game yields better results than surface-level play across many games." },
              { icon: "🎁", tip: "Leverage Free Bonuses", desc: "Use daily login rewards, welcome bonus, and free spins to play without risking your own money." },
              { icon: "💰", tip: "Set a Daily Budget", desc: "Decide how much you can afford to lose each day and never exceed that limit. Discipline wins." },
              { icon: "👁️", tip: "Study Your Opponents", desc: "In live rooms, observe how opponents bet. Look for patterns and adjust your strategy accordingly." },
              { icon: "🏆", tip: "Prioritize Tournaments", desc: "Tournaments and special events offer higher reward-to-risk ratios than regular gameplay." },
              { icon: "🔗", tip: "Build Your Referral Network", desc: "Even if you don't play daily, build a referral network and earn steady passive income." },
              { icon: "🧘", tip: "Take Breaks to Avoid Tilt", desc: "If on a losing streak, step away. Emotional decisions lead to poor play and depleted bankrolls." },
              { icon: "🔄", tip: "Keep the App Updated", desc: "Updates include new games, bug fixes, and security improvements. Always run the latest version." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gray-900 rounded-2xl border border-green-900/30 shadow-sm">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{item.tip}</h3>
                  <p className="text-xs text-gray-100 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
              Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Teen Patti Boss vs Other Gaming Apps in Pakistan
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-700 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-800 to-emerald-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-center px-4 py-3 font-semibold">Teen Patti Boss ⭐</th>
                  <th className="text-center px-4 py-3 font-semibold">Other App A</th>
                  <th className="text-center px-4 py-3 font-semibold">Other App B</th>
                  <th className="text-center px-4 py-3 font-semibold">Other App C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Total Games", "25+", "10–15", "10–20", "8–12"],
                  ["Real Money", "✅ Yes", "✅ Yes", "✅ Yes", "⚠️ Limited"],
                  ["Min Deposit", "Rs. 100", "Rs. 200", "Rs. 300", "Rs. 500"],
                  ["JazzCash / Easypaisa", "✅ Yes", "✅ Yes", "⚠️ Partial", "❌ No"],
                  ["Referral Commission", "Up to 30%", "10–15%", "10–20%", "❌ No"],
                  ["VIP Program", "✅ Yes", "❌ No", "✅ Yes", "❌ No"],
                  ["Offline Practice", "✅ Yes", "❌ No", "❌ No", "❌ No"],
                  ["Urdu Support", "✅ Yes", "❌ No", "⚠️ Partial", "❌ No"],
                  ["24/7 Support", "✅ Yes", "⚠️ Limited", "✅ Yes", "❌ No"],
                  ["Game Vault", "✅ Yes", "❌ No", "❌ No", "❌ No"],
                ].map(([feature, ...values], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-950" : "bg-gray-900"}>
                    <td className="px-4 py-3 font-medium text-white ">{feature}</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-400">{values[0]}</td>
                    <td className="px-4 py-3 text-center text-gray-400 ">{values[1]}</td>
                    <td className="px-4 py-3 text-center text-gray-400 ">{values[2]}</td>
                    <td className="px-4 py-3 text-center text-gray-400 ">{values[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <ProsCons />

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <FAQSection faqs={siteConfig.faqs} />

      {/* Internal Links */}
      <InternalLinksSection />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#021a0c] via-[#062318] to-[#0a3520] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-green-200/80 mb-8 text-base leading-relaxed">
            Join 100,000+ Pakistani players. Download Teen Patti Boss APK free, claim your Rs. 111 welcome bonus, and start playing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
             href={siteConfig.downloadLink}
             target="_blank"
             rel="nofollow noopener"
             className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold text-base rounded-2xl transition-all duration-200 shadow-xl shadow-green-900/40 hover:scale-105"
            >
              ⬇️ Download Free APK — {siteConfig.version}
            </a>
            <Link
             href="/how-to-earn-money-on-teen-patti-boss"
             className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-900/30 border border-green-700/40 text-white font-semibold text-base rounded-2xl hover:bg-green-900/50 transition-all duration-200"
            >
              💰 Earning Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
