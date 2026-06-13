import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../site-content";

export const metadata: Metadata = {
  title: pageMetadata.support.title,
  description: pageMetadata.support.description,
  alternates: {
    canonical: "/support"
  }
};

export default function SupportPage() {
  return (
    <article className="page">
      <p>
        <Link href="/">back to planarity</Link>
      </p>
      <h1>support</h1>
      <p>last updated: 04/17/2026</p>
      <p>
        need help with planarity? use the instructions below for common account,
        password, safety, and app setting questions. for anything else, contact
        support at <a href="mailto:nate@wxlfe.dev">nate@wxlfe.dev</a>.
      </p>

      <section aria-labelledby="contact-support">
        <h2 id="contact-support">1. contact support</h2>
        <p>
          email:{" "}
          <a href="mailto:nate@wxlfe.dev?subject=planarity%20support">
            nate@wxlfe.dev
          </a>
        </p>
        <p>
          please include the email address on your account, your device type, and a
          short description of what happened. do not send your password.
        </p>
      </section>

      <section aria-labelledby="delete-account">
        <h2 id="delete-account">2. delete your account</h2>
        <p>if you can access your account, you can delete it directly in the app:</p>
        <ul>
          <li>open planarity and sign in;</li>
          <li>open the account/profile screen;</li>
          <li>select &quot;delete account&quot;; and</li>
          <li>
            press again to confirm when the button changes to &quot;press again to
            delete.&quot;
          </li>
        </ul>
        <p>
          this deletes your account and associated profile records used for gameplay,
          leaderboards, and friend features, subject to any information we are
          required or permitted to keep by law.
        </p>
        <p>
          if you cannot access the app, or if the app asks you to sign in again before
          deleting, email{" "}
          <a href="mailto:nate@wxlfe.dev?subject=planarity%20account%20deletion">
            nate@wxlfe.dev
          </a>{" "}
          and ask for account deletion help.
        </p>
      </section>

      <section aria-labelledby="reset-password">
        <h2 id="reset-password">3. reset your password</h2>
        <p>
          for email and password accounts, open planarity, choose &quot;sign in,&quot;
          enter your email address, and use the &quot;reset password&quot; link in the
          sign-in form. if the email exists, planarity will send a password reset
          email.
        </p>
        <p>
          google and apple sign-in passwords are managed by google or apple, not by
          planarity. use the account recovery tools from the provider you used to sign
          in.
        </p>
      </section>

      <section aria-labelledby="report-player">
        <h2 id="report-player">4. report or hide a player</h2>
        <p>
          you can report players from leaderboards or your friends list. open the
          more-options menu next to the player, choose &quot;report player,&quot; select
          a reason, add details if helpful, and submit the report.
        </p>
        <p>
          from the same menu, choose &quot;hide user name&quot; to hide that player&apos;s
          display name on your device. you can use the menu again to unhide the name
          later.
        </p>
        <p>
          when you report a friend, planarity may also remove that friend connection
          from your account.
        </p>
      </section>

      <section aria-labelledby="display-name">
        <h2 id="display-name">5. change your display name</h2>
        <p>
          sign in, open the account/profile screen, edit the display name field, and
          save. avoid using sensitive personal information in your display name
          because it may appear in leaderboards or friend features.
        </p>
      </section>

      <section aria-labelledby="appearance">
        <h2 id="appearance">6. use light or dark mode</h2>
        <p>
          planarity follows your system appearance setting. to switch between light and
          dark mode, change the display or appearance setting on your device or
          browser, then reopen or refresh planarity if needed.
        </p>
      </section>

      <section aria-labelledby="guest-progress">
        <h2 id="guest-progress">7. guest progress and accounts</h2>
        <p>
          if you play without signing in, your progress may be stored only on your
          device. signing in helps keep account features, profile records,
          leaderboards, and friend features connected to your account.
        </p>
      </section>

      <section aria-labelledby="privacy-questions">
        <h2 id="privacy-questions">8. privacy questions</h2>
        <p>
          for privacy requests or more detail about how planarity handles data, read
          the <Link href="/privacy">privacy policy</Link> or email{" "}
          <a href="mailto:nate@wxlfe.dev?subject=planarity%20privacy%20request">
            nate@wxlfe.dev
          </a>
          .
        </p>
      </section>

      <p>
        nate wolfe
        <br />
        <a href="mailto:nate@wxlfe.dev">nate@wxlfe.dev</a>
      </p>
    </article>
  );
}
