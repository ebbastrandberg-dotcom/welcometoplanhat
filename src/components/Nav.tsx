import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [open, onKeyDown]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-white/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
          : "backdrop-blur-none bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex items-center justify-between h-14">
        <a href="#" className="flex items-center">
          <img
            src="/images/planhat-wordmark-dark.svg"
            alt="Planhat"
            className={`h-5 transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-80"
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/65 text-sm hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-white transition-transform duration-200 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-white transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-14 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          onClick={() => setOpen(false)}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-xl font-display font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
