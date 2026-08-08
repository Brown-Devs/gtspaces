"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { src: string; caption: string };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl ${
              i === 0 ? "col-span-2 h-72 sm:h-80" : "h-40 sm:h-48"
            }`}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/70 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-xs font-medium text-white">{img.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                setActive((active - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              aria-label="Next"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                setActive((active + 1) % images.length);
              }}
            >
              <ChevronRight size={22} />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].caption}
                fill
                className="object-contain"
              />
            </motion.div>
            <p className="absolute bottom-6 text-sm text-white/70">{images[active].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
