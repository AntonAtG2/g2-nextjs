import { gql } from "graphql-request";

export const FLEXIBLE_CONTENT_QUERY = gql`
  query GetFlexibleContentFull($uri: ID!) {
  page(id: $uri, idType: URI) {
    title
    flexibleContent {
      flexibleContentSections {
        __typename

        # ABOUT US SECTION
        ... on FlexibleContentFlexibleContentSectionsAboutUsSectionLayout {
          header
          paragraphRepeater {
            singleParagraph
          }
          backgroundImage {
            node {
              mediaItemUrl
              altText
              title
            }
          }
        }

        # SERVICE GRID SECTION
        ... on FlexibleContentFlexibleContentSectionsServiceGridSectionLayout {
          sectionHeader
          services {
            icon {
              node {
                mediaItemUrl
                altText
                title
              }
            }
            serviceTitle
            serviceDescription
            buttonLabel
            buttonUrl {
              url
              title
              target
            }
          }
        }

        # WHY CHOOSE SECTION
        ... on FlexibleContentFlexibleContentSectionsWhyChooseSectionLayout {
          header
          bulletPoints {
            bulletHeader
            bulletText
          }
        }

        # BRAND IMAGE SECTION
        ... on FlexibleContentFlexibleContentSectionsBrandImageLayout {
          image {
            node {
              mediaItemUrl
              altText
              title
            }
          }
        }

        # OUR PHOLOSOPHY SECTION
        ... on FlexibleContentFlexibleContentSectionsOurPhilosophyLayout {
          header 
          paragraphRepeater{
            singleParagraph
          }
        }

      }
    }
  }
}
`;
