import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "theme-color", content: "#0B1F4B" },
      { title: "Consider Pie | NetSuite Consulting, Custom Development & Integration" },
      {
        name: "description",
        content:
          "Consider Pie provides expert NetSuite ERP consulting, SuiteScript 2.1 development, RESTlet API integration, and workflow automation for growing US & global businesses from Mumbai, India.",
      },
      {
        name: "keywords",
        content:
          "NetSuite consulting services, NetSuite development services, NetSuite integration services, SuiteScript 2.1, NetSuite workflow automation, NetSuite consultant USA, hire NetSuite developer, NetSuite ERP implementation, Consider Pie Mumbai",
      },
      { name: "author", content: "Consider Pie" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Consider Pie" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.considerpie.com" },
      { rel: "preload", href: "/logo.png", as: "image", type: "image/png", fetchPriority: "high" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/logo.png", type: "image/png", sizes: "any" },
      { rel: "icon", href: "/logo.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/logo.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "shortcut icon", href: "/logo.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Consider Pie",
          alternateName: ["ConsiderPie", "Consider Pie NetSuite Solutions", "Consider Pie ERP Consulting"],
          url: "https://www.considerpie.com/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Consider Pie",
          url: "https://www.considerpie.com",
          logo: "https://www.considerpie.com/logo.png",
          description: "Enterprise NetSuite ERP consulting, custom SuiteScript development, API integration, and workflow automation.",
          sameAs: ["https://www.linkedin.com/company/consider-pie/"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-91678-43480",
            contactType: "customer service",
            email: "contact@considerpie.com",
            areaServed: ["US", "IN", "AE", "SA", "QA", "AU", "GB"],
            availableLanguage: ["English", "Hindi"],
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          knowsAbout: [
            "Oracle NetSuite ERP",
            "SuiteScript 2.1",
            "RESTlet API Integration",
            "SuiteFlow Automation",
            "NetSuite Customization",
            "NetSuite OneWorld Consulting"
          ]
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            if (window.lenis) {
              window.lenis.scrollTo(el);
            } else {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 80);
          return;
        }
      }

      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
        <Navbar />
        <Outlet />
        <Footer />
        <FloatingActions />
        <Toaster />
      </SmoothScroll>
    </QueryClientProvider>
  );
}

