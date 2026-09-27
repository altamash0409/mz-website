import { useEffect, type ReactNode } from "react";
import type Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect user preference for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Skip Lenis JS scroll calculation on mobile touch devices for maximum native mobile performance
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      return;
    }

    let lenisInstance: Lenis | null = null;

    import("lenis")
      .then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 0.7,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          autoRaf: true,
          anchors: true,
        });

        lenisInstance = lenis;
        window.lenis = lenis;
      })
      .catch((err) => {
        console.warn("Lenis initialization skipped:", err);
      });

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
}
