"use client";

import { useEffect, useRef, useState } from "react";
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
  { href: "https://drive.google.com/file/d/1NLkyo5hZ8E0Th-yr1Txatxm5KgiPatwV/view", label: "Resume" },
  { href: "https://www.linkedin.com/in/sulakshansiva/", label: "LinkedIn" },
  { href: "https://github.com/SulakshanSiva", label: "GitHub" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

// Phone bar: menu button on the left, theme toggle on the right. It's drawn in the header and again at
// the top of the open menu, so the button stays in the same place whether the menu is open or closed.
const PhoneBar = ({ open, onToggle }: { open: boolean; onToggle: () => void }) => (
  <div className="md:hidden grid grid-cols-[44px_1fr_44px] items-center p-4">
    <button
      type="button"
      onClick={onToggle}
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
);

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const pageCoverRef = useRef<HTMLDivElement>(null);
  const activeIndex = pages.findIndex((page) => isActive(pathname, page.href));

  // Close the phone menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Show the phone menu as a modal dialog while open; close it once the viewport reaches the md
  // breakpoint, where the menu is hidden. The browser handles Escape (reported through onClose),
  // keeps focus inside the menu, and returns focus to the menu button when it closes.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (!open) {
      menu.close();
      return;
    }
    menu.showModal();
    pageCoverRef.current!.style.height = `${document.documentElement.scrollHeight}px`;
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onResize = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
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

      <PhoneBar open={open} onToggle={() => setOpen((o) => !o)} />

      {/* Page cover under the open menu, spanning the whole page. iOS 26.0 Safari doesn't paint the menu
          (or anything fixed to the screen) behind its status bar and toolbar, only content positioned
          in the page, so without this the page shows through there. */}
      {open && <div ref={pageCoverRef} aria-hidden="true" className="absolute inset-x-0 top-0 z-50 bg-background md:hidden" />}

      {/* Phone menu: a full-screen modal dialog with a backdrop matching the page background.
          overscroll-contain keeps swipes on the menu from scrolling the page behind it. */}
      <dialog
        ref={menuRef}
        id="mobile-menu"
        aria-label="Main menu"
        onClose={() => setOpen(false)}
        className="m-0 h-full max-h-none w-full max-w-none flex-col overflow-y-auto overscroll-contain bg-background p-0 text-foreground open:flex backdrop:bg-background md:hidden"
      >
        <PhoneBar open={open} onToggle={() => setOpen(false)} />

        <nav aria-label="Main" className="flex flex-col items-center gap-2 px-8 pt-24 pb-12">
          {pages.map((page, i) => (
            <Link
              key={page.href}
              href={page.href}
              onClick={() => setOpen(false)}
              aria-current={i === activeIndex ? "page" : undefined}
              className={`flex w-full items-center justify-center gap-3 border-b border-border py-3.5 text-[34px] transition-colors hover:text-link ${
                i === activeIndex ? "font-semibold" : "font-normal"
              }`}
            >
              {/* Transparent border matches the label's underline so items-center aligns the text boxes;
                  the 3px nudge then centers the number on the lowercase letters rather than the capitals */}
              <span className="text-[13px] font-semibold text-subtle border-b-[3px] border-transparent translate-y-[3px]">0{i + 1}</span>
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
      </dialog>
    </header>
  );
}
