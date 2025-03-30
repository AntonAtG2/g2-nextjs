import { request } from "graphql-request";
import { ABOUT_US_QUERY } from "@/lib/queries";
import HeroBanner from "@/components/sections/HeroBanner";
import SubMenu from "@/components/sections/SubMenu";
import OurServices from "@/components/sections/OurServices";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import AboutUs from "@/components/sections/AboutUs";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

const GRAPHQL_ENDPOINT = "https://spotted-owl.g2dev.co.za/graphql";

type AboutUsData = {
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

export default async function HomePage() {
  const data: AboutUsData = await request(GRAPHQL_ENDPOINT, ABOUT_US_QUERY);
  const content = data.aboutUsEntries?.nodes?.[0]?.aboutUsContent || null;

  return (
    <main>
      <HeroBanner />
      <SubMenu />
      <OurServices />
      <WhyChoose />
      <FullWidthImageSection />
      <AboutUs content={content} />
      <OurPhilosphy />
    </main>
  );
}
