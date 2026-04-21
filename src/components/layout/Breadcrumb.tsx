import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
 label: string;
 href?: string;
}

interface BreadcrumbProps {
 items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
 const allItems = [{ label: "Home", href: "/" }, ...items];

 return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500 flex-wrap">
      {allItems.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="w-3 h-3 flex-shrink-0" />}
          {item.href && index < allItems.length - 1 ? (
            <Link href={item.href} className="hover:text-green-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
