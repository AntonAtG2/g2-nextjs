import ContactHero from "@/components/sections/ContactHero";
import SubMenu from "@/components/sections/SubMenu";
import FullWidthImageSection from "@/components/sections/FullWidthImageSection";

export const metadata = {
  title: "Contact Spotted Owl | Emergency Services in Stellenbosch",
  description:
    "Contact Spotted Owl for emergency response, home improvements and trusted maintenance services in Stellenbosch.",
  openGraph: {
    title: "Contact Spotted Owl | Emergency Services in Stellenbosch",
    description:
      "Contact Spotted Owl for emergency response, home improvements and trusted maintenance services in Stellenbosch.",
    url: "https://spotted-owl.com/contact-us",
    siteName: "The Spotted Owl",
    type: "website",
  },
};

export default function ContactUs() {
  return (
    <>
      <ContactHero />
      <SubMenu />
      <FullWidthImageSection />
    </>
  );
}
