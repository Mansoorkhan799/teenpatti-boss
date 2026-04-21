import { SectionHeader } from "@/components/ui/SectionHeader";

interface Step {
 step: number;
 title: string;
 description: string;
}

interface StepGuideProps {
 badge?: string;
 title: string;
 subtitle?: string;
 steps: Step[];
 ctaLabel?: string;
 ctaHref?: string;
}

export function StepGuide({ badge, title, subtitle, steps, ctaLabel, ctaHref }: StepGuideProps) {
 return (
    <div>
      <SectionHeader badge={badge} title={title} subtitle={subtitle} />
      <div className="mt-8 space-y-4">
        {steps.map((step) => (
          <div key={step.step} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-green-900/30">
              {step.step}
            </div>
            <div className="pt-1.5">
              <h3 className="font-bold text-white text-sm mb-1">{step.title}</h3>
              <p className="text-gray-100 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      {ctaLabel && ctaHref && (
        <div className="mt-6">
          <a
           href={ctaHref}
           target="_blank"
           rel="nofollow noopener"
           className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-bold rounded-xl transition-colors"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </div>
  );
}
