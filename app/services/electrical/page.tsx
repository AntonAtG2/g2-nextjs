import { fetchAboutUsContent } from "@/lib/graphql/fetchers/fetchAboutUs";
import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import ElectricalServiceDetails from "@/components/sections/ElectricalServiceDetails";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import AboutUs from "@/components/sections/AboutUs";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default async function ElectricalService() {
  const content = await fetchAboutUsContent();

  return (
    <>
      <SectionBanner
        heading="Electrical"
        description="Electrical services by our well-trained professional electricians"
        bg="bg-brand-green"
        icon="/assets/icons/electrical-icon.webp"
      />
      <SubMenu />
      <ElectricalServiceDetails />
      <WhyChoose />
      <FullWidthImageSection />
      <AboutUs content={content} />
      <OurPhilosphy />
    </>
  );
}
