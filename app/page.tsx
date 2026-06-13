import type { Metadata } from "next";
import Link from "next/link";
import PlanarityMiniGame from "./planarity-mini-game";
import { appStoreUrl, pageMetadata, playUrl, siteUrl, socialImage, structuredData } from "./site-content";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero" aria-labelledby="home-title">
        <div className="panel">
          <p className="eyebrow">daily graph puzzle</p>
          <h1 className="home-title" id="home-title">planarity</h1>
          <p className="lede">
            a daily planarity puzzle game about untangling planar graphs until no edges
            cross
          </p>
          <div className="actions" aria-label="play planarity">
            <a className="button" href={playUrl}>
              play on web
            </a>
            <a className="button secondary" href={appStoreUrl}>
              download on app store
            </a>
          </div>
        </div>
        <div className="panel graph-card">
          <PlanarityMiniGame />
          <p className="graph-label">untangle the graph</p>
        </div>
      </section>

      <section className="grid" aria-label="what makes planarity a puzzle">
        <article className="card">
          <h2>daily</h2>
          <p>one fresh graph puzzle each day for a steady planarity challenge</p>
        </article>
        <article className="card">
          <h2>graph</h2>
          <p>vertices and edges form the puzzle instead of tiles letters or numbers</p>
        </article>
        <article className="card">
          <h2>planar</h2>
          <p>the goal is a planar graph drawing where connected edges do not cross</p>
        </article>
        <article className="card">
          <h2>play</h2>
          <p>play planarity on the web or download the ios app from the app store</p>
        </article>
      </section>

      <section className="page learn-section" aria-labelledby="learn-title">
        <h2 id="learn-title">learn the idea</h2>
        <p>
          planarity comes from graph theory. if a graph can be drawn without edge
          crossings it is planar. the puzzle turns that mathematical property into a
          daily graph game.
        </p>
        <p>
          <Link href="/about">read about planarity</Link>
        </p>
      </section>

      <section className="seo-grid" aria-label="planarity puzzle details">
        <article className="card">
          <h2>daily planarity puzzle</h2>
          <p>
            planarity gives you a daily graph puzzle built around the same simple
            goal each time. untangle the graph until every crossing disappears.
          </p>
        </article>
        <article className="card">
          <h2>graph puzzle game</h2>
          <p>
            instead of matching tiles or letters, the puzzle uses vertices and edges.
            each move changes the drawing while the graph itself stays the same.
          </p>
        </article>
        <article className="card">
          <h2>planar graph puzzle</h2>
          <p>
            a solved board is a planar graph drawing. connected edges can meet at
            shared nodes, but no unrelated edges should cross.
          </p>
        </article>
        <article className="card">
          <h2>play on web and ios</h2>
          <p>
            play the daily planarity puzzle in your browser or use the ios app for a
            quick graph puzzle game each day.
          </p>
        </article>
      </section>
    </>
  );
}
