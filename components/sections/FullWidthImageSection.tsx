import Image from "next/image";

export default function FullWidthImageSection() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[500px] md:h-[800px] lg:h-[1000px]">
        <Image
          src="/assets/images/spotted-owl-branded-van.jpg"
          alt="Spotted Owl Branded Van"
          fill
          className="object-cover"
          priority // optional if you want it to load faster
        />
      </div>
    </section>
  );
}
