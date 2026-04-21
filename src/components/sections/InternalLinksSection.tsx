import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const links = [
  { href: siteConfig.downloadLink, label: "Download 3 Patti Boss APK", desc: "Get the latest v1.27 free for Android", icon: "⬇️" },
  { href: "/how-to-register-on-teen-patti-boss", label: "How to Register", desc: "Create your account in 2 minutes", icon: "📝" },
  { href: "/how-to-login-teen-patti-boss", label: "How to Login", desc: "Access your account from any device", icon: "🔑" },
  { href: "/how-to-earn-money-on-teen-patti-boss", label: "How to Earn Money", desc: "Proven strategies to maximize earnings", icon: "💰" },
  { href: "/is-teen-patti-boss-real-or-fake", label: "Is It Real or Fake?", desc: "Honest legitimacy review for Pakistani users", icon: "✅" },
  { href: "/teen-patti-boss-withdrawal-proof", label: "Withdrawal Proof", desc: "Real screenshots from verified withdrawals", icon: "📸" },
  { href: "/blog/teen-patti-boss-vs-teen-patti-crown", label: "Teen Patti Boss vs Crown", desc: "Which app is better in Pakistan 2026?", icon: "🔄" },
  { href: "/blog", label: "Blog & Guides", desc: "Expert tips, strategies, and news", icon: "📰" },
];

export function InternalLinksSection() {
 return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Explore More
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Complete 3 Patti Boss Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
             key={link.href}
             href={link.href}
             className="group flex items-start gap-3 p-5 bg-gray-900 rounded-2xl border border-green-900/30 hover:border-green-600/50 hover:bg-green-950/20 transition-all duration-200"
            >
              <span className="text-2xl flex-shrink-0">{link.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-sm group-hover:text-green-400 transition-colors flex items-center gap-1">
                  {link.label}
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{link.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
