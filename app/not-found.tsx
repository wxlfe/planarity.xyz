import Link from "next/link";

export default function NotFound() {
  return (
    <article className="page">
      <h1>not found</h1>
      <p>this page is not part of the graph</p>
      <p>
        <Link href="/">return home</Link>
      </p>
    </article>
  );
}
