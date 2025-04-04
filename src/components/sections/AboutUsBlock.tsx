import type { AboutUsLayout } from "@/types/graphql";

export default function AboutUsBlock({
  header,
  paragraphRepeater,
  backgroundImage,
}: AboutUsLayout) {
  const bgImage = backgroundImage?.node?.mediaItemUrl;

  return (
    <section
      id="AboutUs"
      aria-label="About The Spotted Owl"
      className="relative w-full bg-cover bg-center py-24 sm:py-32"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <div className="absolute inset-0 bg-brand-green/75"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-brand-yellow">
          {header}
        </h2>
        <div className="mt-6 space-y-6 text-base whitespace-pre-line">
          {paragraphRepeater.map((para, idx) => (
            <p key={idx} className="text-lg sm:text-xl text-white mt-4">
              {para.singleParagraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
