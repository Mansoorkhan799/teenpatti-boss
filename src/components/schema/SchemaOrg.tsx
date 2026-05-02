import { siteConfig } from "@/data/site";

export function OrganizationSchema() {
 const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
   name: "Teen Patti Boss Guide",
   url: siteConfig.siteUrl,
   logo: `${siteConfig.siteUrl}${siteConfig.images.logo}`,
   contactPoint: {
      "@type": "ContactPoint",
     email: siteConfig.social.email,
     contactType: "customer support",
     areaServed: "PK",
     availableLanguage: ["English", "Urdu"],
    },
   sameAs: [siteConfig.social.facebook, siteConfig.social.telegram],
  };

 return (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
 const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
   name: siteConfig.openGraphSiteName,
   url: siteConfig.siteUrl,
   description: siteConfig.description,
   inLanguage: ["en", "ur"],
   potentialAction: {
      "@type": "SearchAction",
     target: {
        "@type": "EntryPoint",
       urlTemplate: `${siteConfig.siteUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

 return (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareAppSchema() {
 const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
   name: siteConfig.name,
   applicationCategory: "GameApplication",
   operatingSystem: siteConfig.os,
   offers: {
      "@type": "Offer",
     price: "0",
     priceCurrency: "PKR",
    },
   aggregateRating: {
      "@type": "AggregateRating",
     ratingValue: parseFloat(siteConfig.rating),
     ratingCount: siteConfig.ratingCount,
     bestRating: 5,
     worstRating: 1,
    },
   downloadUrl: siteConfig.downloadLink,
   fileSize: siteConfig.apkSize,
   softwareVersion: siteConfig.version,
   description: siteConfig.description,
   inLanguage: ["en", "ur"],
  };

 return (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
 const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
   mainEntity: faqs.map((faq) => ({
      "@type": "Question",
     name: faq.question,
     acceptedAnswer: {
        "@type": "Answer",
       text: faq.answer,
      },
    })),
  };

 return (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
 items,
}: {
 items: { name: string; url: string }[];
}) {
 const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
   itemListElement: [
      {
        "@type": "ListItem",
       position: 1,
       name: "Home",
       item: siteConfig.siteUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
       position: i + 2,
       name: item.name,
       item: `${siteConfig.siteUrl}${item.url}`,
      })),
    ],
  };

 return (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({
 name,
 description,
 steps,
}: {
 name: string;
 description: string;
 steps: { step: number; title: string; description: string }[];
}) {
 const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
   name,
   description,
   step: steps.map((s) => ({
      "@type": "HowToStep",
     position: s.step,
     name: s.title,
     text: s.description,
    })),
  };

 return (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
 title,
 description,
 url,
 image,
 datePublished,
 dateModified,
}: {
 title: string;
 description: string;
 url: string;
 image: string;
 datePublished: string;
 dateModified: string;
}) {
 const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
   headline: title,
   description,
   url: `${siteConfig.siteUrl}${url}`,
   image: `${siteConfig.siteUrl}${image}`,
   datePublished,
   dateModified,
   author: {
      "@type": "Organization",
     name: "Teen Patti Boss Guide",
     url: siteConfig.siteUrl,
    },
   publisher: {
      "@type": "Organization",
     name: "Teen Patti Boss Guide",
     url: siteConfig.siteUrl,
     logo: {
        "@type": "ImageObject",
       url: `${siteConfig.siteUrl}/images/logo.png`,
      },
    },
   inLanguage: "en",
   isPartOf: {
      "@type": "WebSite",
     url: siteConfig.siteUrl,
     name: siteConfig.openGraphSiteName,
    },
  };

 return (
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
