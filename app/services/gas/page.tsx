import { fetchAboutUsContent } from "@/lib/graphql/fetchers/fetchAboutUs";
import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import GasServiceDetails from "@/components/sections/GasServiceDetails";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import AboutUs from "@/components/sections/AboutUs";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default async function GasService() {
  const content = await fetchAboutUsContent();

  return (
    <>
      <SectionBanner
        heading="Gas"
        description="SAQCC certified gas services by our professional teams."
        bg="bg-brand-green"
        icon="/assets/icons/gas-icon.webp"
      />
      <SubMenu />
      <GasServiceDetails />
      <WhyChoose />
      <FullWidthImageSection />
      <AboutUs content={content} />
      <OurPhilosphy />
    </>
  );
}
