"use client";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.98 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

const services = [
  {
    num: "01",
    title: "Plumbing Repairs",
    desc: "Leaks, clogs, broken fixtures — Tony handles it all. He calls you with updates throughout the job so you always know what's happening.",
  },
  {
    num: "02",
    title: "Sprinkler System Repair",
    desc: "Broken heads, faulty valves, zone issues. Every head checked, every zone tested — Tony doesn't leave until the system runs right.",
  },
  {
    num: "03",
    title: "Toilet Repair & Replacement",
    desc: "Running toilets, cracked bases, full replacements. Fast, clean, and done right the first visit.",
  },
  {
    num: "04",
    title: "Drain Clearing",
    desc: "Kitchen, bathroom, utility drains cleared quickly. Tony doesn't leave until water flows freely.",
  },
  {
    num: "05",
    title: "Water Heater Service",
    desc: "Installation, repair, and inspection. Tony checks all connections and pressure settings — thoroughness is the standard.",
  },
  {
    num: "06",
    title: "General Handyman",
    desc: "Door repairs, drywall patches, minor electrical, fixture swaps. One call covers more than you think.",
  },
];

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Tony showed up on time, explained everything clearly, and fixed the problem for less than I expected. Already booked him again.",
  },
  {
    name: "Sandra R.",
    rating: 5,
    text: "Finally a plumber who actually calls you back and tells you what's going on. BBB A+ for a reason — highly recommend.",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Tony fixed a sprinkler issue three other guys said would need full replacement. Saved me hundreds. Honest and skilled.",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100dvh" }}>

      {/* Nav */}
      <nav
        style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border-subtle)" }}
        className="sticky top-0 z-50 px-6 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div
            style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
            className="w-9 h-9 rounded flex items-center justify-center font-bold text-xs tracking-widest"
            aria-hidden="true"
          >
            <span style={{ color: "oklch(0.12 0.025 40)" }}>TTT</span>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.02em" }} className="text-sm leading-tight uppercase">
              Tony the Tiger Plumbing
            </div>
            <div style={{ color: "var(--text-muted)" }} className="text-xs">Sacramento, CA</div>
          </div>
        </div>
        <a
          href="tel:9165890455"
          style={{
            background: "var(--accent)",
            color: "oklch(0.12 0.025 40)",
            transition: "background 160ms ease-out, transform 160ms ease-out",
          }}
          className="flex items-center gap-2 font-bold px-4 py-2 rounded text-sm active:scale-97"
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          aria-label="Call Tony the Tiger Plumbing at (916) 589-0455"
        >
          <PhoneIcon />
          (916) 589-0455
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <div
              className="animate-fade-in inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-8"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              <StarIcon />
              5.0 on Yelp · BBB A+ Rated
            </div>

            <h1
              className="animate-fade-up delay-1 text-5xl md:text-7xl font-bold leading-none mb-6 uppercase"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
            >
              Sacramento&apos;s<br />
              <span style={{ color: "var(--accent)" }}>most reliable</span><br />
              plumber.
            </h1>

            <p className="animate-fade-up delay-2 text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-secondary)" }}>
              Tony Lopez picks up the phone, shows up on time, and calls you with updates along the way.
              Honest pricing. No surprises. Done right the first visit.
            </p>

            <div className="animate-fade-up delay-3 flex flex-wrap gap-3">
              <a
                href="tel:9165890455"
                style={{
                  background: "var(--accent)",
                  color: "oklch(0.12 0.025 40)",
                  transition: "background 160ms ease-out, transform 160ms ease-out",
                }}
                className="flex items-center gap-2 font-bold px-6 py-3.5 rounded text-base active:scale-97"
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
              >
                <PhoneIcon />
                Call (916) 589-0455
              </a>
              <a
                href="#services"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  transition: "border-color 160ms ease-out, color 160ms ease-out",
                }}
                className="font-semibold px-6 py-3.5 rounded text-base active:scale-97"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                See services
              </a>
            </div>
          </div>

          {/* Info panel */}
          <div
            className="animate-fade-up delay-2 rounded-2xl p-6 w-full md:w-72 shrink-0"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-center gap-2 mb-5" style={{ color: "var(--accent)" }}>
              <WrenchIcon />
              <span className="text-xs font-bold tracking-widest uppercase">Tony Lopez</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Hours</div>
                <div className="font-semibold">Mon – Fri, 8am – 5pm</div>
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Payment</div>
                <div className="font-semibold">Cash &amp; Check</div>
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>In business since</div>
                <div className="font-semibold">2021</div>
              </div>
            </div>
            <div
              className="mt-5 pt-5 flex gap-1 items-center"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "var(--accent)" }}><StarIcon /></span>
              ))}
              <span className="ml-2 text-sm font-semibold">5.0</span>
              <span className="text-xs ml-1" style={{ color: "var(--text-muted)" }}>(17 Yelp)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              "BBB A+ Rated",
              "5.0 stars on Yelp",
              "Calls with job updates",
              "Plumbing + Handyman",
              "Sacramento & surrounds",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <div style={{ color: "var(--accent)" }}><CheckIcon /></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Tony */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-6 uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The plumber who actually<br />
              <span style={{ color: "var(--accent)" }}>calls you back.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Tony Lopez built his reputation the old-fashioned way: show up on time, explain the work clearly,
              and never leave until the job is done right. Since 2021, he&apos;s been Sacramento&apos;s go-to for
              plumbing and handyman work — and the reviews reflect it.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Tony personally calls customers throughout every job with progress updates. No wondering what&apos;s
              happening behind the walls — you&apos;ll know every step of the way.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: <ShieldIcon />, label: "BBB Accredited", desc: "A+ rating — disputes resolved, business practices verified" },
              { icon: <StarIcon />, label: "5.0 on Yelp", desc: "17 reviews, all 5 stars — consistent quality across every job type" },
              { icon: <WrenchIcon />, label: "Plumbing + Handyman", desc: "One call covers both — saves you from scheduling two separate trades" },
              { icon: <HomeIcon />, label: "Sacramento local", desc: "Based right here — faster response, community-invested service" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 items-start p-4 rounded-xl animate-fade-up delay-${i + 1}`}
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
              >
                <div style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold mb-1">{item.label}</div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ background: "var(--bg-surface)" }} className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-3 uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Tony fixes.
            </h2>
            <p style={{ color: "var(--text-secondary)" }} className="text-lg max-w-xl">
              Plumbing and handyman — Sacramento&apos;s most useful combination. One number, more problems solved.
            </p>
          </div>

          <div className="divide-y" style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", borderColor: "var(--border-subtle)" }}>
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`grid md:grid-cols-[80px_1fr] gap-4 py-6 animate-fade-up delay-${i + 1}`}
              >
                <div
                  className="text-4xl font-bold leading-none pt-1 select-none uppercase"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)", opacity: 0.35 }}
                  aria-hidden="true"
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3 uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Sacramento says.
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>5.0 average &mdash; 17 reviews on Yelp.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl animate-fade-up delay-${i + 1}`}
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
              >
                <div className="flex gap-0.5 mb-4" style={{ color: "var(--accent)" }}>
                  {[...Array(r.rating)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>&ldquo;{r.text}&rdquo;</p>
                <div className="text-sm font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }}
        className="px-6 py-20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to get it <span style={{ color: "var(--accent)" }}>fixed?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
            Monday through Friday, 8am to 5pm. Tony answers, Tony shows up, Tony gets it done.
          </p>
          <a
            href="tel:9165890455"
            style={{
              background: "var(--accent)",
              color: "oklch(0.12 0.025 40)",
              transition: "background 160ms ease-out, transform 160ms ease-out",
            }}
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded text-lg active:scale-97"
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          >
            <PhoneIcon />
            Call (916) 589-0455
          </a>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>Cash &amp; check accepted · Sacramento, CA 95833</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border-subtle)" }} className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.02em" }} className="text-sm uppercase">
            Tony the Tiger Plumbing &amp; Handyman
          </div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>
            Sacramento, CA · (916) 589-0455 · Mon–Fri 8am–5pm
          </div>
        </div>
      </footer>
    </main>
  );
}
