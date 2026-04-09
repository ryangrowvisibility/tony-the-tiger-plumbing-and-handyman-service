import type { Metadata } from "next";
import { Oswald, Mulish } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Tony the Tiger Plumbing & Handyman | Sacramento, CA",
  description:
    "Sacramento's most reliable plumber and handyman. Tony Lopez delivers 5-star service with honest pricing, clear communication, and quality work every time. Call (916) 589-0455.",
  keywords:
    "plumber Sacramento, handyman Sacramento, sprinkler repair Sacramento, drain clearing Sacramento, toilet repair Sacramento, Tony the Tiger Plumbing",
  openGraph: {
    title: "Tony the Tiger Plumbing & Handyman | Sacramento, CA",
    description:
      "Honest pricing. Clear communication. Done right the first time. Sacramento's trusted plumber and handyman — call Tony Lopez today.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony the Tiger Plumbing & Handyman | Sacramento, CA",
    description:
      "Honest pricing. Clear communication. Done right the first time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${mulish.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Tony the Tiger Plumbing and Handyman Service",
              telephone: "(916) 589-0455",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1500 W El Camino Ave Ste 831",
                addressLocality: "Sacramento",
                addressRegion: "CA",
                postalCode: "95833",
                addressCountry: "US",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "20",
              },
              sameAs: [
                "https://nextdoor.com/pages/tony-the-tiger-plumbing-and-handyman-service-sacramento-ca/",
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
