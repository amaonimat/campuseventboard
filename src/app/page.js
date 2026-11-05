import EventCard from "./components/EventCard";
import events from "./data";

export default function Home() {
  return (
    <main className="flex-1 px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <section className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">Campus life, in one place</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Find your next campus moment.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Discover what’s happening around you, meet your community, and make the most of campus.
          </p>
        </section>

        <section aria-labelledby="events-heading">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-accent">What’s happening</p>
              <h2 id="events-heading" className="mt-1 text-2xl font-semibold text-ink">Upcoming events</h2>
            </div>
            <span className="text-sm text-muted">{events.length} events</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => <EventCard key={event.id} event={event} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
