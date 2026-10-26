import type {Metadata, Viewport} from "next";
import {Geist, Geist_Mono, Instrument_Serif} from "next/font/google";
import "./globals.css";
import {site, absoluteUrl} from "@/lib/site";
import {JsonLd} from "@/components/json-ld";

const geist = Geist({subsets: ["latin"], variable: "--font-geist"});
const geistMono = Geist_Mono({subsets: ["latin"], variable: "--font-geist-mono"});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {default: site.title, template: `%s — ${site.name}`},
  description: site.description,
  applicationName: site.name,
  authors: [{name: site.name, url: site.url}],
  creator: site.name,
  keywords: [
    "Naga Nikhil Bijjala",
    "Full-stack software engineer",
    "Full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js",
    "TypeScript",
    "portfolio"
  ],
  alternates: {
    canonical: "/",
    types: {"application/rss+xml": absoluteUrl("/rss.xml")}
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US"
  },
  twitter: {card: "summary_large_image", title: site.title, description: site.description},
  robots: {index: true, follow: true, googleBot: {"max-image-preview": "large"}},
  icons: {icon: "/favicon.svg", apple: "/favicon.svg"}
};

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "#f6f4ee"},
    {media: "(prefers-color-scheme: dark)", color: "#0a0a0b"}
  ]
};

// Runs before first paint so there's no light/dark flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${geistMono.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{__html: themeScript}} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${site.url}/#person`,
                name: site.name,
                url: site.url,
                jobTitle: site.jobTitle,
                email: site.email,
                sameAs: [site.github, site.linkedin],
                worksFor: {"@type": "Organization", name: "Smart Structures"},
                alumniOf: [
                  {"@type": "CollegeOrUniversity", name: "University of North Carolina at Charlotte"},
                  {"@type": "CollegeOrUniversity", name: "Jawaharlal Nehru Technological University"}
                ],
                knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "System design"]
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                url: site.url,
                name: site.name,
                description: site.description,
                publisher: {"@id": `${site.url}/#person`}
              }
            ]
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
