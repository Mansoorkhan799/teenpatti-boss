import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/SchemaOrg";
import { blogPosts } from "@/data/site";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
 title: "Blog — 3 Patti Boss Tips, Guides & News Pakistan (2026)",
 description:
    "Expert guides, strategies, reviews, and news about 3 Patti Boss for Pakistani players. Learn how to win, earn referral income, and maximize bonuses.",
 alternates: { canonical: `${siteConfig.siteUrl}/blog` },
};

const categoryColors: Record<string, string> = {
  Review: "bg-green-950/50 text-green-400",
  Guide: "bg-green-100 text-green-700",
  Earning: "bg-yellow-100 text-yellow-700",
  Games: "bg-purple-100 text-purple-700",
  Tutorial: "bg-orange-100 text-orange-700",
  Comparison: "bg-rose-100 text-rose-700",
  Troubleshooting: "bg-red-100 text-red-700",
};

export default function BlogPage() {
 const featured = blogPosts[0];
 const rest = blogPosts.slice(1);

 return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "/blog" }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Blog" }]} />

        <div className="mt-6 mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            Expert Content
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            3 Patti Boss Blog — Guides, Reviews &amp; Strategies
          </h1>
          <p className="mt-3 text-gray-100 leading-relaxed">
            In-depth articles to help Pakistani players download, play, and earn on 3 Patti Boss.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-900 rounded-2xl border border-green-900/30 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200">
            <div className="relative h-56 lg:h-auto bg-gradient-to-br from-[#021a0c] to-[#0a3520] flex items-center justify-center">
              <Image
               src={featured.image}
               alt={featured.title}
               fill
               className="object-cover opacity-80"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                Featured Post
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[featured.category] || "bg-gray-800 text-gray-400"}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400">{featured.readTime}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-green-400 transition-colors leading-tight mb-3">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-100 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                Read Article <span>→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Review", "Guide", "Games", "Earning", "Tutorial", "Comparison", "Troubleshooting"].map((cat) => (
            <span
             key={cat}
             className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-gray-800 text-gray-400 cursor-pointer hover:bg-green-950/50 hover:text-green-400 transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link
             key={post.slug}
             href={`/blog/${post.slug}`}
             className="group block bg-gray-900 rounded-2xl border border-green-900/30 overflow-hidden hover:shadow-lg hover:border-green-700/40 transition-all duration-200"
            >
              <div className="relative h-44 bg-gradient-to-br from-[#021a0c] to-[#0a3520]">
                <Image
                 src={post.thumbnail}
                 alt={post.title}
                 fill
                 className="object-cover"
                 loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || "bg-gray-800 text-gray-400"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-200 leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString("en-PK", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span className="text-green-400 font-semibold">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#021a0c] via-[#062318] to-[#0a3520] rounded-2xl text-white text-center border border-green-900/30">
          <h2 className="text-xl font-black mb-2">Ready to Start Playing?</h2>
          <p className="text-green-200/80 text-sm mb-4">Download 3 Patti Boss free and apply everything you have learned.</p>
          <a href={siteConfig.downloadLink} target="_blank" rel="nofollow noopener" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold rounded-xl transition-colors">
            ⬇️ Download APK
          </a>
        </div>
      </div>
    </>
  );
}
