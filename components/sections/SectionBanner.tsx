type SectionBannerProps = {
  heading: string;
  description: string;
  bg: string;
  icon: string;
};

export default function SectionBanner({
  heading,
  description,
  bg,
  icon,
}: SectionBannerProps) {
  return (
    <section
      className={`relative w-full min-h-[50vh] ${bg} flex items-center justify-center`}
    >
      <img
        src={icon}
        alt={`${heading} Icon`}
        className="absolute top-1/4 left-1/4 w-[200px] md:w-[300px]"
      />
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="text-4xl sm:text-6xl font-bold text-white uppercase">
          {heading}
        </h2>
        <p className="text-lg sm:text-xl text-white mt-4">{description}</p>
      </div>
    </section>
  );
}
