# Campus Event Board

Campus Event Board is a frontend-only website for discovering events happening around campus. It is built with Next.js, React, and Tailwind CSS.

## Features

- Displays eight sample events as responsive cards.
- Groups events into Tech, Sports, Faith, and Social categories.
- Searches event titles.
- Filters events by category; search and category filters can be used together.
- Sorts events by date, either soonest first or latest first.
- Shows an empty state when no events match the current search and filter.
- Uses coloured category badges and hover animations on event cards.
- Opens a details page for each event at `/events/[id]`.
- Shows the event’s image, category, description, date, time, and venue on the details page.
- Shows a not-found page for an event ID that does not exist.

## How it was built

The project was developed in small steps, with commits for separate parts of the work:

1. Set up a Next.js project using the App Router and Tailwind CSS.
2. Added sample campus event data with IDs, titles, categories, dates, times, venues, images, and descriptions.
3. Set up the site title, shared page layout, and visual theme.
4. Built the shared navigation and reusable event card, then displayed all events in a responsive grid.
5. Added title search and a no-results message.
6. Added category filters.
7. Added sorting by event date.
8. Added the dynamic event details route.
9. Updated the design colours from green to blue.

## Technology

- **Next.js App Router** creates the home page and dynamic event routes.
- **React** builds reusable interface components and manages the search, category, and sort controls.
- **Tailwind CSS** styles the page and makes the event grid responsive.
- **JavaScript** defines the event data and page behavior.

## Project structure

```text
src/app/
  components/
    EventCard.jsx         Reusable event card
    EventDiscovery.jsx    Search, category filters, sorting, and event grid
    SiteHeader.jsx        Shared navigation
  events/
    [id]/
      page.js             Dynamic event details page
  data.js                 Sample campus event data
  globals.css             Shared colours and global styles
  layout.js               Shared layout, fonts, and page metadata
  page.js                 Home page
```

## Run locally

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Event images

The sample event photos are hosted by Unsplash. The Next.js image settings allow images from `images.unsplash.com`.

## Current scope

This is a frontend-only project using sample data. Saved events, a “My Events” page, and an event countdown are not implemented yet.
