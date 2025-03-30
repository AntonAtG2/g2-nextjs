export const ABOUT_US_QUERY = `
  query GetAboutUs {
    aboutUsEntries {
      nodes {
        title
        aboutUsContent {
          aboutUsHeading
          aboutUsParagraph
        }
      }
    }
  }
`;
