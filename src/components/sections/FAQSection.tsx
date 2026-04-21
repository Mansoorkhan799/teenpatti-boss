"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface FAQItem {
 question: string;
 answer: string;
}

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
 const [open, setOpen] = useState<number | null>(null);

 return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionHeader
           badge="FAQ"
           title="Frequently Asked Questions"
           subtitle="Everything Pakistani players ask about 3 Patti Boss — answered clearly."
           center
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
             key={i}
             className="border border-green-900/30 rounded-2xl overflow-hidden bg-gray-900"
            >
              <button
               onClick={() => setOpen(open === i ? null : i)}
               className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-green-950/20 transition-colors"
              >
                <span className="font-semibold text-white text-sm pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                 className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                   open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-1 border-t border-green-900/30">
                  <p className="text-sm text-gray-100 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
