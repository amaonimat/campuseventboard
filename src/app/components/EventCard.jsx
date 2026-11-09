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
    <Link
      href={`/events/${event.id}`}
      className="group block overflow-hidden rounded-3xl border border-line/80 bg-surface text-left shadow-[0_8px_24px_rgba(23,32,51,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(36,87,197,0.13)]"
    >
      <article>
        <div className="relative block aspect-[16/10] overflow-hidden bg-tint">
          <Image
            src={event.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/5" />
          <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur ${categoryStyles[event.category]}`}>
            {event.category}
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-accent">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <rect x="3" y="4.5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6.5 3v3M13.5 3v3M3 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {formatEventDate(event.date)}
            <span className="font-normal text-muted">· {event.time}</span>
          </p>
          <h2 className="mt-2 line-clamp-2 min-h-[3.5rem] text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
            {event.title}
          </h2>
          <p className="mt-2 flex min-h-5 items-center gap-2 text-sm text-muted">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
              <path d="M16 8.2c0 4.1-6 8.3-6 8.3S4 12.3 4 8.2a6 6 0 1 1 12 0Z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="truncate">{event.venue}</span>
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <span className="inline-flex min-h-10 items-center text-sm font-semibold text-accent underline-offset-4 group-hover:underline">
              View event details
            </span>
            <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-tint text-accent transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
