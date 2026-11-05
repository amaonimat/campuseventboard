import Image from "next/image";
import Link from "next/link";

const categoryStyles = {
  Tech: "bg-blue-100 text-blue-800",
  Sports: "bg-orange-100 text-orange-800",
  Faith: "bg-violet-100 text-violet-800",
  Social: "bg-emerald-100 text-emerald-800",
};

function formatEventDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function EventCard({ event }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/events/${event.id}`} className="relative block aspect-[16/10] overflow-hidden bg-tint">
        <Image
          src={event.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[event.category]}`}>
          {event.category}
        </span>
      </Link>
      <div className="p-5">
        <p className="text-sm font-medium text-accent">
          {formatEventDate(event.date)} <span className="text-muted">· {event.time}</span>
        </p>
        <Link href={`/events/${event.id}`} className="mt-2 block">
          <h2 className="text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
            {event.title}
          </h2>
        </Link>
        <p className="mt-1 text-sm text-muted">{event.venue}</p>
        <div className="mt-5 border-t border-line pt-4">
          <Link
            href={`/events/${event.id}`}
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            View event details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
