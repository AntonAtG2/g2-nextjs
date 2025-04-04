// 🌱 Shared types
export type Paragraph = {
  singleParagraph: string;
};

export type MediaImage = {
  node: {
    mediaItemUrl: string;
    altText?: string;
    title?: string;
  };
};

export type LinkField = {
  url: string;
  title: string;
  target?: string | null;
};

// 🧩 Service Grid layout
export type ServiceGridSection = {
  sectionHeader?: string | null;
  services: {
    icon: MediaImage;
    serviceTitle: string;
    serviceDescription: string;
    buttonLabel: string;
    buttonUrl: LinkField;
  }[];
};

// 🧩 Why Choose layout
export type WhyChooseSection = {
  header: string;
  bulletPoints: {
    bulletHeader: string;
    bulletText: string;
  }[];
};

// 🧩 Brand Image layout ✅ now correctly typed
export type BrandImage = {
  image: MediaImage;
};

// 🧩 About Us layout
export type AboutUsLayout = {
  header: string;
  paragraphRepeater: Paragraph[];
  backgroundImage?: MediaImage;
};

// 🧩 Our Philosophy layout ✅ now correctly typed
export type OurPhilosophy = {
  header: string;
  paragraphRepeater: Paragraph[];
};

// 🧠 Shared typename base
type BaseLayout = {
  __typename: string;
};

// 🧠 Union for flexible sections
export type FlexibleSection =

  | (ServiceGridSection & BaseLayout)
  | (WhyChooseSection & BaseLayout)
  | (BrandImage & BaseLayout)
  | (AboutUsLayout & BaseLayout)
  | (OurPhilosophy & BaseLayout);
