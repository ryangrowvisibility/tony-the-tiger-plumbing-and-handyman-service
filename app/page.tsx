import type { FC } from "react";

const PHONE = "(916) 589-0455";
const PHONE_HREF = "tel:+19165890455";

const services = [
  {
    title: "Plumbing Repair",
    desc: "Leaks, fixtures, and water lines — Tony handles both straightforward jobs and unexpected complications with clear communication throughout.",
    icon: "🔧",
  },
  {
    title: "Sprinkler Repair",
    desc: "Broken heads, faulty valves, water pressure issues — full diagnosis and repair of your irrigation and sprinkler systems.",
    icon: "💧",
  },
  {
    title: "Shower Cartridge Rebuild",
    desc: "Dripping faucets and temperature control problems fixed right. Tony removes and replaces shower cartridge valves to restore proper function.",
    icon: "🚿",
  },
  {
    title: "Toilet Repair",
    desc: "Leaking, running, or malfunctioning toilets repaired with quality workmanship and lasting results.",
    icon: "🪠",
  },
  {
    title: "Drain Clearing",
    desc: "Blocked drains cleared quickly and thoroughly. Kitchen, bathroom, and household drains — no job too stubborn.",
    icon: "⬇️",
  },
  {
    title: "Handyman Services",
    desc: "General home repair and maintenance beyond plumbing. One call covers a broad range of household needs.",
    icon: "🏠",
  },
];

const reviews = [
  {
    stars: 5,
    text: "Tony ran into some unexpected complications but called me with updates every step of the way. He handled everything professionally — very personable, responsible, and very reasonable. I would use him again without hesitation.",
    author: "Satisfied Sacramento Customer",
  },
  {
    stars: 5,
    text: "Fixed our leaking toilet bowls with excellent workmanship. Solid quality and a fair price. Highly recommend.",
    author: "Local Homeowner",
  },
  {
    stars: 5,
    text: "A nice guy who does good quality work at reasonable prices and communicates well — on time every visit. You can count on Tony.",
    author: "Sacramento Local Guide",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <span className="text-yellow-400 text-lg" aria-label={`${count} stars`}>
      {"★".repeat(count)}
    </span>
  );
}

const Page: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">🐯</span>
            <div>
              <span className="font-bold text-gray-900 text-sm sm:text-base leading-tight block">
                Tony the Tiger
              </span>
              <span className="text-xs text-gray-500 block leading-tight">
                Plumbing &amp; Handyman
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#reviews" className="hover:text-orange-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors"
          >
            Call Now
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 sm:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 text-orange-300 text-sm font-medium mb-6">
              <span>⭐ 5-Star Rated on Google &amp; Yelp</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Sacramento Plumbing &amp;{" "}
              <span className="text-orange-400">Handyman</span> Done Right
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Honest pricing. Clear communication. Tony Lopez has been delivering
              5-star results across Sacramento since 2021 — and he always calls
              you if something unexpected comes up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                📞 Call {PHONE}
              </a>
              <a
                href="#services"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors"
              >
                See Our Services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-1">✓ Mon–Fri 8am–5pm</span>
              <span className="flex items-center gap-1">✓ BBB A+ Rated</span>
              <span className="flex items-center gap-1">✓ Fair, Upfront Pricing</span>
              <span className="flex items-center gap-1">✓ On Time, Every Time</span>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-orange-50 border-b border-orange-100 py-6 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">5.0</div>
              <div className="text-sm text-gray-600">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">5.0</div>
              <div className="text-sm text-gray-600">Yelp Rating (17 reviews)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">A+</div>
              <div className="text-sm text-gray-600">BBB Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">2021</div>
              <div className="text-sm text-gray-600">Serving Sacramento</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Services We Offer
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                From urgent plumbing repairs to general home fixes — Tony handles
                it all with the same care and professionalism.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all"
                >
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href={PHONE_HREF}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors inline-block shadow-md"
              >
                Call to Schedule: {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4 bg-blue-950 text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 text-orange-300 text-sm font-medium mb-5">
                About Tony
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                The Guy Who Calls You Back
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-5">
                Tony Lopez founded Tony the Tiger Plumbing and Handyman Service in
                October 2021 with one guiding principle: treat every customer the
                way you&apos;d want your family treated.
              </p>
              <p className="text-blue-100 leading-relaxed mb-5">
                What sets Tony apart isn&apos;t just the quality of his work — it&apos;s
                how he communicates. If he runs into an unexpected issue on your
                job, he calls you before doing anything else. No surprises on the
                bill. No guessing what&apos;s happening. Just honest, straightforward
                service from a guy who takes pride in his craft.
              </p>
              <p className="text-blue-100 leading-relaxed mb-8">
                Serving the Sacramento area with residential plumbing, sprinkler
                repair, and handyman services — five days a week, with the same
                reliable professionalism every time.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  🐯 Owner-Operated
                </span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  ✅ BBB A+ Rated
                </span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  📞 Always Communicates
                </span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  💰 Honest Pricing
                </span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🐯</div>
                <div className="text-2xl font-bold">Tony Lopez</div>
                <div className="text-blue-300 text-sm mt-1">
                  Owner & Master Plumber
                </div>
              </div>
              <div className="space-y-4 text-sm text-blue-100">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-0.5">✓</span>
                  <span>Proactively calls customers when unexpected issues arise</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-0.5">✓</span>
                  <span>Consistently on time — customers mention this in nearly every review</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-0.5">✓</span>
                  <span>Reasonable pricing with no hidden fees or surprises</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-0.5">✓</span>
                  <span>5.0 stars across 20+ reviews on Google and Yelp combined</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-0.5">✓</span>
                  <span>Serving Sacramento homes since 2021</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                What Sacramento Homeowners Say
              </h2>
              <p className="text-gray-600 text-lg">
                5.0 stars on Google · 5.0 stars on Yelp · 20+ reviews
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <StarRating count={r.stars} />
                  <p className="mt-3 text-gray-700 leading-relaxed text-sm">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="mt-4 text-xs text-gray-400 font-medium">
                    — {r.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours + Contact */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg">
                Ready to get the job done? Give Tony a call.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="font-bold text-gray-900 text-lg mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Phone</div>
                      <a href={PHONE_HREF} className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Location</div>
                      <div className="text-gray-800">Sacramento, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🗺️</span>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Service Area</div>
                      <div className="text-gray-800">Sacramento, CA &amp; surrounding areas</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={PHONE_HREF}
                    className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-full transition-colors"
                  >
                    Call {PHONE}
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-5">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Friday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Saturday", hours: "Closed" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium text-gray-700">{day}</span>
                      <span className={hours === "Closed" ? "text-gray-400" : "text-gray-800"}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-3 bg-blue-50 rounded-lg text-sm text-blue-700 border border-blue-100">
                  💬 Tony always calls ahead if he encounters any complications — no surprise charges, ever.
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Tony the Tiger Plumbing Sacramento Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.7!2d-121.5244!3d38.5816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM0JzU0LjAiTiAxMjHCsDMxJzI3LjgiVw!5e0!3m2!1sen!2sus!4v1617000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-orange-600 py-14 px-4 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">
              Ready to Get It Fixed?
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              Tony answers his phone and shows up on time. Call now for a free
              estimate on your plumbing or handyman project.
            </p>
            <a
              href={PHONE_HREF}
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-xl px-10 py-4 rounded-full transition-colors shadow-lg inline-block"
            >
              📞 {PHONE}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🐯</span>
                <span className="text-white font-bold text-lg">Tony the Tiger</span>
              </div>
              <p className="text-sm leading-relaxed">
                Sacramento&apos;s trusted plumber and handyman. Honest pricing,
                5-star communication, done right the first time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Services</h4>
              <ul className="text-sm space-y-1">
                <li>Plumbing Repair</li>
                <li>Sprinkler Repair</li>
                <li>Shower Cartridge Rebuild</li>
                <li>Toilet Repair</li>
                <li>Drain Clearing</li>
                <li>Handyman Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="text-sm space-y-1">
                <div>
                  <a href={PHONE_HREF} className="text-orange-400 hover:text-orange-300">
                    {PHONE}
                  </a>
                </div>
                <div>Sacramento, CA</div>
                <div>Mon–Fri: 8:00 AM – 5:00 PM</div>
                <div className="mt-2">
                  <a
                    href="https://nextdoor.com/pages/tony-the-tiger-plumbing-and-handyman-service-sacramento-ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 text-xs underline"
                  >
                    Find us on Nextdoor
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-6 text-center text-xs text-blue-400">
            © {new Date().getFullYear()} Tony the Tiger Plumbing and Handyman Service · Sacramento, CA · BBB A+ Rated
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
