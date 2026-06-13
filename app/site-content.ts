export const siteUrl = "https://planarity.xyz";
export const playUrl = "https://play.planarity.xyz/";
export const appStoreUrl =
  "https://apps.apple.com/us/app/planarity-daily-graph-puzzle/id6762309242";
export const wikipediaPlanarityUrl = "https://en.wikipedia.org/wiki/Planarity";
export const johnTantaloUrl = "http://johntantalo.com/";
export const siteLastModified = "2026-06-12";

export const iconPaths = {
  icon: ["/favicon.svg", "/favicon-32x32.png", "/favicon-16x16.png"],
  shortcut: "/favicon.ico",
  apple: "/apple-touch-icon.png"
};

export const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "planarity daily graph puzzle"
};

export const pageMetadata = {
  home: {
    title: "planarity",
    description:
      "planarity is a daily graph puzzle and planarity puzzle game about untangling planar graph crossings on web and ios"
  },
  about: {
    title: "about planarity",
    description:
      "learn what a planar graph is, how planarity works in graph theory, and what makes a planarity puzzle a graph puzzle game"
  },
  support: {
    title: "support",
    description:
      "get planarity support for account deletion, password reset, reports, display names, privacy questions, and app settings"
  },
  privacy: {
    title: "privacy policy",
    description:
      "read how planarity handles account information, gameplay records, support requests, device data, privacy rights, and deletion requests"
  }
};

export const sitemapRoutes = ["/", "/about", "/support", "/privacy"];

export const sitemapRouteConfigs = [
  { route: "/", priority: 1, changeFrequency: "weekly" },
  { route: "/about", priority: 0.8, changeFrequency: "monthly" },
  { route: "/support", priority: 0.5, changeFrequency: "monthly" },
  { route: "/privacy", priority: 0.5, changeFrequency: "monthly" }
] as const;

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "planarity",
    url: siteUrl,
    applicationCategory: "GameApplication",
    genre: ["puzzle", "graph puzzle", "daily puzzle"],
    operatingSystem: ["web", "ios"],
    description: pageMetadata.home.description,
    sameAs: [playUrl, appStoreUrl],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "planarity",
    url: siteUrl,
    description: pageMetadata.home.description
  }
];
