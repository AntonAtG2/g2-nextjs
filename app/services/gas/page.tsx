import { fetchAboutUsContent } from "@/lib/graphql/fetchers/fetchAboutUs";
import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import GasServiceDetails from "@/components/sections/GasServiceDetails";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import RenderFlexibleSections from "@/components/RenderFlexibleSections";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default async function GasServicePage() {
  const sections = await fetchAboutUsContent();

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
      <GasServiceDetails />
      <WhyChoose />
      <FullWidthImageSection />
      <RenderFlexibleSections sections={sections} />
      <OurPhilosphy />
    </>
  );
}
