import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { iconPaths, pageMetadata, playUrl, siteUrl, socialImage } from "./site-content";

const googleTagManagerId = "GTM-TBXM2MPF";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "planarity",
  creator: "nate wolfe",
  title: {
    default: pageMetadata.home.title,
    template: "%s | planarity"
  },
  description: pageMetadata.home.description,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: iconPaths.shortcut,
    apple: [{ url: iconPaths.apple, sizes: "180x180", type: "image/png" }]
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    siteName: "planarity",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteUrl,
    images: [socialImage]
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [socialImage.url]
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className={geistMono.className}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="shell">
          <a className="skip-link" href="#main-content">
            skip to content
          </a>
          <header className="site-header">
            <Link className="brand" href="/">
              planarity
            </Link>
            <nav className="nav" aria-label="main navigation">
              <Link href="/about">about</Link>
              <Link href="/support">support</Link>
              <Link href="/privacy">privacy</Link>
              <a href={playUrl}>play</a>
            </nav>
          </header>
          <main id="main-content">{children}</main>
          <footer className="site-footer">
            <span>daily graph puzzle</span>
            <span>planarity.xyz</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
