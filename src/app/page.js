import EventDiscovery from "./components/EventDiscovery";
import events from "./data";

export default function Home() {
  return (
    <main className="flex-1 px-4 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-7xl">
        <section className="relative mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 px-6 py-10 text-white shadow-xl shadow-blue-950/15 sm:px-10 sm:py-14 lg:px-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10 bg-white/[0.04]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 right-24 h-96 w-96 rounded-full border border-white/10" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-50 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              CAMPUS LIFE, IN ONE PLACE
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Find your next <span className="text-sky-200">campus moment.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Discover what’s happening around you, meet your community, and make the most of campus.
            </p>
            <a
              href="#upcoming-events"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-900 shadow-sm transition hover:bg-blue-50"
            >
              Explore events <span aria-hidden="true" className="ml-2">↓</span>
            </a>
          </div>
        </section>

        <section id="upcoming-events" aria-labelledby="events-heading" className="scroll-mt-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-wide text-accent uppercase">Make a plan</p>
              <h2 id="events-heading" className="mt-1 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Upcoming events
              </h2>
            </div>
            <span className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-medium text-muted shadow-sm">
              {events.length} events to explore
            </span>
          </div>
          <EventDiscovery events={events} />
        </section>
      </div>
    </main>
  );
}
