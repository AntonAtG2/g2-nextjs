// src/components/sections/AboutUsBlock.tsx

type AboutUsLayout = {
  header: string;
  paragraphRepeater: { singleParagraph: string }[];
  backgroundImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
};

export default function AboutUsBlock({
  header,
  paragraphRepeater,
  backgroundImage,
}: AboutUsLayout) {
  return (
    <section
      aria-label="About The Spotted Owl"
      className="relative w-full bg-cover bg-center py-24 sm:py-32"
      style={{ backgroundImage: `url(${backgroundImage?.node.sourceUrl})` }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-brand-yellow">
          {header}
        </h2>
        <div className="mt-6 space-y-6 text-base whitespace-pre-line">
          {paragraphRepeater.map((paragraph, index) => (
            <p key={index} className="text-lg sm:text-xl text-white mt-4">
              {paragraph.singleParagraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
