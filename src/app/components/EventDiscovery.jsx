"use client";

import { useState } from "react";
import EventCard from "./EventCard";

const categories = ["All", "Tech", "Sports", "Faith", "Social"];

export default function EventDiscovery({ events }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("soonest");
  const searchTerm = query.trim().toLowerCase();
  const visibleEvents = events
    .filter(
      (event) =>
        (category === "All" || event.category === category) &&
        event.title.toLowerCase().includes(searchTerm)
    )
    .sort((first, second) =>
      first.date.localeCompare(second.date) * (sortOrder === "soonest" ? 1 : -1)
    );

  return (
    <>
      <div className="mb-6 rounded-2xl border border-line/80 bg-white p-4 shadow-sm sm:p-5">
        <label htmlFor="event-search" className="sr-only">Search events by title</label>
        <div className="relative max-w-xl">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted">
            <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.5" />
            <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            id="event-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search events by title"
            className="min-h-12 w-full rounded-xl border border-line bg-paper pl-12 pr-4 text-ink placeholder:text-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
        {categories.map((item) => {
          const selected = category === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setCategory(item)}
              className={`min-h-10 rounded-full px-4 text-sm font-semibold transition-all ${
                selected
                  ? "bg-accent text-white shadow-sm shadow-accent/20"
                  : "border border-line bg-white text-muted hover:border-blue-300 hover:bg-tint hover:text-accent"
              }`}
            >
              {item}
            </button>
          );
        })}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted" aria-live="polite">
          Showing {visibleEvents.length} of {events.length} events
        </p>
        <label className="flex items-center gap-2 text-sm font-medium text-muted">
          <span>Sort by date</span>
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="min-h-10 rounded-lg border border-line bg-white px-3 text-ink shadow-sm"
          >
            <option value="soonest">Soonest first</option>
            <option value="latest">Latest first</option>
          </select>
        </label>
      </div>

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
