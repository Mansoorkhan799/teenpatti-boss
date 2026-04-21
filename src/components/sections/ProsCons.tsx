import { CheckCircle, XCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProsCons() {
 return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
         badge="Pros & Cons"
         title="Advantages and Disadvantages of 3 Patti Boss"
         subtitle="An honest breakdown to help you make an informed decision."
         center
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="bg-gray-950 rounded-2xl border border-green-900/40 overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-green-950/50 border-b border-green-900/40 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h3 className="font-bold text-green-400">Advantages</h3>
            </div>
            <ul className="p-6 space-y-3">
              {siteConfig.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-100">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-gray-950 rounded-2xl border border-red-900/40 overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-red-950/30 border-b border-red-900/40 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-red-400">Disadvantages</h3>
            </div>
            <ul className="p-6 space-y-3">
              {siteConfig.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-100">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
