"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ScreenshotsSlider() {
  const slides = siteConfig.images.screenshots;
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setActive((next + slides.length) % slides.length);
      setTimeout(() => setAnimating(false), 350);
    },
    [animating, slides.length]
  );

  useEffect(() => {
    const id = setInterval(() => go(active + 1), 5000);
    return () => clearInterval(id);
  }, [active, go]);

  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-400 bg-green-950/50 rounded-full mb-3 border border-green-900/50">
            App Preview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Teen Patti Boss App Screenshots
          </h2>
        </div>

        {/* Main image — full, no crop */}
        <div className="relative w-full rounded-2xl overflow-hidden border-2 border-green-700/40 shadow-2xl shadow-black/50 bg-black">
          <Image
            key={slides[active].src}
            src={slides[active].src}
            alt={`Teen Patti Boss – ${slides[active].label}`}
            width={1440}
            height={665}
            sizes="(max-width: 768px) 100vw, 80vw"
            className="w-full h-auto block"
            priority
          />

          {/* Label */}
          <div className="absolute bottom-0 inset-x-0 py-3 px-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm font-semibold text-center">{slides[active].label}</p>
          </div>

          {/* Prev arrow */}
          <button
            onClick={() => go(active - 1)}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-green-900/60 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => go(active + 1)}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-green-900/60 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Thumbnail strip — horizontally scrollable on mobile */}
        <div className="mt-4 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center w-max sm:w-full mx-auto px-1">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => go(i)}
                className={`relative flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 focus:outline-none ${
                  i === active
                    ? "border-green-500 opacity-100 shadow-md shadow-green-900/40"
                    : "border-gray-700 opacity-50 hover:opacity-80"
                }`}
                style={{ width: 72, height: 34 }}
                aria-label={slide.label}
              >
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-6 h-2 bg-green-500" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
