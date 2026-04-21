import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 86400;

const baseUrl = "https://teenpattibossgame.com.pk";

const imageEntries = [
  {
    pageUrl: `${baseUrl}/`,
    images: [
      {
        loc: `${baseUrl}/images/teen-patti-boss.webp`,
        title: "Teen Patti Boss APK Download Pakistan",
        caption: "Teen Patti Boss – Pakistan's #1 Real Money Card Game App",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/how-to-register-on-teen-patti-boss`,
    images: [
      {
        loc: `${baseUrl}/images/teen-patti-boss-game-interface.webp`,
        title: "Teen Patti Boss Registration – Game Interface",
        caption: "Step-by-step registration on Teen Patti Boss app",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/how-to-earn-money-on-teen-patti-boss`,
    images: [
      {
        loc: `${baseUrl}/images/teen-patti-boss-refer-and-earn.webp`,
        title: "Earn Money on Teen Patti Boss – Refer & Earn",
        caption: "Earn real money through referrals and gameplay on Teen Patti Boss",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/teen-patti-boss-withdrawal-proof`,
    images: [
      {
        loc: `${baseUrl}/images/teen-patti-boss-withdraw-money.webp`,
        title: "Teen Patti Boss Withdrawal Proof",
        caption: "Withdraw winnings from Teen Patti Boss via JazzCash or Easypaisa",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/how-to-login-teen-patti-boss`,
    images: [
      {
        loc: `${baseUrl}/images/3-teen-patti-boss-game.webp`,
        title: "Teen Patti Boss Login – Game Lobby",
        caption: "Login to Teen Patti Boss and access the game lobby",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/is-teen-patti-boss-real-or-fake`,
    images: [
      {
        loc: `${baseUrl}/images/teen-patti-boss-add-deposit-money.webp`,
        title: "Teen Patti Boss Real or Fake – Deposit Proof",
        caption: "Teen Patti Boss is a real money app – deposit and withdrawal proof",
      },
    ],
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const urlEntries = imageEntries
    .map(({ pageUrl, images }) => {
      const imageXml = images
        .map(
          ({ loc, title, caption }) => `    <image:image>
      <image:loc>${escapeXml(loc)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(caption)}</image:caption>
    </image:image>`
        )
        .join("\n");

      return `  <url>
    <loc>${pageUrl}</loc>
${imageXml}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
