"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const pages = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

const socials = [
  { href: "https://drive.google.com/file/d/1Pe3fHIkMBQ9pneqnu3tC7Cpq0oVbUbGo/view", label: "Resume" },
  { href: "https://www.linkedin.com/in/sulakshansiva/", label: "LinkedIn" },
  { href: "https://github.com/SulakshanSiva", label: "GitHub" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeIndex = pages.findIndex((page) => isActive(pathname, page.href));

  // Close the phone menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the phone menu is open; close it on Escape or once the
  // viewport reaches the md breakpoint (where the menu is hidden), so scroll isn't left locked
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onResize = () => desktop.matches && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header>
      {/* Desktop: centered tabs with a sliding highlight */}
      <nav aria-label="Main" className="hidden md:flex justify-center pt-7">
        <div className="relative inline-flex rounded-full border border-border bg-surface-muted p-1">
          <span
            aria-hidden="true"
            className={`absolute left-1 top-1 h-10 w-30 rounded-full bg-foreground transition-transform duration-[380ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${activeIndex === -1 ? "opacity-0" : ""}`}
            style={{ transform: `translateX(${Math.max(activeIndex, 0) * 100}%)` }}
          />
          {pages.map((page, i) => (
            <Link
              key={page.href}
              href={page.href}
              aria-current={i === activeIndex ? "page" : undefined}
              className={`relative z-10 inline-flex h-10 w-30 items-center justify-center rounded-full text-[15px] transition-colors duration-300 ${
                i === activeIndex ? "font-semibold text-background" : "font-medium text-foreground hover:text-link"
              }`}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Phone: hamburger on the left, theme toggle on the right */}
      <div className="md:hidden relative z-50 grid grid-cols-[44px_1fr_44px] items-center bg-background p-4">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline transition-colors ${
            open ? "bg-foreground text-background" : "bg-surface text-foreground hover:bg-surface-muted"
          }`}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <span aria-hidden="true" />
        <ThemeToggle className="inline-flex" />
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="md:hidden fixed inset-x-0 bottom-0 top-[76px] z-40 flex flex-col items-center gap-2 overflow-y-auto bg-background px-8 pt-24"
        >
          {pages.map((page, i) => (
            <Link
              key={page.href}
              href={page.href}
              onClick={() => setOpen(false)}
              aria-current={i === activeIndex ? "page" : undefined}
              className={`flex w-full items-baseline justify-center gap-3 border-b border-border py-3.5 text-[34px] transition-colors hover:text-link ${
                i === activeIndex ? "font-semibold" : "font-normal"
              }`}
            >
              <span className="text-[13px] font-semibold text-subtle">0{i + 1}</span>
              <span className={`leading-tight border-b-[3px] ${i === activeIndex ? "border-accent" : "border-transparent"}`}>
                {page.label}
              </span>
            </Link>
          ))}
          <div className="mt-7 flex justify-center gap-5 text-[15px] font-medium">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-link">
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
