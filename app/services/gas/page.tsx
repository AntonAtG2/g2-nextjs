import { request } from "graphql-request";
import { FLEXIBLE_CONTENT_QUERY } from "@/lib/queries";
import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import PlumbingServiceDetails from "@/components/sections/PlumbingServiceDetails";
import RenderFlexibleSections from "@/components/RenderFlexibleSections";
import type { FlexibleSection } from "@/types/graphql";

const GRAPHQL_ENDPOINT = "https://spotted-owl.g2dev.co.za/graphql";

export default async function GasServicePage() {
  const data = await request<{
    page: {
      flexibleContent: {
        flexibleContentSections: FlexibleSection[];
      };
    };
  }>(GRAPHQL_ENDPOINT, FLEXIBLE_CONTENT_QUERY, { uri: "home" });

  const sections = data.page.flexibleContent.flexibleContentSections;

  const filteredSections = sections.filter((section) =>
    [
      "FlexibleContentFlexibleContentSectionsWhyChooseSectionLayout",
      "FlexibleContentFlexibleContentSectionsBrandImageLayout",
      "FlexibleContentFlexibleContentSectionsAboutUsLayout",
      "FlexibleContentFlexibleContentSectionsOurPhilosophyLayout",
    ].includes(section.__typename)
  );

  return (
    <>
      <SectionBanner
        heading="Gas"
        description="SAQCC certified gas services by our professional teams."
        bg="bg-brand-green"
        icon="/assets/icons/gas-icon.webp"
        className="w-32 h-auto"
      />
      <SubMenu />
      <PlumbingServiceDetails />
      <RenderFlexibleSections sections={filteredSections} />
    </>
  );
}
