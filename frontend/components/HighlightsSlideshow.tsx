'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slideshowImages = [
  '/image/osdd/highlight1.png',
  '/image/osdd/highlight2.png',
  '/image/osdd/highlight3.png',
  '/image/osdd/highlight4.png',
  '/image/osdd/highlight5.png',
];

export default function HighlightsSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-10 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Track */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slideshowImages.map((src, i) => (
          <div
            key={src}
            className="relative h-[300px] w-full shrink-0 bg-white sm:h-[400px] lg:h-[480px]"
          >
            <Image
              src={src}
              alt={`Highlight ${i + 1}`}
              fill
              className="object-contain p-3"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2.5 border-t border-slate-100 bg-white py-3">
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === i
                ? 'w-7 bg-teal-500'
                : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

