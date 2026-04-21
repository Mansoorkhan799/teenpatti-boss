import { Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { clsx } from "clsx";

interface DownloadButtonProps {
 size?: "sm" | "md" | "lg";
 className?: string;
 label?: string;
}

export function DownloadButton({ size = "md", className, label }: DownloadButtonProps) {
 const sizes = {
   sm: "px-4 py-2 text-sm gap-2",
   md: "px-6 py-3 text-sm gap-2",
   lg: "px-8 py-4 text-base gap-3",
  };

 return (
    <a
     href={siteConfig.downloadLink}
     target="_blank"
     rel="nofollow noopener"
     className={clsx(
        "inline-flex items-center justify-center font-bold rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white transition-all duration-200 shadow-lg shadow-green-900/30 hover:shadow-xl hover:shadow-green-800/40 hover:scale-105 active:scale-95",
       sizes[size],
       className
      )}
    >
      <Download className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {label || `Download APK ${siteConfig.version}`}
    </a>
  );
}
