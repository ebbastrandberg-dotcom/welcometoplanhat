import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-white/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
          : "backdrop-blur-none bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex items-center h-14">
        <a href="#" className="flex items-center">
          <img
            src="/images/planhat-wordmark-dark.svg"
            alt="Planhat"
            className={`h-5 transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-80"
            }`}
          />
        </a>
      </div>
    </nav>
  );
}
