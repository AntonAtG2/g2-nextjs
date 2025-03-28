import SectionBanner from "@/components/sections/SectionBanner";
import SubMenu from "@/components/sections/SubMenu";
import PlumbingServiceDetails from "@/components/sections/PlumbingServiceDetails";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import AboutUs from "@/components/sections/AboutUs";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default function PlumbingService() {
  return (
    <>
      <SectionBanner
        heading="Plumbing"
        description="Expert plumbing services by our trusted, professional certified plumbers."
        bg="bg-brand-green"
        icon="/assets/icons/plumbing-icon.webp"
      />
      <SubMenu />
      <PlumbingServiceDetails />
      <WhyChoose />
      <FullWidthImageSection />
      <AboutUs />
      <OurPhilosphy />
    </>
  );
}
