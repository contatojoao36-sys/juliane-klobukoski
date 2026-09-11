import { useEffect, useState } from "react";

export default function Slideshow({
  images,
  interval = 4500,
  className = "",
}: {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border ${className}`}>
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "absolute inset-0 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Ver foto ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-gold/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
