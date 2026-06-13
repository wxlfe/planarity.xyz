import { describe, expect, test } from "vitest";
import {
  appStoreUrl,
  iconPaths,
  johnTantaloUrl,
  pageMetadata,
  playUrl,
  socialImage,
  siteLastModified,
  sitemapRouteConfigs,
  sitemapRoutes,
  structuredData,
  wikipediaPlanarityUrl
} from "../app/site-content";

describe("site content", () => {
  test("homepage metadata targets daily graph puzzle search intent", () => {
    expect(pageMetadata.home.title).toBe("planarity");
    expect(pageMetadata.home.description).toContain("daily graph puzzle");
    expect(pageMetadata.home.description).toContain("planarity puzzle");
  });

  test("homepage uses required external destinations", () => {
    expect(playUrl).toBe("https://play.planarity.xyz/");
    expect(appStoreUrl).toBe(
      "https://apps.apple.com/us/app/planarity-daily-graph-puzzle/id6762309242"
    );
  });

  test("about page credits sources and original creator", () => {
    expect(wikipediaPlanarityUrl).toBe("https://en.wikipedia.org/wiki/Planarity");
    expect(johnTantaloUrl).toBe("http://johntantalo.com/");
    expect(pageMetadata.about.description).toContain("planar graph");
    expect(pageMetadata.about.description).toContain("planarity puzzle");
  });

  test("sitemap includes all canonical routes", () => {
    expect(sitemapRoutes).toEqual(["/", "/about", "/support", "/privacy"]);
  });

  test("icon paths include favicon and apple touch icon assets", () => {
    expect(iconPaths.icon).toContain("/favicon-32x32.png");
    expect(iconPaths.shortcut).toBe("/favicon.ico");
    expect(iconPaths.apple).toBe("/apple-touch-icon.png");
  });

  test("social image metadata uses a landscape og image", () => {
    expect(socialImage.url).toBe("/opengraph-image");
    expect(socialImage.width).toBe(1200);
    expect(socialImage.height).toBe(630);
  });

  test("structured data describes a free video game and website", () => {
    expect(structuredData).toHaveLength(2);
    expect(structuredData[0]).toMatchObject({
      "@type": "VideoGame",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    });
    expect(structuredData[1]).toMatchObject({
      "@type": "WebSite",
      name: "planarity"
    });
  });

  test("sitemap uses shared freshness and route priorities", () => {
    expect(siteLastModified).toBe("2026-06-12");
    expect(sitemapRouteConfigs).toEqual([
      { route: "/", priority: 1, changeFrequency: "weekly" },
      { route: "/about", priority: 0.8, changeFrequency: "monthly" },
      { route: "/support", priority: 0.5, changeFrequency: "monthly" },
      { route: "/privacy", priority: 0.5, changeFrequency: "monthly" }
    ]);
  });
});
