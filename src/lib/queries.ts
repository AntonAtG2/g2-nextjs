// src/lib/queries.ts
export const ABOUT_US_QUERY = /* GraphQL */ `
  query GetAboutUsSectionContent {
    page(id: "home", idType: URI) {
      flexibleContentSections {
        aboutUsSection {
          __typename
          ... on FlexibleContentSectionsAboutUsSectionAboutUsLayout {
            header
            paragraphRepeater {
              singleParagraph
            }
            backgroundImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;
