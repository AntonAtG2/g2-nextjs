import Image from "next/image";

type SectionBannerProps = {
  heading: string;
  description?: string;
  bg: string;
  icon?: string;
  className?: string;
};

export default function SectionBanner({
  heading,
  description,
  bg,
  icon,
  className = "",
}: SectionBannerProps) {
  return (
    <section
      className={`relative w-full min-h-[50vh] ${bg} flex items-center justify-center overflow-hidden ${className}`}
    >
      {icon && (
        <Image
          src={icon}
          alt={`${heading} Icon`}
          width={300}
          height={300}
          className="absolute top-1/4 left-1/4 w-[200px] md:w-[300px] opacity-20"
        />
      )}

      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl font-bold text-white uppercase">
          {heading}
        </h2>
        {description && (
          <p className="text-lg sm:text-xl text-white mt-4">{description}</p>
        )}
      </div>
    </section>
  );
}
