import Image from "next/image";
import type { BrandImage as BrandImageLayout } from "@/types/graphql";

export default function BrandImage({ image }: BrandImageLayout) {
  const img = image?.node?.mediaItemUrl;

  if (!img) return null;

  return (
    <section aria-label="Brand Image Section" className="relative w-full">
      <Image
        src={img}
        alt={image.node.altText || "Brand Image"}
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
