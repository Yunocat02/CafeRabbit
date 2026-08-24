import Image from "next/image";
import Link from "next/link";

const title = "Privacy Notice | The Rabbit Cafe";
const description =
  "How The Rabbit Cafe handles the limited technical data involved in serving this website.";

export const metadata = {
  title: "Privacy Notice",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: "/privacy",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <Link className="brand" href="/" aria-label="The Rabbit Cafe home">
          <Image
            className="brand-logo"
            src="/Logo_main2.png"
            alt=""
            width={52}
            height={52}
            priority
          />
          <span>The Rabbit Cafe</span>
        </Link>
        <Link className="privacy-home-link" href="/">
          Back to the cafe <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main className="privacy-main">
        <section className="privacy-card" aria-labelledby="privacy-title">
          <div className="privacy-card-heading">
            <div>
              <p className="section-label">A small, clear note</p>
              <h1 id="privacy-title">Privacy Notice</h1>
            </div>
            <Image
              className="privacy-logo"
              src="/Logo_main2.png"
              alt=""
              width={120}
              height={120}
            />
          </div>

          <p className="privacy-intro">
            The Rabbit Cafe is a simple creative website. We do not offer user
            accounts, forms, payments, advertising, or analytics, and we do
            not use advertising cookies.
          </p>

          <div className="privacy-grid">
            <article>
              <span>01</span>
              <h2>Technical information</h2>
              <p>
                When you visit, Cloudflare and the origin server may process
                limited technical information such as your IP address,
                browser or device type, requested pages, and request times.
              </p>
            </article>
            <article>
              <span>02</span>
              <h2>Why it is used</h2>
              <p>
                This information is used only to deliver the website, maintain
                reliability, prevent abuse, and investigate security issues.
                It may be processed outside Thailand under provider safeguards.
              </p>
            </article>
            <article>
              <span>03</span>
              <h2>Your choices</h2>
              <p>
                You may ask about, correct, or request deletion of personal
                information associated with this website by emailing us.
              </p>
            </article>
          </div>

          <div className="privacy-contact">
            <p>
              Privacy contact
              <a href="mailto:privacy@caferabbit.com">
                privacy@caferabbit.com
              </a>
            </p>
            <p>Last updated · 24 August 2026</p>
          </div>
        </section>
      </main>
    </div>
  );
}
