// src/lib/graphql/fetchers/fetchAboutUs.ts
import { graphqlClient } from "../client";
import { ABOUT_US_QUERY } from "../../queries";
import { AboutUsLayout } from "@/types/graphql"; // Import AboutUsLayout

type AboutUsResponse = {
  page: {
    flexibleContentSections: {
      aboutUsSection: AboutUsLayout[]; // Use the AboutUsLayout type here
    };
  };
};

export async function fetchAboutUsContent() {
  const { page }: AboutUsResponse = await graphqlClient.request(ABOUT_US_QUERY);
  return page.flexibleContentSections.aboutUsSection;
}
