import Image from "next/image";

export default function FullWidthImageSection() {
  return (
    <div className="w-full">
      <Image
        src="/assets/images/spotted-owl-branded-van.jpg"
        alt="Spotted Owl Branded Van"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
