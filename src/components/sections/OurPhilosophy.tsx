import type { OurPhilosophy as OurPhilosophyLayout } from "@/types/graphql";

export default function OurPhilosophy({
  header,
  paragraphRepeater,
}: OurPhilosophyLayout) {
  // 🛡️ Fallback if field is missing or empty
  if (!paragraphRepeater || paragraphRepeater.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pt-4 lg:pr-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green uppercase">
                  {header}
                </h2>
                <div className="mt-10 max-w-xl space-y-8 text-gray-600 lg:max-w-none">
                  {paragraphRepeater.map((para, idx) => (
                    <p
                      key={idx}
                      className="mt-6 text-base text-gray-600 whitespace-pre-line"
                    >
                      {para.singleParagraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
