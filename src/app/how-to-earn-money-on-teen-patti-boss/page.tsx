import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { BreadcrumbSchema, HowToSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "How to Earn Money on 3 Patti Boss in Pakistan (2026 Guide)",
 description:
    "Complete guide to earning real money on 3 Patti Boss Pakistan — through gameplay, referrals, bonuses, VIP rewards, and the agent program. Withdraw via JazzCash.",
 alternates: { canonical: `${siteConfig.siteUrl}/how-to-earn-money-on-teen-patti-boss` },
};

const earnSteps = [
  { step: 1, title: "Download & Register", description: "Download the APK and create a free account. Claim your Rs. 111 welcome bonus on first login." },
  { step: 2, title: "Practice Before Playing", description: "Use the offline practice mode to master 1–2 games before risking real money." },
  { step: 3, title: "Make Your First Deposit", description: "Deposit the minimum Rs. 100 via JazzCash or Easypaisa to start playing with real stakes." },
  { step: 4, title: "Use Daily Bonuses", description: "Log in every day to claim free chips and spin rewards. These increase your balance without spending extra." },
  { step: 5, title: "Build Referral Network", description: "Share your referral link on WhatsApp, Facebook, and Telegram. Earn up to 30% commission on referrals' activity." },
  { step: 6, title: "Unlock VIP Membership", description: "Stay active to earn VIP status — access higher daily bonuses, weekly cashback up to Rs. 60,000, and exclusive events." },
  { step: 7, title: "Withdraw Your Earnings", description: "Cash out anytime via JazzCash or Easypaisa. Funds typically arrive within 5–10 minutes." },
];

const earnFaqs = [
  { question: "How much can I earn on 3 Patti Boss per month?", answer: "Earnings vary widely. Skilled players combined with active referrals can earn Rs. 10,000–50,000+ monthly. Referral income alone can be passive and consistent." },
  { question: "Which game has the best winning chances on 3 Patti Boss?", answer: "Skill-based games like Teen Patti and Rummy offer better long-term returns for experienced players. Fast games like Dragon vs Tiger rely more on luck." },
  { question: "Is the referral income guaranteed?", answer: "Referral commission is paid automatically based on your referrals' activity. Once someone joins using your link and plays, you earn commission continuously." },
  { question: "Can I earn money without depositing?", answer: "Yes — through the Rs. 111 welcome bonus and daily login rewards. However, to significantly grow your earnings, a small initial deposit is recommended." },
  { question: "How does the Agent Program work?", answer: "Agents bring large numbers of players to the platform and receive higher commission rates plus exclusive promotional tools and direct platform support." },
];

export default function HowToEarnMoneyPage() {
 return (
    <>
      <HowToSchema
       name="How to Earn Money on 3 Patti Boss"
       description="Complete step-by-step guide to earning real money on 3 Patti Boss in Pakistan through gameplay, referrals, and bonuses."
       steps={earnSteps}
      />
      <BreadcrumbSchema items={[{ name: "How to Earn Money", url: "/how-to-earn-money-on-teen-patti-boss" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "How to Earn Money" }]} />

        <div className="mt-6 mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Earning Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            How to Earn Money on 3 Patti Boss Pakistan: Complete 2026 Guide
          </h1>
          <p className="mt-4 text-gray-100 leading-relaxed">
            3 Patti Boss offers <strong>multiple earning streams</strong> for Pakistani players — from real-money gameplay to passive referral income. This guide breaks down every method with actionable strategies.
          </p>
        </div>

        {/* TL;DR */}
        <div className="mb-10 p-5 bg-green-950/30 rounded-2xl border border-green-900/50/50">
          <p className="text-sm font-semibold text-green-300 mb-2">Quick Answer — Earning Methods:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-100 ">
            {["🎮 Real money gameplay", "🔗 Referral commissions (30%)", "🎁 Daily login bonuses", "🎡 Lucky spin wheel prizes", "👑 VIP weekly cashback", "🏆 Tournament prizes"].map((item, i) => (
              <div key={i} className="flex items-center gap-1">{item}</div>
            ))}
          </div>
        </div>

        {/* Earning Methods */}
        <div className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-white ">6 Ways to Earn Real Money on 3 Patti Boss</h2>

          {[
            {
             icon: "🎮",
             title: "1. Earn Through Gameplay",
             color: "border-green-900/50",
             content: "The most direct earning method. Deposit Rs. 100+, choose a game, and win against other players. Card games like Teen Patti and Rummy reward skill and strategy. As your skills improve, move to higher-stakes tables for larger winnings. Key tip: Master one game before exploring others.",
            },
            {
             icon: "🔗",
             title: "2. Referral Commission (Up to 30%)",
             color: "border-green-800",
             content: "Share your unique referral link via WhatsApp, Facebook, or Telegram. When someone joins using your link and deposits, you earn up to 30% commission on their activity — continuously, not just once. If a referral deposits Rs. 3,000, you get an instant Rs. 800 bonus on top of your regular commission.",
            },
            {
             icon: "🎁",
             title: "3. Daily Bonuses & Free Rewards",
             color: "border-yellow-200",
             content: "Log in daily to receive free chips, spin tokens, and bonus cash. Consecutive logins increase the reward amount. These free resources can be used to play games, letting you earn real money without spending anything extra.",
            },
            {
             icon: "👑",
             title: "4. VIP Program Benefits",
             color: "border-purple-200",
             content: "As you play and deposit more, you climb VIP tiers. Higher VIP levels unlock: weekly cashback (up to Rs. 60,000), higher daily bonuses, exclusive event access, priority support, and special deposit match bonuses. The VIP program turns regular play into a compounding earning advantage.",
            },
            {
             icon: "🏆",
             title: "5. Tournaments & Jackpots",
             color: "border-orange-200",
             content: "Participate in regular tournaments and jackpot events. These offer prize pools that regular gameplay cannot match. Leaderboard competitions reward top performers with exclusive bonuses and significant cash prizes. Prioritize these when they appear.",
            },
            {
             icon: "🤝",
             title: "6. Agent Program",
             color: "border-rose-200",
             content: "If you can bring a large number of new players (dozens or hundreds), apply for the Agent Program. Agents receive higher commission rates, exclusive promotional tools, and direct support from the 3 Patti Boss team — making this the highest-earning potential for network builders.",
            },
          ].map((item, i) => (
            <div key={i} className={`bg-gray-900 rounded-2xl border ${item.color} p-6 shadow-sm`}>
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-100 leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Step Guide */}
        <div className="mb-12 bg-gray-900 rounded-2xl p-8 border border-green-900/30">
          <h2 className="text-2xl font-bold text-white mb-8">Your Step-by-Step Earning Roadmap</h2>
          <div className="space-y-4">
            {earnSteps.map((step) => (
              <div key={step.step} className="flex gap-5">
                <div className="w-10 h-10 rounded-2xl bg-green-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md shadow-green-600/25">
                  {step.step}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-bold text-white text-base mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-100 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses breakdown */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">All Bonuses & Their Earning Value</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-700 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3">Bonus Type</th>
                  <th className="text-left px-4 py-3">Value</th>
                  <th className="text-left px-4 py-3">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Welcome Bonus", "Rs. 111", "Once on signup"],
                  ["Daily Login Reward", "Free chips", "Every day"],
                  ["First Deposit Bonus", "Up to 100% match", "First deposit only"],
                  ["Referral Commission", "Up to 30% ongoing", "Per referral activity"],
                  ["Lucky Spin Wheel", "Cash / Bike prizes", "Daily (extra with deposits)"],
                  ["VIP Weekly Cashback", "Up to Rs. 60,000", "Weekly"],
                  ["Tournament Prizes", "Variable prize pools", "As events occur"],
                  ["Festival Bonuses", "Special promotions", "Holiday events"],
                ].map(([type, value, freq], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-950" : "bg-gray-900"}>
                    <td className="px-4 py-3 font-medium text-white ">{type}</td>
                    <td className="px-4 py-3 font-semibold text-green-400">{value}</td>
                    <td className="px-4 py-3 text-gray-400 ">{freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <FAQSection faqs={earnFaqs} />

        <div className="mt-10 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white text-center">
          <h2 className="text-xl font-black mb-2">Start Earning Today</h2>
          <p className="text-green-100 text-sm mb-4">Download 3 Patti Boss free and claim your Rs. 111 welcome bonus.</p>
          <a href={siteConfig.downloadLink} target="_blank" rel="nofollow noopener" className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-colors">
            ⬇️ Download Free APK
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: siteConfig.downloadLink, label: "⬇️ Download" },
            { href: "/teen-patti-boss-withdrawal-proof", label: "📸 Withdrawal Proof" },
            { href: "/is-teen-patti-boss-real-or-fake", label: "✅ Is It Legit?" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="p-3 text-center text-sm font-semibold text-green-400 bg-green-950/30 rounded-xl hover:bg-green-950/50 transition-colors border border-green-900/40">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
