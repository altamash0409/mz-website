import { Link } from "@tanstack/react-router";
import { HiChevronRight, HiOutlineHome } from "react-icons/hi2";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { label: "Home", to: "/" },
    ...items.filter((item) => item.label !== "Home"),
  ];

  const siteUrl = "https://www.considerpie.com";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center flex-wrap gap-1.5 text-xs font-medium text-[#667085] ${className}`}
    >
      <ol
        className="flex items-center flex-wrap gap-1.5"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          const position = index + 1;
          const itemUrl = item.to
            ? `${siteUrl}${item.to.startsWith("/") ? item.to : `/${item.to}`}`
            : siteUrl;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(position)} />
              <meta itemProp="item" content={itemUrl} />

              {index > 0 && (
                <HiChevronRight
                  size={14}
                  className="shrink-0 text-[#98A2B3] aria-hidden:true"
                />
              )}

              {isLast || !item.to ? (
                <span
                  itemProp="name"
                  className="font-semibold text-[#0B1F4B] truncate max-w-[220px] sm:max-w-xs"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to as any}
                  className="inline-flex items-center gap-1 text-[#667085] transition-colors hover:text-[#0B1F4B]"
                >
                  {index === 0 && <HiOutlineHome size={14} className="shrink-0" />}
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
