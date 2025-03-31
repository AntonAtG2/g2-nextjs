import Image from "next/image";
import vanImage from "@/assets/images/spotted-owl-desktop.webp";

export default function FullWidthImageSection() {
  return (
    <Image
      src="/assets/images/spotted-owl-desktop.webp"
      alt="Spotted Owl branded van"
      fill
      priority
      loading="eager"
      placeholder="blur"
      blurDataURL={vanImage.blurDataURL}
      sizes="100vw"
      className="object-cover object-left-top -z-10"
    />
  );
}
