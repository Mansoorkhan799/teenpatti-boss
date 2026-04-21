import { MetadataRoute } from "next";
import { siteConfig, blogPosts } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/how-to-register-on-teen-patti-boss`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-to-login-teen-patti-boss`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/how-to-earn-money-on-teen-patti-boss`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/is-teen-patti-boss-real-or-fake`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/teen-patti-boss-withdrawal-proof`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about-teen-patti-boss`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/contact-teen-patti-boss`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPostPages];
}
