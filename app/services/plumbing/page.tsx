import { fetchAboutUsContent } from "@/lib/graphql/fetchers/fetchAboutUs";
import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import PlumbingServiceDetails from "@/components/sections/PlumbingServiceDetails";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import RenderFlexibleSections from "@/components/RenderFlexibleSections";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default async function PlumbingServicePage() {
  const sections = await fetchAboutUsContent();

  return (
    <>
      <SectionBanner
        heading="Plumbing"
        description="Expert plumbing services by our trusted, professional certified plumbers."
        bg="bg-brand-green"
        icon="/assets/icons/plumbing-icon.webp"
        className="w-32 h-auto"
      />
      <SubMenu />
      <PlumbingServiceDetails />
      <WhyChoose />
      <FullWidthImageSection />
      <RenderFlexibleSections sections={sections} />
      <OurPhilosphy />
    </>
  );
}
