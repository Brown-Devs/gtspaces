"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export function VideoPlayer({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-3xl bg-ink-950 shadow-premium ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="aspect-video w-full object-cover"
      />
      {!playing && (
        <button
          aria-label="Play project video"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-ink-950/25 transition-colors group-hover:bg-ink-950/35"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-ink-900 shadow-gold transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
            <Play size={28} fill="currentColor" className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
