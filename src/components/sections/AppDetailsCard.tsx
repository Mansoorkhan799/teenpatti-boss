import { siteConfig } from "@/data/site";

export function AppDetailsCard() {
 const details = [
    { label: "App Name", value: siteConfig.name },
    { label: "Latest Version", value: siteConfig.version },
    { label: "APK Size", value: siteConfig.apkSize },
    { label: "Category", value: siteConfig.category },
    { label: "Developer", value: siteConfig.developer },
    { label: "Operating System", value: siteConfig.os },
    { label: "Languages", value: siteConfig.languages.join(", ") },
    { label: "Price", value: siteConfig.price },
    { label: "Payment Methods", value: siteConfig.paymentMethods.join(", ") },
    { label: "Minimum Deposit", value: siteConfig.minDeposit },
    { label: "Downloads", value: siteConfig.downloads },
    { label: "Rating", value: `★ ${siteConfig.rating}/5 (${siteConfig.ratingCount} ratings)` },
    { label: "Official Website", value: siteConfig.officialSite },
  ];

 return (
    <div className="bg-gray-900 rounded-2xl border border-green-900/30 overflow-hidden shadow-sm">
      <div className="px-6 py-4 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <h3 className="font-bold text-base">App Information at a Glance</h3>
      </div>
      <div className="divide-y divide-gray-800">
        {details.map((item, i) => (
          <div key={i} className="flex items-start px-6 py-3 gap-4 hover:bg-green-950/20 transition-colors">
            <span className="text-sm text-gray-400 w-40 flex-shrink-0 font-medium">{item.label}</span>
            <span className="text-sm text-white font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
