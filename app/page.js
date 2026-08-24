import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Slow & thoughtful",
    copy: "A place for ideas that deserve a little more time, attention, and room to breathe.",
  },
  {
    number: "02",
    title: "Warm by design",
    copy: "Soft details, clear words, and a welcoming atmosphere—made to feel quietly familiar.",
  },
  {
    number: "03",
    title: "Curious at heart",
    copy: "Always open to small experiments, unexpected discoveries, and the joy of making.",
  },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
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

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#principles">Our approach</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">The official home of caferabbit.com</p>
            <h1 id="hero-title">
              The Rabbit Cafe
              <span>A quieter corner of the internet.</span>
            </h1>
            <p className="hero-intro">
              A calm, independent creative space for thoughtful ideas, warm
              details, and things made with care.
            </p>
            <a className="primary-link" href="#about">
              Step inside
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-art">
            <div className="logo-frame">
              <Image
                className="hero-logo"
                src="/Logo_main2.png"
                alt="Rabbit Cafe rabbit mascot holding a cup of coffee"
                width={1486}
                height={1486}
                sizes="(max-width: 900px) 72vw, 38vw"
                priority
              />
            </div>
            <p aria-hidden="true">Coffee, comfort &amp; curiosity.</p>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <p className="section-label">About the cafe</p>
          <div className="about-grid">
            <h2 id="about-title">A small space with room for good ideas.</h2>
            <div className="about-copy">
              <p>
                The Rabbit Cafe is a creative home inspired by the unhurried
                feeling of a favorite neighborhood cafe: comfortable, curious,
                and full of little details worth noticing.
              </p>
              <p>
                This is where new work, notes, and experiments will find their
                place. The door is open—take your time and look around.
              </p>
            </div>
          </div>
        </section>

        <section
          className="principles-section"
          id="principles"
          aria-labelledby="principles-title"
        >
          <div className="section-heading">
            <p className="section-label">Our approach</p>
            <h2 id="principles-title">What makes this place feel like home.</h2>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <Image
            className="closing-logo"
            src="/Logo_main2.png"
            alt=""
            width={112}
            height={112}
          />
          <p className="section-label">Come back soon</p>
          <h2 id="closing-title">There is always something quietly brewing.</h2>
          <p>
            The Rabbit Cafe is an evolving space. New ideas and small details
            will appear here over time.
          </p>
          <a href="#top" className="text-link">
            Back to the top <span aria-hidden="true">↑</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            src="/Logo_main2.png"
            alt=""
            width={42}
            height={42}
          />
          <p>© {new Date().getFullYear()} The Rabbit Cafe</p>
        </div>
        <div className="footer-meta">
          <p>Official website · caferabbit.com</p>
          <Link className="footer-privacy" href="/privacy">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
