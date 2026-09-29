
import { useState } from "react";
import logo from "../../../public/icon.jpg";
import { User } from "lucide-react";
export default function Header() {
  const [activePage, setActivePage] = useState("Feed");

  return (
    <header className="flex justify-start gap-1 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3">
      {/* Logo */}
      <img
        src={logo}
        alt="Frontpage logo"
        className="h-10 w-10 rounded-lg object-cover"
      />

      {/* Brand */}
      <h1 className="text-xl font-semibold text-[var(--color-text-primary)]">
        Frontpage
      </h1>

      {/* Navigation */}
      <nav className="ml-5">
        <ul className="flex items-center gap-2">
          {["Feed", "Digest", "Discover"].map((page) => (
            <li key={page}>
              <button
              type="button"
                onClick={() => setActivePage(page)}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  activePage === page
                    ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
     <ul className="ml-auto flex items-center gap-2">
  <li>
    <input
      className="w-56 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
      type="search"
      placeholder="Search articles..."
    />
  </li>

  <li>
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-accent)] text-lg text-white transition-colors hover:bg-[var(--color-accent-hover)]"
    >
      +
    </button>
  </li>

  <li>
  <button
    type="button"
    aria-label="Account"
    className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
  >
    <User size={20} />
  </button>
</li>
</ul>
    </header>
  );
}

