import { CheckCircle } from "lucide-react";

export function TLDRSection() {
 const points = [
    "Free APK download — no Play Store required",
    "25+ real money games: Teen Patti, Rummy, Poker, Slots",
    "Deposit & withdraw via JazzCash and Easypaisa",
    "Rs. 111 welcome bonus on first login",
    "Up to 30% referral commission",
    "Withdrawals processed in 5–10 minutes",
    "Minimum deposit only Rs. 100",
    "Bilingual support: English & Urdu",
  ];

 return (
    <section className="py-10 bg-green-950/20 border-y border-green-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">TL;DR</span>
            <h2 className="text-lg font-bold text-white tracking-tight">Quick Summary — Teen Patti Boss APK</h2>
          </div>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            <strong>Teen Patti Boss</strong> (3 Patti Boss) is Pakistan&apos;s most popular real-money card gaming app (v1.27, Android). It lets you play 25+ games, earn real cash, and withdraw via JazzCash or Easypaisa. Here is everything you need to know at a glance:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-100">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
