import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-indigo-600 text-sm text-white shadow-md shadow-blue-900/20">C</span>
          Campus<span className="text-accent">Board</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/" className="rounded-full bg-tint px-4 py-2 text-sm font-semibold text-accent">
            Discover
          </Link>
          <Link
            href="/my-events"
            className="rounded-full px-4 py-2 text-sm font-semibold text-muted transition-colors hover:bg-tint hover:text-accent"
          >
            My Events
          </Link>
        </div>
      </nav>
    </header>
  );
}
