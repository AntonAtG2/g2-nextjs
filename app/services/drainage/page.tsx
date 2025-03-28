import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import DrainageServiceDetails from "@/components/sections/DrainageServiceDetails";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import AboutUs from "@/components/sections/AboutUs";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default function GasService() {
  return (
    <>
      <SectionBanner
        heading="Drainage"
        description="Trusted drain services by our professional field service technicians"
        bg="bg-brand-green"
        icon="/assets/icons/drainage-icon.webp"
      />
      <SubMenu />
      <DrainageServiceDetails />
      <WhyChoose />
      <FullWidthImageSection />
      <AboutUs />
      <OurPhilosphy />
    </>
  );
}
