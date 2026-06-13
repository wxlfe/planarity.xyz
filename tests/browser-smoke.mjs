import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3000";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  assert((await page.title()) === "planarity", "homepage title should be planarity");
  assert(
    (await page.locator('meta[name="description"]').getAttribute("content"))?.includes(
      "daily graph puzzle"
    ),
    "homepage description should target daily graph puzzle"
  );
  assert(
    (await page.locator('link[rel="canonical"]').getAttribute("href")) ===
      "https://planarity.xyz",
    "homepage canonical should be root site url"
  );
  assert(
    (await page.getByRole("link", { name: "play on web" }).getAttribute("href")) ===
      "https://play.planarity.xyz/",
    "play button should link to web game"
  );
  assert(
    (await page.getByRole("link", { name: "download on app store" }).getAttribute("href")) ===
      "https://apps.apple.com/us/app/planarity-daily-graph-puzzle/id6762309242",
    "app store button should link to app store"
  );
  assert(
    (await page.locator('script[type="application/ld+json"]').count()) === 1,
    "homepage should include json ld"
  );
  const jsonLd = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  assert(Array.isArray(jsonLd) && jsonLd.some((item) => item["@type"] === "WebSite"), "json ld should include website data");
  assert(jsonLd.some((item) => item.offers?.price === "0"), "json ld should mark game as free");
  assert((await page.locator('link[rel="apple-touch-icon"]').getAttribute("href")) === "/apple-touch-icon.png", "apple touch icon should be linked");
  assert((await page.locator('link[rel="icon"][type="image/svg+xml"]').getAttribute("href")) === "/favicon.svg", "svg favicon should be linked");
  assert((await page.locator('link[rel="icon"][sizes="32x32"]').getAttribute("href")) === "/favicon-32x32.png", "32px favicon should be linked");
  assert((await page.locator('meta[property="og:image"]').getAttribute("content"))?.includes("/opengraph-image"), "og image should be present");
  assert((await page.locator('meta[name="twitter:card"]').getAttribute("content")) === "summary_large_image", "twitter card should be summary large image");
  assert((await page.locator('script[src*="googletagmanager.com/gtm.js?id=GTM-TBXM2MPF"]').count()) === 1, "gtm script should be present");
  assert((await page.locator("noscript").textContent())?.includes("googletagmanager.com/ns.html?id=GTM-TBXM2MPF"), "gtm noscript iframe markup should be present");
  assert(await page.getByRole("heading", { name: "daily planarity puzzle" }).isVisible(), "homepage should include expanded seo section");

  await page.goto(`${baseUrl}/about`, { waitUntil: "networkidle" });
  assert((await page.getByRole("heading", { level: 1 }).textContent()) === "about planarity", "about h1 should render");
  assert(await page.getByRole("heading", { name: "what is planarity" }).isVisible(), "about should include planarity query heading");
  assert(await page.getByRole("heading", { name: "what is a planarity puzzle" }).isVisible(), "about should include puzzle query heading");
  assert(
    (await page.locator('a[href="https://en.wikipedia.org/wiki/Planarity"]').count()) === 1,
    "about should link to wikipedia"
  );
  assert(
    (await page.locator('a[href="http://johntantalo.com/"]').count()) === 1,
    "about should credit john tantalo"
  );

  for (const route of ["/support", "/privacy"]) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    assert((await page.locator('link[rel="canonical"]').getAttribute("href")) === `https://planarity.xyz${route}`, `${route} canonical should be correct`);
  }

  const sitemapResponse = await page.goto(`${baseUrl}/sitemap.xml`, { waitUntil: "networkidle" });
  assert(sitemapResponse?.ok(), "sitemap should load");
  const sitemapText = await page.locator("body").textContent();
  for (const url of ["https://planarity.xyz", "https://planarity.xyz/about", "https://planarity.xyz/support", "https://planarity.xyz/privacy"]) {
    assert(sitemapText?.includes(url), `sitemap should include ${url}`);
  }

  const robotsResponse = await page.goto(`${baseUrl}/robots.txt`, { waitUntil: "networkidle" });
  assert(robotsResponse?.ok(), "robots should load");
  assert((await page.locator("body").textContent())?.includes("Sitemap: https://planarity.xyz/sitemap.xml"), "robots should reference sitemap");

  const ogResponse = await page.goto(`${baseUrl}/opengraph-image`, { waitUntil: "networkidle" });
  assert(ogResponse?.ok(), "og image route should load");
  assert(ogResponse?.headers()["content-type"]?.includes("image/png"), "og image should be png");

  const lightPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await lightPage.emulateMedia({ colorScheme: "light" });
  await lightPage.goto(baseUrl, { waitUntil: "networkidle" });
  assert(await lightPage.getByRole("heading", { name: "planarity", exact: true }).isVisible(), "desktop light homepage should render");
  const desktopTitleBox = await lightPage.locator("#home-title").boundingBox();
  const desktopPanelBox = await lightPage.locator(".hero .panel").first().boundingBox();
  assert(desktopTitleBox && desktopPanelBox && desktopTitleBox.width <= desktopPanelBox.width, "desktop home title should fit its panel");
  const mainBox = await lightPage.locator("#main-content").boundingBox();
  const learnBox = await lightPage.locator(".learn-section").boundingBox();
  assert(mainBox && learnBox && learnBox.width >= mainBox.width - 2, "learn section should be full width");
  await lightPage.close();

  const puzzlePage = await browser.newPage({ viewport: { width: 900, height: 700 } });
  await puzzlePage.goto(baseUrl, { waitUntil: "networkidle" });
  assert((await puzzlePage.locator(".graph-label").textContent()) === "untangle the graph", "graph label should use untangle copy");
  assert((await puzzlePage.locator('[data-puzzle-node="true"]').count()) === 5, "mini puzzle should render five nodes");
  assert((await puzzlePage.locator('[data-puzzle-node-circle="true"]').count()) === 5, "mini puzzle should render centered node circles");
  assert((await puzzlePage.locator('[data-puzzle-edge="true"]').count()) > 0, "mini puzzle should render edges");
  assert((await puzzlePage.locator('[data-puzzle-crossing-edge="true"]').count()) > 0, "crossing edges should be marked");
  assert((await puzzlePage.locator('[data-puzzle-crossing-edge="true"]').first().getAttribute("stroke-dasharray")) === "4 3", "crossing edges should render dashed");
  assert((await puzzlePage.locator(".mini-game-svg").getAttribute("viewBox")) !== "0 0 100 100", "mini puzzle should use pixel viewbox rendering");
  const boardBox = await puzzlePage.locator(".mini-game").boundingBox();
  assert(boardBox, "mini puzzle board should have dimensions");
  const solvedPoints = [
    { x: 20, y: 20 },
    { x: 50, y: 50 },
    { x: 80, y: 20 },
    { x: 80, y: 80 },
    { x: 20, y: 80 }
  ];
  for (const [index, point] of solvedPoints.entries()) {
    const node = puzzlePage.getByRole("button", { name: `node ${index + 1}` });
    const nodeBox = await node.boundingBox();
    assert(nodeBox, `node ${index + 1} should have dimensions`);
    await puzzlePage.mouse.move(nodeBox.x + nodeBox.width / 2, nodeBox.y + nodeBox.height / 2);
    await puzzlePage.mouse.down();
    await puzzlePage.mouse.move(
      boardBox.x + (boardBox.width * point.x) / 100,
      boardBox.y + (boardBox.height * point.y) / 100,
      { steps: 6 }
    );
    await puzzlePage.mouse.up();
  }
  await puzzlePage.locator('[data-puzzle-check="true"]').waitFor({ state: "visible" });
  await puzzlePage.locator('[data-puzzle-check="true"]').waitFor({ state: "hidden", timeout: 2500 });
  assert((await puzzlePage.locator('[data-puzzle-node="true"]').count()) === 5, "mini puzzle should reset to five nodes");
  await puzzlePage.close();
} finally {
  await browser.close();
}
