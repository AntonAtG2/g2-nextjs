import { request } from "graphql-request";
import { ABOUT_US_QUERY } from "@/lib/queries";
import HeroBanner from "@/components/sections/HeroBanner";
import SubMenu from "@/components/sections/SubMenu";
import OurServices from "@/components/sections/OurServices";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import OurPhilosphy from "@/components/sections/OurPhilosphy";
import RenderFlexibleSections from "@/components/RenderFlexibleSections";

const GRAPHQL_ENDPOINT = "https://spotted-owl.g2dev.co.za/graphql";

type AboutUsSection = {
  __typename: "FlexibleContentSectionsAboutUsSectionAboutUsLayout";
  header: string;
  paragraphRepeater: { singleParagraph: string }[];
  backgroundImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
};

type FlexibleContentData = {
  page: {
    flexibleContentSections: {
      aboutUsSection: AboutUsSection[];
    };
  };
};

export default async function HomePage() {
  const data: FlexibleContentData = await request(
    GRAPHQL_ENDPOINT,
    ABOUT_US_QUERY
  );
  const sections = data.page?.flexibleContentSections?.aboutUsSection || [];

  console.log("✅ About Us Sections:", sections);

  return (
    <main>
      <HeroBanner />
      <SubMenu />
      <OurServices />
      <WhyChoose />
      <FullWidthImageSection />
      <RenderFlexibleSections sections={sections} />
      <OurPhilosphy />
    </main>
  );
}
