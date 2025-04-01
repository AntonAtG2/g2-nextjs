// src/components/RenderFlexibleSections.tsx

import AboutUsBlock from "@/components/sections/AboutUsBlock";

type Paragraph = {
  singleParagraph: string;
};

type BackgroundImage = {
  node: {
    sourceUrl: string;
    altText?: string;
  };
};

type AboutUsLayout = {
  __typename: "FlexibleContentSectionsAboutUsSectionAboutUsLayout";
  header: string;
  paragraphRepeater: Paragraph[];
  backgroundImage?: BackgroundImage;
};

type FlexibleSection = AboutUsLayout; // Add more layout types here as needed

export default function RenderFlexibleSections({
  sections,
}: {
  sections: FlexibleSection[];
}) {
  return (
    <>
      {sections.map((block, index) => {
        switch (block.__typename) {
          case "FlexibleContentSectionsAboutUsSectionAboutUsLayout":
            return <AboutUsBlock key={index} {...block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
