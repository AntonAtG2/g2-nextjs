import AboutUsBlock from "@/components/sections/AboutUsBlock";
import OurServices from "@/components/sections/OurServices";
import WhyChoose from "@/components/sections/WhyChoose";
import BrandImage from "@/components/sections/BrandImage";
import OurPhilosophy from "@/components/sections/OurPhilosophy";

import type {
  FlexibleSection,
  AboutUsLayout,
  ServiceGridSection,
  WhyChooseSection,
  BrandImage as BrandImageLayout,
  OurPhilosophy as OurPhilosophyLayout,
} from "@/types/graphql";

type Props = {
  sections: FlexibleSection[];
};

// 🔐 Type guards
function isAboutUs(block: FlexibleSection): block is AboutUsLayout & {
  __typename: "FlexibleContentFlexibleContentSectionsAboutUsSectionLayout";
} {
  return (
    block.__typename ===
    "FlexibleContentFlexibleContentSectionsAboutUsSectionLayout"
  );
}

function isServices(block: FlexibleSection): block is ServiceGridSection & {
  __typename: "FlexibleContentFlexibleContentSectionsServiceGridSectionLayout";
} {
  return (
    block.__typename ===
    "FlexibleContentFlexibleContentSectionsServiceGridSectionLayout"
  );
}

function isWhyChoose(block: FlexibleSection): block is WhyChooseSection & {
  __typename: "FlexibleContentFlexibleContentSectionsWhyChooseSectionLayout";
} {
  return (
    block.__typename ===
    "FlexibleContentFlexibleContentSectionsWhyChooseSectionLayout"
  );
}

function isBrandImage(block: FlexibleSection): block is BrandImageLayout & {
  __typename: "FlexibleContentFlexibleContentSectionsBrandImageLayout";
} {
  return (
    block.__typename ===
    "FlexibleContentFlexibleContentSectionsBrandImageLayout"
  );
}

function isOurPhilosophy(
  block: FlexibleSection
): block is OurPhilosophyLayout & {
  __typename: "FlexibleContentFlexibleContentSectionsOurPhilosophyLayout";
} {
  return (
    block.__typename ===
    "FlexibleContentFlexibleContentSectionsOurPhilosophyLayout"
  );
}

export default function RenderFlexibleSections({ sections }: Props) {
  return (
    <>
      {sections.map((block, index) => {
        if (isServices(block)) {
          return <OurServices key={`section-${index}`} {...block} />;
        }

        if (isWhyChoose(block)) {
          return <WhyChoose key={`section-${index}`} {...block} />;
        }

        if (isBrandImage(block)) {
          return <BrandImage key={`section-${index}`} {...block} />;
        }

        if (isAboutUs(block)) {
          return <AboutUsBlock key={`section-${index}`} {...block} />;
        }

        if (isOurPhilosophy(block)) {
          return <OurPhilosophy key={`section-${index}`} {...block} />;
        }

        if (process.env.NODE_ENV === "development") {
          console.warn("⚠️ No match for:", block.__typename);
        }

        return null;
      })}
    </>
  );
}
