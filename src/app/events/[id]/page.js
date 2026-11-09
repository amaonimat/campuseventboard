import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import events from "../../data";

const categoryStyles = {
  Tech: "bg-blue-100 text-blue-800",
  Sports: "bg-orange-100 text-orange-800",
  Faith: "bg-violet-100 text-violet-800",
  Social: "bg-emerald-100 text-emerald-800",
};

function formatEventDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default async function EventDetailsPage({ params }) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) {
    notFound();
  }

  return (
    <main className="flex-1 px-4 py-8 sm:px-8 sm:py-12">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <span aria-hidden="true">←</span> Back to all events
        </Link>

        <div className="mt-6 grid overflow-hidden rounded-3xl border border-line bg-surface shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-64 bg-tint sm:min-h-96">
            <Image
              src={event.image}
              alt={`${event.title} event`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col p-6 sm:p-9">
            <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[event.category]}`}>
              {event.category}
            </span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {event.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{event.description}</p>

            <dl className="mt-8 grid gap-5 border-t border-line pt-6">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-muted uppercase">Date and time</dt>
                <dd className="mt-1 font-medium text-ink">
                  {formatEventDate(event.date)} · {event.time}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-muted uppercase">Venue</dt>
                <dd className="mt-1 font-medium text-ink">{event.venue}</dd>
              </div>
            </dl>

            <Link
              href="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Explore more events
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
