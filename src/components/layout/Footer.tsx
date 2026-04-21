import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

function FacebookIcon() {
 return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function XIcon() {
 return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestIcon() {
 return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function Footer() {
 return (
    <footer className="bg-gray-950 text-gray-400 border-t border-green-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/teen-patti-boss.webp" alt="Teen Patti Boss" width={40} height={40} className="rounded-xl object-contain" />
              <span className="text-white font-bold text-xl">Teen Patti Boss</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Pakistan&apos;s most trusted guide for Teen Patti Boss APK download, strategies, and real money gaming tips.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="nofollow noopener" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors text-gray-300 hover:text-white" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="nofollow noopener" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white" aria-label="X (Twitter)">
                <XIcon />
              </a>
              <a href={siteConfig.social.pinterest} target="_blank" rel="nofollow noopener" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-700 flex items-center justify-center transition-colors text-gray-300 hover:text-white" aria-label="Pinterest">
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: siteConfig.downloadLink, label: "Download APK" },
                { href: "/how-to-register-on-teen-patti-boss", label: "How to Register" },
                { href: "/how-to-login-teen-patti-boss", label: "How to Login" },
                { href: "/how-to-earn-money-on-teen-patti-boss", label: "How to Earn Money" },
                { href: "/teen-patti-boss-withdrawal-proof", label: "Withdrawal Proof" },
                { href: "/is-teen-patti-boss-real-or-fake", label: "Is It Real or Fake?" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-green-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/disclaimer", label: "Disclaimer" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-green-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">App Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Version</span><span className="text-white">{siteConfig.version}</span></li>
              <li className="flex justify-between"><span>Platform</span><span className="text-white">Android</span></li>
              <li className="flex justify-between"><span>Size</span><span className="text-white">{siteConfig.apkSize}</span></li>
              <li className="flex justify-between"><span>Min Deposit</span><span className="text-white">{siteConfig.minDeposit}</span></li>
              <li className="flex justify-between"><span>Rating</span><span className="text-yellow-400">★ {siteConfig.rating}/5</span></li>
            </ul>
            <a
             href={siteConfig.downloadLink}
             target="_blank"
             rel="nofollow noopener"
             className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              ⬇️ Download APK
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-900/30 space-y-4">
          <p className="text-xs text-gray-100 leading-relaxed">
            <strong className="text-gray-500">Disclaimer:</strong> This website is an independent informational guide about 3 Patti Boss. We are not affiliated with the app developers. Real-money gaming involves financial risk. Play responsibly. This content is for users 18 years and older. Online gaming may be restricted in your jurisdiction — please check local laws before participating.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>© 2026 <a href="https://teenpattibossgame.com.pk" className="hover:text-green-400 transition-colors">teenpattibossgame.com.pk</a> — All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-gray-400">Disclaimer</Link>
              <Link href="/contact-teen-patti-boss" className="hover:text-gray-400">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
