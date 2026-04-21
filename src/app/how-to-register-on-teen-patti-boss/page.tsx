import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { BreadcrumbSchema, HowToSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "How to Register on 3 Patti Boss APK — Create Account (2026)",
 description:
    "Step-by-step guide to register and create your account on 3 Patti Boss APK Pakistan. Sign up in 2 minutes and claim Rs. 111 welcome bonus.",
 alternates: { canonical: `${siteConfig.siteUrl}/how-to-register-on-teen-patti-boss` },
};

const registerFaqs = [
  { question: "Can I create multiple accounts on 3 Patti Boss?", answer: "No. Each user is allowed only one account. Creating multiple accounts violates the terms of service and may lead to permanent bans." },
  { question: "What information is required to register?", answer: "You need a valid email address and phone number. An OTP will be sent to verify your identity." },
  { question: "Is registration free?", answer: "Yes, registration is completely free. You also receive a Rs. 111 welcome bonus automatically upon first login." },
  { question: "Can I play as a guest without registering?", answer: "Yes, you can tap 'Play as Guest' to enter the lobby. However, a permanent account is required to deposit money and withdraw winnings." },
  { question: "How long does registration take?", answer: "Registration takes approximately 2 minutes. Fill in your details, verify with OTP, and set a password." },
];

export default function RegisterPage() {
 return (
    <>
      <HowToSchema
       name="How to Register on 3 Patti Boss"
       description="Create a new account on 3 Patti Boss APK in Pakistan."
       steps={siteConfig.steps.register}
      />
      <BreadcrumbSchema items={[{ name: "Register", url: "/how-to-register-on-teen-patti-boss" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Register" }]} />

        <div className="mt-6 mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Account Setup
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            How to Register on 3 Patti Boss APK and Create Your Account
          </h1>
          <p className="mt-4 text-gray-100 leading-relaxed">
            Creating your <strong>3 Patti Boss account</strong> takes under 2 minutes. Follow this guide to register, verify, and claim your Rs. 111 welcome bonus instantly.
          </p>
        </div>

        {/* TL;DR */}
        <div className="mb-10 p-5 bg-green-950/20 rounded-2xl border border-green-900/40">
          <p className="text-sm font-semibold text-green-300 mb-2">Quick Answer:</p>
          <p className="text-sm text-gray-100 ">Open the app → Tap Play as Guest → Go to Profile → Tap Register → Enter email/phone → Verify OTP → Set password → Done. You get Rs. 111 bonus on first login.</p>
        </div>

        {/* Welcome Bonus Callout */}
        <div className="mb-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🎁</div>
            <div>
              <h2 className="text-xl font-black">Rs. 111 Welcome Bonus</h2>
              <p className="text-yellow-100 text-sm mt-1">
                Every new user receives a free Rs. 111 bonus on their first login. No deposit required. Start playing immediately!
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            Step-by-Step Registration Guide
          </h2>
          <div className="space-y-4">
            {siteConfig.steps.register.map((step) => (
              <div key={step.step} className="flex gap-5 p-5 bg-gray-900 rounded-2xl border border-green-900/30 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md shadow-green-900/30">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-100 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mb-12 bg-gray-900 rounded-2xl border border-gray-700 p-6">
          <h2 className="font-bold text-white text-lg mb-4">💡 Registration Tips</h2>
          <ul className="space-y-3">
            {[
              "Use a real phone number — you will need it to recover your account if you forget your password.",
              "Link both phone and email for maximum account security and recovery options.",
              "Choose a strong password with a mix of letters, numbers, and symbols.",
              "Never share your login credentials with anyone to protect your balance.",
              "After registration, immediately claim your welcome bonus from the rewards section.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-100 ">
                <span className="text-green-500 flex-shrink-0">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <FAQSection faqs={registerFaqs} />

        {/* Related */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: "https://3pattiboss.in/?from_gameid=4407269&channelCode=2949560", label: "⬇️ Download APK" },
            { href: "/how-to-login-teen-patti-boss", label: "🔑 How to Login" },
            { href: "/how-to-earn-money-on-teen-patti-boss", label: "💰 How to Earn" },
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
