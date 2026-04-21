import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/schema/SchemaOrg";
import { blogPosts, siteConfig } from "@/data/site";
import { blogContent } from "@/data/blogContent";

export function generateStaticParams() {
 return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 const post = blogPosts.find((p) => p.slug === slug);
 if (!post) return {};

 return {
   title: post.title,
   description: post.excerpt,
   keywords: post.tags,
   alternates: { canonical: `${siteConfig.siteUrl}/blog/${slug}` },
   openGraph: {
     title: post.title,
     description: post.excerpt,
     url: `${siteConfig.siteUrl}/blog/${slug}`,
     type: "article",
     publishedTime: post.date,
     modifiedTime: post.dateModified,
     images: [
        {
         url: post.image,
         width: 1200,
         height: 630,
         alt: post.title,
        },
      ],
    },
   twitter: {
     card: "summary_large_image",
     title: post.title,
     description: post.excerpt,
    },
  };
}

function renderMarkdown(content: string) {
 const lines = content.trim().split("\n");
 const elements: React.ReactNode[] = [];
 let i = 0;

 while (i < lines.length) {
   const line = lines[i];

   if (line.startsWith("## ")) {
     elements.push(
        <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 leading-tight">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
     elements.push(
        <h3 key={i} className="text-lg font-bold text-white mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && !line.includes(" ")) {
     elements.push(
        <p key={i} className="font-bold text-white mt-4 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("---")) {
     elements.push(<hr key={i} className="my-8 border-gray-700 " />);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
     const listItems: string[] = [];
     while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
       listItems.push(lines[i].replace(/^[-*] /, ""));
       i++;
      }
     elements.push(
        <ul key={i} className="my-4 space-y-2 pl-4">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-gray-100 ">
              <span className="text-green-500 flex-shrink-0 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </li>
          ))}
        </ul>
      );
     continue;
    } else if (line.match(/^\d\. /)) {
     const listItems: string[] = [];
     while (i < lines.length && lines[i].match(/^\d\. /)) {
       listItems.push(lines[i].replace(/^\d\. /, ""));
       i++;
      }
     elements.push(
        <ol key={i} className="my-4 space-y-2 pl-4 list-decimal">
          {listItems.map((item, j) => (
            <li key={j} className="text-sm text-gray-100 pl-1">
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </li>
          ))}
        </ol>
      );
     continue;
    } else if (line.startsWith("|")) {
     const tableLines: string[] = [];
     while (i < lines.length && lines[i].startsWith("|")) {
       tableLines.push(lines[i]);
       i++;
      }
     const headers = tableLines[0].split("|").filter(Boolean).map((s) => s.trim());
     const rows = tableLines.slice(2).map((row) =>
       row.split("|").filter(Boolean).map((s) => s.trim())
      );
     elements.push(
        <div key={i} className="my-6 overflow-x-auto rounded-xl border border-gray-700 ">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800 ">
                {headers.map((h, j) => (
                  <th key={j} className="text-left px-4 py-2 font-semibold text-white ">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {rows.map((row, j) => (
                <tr key={j} className={j % 2 === 0 ? "bg-gray-950" : "bg-gray-900"}>
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-2 text-gray-200 ">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
     continue;
    } else if (line.trim() === "") {
      // skip
    } else {
     elements.push(
        <p key={i} className="text-sm text-gray-100 leading-relaxed my-3">
          <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
        </p>
      );
    }
   i++;
  }

 return elements;
}

export default async function BlogPostPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 const post = blogPosts.find((p) => p.slug === slug);
 if (!post) notFound();

 const content = blogContent[slug] || "";
 const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

 const postFaqs = siteConfig.faqs.slice(0, 5);

 return (
    <>
      <ArticleSchema
       title={post.title}
       description={post.excerpt}
       url={`/blog/${slug}`}
       image={post.image}
       datePublished={post.date}
       dateModified={post.dateModified}
      />
      <FAQSchema faqs={postFaqs} />
      <BreadcrumbSchema
       items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
         items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Hero Image */}
        <div className="mt-6 mb-8 rounded-2xl overflow-hidden relative h-56 sm:h-72 bg-gradient-to-br from-[#021a0c] to-[#0a3520]">
          <Image
           src={post.image}
           alt={post.title}
           fill
           sizes="(max-width: 768px) 100vw, 80vw"
           className="object-cover"
           priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                {post.category}
              </span>
              <span className="text-xs text-white/80">{post.readTime}</span>
              <span className="text-xs text-white/80">·</span>
              <span className="text-xs text-white/80">{new Date(post.date).toLocaleDateString("en-PK", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
          </div>
        </div>

        {/* Title & Meta */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-base text-gray-100 leading-relaxed border-l-4 border-green-600 pl-4">
            {post.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Download CTA */}
        <div className="mb-8 p-5 bg-green-950/20 rounded-2xl border border-green-900/40 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Download 3 Patti Boss APK Free</p>
            <p className="text-xs text-gray-400 mt-0.5">Latest {siteConfig.version} · Rs. 111 Welcome Bonus · JazzCash &amp; Easypaisa</p>
          </div>
          <a
           href={siteConfig.downloadLink}
           target="_blank"
           rel="nofollow noopener"
           className="flex-shrink-0 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-bold rounded-xl transition-colors"
          >
            ⬇️ Download Free
          </a>
        </div>

        {/* Article Content */}
        <article className="prose-custom">
          {renderMarkdown(content)}
        </article>

        {/* Updated date */}
        <div className="mt-8 text-xs text-gray-400">
          Last updated: {new Date(post.dateModified).toLocaleDateString("en-PK", { month: "long", day: "numeric", year: "numeric" })}
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <FAQSection faqs={postFaqs} />
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((relPost) => (
              <Link
               key={relPost.slug}
               href={`/blog/${relPost.slug}`}
               className="group block bg-gray-900 rounded-2xl border border-green-900/30 overflow-hidden hover:shadow-md transition-all duration-200"
              >
                <div className="relative h-32 bg-gradient-to-br from-[#021a0c] to-[#0a3520]">
                  <Image src={relPost.thumbnail} alt={relPost.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2 leading-snug">
                    {relPost.title}
                  </h3>
                  <p className="mt-1 text-xs text-green-400 font-semibold">Read →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-10 p-6 bg-gradient-to-br from-[#021a0c] via-[#062318] to-[#0a3520] rounded-2xl text-white text-center border border-green-900/30">
          <h2 className="text-xl font-black mb-2">Ready to Start Playing?</h2>
          <p className="text-green-200/80 text-sm mb-4">Download 3 Patti Boss free. Rs. 111 welcome bonus on first login.</p>
          <a href={siteConfig.downloadLink} target="_blank" rel="nofollow noopener" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold rounded-xl transition-colors">
            ⬇️ Download APK {siteConfig.version}
          </a>
        </div>
      </div>
    </>
  );
}
