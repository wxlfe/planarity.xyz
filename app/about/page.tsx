import type { Metadata } from "next";
import Link from "next/link";
import {
  johnTantaloUrl,
  pageMetadata,
  playUrl,
  siteUrl,
  wikipediaPlanarityUrl
} from "../site-content";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    url: `${siteUrl}/about`
  }
};

export default function AboutPage() {
  return (
    <article className="page">
      <p className="eyebrow">graph theory and puzzle history</p>
      <h1>about planarity</h1>

      <section aria-labelledby="math-title">
        <h2 id="math-title">what is planarity</h2>
        <p>
          in graph theory a graph is a collection of vertices connected by edges. a
          graph is planar when it can be drawn on a flat plane without any edges
          crossing each other except at shared vertices.
        </p>
        <p>
          planarity is the property that asks whether such a crossing free drawing
          exists. some graphs can be redrawn until the crossings disappear. others
          cannot be made planar at all.
        </p>
        <p>
          read more on the wikipedia page for{" "}
          <a href={wikipediaPlanarityUrl}>planarity</a>.
        </p>
      </section>

      <section aria-labelledby="puzzle-title">
        <h2 id="puzzle-title">what is a planarity puzzle</h2>
        <p>
          a planarity puzzle starts with a graph drawn with crossings. the vertices
          can move but the edges stay connected to the same vertices. the goal is to
          rearrange the graph until every crossing is gone.
        </p>
        <p>
          that makes each puzzle a small search for a planar graph drawing. it is a
          graph puzzle game where the answer is not a number or word, but a drawing
          with the right edge crossings removed.
        </p>
      </section>

      <section aria-labelledby="credit-title">
        <h2 id="credit-title">the original planarity game</h2>
        <p>
          the original planarity game was created by{" "}
          <a href={johnTantaloUrl}>john tantalo</a>. this site and game are inspired
          by the same graph puzzle idea.
        </p>
      </section>

      <p>
        <a href={playUrl}>play planarity</a> or <Link href="/">return home</Link>
      </p>
    </article>
  );
}
