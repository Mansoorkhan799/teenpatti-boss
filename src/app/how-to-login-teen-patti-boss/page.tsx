import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { BreadcrumbSchema, HowToSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "How to Login to 3 Patti Boss APK — Sign In Guide (2026)",
 description:
    "Learn how to login to your 3 Patti Boss account on Android. Fix login issues, reset forgotten password, and access your account from any device.",
 alternates: { canonical: `${siteConfig.siteUrl}/how-to-login-teen-patti-boss` },
};

const loginSteps = [
  { step: 1, title: "Open 3 Patti Boss", description: "Launch the app on your Android device." },
  { step: 2, title: "Tap Login", description: "Tap the 'Login' button on the home screen." },
  { step: 3, title: "Enter Credentials", description: "Enter your registered phone number or username and your password." },
  { step: 4, title: "Tap Login Button", description: "Tap 'Login' to access your account and dashboard." },
  { step: 5, title: "Forgot Password?", description: "Use the 'Forgot Password' option to reset via OTP sent to your registered phone or email." },
];

const loginFaqs = [
  { question: "Why can't I log in to 3 Patti Boss?", answer: "Check that your username/phone number and password are correct. Ensure your internet connection is stable. If the issue persists, use 'Forgot Password' to reset." },
  { question: "How do I reset my 3 Patti Boss password?", answer: "Tap 'Forgot Password' on the login screen. Enter your registered phone number or email, receive an OTP, and set a new password." },
  { question: "Can I stay logged in across devices?", answer: "3 Patti Boss allows login on one device at a time. Logging in on a new device will log you out of the previous one." },
  { question: "My account is locked — what should I do?", answer: "If your account appears locked or suspended, contact 24/7 customer support through the in-app chat for assistance." },
  { question: "Can I log in as a guest?", answer: "Yes, tap 'Play as Guest' to access a temporary account. However, guest accounts cannot deposit or withdraw real money." },
];

export default function LoginPage() {
 return (
    <>
      <HowToSchema
       name="How to Login to 3 Patti Boss"
       description="Sign in to your 3 Patti Boss account on Android."
       steps={loginSteps}
      />
      <BreadcrumbSchema items={[{ name: "Login", url: "/how-to-login-teen-patti-boss" }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Login" }]} />

        <div className="mt-6 mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Account Access
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            How to Login to 3 Patti Boss APK — Sign In Guide
          </h1>
          <p className="mt-4 text-gray-100 leading-relaxed">
            Access your <strong>3 Patti Boss account</strong> quickly and securely. This guide covers normal login, password recovery, and fixes for common login errors in Pakistan.
          </p>
        </div>

        {/* TL;DR */}
        <div className="mb-10 p-5 bg-green-950/20 rounded-2xl border border-green-900/40">
          <p className="text-sm font-semibold text-green-300 mb-2">Quick Answer:</p>
          <p className="text-sm text-gray-100 ">Open app → Tap Login → Enter phone/username + password → Tap Login. Forgot password? Use OTP reset option.</p>
        </div>

        {/* Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Login Steps</h2>
          <div className="space-y-4">
            {loginSteps.map((step) => (
              <div key={step.step} className="flex gap-5 p-5 bg-gray-900 rounded-2xl border border-green-900/30 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
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

        {/* Login Issues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Fix Common Login Problems</h2>
          <div className="space-y-4">
            {[
              { problem: "Wrong Password", solution: "Use 'Forgot Password' to reset via OTP. Passwords are case-sensitive — double-check caps lock." },
              { problem: "Account Not Found", solution: "Ensure you are entering the same phone number or email used during registration. Try the alternate identifier." },
              { problem: "Login Button Not Working", solution: "Check your internet connection. Clear app cache in device Settings > Apps > 3 Patti Boss > Clear Cache." },
              { problem: "OTP Not Received", solution: "Check if your phone number is correct. Wait 60 seconds and request a new OTP. Check spam folder if using email." },
              { problem: "Logged Out Suddenly", solution: "This happens when another device logs in with your credentials. Change your password immediately and check for unauthorized access." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-amber-950/30 rounded-2xl border border-amber-900/50">
                <h3 className="font-bold text-amber-400 text-sm mb-2">⚠️ {item.problem}</h3>
                <p className="text-sm text-gray-100 ">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        <FAQSection faqs={loginFaqs} />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: "https://3pattiboss.in/?from_gameid=4407269&channelCode=2949560", label: "⬇️ Download APK" },
            { href: "/how-to-register-on-teen-patti-boss", label: "📝 Create Account" },
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
