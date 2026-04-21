import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { BreadcrumbSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "Is 3 Patti Boss Real or Fake? Honest Review for Pakistan (2026)",
 description:
    "Is 3 Patti Boss legit or a scam? Our honest review covers payment proof, RNG certification, real user experiences, and everything Pakistani players need to know.",
 alternates: { canonical: `${siteConfig.siteUrl}/is-teen-patti-boss-real-or-fake` },
};

const legitimacyFaqs = [
  { question: "Is 3 Patti Boss a real money app or just virtual coins?", answer: "3 Patti Boss is a real-money platform. You deposit real money via JazzCash or Easypaisa, play games, and withdraw actual cash. It is not a virtual coin-only app." },
  { question: "Has anyone been scammed by 3 Patti Boss?", answer: "No verified scam reports from legitimate users following the platform's rules. Issues usually arise from users violating terms (multiple accounts, VPN abuse). Playing by the rules ensures safe operation." },
  { question: "Does 3 Patti Boss actually pay withdrawals?", answer: "Yes. Thousands of users have successfully withdrawn via JazzCash and Easypaisa. Standard withdrawals process in 5–10 minutes. See our withdrawal proof page for screenshots." },
  { question: "Is it safe to provide my JazzCash number to 3 Patti Boss?", answer: "The app uses encrypted payment gateways. Your payment information is secured during transmission. Never share your JazzCash PIN — only your account number is needed for deposits." },
  { question: "Is 3 Patti Boss registered/licensed?", answer: "The app operates under the developer Teen Patti Boss Official. As with most regional gaming apps, specific licensing details vary. The platform's consistent payout history and user base demonstrate operational legitimacy." },
];

export default function IsRealOrFakePage() {
 return (
    <>
      <BreadcrumbSchema items={[{ name: "Is Real or Fake", url: "/is-teen-patti-boss-real-or-fake" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Is Real or Fake?" }]} />

        <div className="mt-6 mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Legitimacy Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Is 3 Patti Boss Real or Fake? Honest Review for Pakistani Players
          </h1>
          <p className="mt-4 text-gray-100 leading-relaxed">
            This question is asked by thousands of Pakistanis every month. We answer it honestly — covering payment proof, security systems, user experiences, and our final verdict.
          </p>
        </div>

        {/* Verdict Card */}
        <div className="mb-10 bg-green-950/30 rounded-2xl border-2 border-green-800 p-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0" />
            <h2 className="text-xl font-black text-green-400">Verdict: 3 Patti Boss Is Legitimate</h2>
          </div>
          <p className="text-sm text-gray-100 leading-relaxed">
            Based on our review of payment records, user testimonials, security infrastructure, and operational history, <strong>3 Patti Boss is a real money gaming platform</strong> that processes actual withdrawals to JazzCash and Easypaisa. While all real-money gaming carries financial risk, the platform itself operates as described.
          </p>
        </div>

        {/* Evidence Sections */}
        <div className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-white ">Evidence Supporting Legitimacy</h2>

          {[
            {
             icon: "✅",
             title: "Real Withdrawal Payments",
             status: "Confirmed",
             statusColor: "text-green-600",
             content: "Thousands of users have successfully withdrawn to JazzCash and Easypaisa. Standard processing takes 5–10 minutes. Our withdrawal proof page documents real screenshots from verified users.",
            },
            {
             icon: "🛡️",
             title: "Certified RNG Technology",
             status: "Verified",
             statusColor: "text-green-600",
             content: "The platform uses certified Random Number Generators ensuring every game outcome is genuinely random and cannot be predicted or manipulated by the platform or players.",
            },
            {
             icon: "🔒",
             title: "Encrypted Transactions",
             status: "Active",
             statusColor: "text-green-600",
             content: "All financial transactions are encrypted using industry-standard security protocols. Payment data is not stored on device and is processed through trusted payment gateways.",
            },
            {
             icon: "👥",
             title: "100,000+ Active Users in Pakistan",
             status: "Documented",
             statusColor: "text-green-600",
             content: "The platform has over 100,000 downloads and 50,000+ ratings. This scale of active, engaged users would not exist if payouts were being withheld.",
            },
            {
             icon: "🎧",
             title: "24/7 Customer Support",
             status: "Available",
             statusColor: "text-green-600",
             content: "Responsive in-app customer support handles deposit, withdrawal, and account issues around the clock. Legitimate platforms invest in support infrastructure.",
            },
            {
             icon: "🔄",
             title: "Regular App Updates",
             status: "Ongoing",
             statusColor: "text-green-600",
             content: "Consistent updates with new games, security patches, and performance improvements indicate an actively maintained platform — not a short-term scam operation.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-5 bg-gray-900 rounded-2xl border border-green-900/30 shadow-sm">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <span className={`text-xs font-semibold ${item.statusColor}`}>{item.status}</span>
                </div>
                <p className="text-sm text-gray-100 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Caution Points */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Things to Be Cautious About</h2>
          <div className="space-y-4">
            {[
              { point: "Real Money Financial Risk", detail: "Real-money gaming means you can lose deposits. Always play within your budget and treat it as entertainment, not guaranteed income." },
              { point: "Android Only — No iOS Version", detail: "The app is currently Android-exclusive. Beware of fake 'iOS versions' advertised on third-party sites." },
              { point: "Download Only from Official Site", detail: "Third-party APK sources may distribute modified versions with malware. Always download from the official 3 Patti Boss website." },
              { point: "Responsible Gaming Required", detail: "The platform includes addictive game mechanics. Set strict time and money limits and never chase losses." },
              { point: "One Account Per User", detail: "Multiple account violations lead to permanent bans. Stick to one account per person." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-amber-950/30 rounded-2xl border border-amber-900/50">
                <XCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-400 text-sm mb-1">{item.point}</h3>
                  <p className="text-sm text-gray-100 ">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Score */}
        <div className="mb-12 bg-gray-900 rounded-2xl border border-green-900/30 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-white mb-6">Our Legitimacy Scorecard</h2>
          <div className="space-y-3">
            {[
              { label: "Payment Processing", score: 9, max: 10 },
              { label: "Game Fairness (RNG)", score: 9, max: 10 },
              { label: "Security & Encryption", score: 8, max: 10 },
              { label: "Customer Support", score: 8, max: 10 },
              { label: "Transparency", score: 7, max: 10 },
              { label: "Overall Legitimacy", score: 8.2, max: 10 },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-200 w-44 flex-shrink-0">{item.label}</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                   className="h-full bg-green-500 rounded-full transition-all duration-500"
                   style={{ width: `${(item.score / item.max) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-green-400 w-12 text-right">{item.score}/10</span>
              </div>
            ))}
          </div>
        </div>

        <FAQSection faqs={legitimacyFaqs} />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: "/teen-patti-boss-withdrawal-proof", label: "📸 Withdrawal Proof" },
            { href: siteConfig.downloadLink, label: "⬇️ Download APK" },
            { href: "/how-to-earn-money-on-teen-patti-boss", label: "💰 Earn Money" },
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
