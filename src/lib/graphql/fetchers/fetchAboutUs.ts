import { graphqlClient } from "../client";
import { ABOUT_US_QUERY } from "../../queries";

export async function fetchAboutUsContent() {
  const { page } = await graphqlClient.request(ABOUT_US_QUERY);
  return page.flexibleContentSections.aboutUsSection;
}
