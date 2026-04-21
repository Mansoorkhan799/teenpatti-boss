"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
 const [visible, setVisible] = useState(false);

 useEffect(() => {
   const onScroll = () => setVisible(window.scrollY > 500);
   window.addEventListener("scroll", onScroll, { passive: true });
   return () => window.removeEventListener("scroll", onScroll);
  }, []);

 if (!visible) return null;

 return (
    <button
     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
     aria-label="Scroll to top"
     className="fixed bottom-6 right-5 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-lg shadow-green-900/40 hover:from-green-500 hover:to-emerald-600 hover:scale-110 active:scale-95 transition-all duration-200"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
