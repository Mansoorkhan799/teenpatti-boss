"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
 const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => setMounted(true), []);

 if (!mounted) {
   return (
      <button className="w-9 h-9 rounded-xl border border-gray-700 flex items-center justify-center" />
    );
  }

 return (
    <button
     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
     className="w-9 h-9 rounded-xl border border-gray-700 flex items-center justify-center bg-white hover:bg-gray-900 transition-all duration-200 shadow-sm"
     aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-yellow-500" />
      ) : (
        <Moon className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );
}
