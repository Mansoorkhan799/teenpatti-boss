import Image from "next/image";
import Link from "next/link";
import { Download, Shield, Star, Users } from "lucide-react";
import { siteConfig } from "@/data/site";

export function HeroSection() {
 return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#021a0c] via-[#062318] to-[#0a3520] text-white">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-700/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Latest Version {siteConfig.version} — Free Download
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">
              Teen Patti Boss APK{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Download Pakistan
              </span>
            </h1>

            <p className="text-green-100/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Pakistan&apos;s #1 real money card game app. Play Teen Patti, Rummy, Poker &amp; 25+ games. Earn via JazzCash &amp; Easypaisa. Get <strong className="text-white">Rs. 111 welcome bonus</strong> on signup. Also known as <strong className="text-white">3 Patti Boss</strong>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-black text-white">100K+</div>
                <div className="text-xs text-green-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">25+</div>
                <div className="text-xs text-green-400">Games</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">4.5★</div>
                <div className="text-xs text-green-400">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">5 Min</div>
                <div className="text-xs text-green-400">Withdrawal</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
               href={siteConfig.downloadLink}
               target="_blank"
               rel="nofollow noopener"
               className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg shadow-black/20 ring-1 ring-white/10 hover:bg-white/15 hover:border-white/30 hover:ring-white/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5 shrink-0" />
                Download 3 Patti Boss
              </a>
              <Link
               href="/how-to-earn-money-on-teen-patti-boss"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-green-900/30 border border-green-700/40 text-white font-semibold text-base rounded-2xl hover:bg-green-900/50 transition-all duration-200"
              >
                💰 How to Earn Money
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-green-400/80">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" />Safe & Secure</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4" />RNG Certified</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />JazzCash &amp; Easypaisa</span>
            </div>
          </div>

          {/* Right - App Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-64 sm:w-80 h-auto">
                <div className="rounded-3xl overflow-hidden border-4 border-green-700/20 shadow-2xl shadow-black/60 bg-gray-900">
                  <Image
                   src={siteConfig.images.hero}
                   alt="Teen Patti Boss App Screenshot"
                   width={320}
                   height={580}
                   className="w-full h-auto object-cover"
                   priority
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  FREE
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-yellow-900 text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                  Rs. 111 Bonus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
