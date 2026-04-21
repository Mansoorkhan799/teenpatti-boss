import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categoryConfig = [
  { key: "cardGames", label: "Card Games", icon: "🃏", color: "bg-green-950/40 border-green-900/50" },
  { key: "quickGames", label: "Quick & Prediction", icon: "⚡", color: "bg-emerald-950/40 border-emerald-900/50" },
  { key: "casinoGames", label: "Casino & Roulette", icon: "🎰", color: "bg-purple-950/40 border-purple-900/50" },
  { key: "slots", label: "Slots & Specialty", icon: "🎮", color: "bg-orange-950/40 border-orange-900/50" },
  { key: "boardGames", label: "Board Games", icon: "🎲", color: "bg-rose-950/40 border-rose-900/50" },
];

export function GamesSection() {
 return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
         badge="25+ Games"
         title="Complete Games Library on 3 Patti Boss"
         subtitle="From classic card games to fast prediction games, slots, and board games — Pakistan's most diverse real-money gaming platform."
         center
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryConfig.map((cat) => {
           const games = siteConfig.games[cat.key as keyof typeof siteConfig.games];
           return (
              <div key={cat.key} className={`rounded-2xl border p-6 ${cat.color}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-bold text-white text-base">{cat.label}</h3>
                </div>
                <ul className="space-y-2">
                  {games.map((game, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-100 ">
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 flex-shrink-0" />
                      {game}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 ">
          More games added regularly with each app update. Total 25+ games available.
        </div>
      </div>
    </section>
  );
}
