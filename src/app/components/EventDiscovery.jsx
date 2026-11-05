"use client";

import { useState } from "react";
import EventCard from "./EventCard";

export default function EventDiscovery({ events }) {
  const [query, setQuery] = useState("");
  const searchTerm = query.trim().toLowerCase();
  const visibleEvents = events.filter((event) => event.title.toLowerCase().includes(searchTerm));

  return (
    <>
      <label htmlFor="event-search" className="sr-only">Search events by title</label>
      <div className="mb-6 max-w-xl">
        <input
          id="event-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search events by title"
          className="min-h-12 w-full rounded-xl border border-line bg-surface px-4 text-ink shadow-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <p className="mb-4 text-sm text-muted" aria-live="polite">
        Showing {visibleEvents.length} of {events.length} events
      </p>

      {visibleEvents.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-white/70 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-ink">No events match your search</p>
          <p className="mt-2 text-sm text-muted">Try another event title.</p>
        </div>
      )}
    </>
  );
}
