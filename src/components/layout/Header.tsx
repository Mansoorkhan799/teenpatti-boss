"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Download, Home, LogIn, UserPlus,
  DollarSign, ShieldCheck, Wallet, BookOpen,
  Info, Phone, Lock, AlertTriangle, ChevronRight,
  ChevronDown, CreditCard, Banknote, PenLine,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const blogDropdownItems = [
  { href: "/blog", label: "All Posts", icon: BookOpen },
  { href: "/blog/teen-patti-boss-review-2026", label: "Review 2026", icon: PenLine },
  { href: "/blog/how-to-earn-money-teen-patti-boss", label: "Earn Money Guide", icon: DollarSign },
  { href: "/blog/teen-patti-boss-withdrawal-guide", label: "Withdrawal Guide", icon: Wallet },
  { href: "/blog/teen-patti-boss-referral-code-guide", label: "Referral Code Guide", icon: PenLine },
  { href: "/blog/how-to-claim-teen-patti-boss-111-bonus", label: "Claim Rs. 111 Bonus", icon: PenLine },
];

const accountDropdownItems = [
  { href: "/how-to-register-on-teen-patti-boss", label: "Register", icon: UserPlus },
  { href: "/how-to-login-teen-patti-boss", label: "Login", icon: LogIn },
  { href: "/blog/teen-patti-boss-withdrawal-guide", label: "Deposit", icon: CreditCard },
  { href: "/teen-patti-boss-withdrawal-proof", label: "Withdraw", icon: Banknote },
];

const menuSections = [
  {
    title: "MAIN",
    items: [
      { href: "/", label: "Home", icon: Home },
      { href: "/how-to-register-on-teen-patti-boss", label: "Register", icon: UserPlus },
      { href: "/how-to-login-teen-patti-boss", label: "Login", icon: LogIn },
    ],
  },
  {
    title: "GUIDES",
    items: [
      { href: "/how-to-earn-money-on-teen-patti-boss", label: "Earn Money", icon: DollarSign },
      { href: "/is-teen-patti-boss-real-or-fake", label: "Is It Real?", icon: ShieldCheck },
      { href: "/teen-patti-boss-withdrawal-proof", label: "Withdrawal Proof", icon: Wallet },
      { href: "/blog/teen-patti-boss-withdrawal-guide", label: "Deposit Guide", icon: CreditCard },
      { href: "/blog", label: "Blog", icon: BookOpen },
    ],
  },
  {
    title: "INFO",
    items: [
      { href: "/about", label: "About", icon: Info },
      { href: "/contact", label: "Contact", icon: Phone },
      { href: "/privacy-policy", label: "Privacy Policy", icon: Lock },
      { href: "/disclaimer", label: "Disclaimer", icon: AlertTriangle },
    ],
  },
];

function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string; icon: React.ElementType }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-green-900/40 transition-all duration-200"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full mt-2 left-0 w-52 bg-gray-900 border border-green-900/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden z-50 py-1">
          {items.map(({ href, label: itemLabel, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-green-950/50 hover:text-white transition-colors group"
            >
              <Icon className="w-4 h-4 text-gray-500 group-hover:text-green-400 flex-shrink-0 transition-colors" />
              {itemLabel}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-green-900/60 bg-gray-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
              <Image src="/images/teen-patti-boss.webp" alt="Teen Patti Boss" width={36} height={36} className="rounded-lg object-contain" priority />
              <span className="hidden sm:block">Teen Patti Boss</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-green-900/40 transition-all duration-200">Home</Link>
              <Link href="/how-to-earn-money-on-teen-patti-boss" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-green-900/40 transition-all duration-200">Earn Money</Link>
              <Link href="/is-teen-patti-boss-real-or-fake" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-green-900/40 transition-all duration-200">Is It Legit?</Link>
              <DropdownMenu label="Blog" items={blogDropdownItems} />
              <DropdownMenu label="Account" items={accountDropdownItems} />
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.downloadLink}
                target="_blank"
                rel="nofollow noopener"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-green-700/30"
              >
                <Download className="w-4 h-4" />
                Download APK
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-green-900/60 bg-gray-900"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="absolute right-0 top-0 h-full w-[300px] bg-[#0d0d0d] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <Image src="/images/teen-patti-boss.webp" alt="Teen Patti Boss" width={36} height={36} className="rounded-xl object-contain" />
                <span className="text-white font-bold text-base">Teen Patti Boss</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Scrollable Nav */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
              {menuSections.map((section) => (
                <div key={section.title}>
                  <p className="text-[10px] font-bold text-gray-500 tracking-widest px-3 mb-1">
                    {section.title}
                  </p>
                  <div className="space-y-0.5">
                    {section.items.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-200 hover:bg-green-950/40 hover:text-white transition-colors group"
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                          {label}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-green-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Download CTA */}
            <div className="px-4 py-4 border-t border-gray-800 bg-[#0d0d0d]">
              <a
                href={siteConfig.downloadLink}
                target="_blank"
                rel="nofollow noopener"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold text-sm rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/40"
              >
                <Download className="w-4 h-4" />
                Download Free APK
              </a>
              <p className="text-center text-[10px] text-gray-500 mt-2">
                {siteConfig.apkSize} · Android {siteConfig.os} · {siteConfig.version} (2026 Update)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
