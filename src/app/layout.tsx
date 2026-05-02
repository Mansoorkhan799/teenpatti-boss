import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { OrganizationSchema, WebsiteSchema } from "@/components/schema/SchemaOrg";
import { siteConfig } from "@/data/site";

const inter = Inter({
 subsets: ["latin"],
 display: "swap",
 variable: "--font-inter",
});

export const metadata: Metadata = {
 metadataBase: new URL(siteConfig.siteUrl),
 title: {
   default: siteConfig.defaultMetaTitle,
   template: siteConfig.metaTitleTemplate,
  },
 description: siteConfig.description,
 keywords: [
    "Teen Patti Boss APK",
    "Teen Patti Boss APK download",
    "Teen Patti Boss Pakistan",
    "3 Patti Boss APK",
    "3 Patti Boss Pakistan",
    "real money card game Pakistan",
    "Teen Patti online real money",
    "JazzCash gaming app",
    "Easypaisa gaming",
  ],
 authors: [{ name: "Teen Patti Boss Guide", url: siteConfig.siteUrl }],
 creator: "Teen Patti Boss Guide",
 publisher: "teenpattibossgame.com.pk",
 robots: {
   index: true,
   follow: true,
   googleBot: {
     index: true,
     follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
 openGraph: {
   type: "website",
   locale: "en_PK",
   url: siteConfig.siteUrl,
   siteName: siteConfig.openGraphSiteName,
   title: siteConfig.defaultMetaTitle,
   description: siteConfig.description,
   images: [
      {
       url: siteConfig.images.ogImage,
       width: 1200,
       height: 630,
       alt: siteConfig.openGraphSiteName,
      },
    ],
  },
 twitter: {
   card: "summary_large_image",
   title: siteConfig.defaultMetaTitle,
   description: siteConfig.description,
   images: [siteConfig.images.ogImage],
  },
 icons: {
   icon: "/images/teen-patti-boss.ico",
   apple: "/images/teen-patti-boss.webp",
   shortcut: "/images/teen-patti-boss.ico",
  },
 alternates: {
   canonical: siteConfig.siteUrl,
  },
 verification: {
   google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
    <html lang="en" className={`${inter.variable} ${inter.className} dark`} data-scroll-behavior="smooth">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className="min-h-screen bg-gray-950 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
