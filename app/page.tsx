import { request } from "graphql-request";
import { FLEXIBLE_CONTENT_QUERY } from "@/lib/queries";
import HeroBanner from "@/components/sections/HeroBanner";
import SubMenu from "@/components/sections/SubMenu";
import RenderFlexibleSections from "@/components/RenderFlexibleSections";
import type { FlexibleSection } from "@/types/graphql";

const GRAPHQL_ENDPOINT = "https://spotted-owl.g2dev.co.za/graphql";

// ⏱ Enable Incremental Static Regeneration (ISR) every 60 seconds
export const revalidate = 60;

type FlexibleContentData = {
  page: {
    title: string;
    flexibleContent: {
      flexibleContentSections: FlexibleSection[];
    };
  };
};

export default async function HomePage() {
  const data: FlexibleContentData = await request(
    GRAPHQL_ENDPOINT,
    FLEXIBLE_CONTENT_QUERY,
    { uri: "home" }
  );

  const sections = data.page.flexibleContent.flexibleContentSections;

  console.log("✅ Flexible sections loaded:", sections);

  return (
    <main>
      <HeroBanner />
      <SubMenu />
      <RenderFlexibleSections sections={sections} />
    </main>
  );
}
