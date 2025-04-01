// src/lib/graphql/fetchers/fetchAboutUs.ts

import { graphqlClient } from "../client";
import { ABOUT_US_QUERY } from "../../queries";

// Define the type for the AboutUs response
type AboutUsResponse = {
  page: {
    flexibleContentSections: {
      aboutUsSection: {
        header: string;
        paragraphRepeater: { singleParagraph: string }[];
        backgroundImage?: {
          node: {
            sourceUrl: string;
            altText?: string;
          };
        };
      }[];
    };
  };
};

export async function fetchAboutUsContent() {
  // Cast the response to the defined type
  const { page }: AboutUsResponse = await graphqlClient.request(ABOUT_US_QUERY);
  return page.flexibleContentSections.aboutUsSection;
}
