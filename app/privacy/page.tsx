import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../site-content";

export const metadata: Metadata = {
  title: pageMetadata.privacy.title,
  description: pageMetadata.privacy.description,
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <article className="page">
      <p>
        <Link href="/">back to planarity</Link>
      </p>
      <h1>privacy policy</h1>
      <p>effective date: 04/09/2026</p>
      <p>
        this privacy policy explains how planarity (&quot;planarity,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects information
        when you use the planarity mobile app, website, and related services
        (collectively, the &quot;service&quot;).
      </p>

      <section aria-labelledby="who-we-are">
        <h2 id="who-we-are">1. who we are</h2>
        <p>
          controller / operator:
          <br />
          nate wolfe
        </p>
        <p>
          contact email:
          <br />
          <a href="mailto:nate@wxlfe.dev">nate@wxlfe.dev</a>
        </p>
        <p>
          if you have privacy questions or want to exercise your privacy rights,
          contact us using the information above.
        </p>
      </section>

      <section aria-labelledby="scope">
        <h2 id="scope">2. scope</h2>
        <p>this privacy policy applies to information processed through planarity, including when you:</p>
        <ul>
          <li>play the daily puzzle as a guest;</li>
          <li>create or use an account;</li>
          <li>sign in with email and password or a supported third-party login provider;</li>
          <li>use leaderboards, friend invites, or sharing features; or</li>
          <li>contact us for support.</li>
        </ul>
      </section>

      <section aria-labelledby="information-we-collect">
        <h2 id="information-we-collect">3. information we collect</h2>
        <h3>information you provide directly</h3>
        <p>depending on how you use the service, we may collect:</p>
        <ul>
          <li>account information, such as your email address and password when you sign up with email and password;</li>
          <li>third-party sign-in information, such as basic profile information made available to us when you sign in with google or apple;</li>
          <li>profile information, such as your display name;</li>
          <li>social information, such as your friend list, friend invite link usage, and identifiers needed to connect you with friends; and</li>
          <li>communications you send to us, if you contact us for support or privacy requests.</li>
        </ul>
        <h3>gameplay and account records</h3>
        <p>we may collect or create records associated with your use of the service, including:</p>
        <ul>
          <li>your user id;</li>
          <li>score, lifetime score, current level, and daily progress status;</li>
          <li>last-played date;</li>
          <li>leaderboard participation data; and</li>
          <li>account settings and related records needed to operate the service.</li>
        </ul>
        <h3>information stored on your device</h3>
        <p>if you use the service without an account, we may store gameplay progress and related settings locally on your device.</p>
        <h3>information collected automatically</h3>
        <p>when you use the service, we and our service providers may automatically collect certain technical information, which may include:</p>
        <ul>
          <li>device and app information, such as device model, operating system, app version, language, and general diagnostic information;</li>
          <li>usage data, such as app opens, gameplay events, screen navigation, and feature interactions;</li>
          <li>log and network information, such as ip address and timestamps; and</li>
          <li>advertising or device identifiers and ad-related data where permitted by law and platform rules, if advertising features are enabled.</li>
        </ul>
        <p>the exact data collected automatically depends on your device, platform, permissions, and the third-party sdks enabled in the version of the service you use.</p>
      </section>

      <section aria-labelledby="how-we-use-information">
        <h2 id="how-we-use-information">4. how we use information</h2>
        <p>we may use information we collect to:</p>
        <ul>
          <li>provide, maintain, and improve the service;</li>
          <li>authenticate users and keep accounts secure;</li>
          <li>save progress, power leaderboards, and support friend features;</li>
          <li>respond to support requests and privacy requests;</li>
          <li>detect, investigate, and prevent fraud, abuse, cheating, and other harmful activity;</li>
          <li>understand app performance, usage patterns, and technical issues;</li>
          <li>serve and measure advertising, where permitted; and</li>
          <li>comply with legal obligations and enforce our terms and policies.</li>
        </ul>
      </section>

      <section aria-labelledby="legal-bases">
        <h2 id="legal-bases">5. legal bases for processing</h2>
        <p>where applicable law requires a legal basis, we process personal information on one or more of the following bases:</p>
        <ul>
          <li>performance of a contract with you;</li>
          <li>our legitimate interests in operating, securing, and improving the service;</li>
          <li>your consent, where required;</li>
          <li>compliance with legal obligations; and</li>
          <li>protection of the rights, safety, and security of users, us, and others.</li>
        </ul>
      </section>

      <section aria-labelledby="sharing-information">
        <h2 id="sharing-information">6. how we share information</h2>
        <p>we may share information in the following circumstances:</p>
        <ul>
          <li>with service providers that process information on our behalf, such as authentication, database, analytics, hosting, and advertising vendors;</li>
          <li>with platform or integration providers when you choose to use sign-in, sharing, or deep-link features;</li>
          <li>with other users, to the extent necessary for social or leaderboard features, such as displaying your chosen display name, ranking, or friend relationship;</li>
          <li>if required by law, legal process, or government request;</li>
          <li>to protect rights, property, safety, and security; and</li>
          <li>as part of a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets.</li>
        </ul>
        <p>we do not sell personal information for money. if applicable law treats certain advertising or analytics sharing as a &quot;sale,&quot; &quot;sharing,&quot; or targeted advertising, you may have rights described in the &quot;your privacy rights&quot; section below.</p>
      </section>

      <section aria-labelledby="third-party-services">
        <h2 id="third-party-services">7. third-party services</h2>
        <p>planarity may use third-party service providers, including providers that support:</p>
        <ul>
          <li>authentication and account management;</li>
          <li>cloud database and hosting;</li>
          <li>analytics;</li>
          <li>advertising; and</li>
          <li>system sharing or link handling.</li>
        </ul>
        <p>these providers process information under their own terms and privacy notices as well as our instructions where applicable. you should review the privacy notices of the third-party services you choose to use.</p>
        <p>current integrations used by the app code in this repository may include apple, google, or firebase services for authentication, analytics, database, and ads.</p>
      </section>

      <section aria-labelledby="leaderboards-friends-sharing">
        <h2 id="leaderboards-friends-sharing">8. leaderboards, friends, and sharing</h2>
        <p>if you use social features:</p>
        <ul>
          <li>your display name, score, ranking, and related gameplay status may be visible to other users in leaderboards;</li>
          <li>friend invite links may contain an identifier that allows us to connect accounts; and</li>
          <li>if you use operating-system sharing tools, the information you share is handled by the destination you choose and subject to that destination&apos;s privacy practices.</li>
        </ul>
        <p>please avoid including sensitive personal information in your display name or other user-facing content.</p>
      </section>

      <section aria-labelledby="data-retention">
        <h2 id="data-retention">9. data retention</h2>
        <p>we retain personal information for as long as reasonably necessary for the purposes described in this privacy policy, including to:</p>
        <ul>
          <li>provide the service;</li>
          <li>maintain gameplay records and account features;</li>
          <li>comply with legal, tax, accounting, and regulatory obligations;</li>
          <li>resolve disputes; and</li>
          <li>enforce our agreements.</li>
        </ul>
        <p>retention periods may vary depending on the type of information, whether you have an account, legal requirements, and operational needs.</p>
        <p>when information is no longer needed, we will delete it, de-identify it, or securely store it in a form that no longer identifies you, unless we are legally required or permitted to retain it.</p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">10. security</h2>
        <p>we use reasonable administrative, technical, and organizational safeguards designed to protect personal information. no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
      </section>

      <section aria-labelledby="privacy-rights">
        <h2 id="privacy-rights">11. your privacy rights</h2>
        <p>depending on where you live, you may have rights to:</p>
        <ul>
          <li>request access to personal information we hold about you;</li>
          <li>request correction of inaccurate information;</li>
          <li>request deletion of your personal information;</li>
          <li>object to or restrict certain processing;</li>
          <li>withdraw consent where processing is based on consent; and</li>
          <li>request a copy of certain information in a portable format.</li>
        </ul>
        <p>to make a privacy request, contact us at <a href="mailto:nate@wxlfe.dev">nate@wxlfe.dev</a>.</p>
        <p>we may need to verify your identity before completing your request. we may also keep certain information where required or permitted by law.</p>
        <h3>account deletion</h3>
        <p>if you created an account, you can delete your account in the app by opening the account/profile screen, selecting &quot;delete account,&quot; and pressing again to confirm. this deletes your account and associated profile records used for gameplay, leaderboards, and friend features, subject to any information we are required or permitted to keep by law.</p>
        <p>if you cannot access the app or need help with account deletion, contact us at <a href="mailto:nate@wxlfe.dev">nate@wxlfe.dev</a>.</p>
      </section>

      <section aria-labelledby="international-transfers">
        <h2 id="international-transfers">12. international data transfers</h2>
        <p>your information may be processed in countries other than the country where you live. those countries may have data protection laws that differ from the laws in your jurisdiction.</p>
        <p>where required, we will use appropriate safeguards for cross-border transfers.</p>
      </section>

      <section aria-labelledby="children-privacy">
        <h2 id="children-privacy">13. children&apos;s privacy</h2>
        <p>planarity is not directed to children under 13, and we do not knowingly collect personal information from children under 13 without any legally required parental or guardian consent.</p>
        <p>if you are a parent or guardian and believe that a child under 13 has provided personal information to us without authorization, contact us at <a href="mailto:nate@wxlfe.dev">nate@wxlfe.dev</a>.</p>
        <p>if we learn that we collected personal information from a child under 13 in a manner that requires consent and did not receive valid consent, we will take steps to delete that information as required by law.</p>
      </section>

      <section aria-labelledby="do-not-track">
        <h2 id="do-not-track">14. do not track and similar signals</h2>
        <p>some browsers and devices may provide &quot;do not track&quot; or similar signals. because there is not yet a universally accepted standard for these signals, we do not currently respond to them unless required by law.</p>
      </section>

      <section aria-labelledby="changes-policy">
        <h2 id="changes-policy">15. changes to this privacy policy</h2>
        <p>we may update this privacy policy from time to time. if we make material changes, we will update the effective date above and may provide additional notice where required by law.</p>
      </section>

      <section aria-labelledby="contact-us">
        <h2 id="contact-us">16. contact us</h2>
        <p>if you have questions, concerns, or requests about this privacy policy or our privacy practices, contact:</p>
        <p>
          nate wolfe
          <br />
          <a href="mailto:nate@wxlfe.dev">nate@wxlfe.dev</a>
        </p>
      </section>
    </article>
  );
}
