import { useEffect, type ReactNode } from "react";

declare global {
  interface Window {
    lenis?: any;
  }
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenisInstance: any = null;
    let rafId: number | null = null;

    import("lenis")
      .then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        lenisInstance = lenis;
        window.lenis = lenis;

        function raf(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      })
      .catch((err) => {
        console.warn("Lenis initialization skipped:", err);
      });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
}
