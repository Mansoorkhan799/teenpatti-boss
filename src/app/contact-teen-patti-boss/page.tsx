import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "Contact Us — 3 Patti Boss APK Guide Pakistan",
 description: "Contact the teenpattibossgame.com.pk team for questions about 3 Patti Boss APK, download issues, withdrawal help, or content feedback.",
 alternates: { canonical: `${siteConfig.siteUrl}/contact-teen-patti-boss` },
};

export default function ContactPage() {
 return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact-teen-patti-boss" }]} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <div className="mt-6 mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white ">Contact Us</h1>
          <p className="mt-4 text-gray-100 ">Have questions about 3 Patti Boss? We are here to help Pakistani players with reliable information.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {[
            {
             icon: "📧",
             label: "Email Support",
             value: siteConfig.social.email,
             href: `mailto:${siteConfig.social.email}`,
             desc: "For detailed questions, content corrections, and partnerships.",
            },
            {
             icon: "📱",
             label: "WhatsApp",
             value: "Chat on WhatsApp",
             href: siteConfig.social.whatsapp,
             desc: "Quick queries about downloads, registration, and bonuses.",
            },
            {
             icon: "✈️",
             label: "Telegram Channel",
             value: "Join our Telegram",
             href: siteConfig.social.telegram,
             desc: "Latest news, updates, bonus codes, and tips.",
            },
            {
             icon: "📘",
             label: "Facebook Page",
             value: "Follow on Facebook",
             href: siteConfig.social.facebook,
             desc: "Community discussions, strategies, and user reviews.",
            },
          ].map((item, i) => (
            <a
             key={i}
             href={item.href}
             target="_blank"
             rel="nofollow noopener"
             className="flex items-start gap-4 p-5 bg-gray-900 rounded-2xl border border-green-900/30 hover:border-green-600/50 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <div className="font-bold text-white text-sm group-hover:text-green-400 transition-colors">{item.label}</div>
                <div className="text-green-400 text-xs font-semibold mt-0.5">{item.value}</div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-green-950/20 rounded-2xl border border-green-900/40 p-6">
          <h2 className="font-bold text-white text-lg mb-4">Frequently Asked Support Topics</h2>
          <div className="space-y-3">
            {[
              { q: "Download or installation problems", a: "See our detailed download guide at /download" },
              { q: "Account registration issues", a: "Step-by-step guide available at /register" },
              { q: "Withdrawal questions", a: "Full withdrawal guide with proof at /withdrawal-proof" },
              { q: "App seems fake or not paying", a: "Read our legitimacy review at /is-real-or-fake" },
              { q: "General 3 Patti Boss support", a: "For app-specific support, use the in-app 24/7 chat" },
            ].map((item, i) => (
              <div key={i} className="text-sm">
                <span className="font-medium text-white">Q: {item.q}</span>
                <br />
                <span className="text-gray-100 ">→ {item.a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-5 bg-amber-950/30 rounded-2xl border border-amber-900/50 text-sm text-gray-100 ">
          <strong className="text-amber-400">Note:</strong> We are an independent information website, not the official 3 Patti Boss app support. For direct app support (deposits, withdrawals, bans), please use the in-app customer support chat.
        </div>
      </div>
    </>
  );
}
