import HeroBanner from "@/components/sections/HeroBanner";
import { fetchAboutUsContent } from "@/lib/graphql/fetchers/fetchAboutUs";
import AboutUs from "@/components/sections/AboutUs";
import SubMenu from "@/components/sections/SubMenu";
import OurServices from "@/components/sections/OurServices";
import WhyChoose from "@/components/sections/WhyChoose";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";
import OurPhilosphy from "@/components/sections/OurPhilosphy";

export default async function ContactUsPage() {
  const content = await fetchAboutUsContent();

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
