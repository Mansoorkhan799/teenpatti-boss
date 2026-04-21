import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BonusSection() {
 return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
         badge="Bonuses & Rewards"
         title="All Bonuses Available on 3 Patti Boss"
         subtitle="Multiple reward streams to maximize your earning potential — from welcome bonuses to VIP weekly payouts."
         center
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.bonuses.map((bonus, i) => (
            <div
             key={i}
             className="relative overflow-hidden bg-gray-950 rounded-2xl border border-green-900/30 shadow-sm hover:shadow-lg transition-all duration-200 group"
            >
              <div className={`h-1.5 bg-gradient-to-r ${bonus.color}`} />
              <div className="p-6">
                <div className={`inline-block text-2xl font-black bg-gradient-to-r ${bonus.color} bg-clip-text text-transparent mb-1`}>
                  {bonus.amount}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-sm text-gray-100 leading-relaxed">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-green-950/30 rounded-2xl border border-green-900/40 text-center">
          <p className="text-sm text-green-300">
            🎁 <Link href="/blog/how-to-claim-teen-patti-boss-111-bonus" className="font-bold text-green-300 hover:text-green-200 underline underline-offset-2 decoration-green-500/40 hover:decoration-green-300 transition-colors">Claim Your Rs. 111 Welcome Bonus</Link> — Register today and receive your free bonus on first login. No deposit required for the welcome reward.
          </p>
        </div>
      </div>
    </section>
  );
}
