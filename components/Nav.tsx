"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { profile } from "@/lib/content";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="site-header">
      <div className="page-shell nav-inner">
        <Link href="/" className="brand-link" aria-label="Hardik Sharma, home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">H<span>S</span></span><span className="brand-name">Hardik Sharma<span>.</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "nav-link",
                isActive(item.href) && "active",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="nav-contact" href={`mailto:${profile.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="mobile-menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={clsx(menuOpen && "open-first")} />
          <span className={clsx(menuOpen && "open-last")} />
        </button>
      </div>

      <div
        className={clsx(
          "mobile-nav-wrap",
          menuOpen ? "is-open" : "",
        )}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={clsx("nav-link", isActive(item.href) && "active")}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className={clsx("nav-link", isActive("/contact") && "active")} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
