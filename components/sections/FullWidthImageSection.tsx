// components/sections/FullWidthImage.tsx
"use client";

import Image from "next/image";

interface FullWidthImageProps {
  src: string;
  alt: string;
}

export default function FullWidthImage({ src, alt }: FullWidthImageProps) {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
    </div>
  );
}
