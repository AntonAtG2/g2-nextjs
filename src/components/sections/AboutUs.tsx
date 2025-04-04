// DEPRECATED: Legacy About Us component (replaced by ACF Flexible Content)

import React from "react";

// Legacy type kept for reference
export type AboutUsData = {
  aboutUsEntries: {
    nodes: {
      title: string;
      aboutUsContent: {
        aboutUsHeading: string;
        aboutUsParagraph: string;
      };
    }[];
  };
};

// Placeholder props (no longer used)
type AboutUsProps = {
  content: {
    aboutUsHeading: string;
    aboutUsParagraph: string;
  } | null;
};

// 🚨 This component has been superseded by the FlexibleContent layout system.
// Please do not import or reuse it.
export default function AboutUs({ content }: AboutUsProps) {
  return (
    <section
      aria-label="About The Spotted Owl"
      className="relative w-full bg-cover bg-center py-24 sm:py-32"
      style={{
        backgroundImage: "url('/assets/images/workmen-in-boots.webp')",
      }}
    >
      <div className="absolute inset-0 bg-brand-green/75"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 text-white">
          <div className="lg:pt-4 lg:pr-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-brand-yellow">
              {content?.aboutUsHeading || "Heading not available"}
            </h2>
            <div className="mt-6 space-y-6 text-base whitespace-pre-line">
              {content?.aboutUsParagraph ? (
                <p>{content.aboutUsParagraph}</p>
              ) : (
                <p className="italic text-gray-300">
                  Paragraph content not found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
