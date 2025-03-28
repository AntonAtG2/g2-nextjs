import HeroBanner from "@/components/sections/HeroBanner";
import SubMenu from "@/components/sections/SubMenu";
import OurServices from "@/components/sections/OurServices";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import AboutUs from "@/components/sections/AboutUs";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <SubMenu />
      <OurServices />
      <WhyChoose />
      <FullWidthImageSection />
      <AboutUs />
      <OurPhilosphy />
    </main>
  );
}
