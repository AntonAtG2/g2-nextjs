import type { WhyChooseSection } from "@/types/graphql";

type Props = {
  header: string;
  bulletPoints: { bulletHeader: string; bulletText: string }[];
};

export default function WhyChoose({
  header,
  bulletPoints = [], // Default to an empty array if undefined
}: Props) {
  return (
    <div className="overflow-hidden bg-brand-light-green py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pt-4 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green uppercase">
              {header}
            </h2>

            <div className="mt-10 max-w-xl space-y-8 text-gray-600 lg:max-w-none">
              {bulletPoints.length > 0 ? (
                bulletPoints.map((bullet, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    <span className="w-2 h-2 mx-4 mt-4 rounded-full bg-black flex-shrink-0"></span>
                    <div>
                      <div className="font-bold text-base/5 md:text-xl/7 text-brand-green bg-brand-yellow px-4 md:px-2 py-1 inline-block rounded">
                        {bullet.bulletHeader}
                      </div>
                      <div className="block text-base/7">
                        {bullet.bulletText}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No bullet points available</p> // Handle empty bullet points gracefully
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
