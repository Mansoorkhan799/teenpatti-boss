import { siteConfig } from "@/data/site";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ReviewsSection() {
 return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
         badge="User Reviews"
         title="What Pakistani Players Are Saying"
         subtitle="Real reviews from verified users of 3 Patti Boss across Pakistan."
         center
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.reviews.map((review, i) => (
            <div
             key={i}
             className="bg-gray-900 rounded-2xl border border-green-900/30 p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500 ">{review.city} · {review.date}</div>
                </div>
                <div className="ml-auto">
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p className="text-sm text-gray-100 leading-relaxed italic">&ldquo;{review.review}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-10 bg-gray-900 rounded-2xl border border-green-900/30 p-6 text-center shadow-sm">
          <div className="text-5xl font-black text-white mb-2">{siteConfig.rating}</div>
          <StarRating rating={parseFloat(siteConfig.rating)} />
          <div className="mt-2 text-sm text-gray-500 ">Based on {siteConfig.ratingCount} ratings</div>
        </div>
      </div>
    </section>
  );
}
