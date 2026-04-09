import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(stagger = false) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("revealed");

        if (stagger) {
          Array.from(el.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
            child.classList.add("revealed");
          });
        }

        observer.unobserve(el);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
