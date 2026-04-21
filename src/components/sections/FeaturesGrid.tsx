import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturesGrid() {
 return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
         badge="Features"
         title="Complete Features of 3 Patti Boss"
         subtitle="Everything you need for a world-class real money gaming experience — built for Pakistani players."
         center
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.features.map((feature, i) => (
            <div
             key={i}
             className="group p-6 bg-gray-900 rounded-2xl border border-green-900/30 hover:border-green-600/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
