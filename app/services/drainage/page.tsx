import { fetchAboutUsContent } from "@/lib/graphql/fetchers/fetchAboutUs";
import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import DrainageServiceDetails from "@/components/sections/DrainageServiceDetails";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import RenderFlexibleSections from "@/components/RenderFlexibleSections";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default async function DrainageService() {
  const sections = await fetchAboutUsContent();

  return (
    <>
      <SectionBanner
        heading="Drainage"
        description="Trusted drain services by our professional field service technicians"
        bg="bg-brand-green"
        icon="/assets/icons/drainage-icon.webp"
        className="w-32 h-auto"
      />
      <SubMenu />
      <DrainageServiceDetails />
      <WhyChoose />
      <FullWidthImageSection />
      <RenderFlexibleSections sections={sections} />
      <OurPhilosphy />
    </>
  );
}
