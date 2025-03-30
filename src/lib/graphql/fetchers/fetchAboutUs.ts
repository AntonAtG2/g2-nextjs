import { graphqlClient } from "../client"; // (you'll need to create this file too)
import { ABOUT_US_QUERY } from "../../queries";
import { AboutUsData } from "@/types/graphql"; // or define inline if types folder doesn't exist yet

export async function fetchAboutUsContent() {
  const data: AboutUsData = await graphqlClient.request(ABOUT_US_QUERY);
  return data.aboutUsEntries?.nodes?.[0]?.aboutUsContent || null;
}
