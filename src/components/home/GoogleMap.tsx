"use client";

import { MapPin, ExternalLink } from "lucide-react";

/**
 * Free Google Maps embed. No API key, no billing account required.
 * Uses Google's public "output=embed" search embed, which is intended
 * for exactly this kind of use (embedding a location on a website).
 */
export function GoogleMap({
  label = "Faridabad, Haryana",
  className = "",
  height = "h-[420px]",
}: {
  label?: string;
  className?: string;
  height?: string;
}) {
  const query = encodeURIComponent(label);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const linkSrc = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-3xl shadow-premium ${className}`}>
      <iframe
        title={`Map of ${label}`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
      <a
        href={linkSrc}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-800 shadow-md transition-colors hover:bg-gold-50"
      >
        <MapPin size={13} className="text-gold-500" />
        Open in Google Maps
        <ExternalLink size={12} />
      </a>
    </div>
  );
}
